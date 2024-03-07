import { DeleteAccountRepository } from "src/domain/repositories/delete-account.repository";
import { Repository as ORM } from 'typeorm';
import { AccountOrm } from '../../orms/account.orm';
import { InjectRepository as InjectOrm } from '@nestjs/typeorm';

export default class DeleteAccountData implements DeleteAccountRepository {
    constructor(@InjectOrm(AccountOrm) private readonly accountsOrm: ORM<AccountOrm>) {}

    public async delete(accountId: string): Promise<void> {
        await this.accountsOrm.delete(accountId)
    }
} 