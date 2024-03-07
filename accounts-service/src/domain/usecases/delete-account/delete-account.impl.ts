import { Injectable } from "@nestjs/common";
import { DeleteAccountUseCase } from "./delete-account.usecase";
import { DeleteAccountRepository } from "src/domain/repositories/delete-account.repository";

@Injectable()
export class DeleteAccountUseCaseImpl  implements DeleteAccountUseCase{
    constructor(private readonly deleteAccountRepository: DeleteAccountRepository) {}
    public delete(accountId: string): Promise<void> {
        return this.deleteAccountRepository.delete(accountId)
    }
}