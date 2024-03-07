import { Provider } from '@nestjs/common';
import { FindOrderByIdData } from './find-order-by-id.impl';
import { FindOrderByIdRepository } from '../../../../domain/repositories/find-order-by-id.repository';

export const FindOrderByIdDataProvider: Provider = {
  provide: FindOrderByIdRepository,
  useClass: FindOrderByIdData,
};
