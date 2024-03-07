import { Provider } from '@nestjs/common';
import { FindCartByOwnerData } from './find-cart-by-owner.impl';
import { FindCartByOwnerRepository } from '../../../../domain/repositories/find-cart-by-owner.repository';

export const FindCartByOwnerDataProvider: Provider = {
  provide: FindCartByOwnerRepository,
  useClass: FindCartByOwnerData,
};
