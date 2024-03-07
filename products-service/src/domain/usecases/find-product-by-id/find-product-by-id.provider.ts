import { Provider } from '@nestjs/common';
import { FindProductByIdUseCaseImpl } from './find-product-by-id.impl';
import { FindProductByIdUseCase } from './find-product-by-id.usecase';

export const FindProductByIdUseCaseProvider: Provider = {
  provide: FindProductByIdUseCase,
  useClass: FindProductByIdUseCaseImpl,
};
