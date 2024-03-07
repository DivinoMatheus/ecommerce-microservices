import { Provider } from '@nestjs/common';
import { DeleteCartByOwnerUseCase } from './delete-cart-by-owner.usecase';
import { DeleteCartByOwnerUseCaseImpl } from './delete-cart-by-owner.impl';

export const DeleteCartByOwnerUseCaseProvider: Provider = {
  provide: DeleteCartByOwnerUseCase,
  useClass: DeleteCartByOwnerUseCaseImpl,
};
