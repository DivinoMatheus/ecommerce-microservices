import { Provider } from "@nestjs/common";
import { VerifyAuthUseCaseImpl } from "./verify-auth.impl";
import { VerifyAuthUseCase } from "./verify-auth.usecase";

export const VerifyAuthProvider: Provider = {
    provide: VerifyAuthUseCase,
    useClass: VerifyAuthUseCaseImpl
}