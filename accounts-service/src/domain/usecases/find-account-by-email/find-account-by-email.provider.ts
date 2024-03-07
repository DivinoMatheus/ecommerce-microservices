import { Provider } from '@nestjs/common';
import { FindAccountByEmailUseCaseImpl } from './find-account-by-email.impl';
import { FindAccountByEmailUseCase } from './find-account-by-email.usecase';

export const FindAccountByEmailUseCaseProvider: Provider = {
  provide: FindAccountByEmailUseCase,
  useClass: FindAccountByEmailUseCaseImpl,
};
