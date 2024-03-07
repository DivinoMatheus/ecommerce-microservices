import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { firstValueFrom, map } from "rxjs";
import { Account } from "src/domain/entities/account";
import { GetAccountsPort } from "src/domain/ports/get-accounts.port";

@Injectable()
export class GetAccountsAdapter implements GetAccountsPort { 
    constructor(private readonly httpService: HttpService) {}

    public findById(accountId: string): Promise<Account> {
        const mapResponseToAccount = ({ data }) => data 
        return firstValueFrom(
            this.httpService.get(`${process.env.ACCOUNTS_SERVICE_URL}/accounts/${accountId}`)
            .pipe(map(mapResponseToAccount))
        )
    }
}