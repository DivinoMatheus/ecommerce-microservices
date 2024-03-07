import { PublicAccount } from "src/domain/entities/public-account";
import { VerifyAuthUseCase } from "./verify-auth.usecase";
import { JwtService } from "@nestjs/jwt";
import { FindAccountByIdRepository } from "src/domain/repositories/find-account-by-id.repository";
import { InvalidAuthError } from "src/domain/errors/invalid-auth.error";
import { Account } from "src/domain/entities/account";
import { AuthPayload } from "src/domain/entities/auth-payload";
import { Injectable } from "@nestjs/common";

@Injectable()
export class VerifyAuthUseCaseImpl implements VerifyAuthUseCase {
    constructor(
        private readonly findAccountByIdRepository: FindAccountByIdRepository,
        private readonly jwtService: JwtService) {}

    public async verify(token: string): Promise<PublicAccount> {
        const { accountId } = await this.jwtService.verifyAsync<AuthPayload>(token).catch(() => {
            throw new InvalidAuthError()
        })

        return this.findAccountByIdRepository.findById(accountId).then(this.mapToPublicAccount)
    } 

    private mapToPublicAccount(account: Account) {
        if (!account) return null
        const { password, ...publicAccount } = account
        return publicAccount
    } 
}