import { Account } from "../entities/account";

export abstract class GetAccountsPort { 
    public abstract findById(accountId: string): Promise<Account>
}