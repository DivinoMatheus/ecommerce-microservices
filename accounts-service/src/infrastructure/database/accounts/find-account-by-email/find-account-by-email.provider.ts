import { Provider } from '@nestjs/common';
import { FindAccountByEmailData } from './find-account-by-email.impl';
import { FindAccountByEmailRepository } from '../../../../domain/repositories/find-account-by-email.repository';

export const FindAccountByEmailDataProvider: Provider = {
  provide: FindAccountByEmailRepository,
  useClass: FindAccountByEmailData,
};
