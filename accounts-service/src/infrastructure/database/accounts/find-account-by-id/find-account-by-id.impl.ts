import { Injectable } from '@nestjs/common';
import { Account } from 'src/domain/entities/account';
import { FindAccountByIdRepository } from 'src/domain/repositories/find-account-by-id.repository';
import { Repository as ORM } from 'typeorm';
import { AccountOrm } from '../../orms/account.orm';
import { InjectRepository as InjectOrm } from '@nestjs/typeorm';
import { PublicAccount } from 'src/domain/entities/public-account';
import { AccountNotFoundError } from 'src/domain/errors/account-not-found.error';

@Injectable()
export class FindAccountByIdData implements FindAccountByIdRepository {
  constructor(@InjectOrm(AccountOrm) private readonly accountsOrm: ORM<AccountOrm>) {}

  async findById(accountId: string): Promise<Account> {
    return this.accountsOrm.findOneBy({ id: accountId }).then(account => {
      if (!account) { 
        throw AccountNotFoundError.ofAccountId(accountId)
      }

      return account
    })
  }
}
