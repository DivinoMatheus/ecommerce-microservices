import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { InjectRepository as InjectOrm } from '@nestjs/typeorm';
import { AccountOrm } from '../../orms/account.orm';
import { CreateAccountRepository } from 'src/domain/repositories/create-account.repository';
import { Repository as ORM } from 'typeorm';
import { Account } from '../../../../domain/entities/account';
import { PublicAccount } from 'src/domain/entities/public-account';
import { EmailAlreadyUsedError } from 'src/domain/errors/email-already-used.error';
import { isUniqueError } from '../../validations/is-unique-error';

@Injectable()
export class CreateAccountData implements CreateAccountRepository {
  constructor(@InjectOrm (AccountOrm) private readonly accountOrm: ORM<AccountOrm>) {}

  async create(account: Account): Promise<PublicAccount> {
    return this.accountOrm.save({
      id: uuidv4(),
      fullname: account.fullname,
      nickname: account.nickname,
      email: account.email,
      password: account.password
    })
    .then(({ id, fullname, nickname, email}) => ({ id, fullname, nickname, email }))
    .catch(error => {
      if (isUniqueError(error)) { 
        throw new EmailAlreadyUsedError()
      }

      throw error
    })
  }
}
