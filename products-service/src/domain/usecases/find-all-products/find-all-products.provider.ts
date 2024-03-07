import { Provider } from '@nestjs/common';
import { FindAllProductsUseCaseImpl } from './find-all-products.impl';
import { FindAllProductsUseCase } from './find-all-products.usecase';

export const FindAllProductsUseCaseProvider: Provider = {
  provide: FindAllProductsUseCase,
  useClass: FindAllProductsUseCaseImpl,
};
