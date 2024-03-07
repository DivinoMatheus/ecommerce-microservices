import { Injectable } from '@nestjs/common';
import { Account } from 'src/domain/entities/account';
import { Repository as ORM } from 'typeorm';
import { AccountOrm } from '../../orms/account.orm';
import { InjectRepository as InjectOrm } from '@nestjs/typeorm';
import { FindAccountByEmailRepository } from 'src/domain/repositories/find-account-by-email.repository';
import { AccountNotFoundError } from 'src/domain/errors/account-not-found.error';

@Injectable()
export class FindAccountByEmailData implements FindAccountByEmailRepository {
  constructor(@InjectOrm(AccountOrm) private readonly accountsOrm: ORM<AccountOrm>) {}

  async findByEmail(email: string): Promise<Account> {
    return this.accountsOrm.findOneBy({ email }).then(account => {
      if (!account) {
        throw AccountNotFoundError.ofEmail(email)
      }

      return account
    })
  }
}
