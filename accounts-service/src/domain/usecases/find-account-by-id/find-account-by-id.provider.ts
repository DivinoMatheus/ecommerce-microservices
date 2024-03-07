import { Provider } from '@nestjs/common';
import { FindAccountByIdUseCaseImpl } from './find-account-by-id.impl';
import { FindAccountByIdUseCase } from './find-account-by-id.usecase';

export const FindAccountByIdUseCaseProvider: Provider = {
  provide: FindAccountByIdUseCase,
  useClass: FindAccountByIdUseCaseImpl,
};
