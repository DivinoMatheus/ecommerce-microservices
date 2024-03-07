import { Account } from "../../entities/accounts";

export abstract class GetAuthAccountPort { 
    constructor() {}

    public abstract getByToken(token: string): Promise<Account>
}