import { Provider } from '@nestjs/common';
import { FindProductByIdData } from './find-product-by-id.impl';
import { FindProductByIdRepository } from '../../../../domain/repositories/find-product-by-id.repository';

export const FindProductByIdDataProvider: Provider = {
  provide: FindProductByIdRepository,
  useClass: FindProductByIdData,
};
