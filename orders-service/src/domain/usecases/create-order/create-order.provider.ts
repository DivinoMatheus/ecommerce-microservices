import { Provider } from '@nestjs/common';
import { CreateOrderUseCase } from './create-order.usecase';
import { CreateOrderUseCaseImpl } from './create-order.impl';

export const CreateOrderUseCaseProvider: Provider = {
  provide: CreateOrderUseCase,
  useClass: CreateOrderUseCaseImpl,
};
