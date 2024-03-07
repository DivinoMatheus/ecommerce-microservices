import { GetAuthAccountPort } from "src/domain/ports/accounts/get-auth-account.port";
import { GetAuthAccountAdapter } from "./get-auth-account.adapter";
import { Provider } from "@nestjs/common";

export const GetAuthAccountProvider: Provider = { 
    provide: GetAuthAccountPort,
    useClass: GetAuthAccountAdapter
}