import { Provider } from "@nestjs/common";
import { CreateAccountUseCaseProvider } from "./create-account/create-account.provider";
import { DeleteAccountUseCaseProvider } from "./delete-account/delete-account.provider";
import { FindAccountByIdUseCaseProvider } from "./find-account-by-id/find-account-by-id.provider";
import { UpdateAccountUseCaseProvider } from "./update-account/update-account.provider";
import { FindAccountByEmailUseCaseProvider } from "./find-account-by-email/find-account-by-email.provider";
import { CreateAuthProvider } from "./create-auth/create-auth.provider";
import { VerifyAuthProvider } from "./verify-auth/verify-auth.provider";

export const UseCaseProviders: Provider[] = [
    CreateAccountUseCaseProvider, 
    FindAccountByEmailUseCaseProvider, 
    FindAccountByIdUseCaseProvider, 
    UpdateAccountUseCaseProvider, 
    DeleteAccountUseCaseProvider,
    CreateAuthProvider,
    VerifyAuthProvider
]