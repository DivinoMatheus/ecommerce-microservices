import { Provider } from '@nestjs/common';
import { FindAllProductsData } from './find-all-products.impl';
import { FindAllProductsRepository } from '../../../../domain/repositories/find-all-products.repository';

export const FindAllProductsDataProvider: Provider = {
  provide: FindAllProductsRepository,
  useClass: FindAllProductsData,
};
