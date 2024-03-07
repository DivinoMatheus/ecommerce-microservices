import { Account } from 'src/domain/entities/account';
import { FindAccountByIdUseCase } from './find-account-by-id.usecase';
import { FindAccountByIdRepository } from 'src/domain/repositories/find-account-by-id.repository';
import { Injectable } from '@nestjs/common';
import { PublicAccount } from 'src/domain/entities/public-account';

@Injectable()
export class FindAccountByIdUseCaseImpl implements FindAccountByIdUseCase {
  constructor(
    private readonly findAccountByIdRepository: FindAccountByIdRepository,
  ) {}

  async findById(accountId: string): Promise<PublicAccount> {
    return this.findAccountByIdRepository.findById(accountId).then(this.mapToPublicAccount);
  }

  private mapToPublicAccount(account: Account) {
    if (!account) return null
    const { password, ...publicAccount } = account
    return publicAccount
  } 
}
