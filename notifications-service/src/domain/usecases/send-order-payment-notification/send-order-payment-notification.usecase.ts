import { OrderPaymentNotification } from "src/domain/value-objects/notifications/order-payment.notification";

export abstract class SendOrderPaymentNotificationUseCase {
  public abstract send(notification: OrderPaymentNotification): Promise<void>;
}
