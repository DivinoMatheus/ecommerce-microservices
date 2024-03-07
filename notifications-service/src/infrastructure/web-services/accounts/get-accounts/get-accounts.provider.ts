import { Provider } from "@nestjs/common";
import { GetAccountsAdapter } from "./get-accounts.adapter";
import { GetAccountsPort } from "src/domain/ports/get-accounts.port";

export const GetAccountsProvider: Provider = {
    provide: GetAccountsPort,
    useClass: GetAccountsAdapter
}