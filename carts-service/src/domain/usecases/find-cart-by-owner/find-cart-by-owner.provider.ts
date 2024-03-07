import { Provider } from '@nestjs/common';
import { FindCartByOwnerUseCaseImpl } from './find-cart-by-owner.impl';
import { FindCartByOwnerUseCase } from './find-cart-by-owner.usecase';

export const FindCartByOwnerUseCaseProvider: Provider = {
  provide: FindCartByOwnerUseCase,
  useClass: FindCartByOwnerUseCaseImpl,
};
