import { Provider } from '@nestjs/common';
import { UpdateAccountUseCase } from './update-account.usecase';
import { UpdateAccountUseCaseImpl } from './update-account.impl';

export const UpdateAccountUseCaseProvider: Provider = {
  provide: UpdateAccountUseCase,
  useClass: UpdateAccountUseCaseImpl,
};
