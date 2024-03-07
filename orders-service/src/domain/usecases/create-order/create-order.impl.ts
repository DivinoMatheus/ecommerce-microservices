import { CreateOrderRepository } from 'src/domain/repositories/create-order.repository';
import { CreateOrderUseCase } from './create-order.usecase';
import { Order } from 'src/domain/entities/order';
import { Injectable } from '@nestjs/common';
import { Product } from 'src/domain/entities/product';
import { OrderPaymentSuccessPublisher } from 'src/domain/publishers/order-payment-success.publisher';
import { OrderPaymentFailPublisher } from 'src/domain/publishers/order-payment-fail.publisher';
import { PaymentsPort } from 'src/domain/ports/payments.port';
import { OrderCreatedPublisher } from 'src/domain/publishers/order-created-publisher';

@Injectable()
export class CreateOrderUseCaseImpl implements CreateOrderUseCase {
  constructor(
    private readonly createOrderRepository: CreateOrderRepository,
    private readonly paymentsPort: PaymentsPort,
    private readonly orderPaymentSuccessPublisher: OrderPaymentSuccessPublisher,
    private readonly orderPaymentFailPublisher: OrderPaymentFailPublisher,
    private readonly orderCreatedPublisher: OrderCreatedPublisher
  ) {}

  async create(order: Order): Promise<Order> {
    const totalPrice = this.sumAllProductPrices(order.products)
    
    const createdOrder = await this.createOrderRepository.create({ 
      ...order, 
      totalPrice, 
      formattedTotalPrice: this.formatPrice(totalPrice) 
    });

    if (createdOrder) this.orderCreatedPublisher.publish({ orderId: createdOrder.id, owner: createdOrder.owner })
    
    const paymentResult = await this.paymentsPort.pay()
    
    paymentResult ? 
      this.orderPaymentSuccessPublisher.publish({ orderId: createdOrder.id, owner: createdOrder.owner }) :
      this.orderPaymentFailPublisher.publish({ orderId: createdOrder.id, owner: createdOrder.owner })

    return createdOrder
  }

  private formatPrice(price: number) {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price / 100);
  }

  private sumAllProductPrices(products: Array<Product>): number {
    return products.reduce(
      (total: number, product: Product) => total + product.price,
      0,
    );
  }
}
