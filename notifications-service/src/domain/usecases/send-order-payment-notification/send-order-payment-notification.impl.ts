import { OrderPaymentNotification } from 'src/domain/value-objects/notifications/order-payment.notification';
import { SendOrderPaymentNotificationUseCase } from './send-order-payment-notification.usecase';
import { Injectable } from '@nestjs/common';
import { GetAccountsPort } from 'src/domain/ports/get-accounts.port';
import { SendMailService } from 'src/domain/services/send-mail.service';
import { GetOrdersPort } from 'src/domain/ports/get-orders.port';
import { Product } from 'src/domain/entities/product';
import { Order } from 'src/domain/entities/order';

@Injectable()
export class SendOrderPaymentNotificationUseCaseImpl implements SendOrderPaymentNotificationUseCase {
  constructor(
    private readonly getAccountsPort: GetAccountsPort,
    private readonly getOrdersPort: GetOrdersPort,
    private readonly sendMailService: SendMailService
  ) {}

  private generateSuccessMail = (order: Order) => {
    return {
      subject: "Pagamento confirmado",
      text: `
        Acabamos de confirmar o pagamento para o seu pedido ${order.id}
        ${this.generateProductsList(order.products)} \n
        Total: ${order.formattedTotalPrice}
        `
    }
  }

  private generateFailMail = (order: Order) => {
    return {
      subject: "O pagamento falhou :(",
      text: `
        Infelizmente o pagamento para o pedido ${order.id} foi negado. 
        ${this.generateProductsList(order.products)} \n
        ${order.formattedTotalPrice}
        `
    }
  }

  private generateProductsList = (products: Array<Product>): string => { 
    return products.reduce((previous: string, current: Product) => { 
      return `${previous}\n - ${current.title}`
    }, '')
  }

  async send(notification: OrderPaymentNotification): Promise<void> {
    const [account, order] = await Promise.all([
      this.getAccountsPort.findById(notification.owner), 
      this.getOrdersPort.findById(notification.orderId)
    ])

    if (notification.status === "SUCCESS") {
      const successContent = this.generateSuccessMail(order)
      this.sendMailService.send(account.email, successContent.subject, successContent.text)
    } 
    
    if (notification.status === "FAIL") {
      const failContent = this.generateFailMail(order)
      this.sendMailService.send(account.email, failContent.subject, failContent.text)
    }
  }
}
