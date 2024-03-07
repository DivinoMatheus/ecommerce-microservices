import { Auth } from "src/domain/entities/auth";
import { CreateAuthUseCase } from "./create-auth.usecase";
import { JwtService } from "@nestjs/jwt";
import { FindAccountByEmailRepository } from "src/domain/repositories/find-account-by-email.repository";
import { HashService } from "src/domain/services/hash.service";
import { WrongPasswordError } from "src/domain/errors/wrong-password.error";
import { Injectable } from "@nestjs/common";
import { AuthPayload } from "src/domain/entities/auth-payload";

@Injectable()
export class CreateAuthUseCaseImpl implements CreateAuthUseCase {
    constructor(
        private readonly findAccountByEmailRepository: FindAccountByEmailRepository,
        private readonly hashService: HashService,
        private readonly jwtService: JwtService
    ) {}

    public async login(email: string, password: string): Promise<Auth> {
        const account = await this.findAccountByEmailRepository.findByEmail(email)
        
        if (this.hashService.compare(password, account.password)) {
            return { token: this.jwtService.sign({ accountId: account.id } as AuthPayload) }
        }
        
        throw new WrongPasswordError();
    }    
}