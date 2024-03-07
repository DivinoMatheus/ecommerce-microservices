import { Provider } from '@nestjs/common';
import { UpdateCartRepository } from 'src/domain/repositories/update-cart.repository';
import { UpdateCartData } from './update-cart.impl';

export const UpdateCartDataProvider: Provider = {
  provide: UpdateCartRepository,
  useClass: UpdateCartData,
};
