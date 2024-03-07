import { CreateAccountRepository } from 'src/domain/repositories/create-account.repository';
import { CreateAccountData } from './create-account.impl';
import { Provider } from '@nestjs/common';

export const CreateAccountProvider: Provider = {
  provide: CreateAccountRepository,
  useClass: CreateAccountData,
};
