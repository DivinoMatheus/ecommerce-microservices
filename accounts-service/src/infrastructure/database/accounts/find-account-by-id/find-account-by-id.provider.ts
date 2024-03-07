import { Provider } from '@nestjs/common';
import { FindAccountByIdData } from './find-account-by-id.impl';
import { FindAccountByIdRepository } from '../../../../domain/repositories/find-account-by-id.repository';

export const FindAccountByIdDataProvider: Provider = {
  provide: FindAccountByIdRepository,
  useClass: FindAccountByIdData,
};
