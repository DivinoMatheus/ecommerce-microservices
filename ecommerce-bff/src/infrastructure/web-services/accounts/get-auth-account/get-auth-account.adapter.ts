import { HttpService } from "@nestjs/axios";
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { AxiosError } from "axios";
import { firstValueFrom, map } from "rxjs";
import { Account } from "src/domain/entities/accounts";
import { GetAuthAccountPort } from "src/domain/ports/accounts/get-auth-account.port";

@Injectable()
export class GetAuthAccountAdapter implements GetAuthAccountPort{ 
    constructor(private readonly httpService: HttpService) {}
    
    public getByToken(token: string): Promise<Account> {
        return firstValueFrom(this.httpService.get<Account>(`${process.env.ACCOUNTS_SERVICE_URL}/auth/account`, {
            headers: {
                Authorization: token
            }
        }).pipe(map(({data}) => data))).catch((error: AxiosError) => {
            if (error?.response.status === HttpStatus.UNAUTHORIZED) {
                throw new HttpException("Invalid auth token", HttpStatus.UNAUTHORIZED)
            }

            throw error
        })
    }
}