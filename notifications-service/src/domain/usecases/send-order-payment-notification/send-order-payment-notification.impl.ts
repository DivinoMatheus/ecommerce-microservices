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
      subject: "Pagamento confirmado :)",
      text: `
      <div>
      <h2>Pagamento confirmado :)</h2>
        <p>Acabamos de confirmar o pagamento para o seu pedido <strong>${order.id}</strong></p>
        ${this.generateProductsList(order.products)} \n
        <h3>Total: ${order.formattedTotalPrice}</h3>
      </div>
        `
    }
  }

  private generateFailMail = (order: Order) => {
    return {
      subject: "O pagamento falhou :(",
      text: `
      <div>
      <h2>O pagamento falhou :(</h2>
        <p>Infelizmente o pagamento para o pedido <strong>${order.id}</strong> foi negado. </p> 
        ${this.generateProductsList(order.products)} \n
        <h3>Total: ${order.formattedTotalPrice}</h3>
      </div>
        `
    }
  }

  private generateProductsList = (products: Array<Product>): string => { 
    let list = '<ol>'
    
    list += products.reduce((previous: string, current: Product) => { 
      return `<li>${previous}\n - ${current.title}</li>`
    }, '')

    list += '</ol>'
    return list
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
