import { CreateCartRepository } from 'src/domain/repositories/create-cart.repository';
import { CreateCartData } from './create-cart.impl';
import { Provider } from '@nestjs/common';

export const CreateCartProvider: Provider = {
  provide: CreateCartRepository,
  useClass: CreateCartData,
};
