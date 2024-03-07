import { Provider } from "@nestjs/common";
import UpdateAccountData from "./update-account.impl";
import { UpdateAccountRepository } from "src/domain/repositories/update-account.repository";

export const UpdateAccountDataProvider: Provider = { 
    provide: UpdateAccountRepository,
    useClass: UpdateAccountData
}