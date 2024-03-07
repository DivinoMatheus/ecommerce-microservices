import { Provider } from '@nestjs/common';
import { SendOrderPaymentNotificationUseCase } from './send-order-payment-notification.usecase';
import { SendOrderPaymentNotificationUseCaseImpl } from './send-order-payment-notification.impl';

export const CreateNotificationUseCaseProvider: Provider = {
  provide: SendOrderPaymentNotificationUseCase,
  useClass: SendOrderPaymentNotificationUseCaseImpl,
};
