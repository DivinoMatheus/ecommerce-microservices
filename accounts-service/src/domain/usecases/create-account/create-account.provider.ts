import { Provider } from '@nestjs/common';
import { CreateAccountUseCase } from './create-account.usecase';
import { CreateAccountUseCaseImpl } from './create-account.impl';

export const CreateAccountUseCaseProvider: Provider = {
  provide: CreateAccountUseCase,
  useClass: CreateAccountUseCaseImpl,
};
