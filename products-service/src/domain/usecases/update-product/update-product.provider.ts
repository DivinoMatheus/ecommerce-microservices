import { Provider } from '@nestjs/common';
import { UpdateProductUseCase } from './update-product.usecase';
import { UpdateProductUseCaseImpl } from './update-product.impl';

export const UpdateProductUseCaseProvider: Provider = {
  provide: UpdateProductUseCase,
  useClass: UpdateProductUseCaseImpl,
};
