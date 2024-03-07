
import { Repository as ORM } from 'typeorm';
import { AccountOrm } from '../../orms/account.orm';
import { InjectRepository as InjectOrm } from '@nestjs/typeorm';
import { UpdateAccountRepository } from 'src/domain/repositories/update-account.repository';
import { Account } from 'src/domain/entities/account';

export default class UpdateAccountData implements UpdateAccountRepository {
    constructor(@InjectOrm(AccountOrm) private readonly accountsOrm: ORM<AccountOrm>) {}

    public async update(account: Account): Promise<void> {
        await this.accountsOrm.save({ 
            id: account.id, 
            fullname: account.fullname, 
            nickname: account.nickname 
        })
    }
} 