import { CreateAccountRepository } from 'src/domain/repositories/create-account.repository';
import { CreateAccountUseCase } from './create-account.usecase';
import { Account } from 'src/domain/entities/account';
import { Injectable } from '@nestjs/common';
import { PublicAccount } from 'src/domain/entities/public-account';
import { HashService } from 'src/domain/services/hash.service';

@Injectable()
export class CreateAccountUseCaseImpl implements CreateAccountUseCase {
  constructor(
    private readonly createAccountRepository: CreateAccountRepository,
    private readonly hashService: HashService
    ) {}

  async create(account: Account): Promise<PublicAccount> {
    return this.createAccountRepository.create({ ...account, password: this.hashService.createHash(account.password) });
  }
}
