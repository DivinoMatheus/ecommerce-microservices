import { Provider } from "@nestjs/common";
import { DeleteAccountRepository } from "src/domain/repositories/delete-account.repository";
import DeleteAccountData from "./delete-account.impl";

export const DeleteAccountDataProvider: Provider = { 
    provide: DeleteAccountRepository,
    useClass: DeleteAccountData
}