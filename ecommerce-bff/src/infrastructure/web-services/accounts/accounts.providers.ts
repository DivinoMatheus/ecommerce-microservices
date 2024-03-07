import { Provider } from "@nestjs/common";
import { GetAuthAccountProvider } from "./get-auth-account/get-auth-account.provider";

export const AccountProviders: Provider[] = [
    GetAuthAccountProvider
]