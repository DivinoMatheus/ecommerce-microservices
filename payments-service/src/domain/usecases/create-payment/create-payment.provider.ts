import { Provider } from '@nestjs/common';
import { CreatePaymentUseCase } from './create-payment.usecase';
import { CreatePaymentUseCaseImpl } from './create-payment.impl';

export const CreatePaymentUseCaseProvider: Provider = {
  provide: CreatePaymentUseCase,
  useClass: CreatePaymentUseCaseImpl,
};
