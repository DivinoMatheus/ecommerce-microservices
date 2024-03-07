import { Account } from 'src/domain/entities/account';
import { FindAccountByEmailUseCase } from './find-account-by-email.usecase';
import { FindAccountByEmailRepository } from 'src/domain/repositories/find-account-by-email.repository';
import { Injectable } from '@nestjs/common';
import { PublicAccount } from 'src/domain/entities/public-account';

@Injectable()
export class FindAccountByEmailUseCaseImpl implements FindAccountByEmailUseCase {
  constructor(
    private readonly findAccountByEmailRepository: FindAccountByEmailRepository,
  ) {}

  async findByEmail(email: string): Promise<PublicAccount> {
    return this.findAccountByEmailRepository.findByEmail(email).then(this.mapToPublicAccount);;
  }

  private mapToPublicAccount(account: Account) {
    if (!account) return null
    const { password, ...publicAccount } = account
    return publicAccount
  } 
}
