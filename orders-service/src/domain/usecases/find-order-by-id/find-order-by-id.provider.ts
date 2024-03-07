import { Provider } from '@nestjs/common';
import { FindOrderByIdUseCaseImpl } from './find-order-by-id.impl';
import { FindOrderByIdUseCase } from './find-order-by-id.usecase';

export const FindOrderByIdUseCaseProvider: Provider = {
  provide: FindOrderByIdUseCase,
  useClass: FindOrderByIdUseCaseImpl,
};
