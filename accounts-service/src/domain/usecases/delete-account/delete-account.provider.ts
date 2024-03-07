import { Provider } from "@nestjs/common";
import { DeleteAccountUseCase } from "./delete-account.usecase";
import { DeleteAccountUseCaseImpl } from "./delete-account.impl";

export const DeleteAccountUseCaseProvider: Provider = { 
    provide: DeleteAccountUseCase,
    useClass: DeleteAccountUseCaseImpl
}