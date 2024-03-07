import { Account } from 'src/domain/entities/account';
import { Injectable } from '@nestjs/common';
import { UpdateAccountUseCase } from './update-account.usecase';
import { UpdateAccountRepository } from 'src/domain/repositories/update-account.repository';

@Injectable()
export class UpdateAccountUseCaseImpl implements UpdateAccountUseCase {
  constructor(
    private readonly updateAccountRepository: UpdateAccountRepository,
  ) {}

  async update(account: Account): Promise<void> {
    return this.updateAccountRepository.update(account);
  }
}
