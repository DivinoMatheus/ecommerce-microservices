import { PublicAccount } from "src/domain/entities/public-account";

export abstract class VerifyAuthUseCase { 
    public abstract verify(token: string): Promise<PublicAccount> 
}