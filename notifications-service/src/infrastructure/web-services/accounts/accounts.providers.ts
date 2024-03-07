import { Provider } from "@nestjs/common";
import { GetAccountsProvider } from "./get-accounts/get-accounts.provider";

export const AccountsProviders: Provider[] = [
    GetAccountsProvider
]