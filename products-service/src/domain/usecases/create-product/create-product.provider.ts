import { Provider } from '@nestjs/common';
import { CreateProductUseCase } from './create-product.usecase';
import { CreateProductUseCaseImpl } from './create-product.impl';

export const CreateProductUseCaseProvider: Provider = {
  provide: CreateProductUseCase,
  useClass: CreateProductUseCaseImpl,
};
