import { Provider } from "@nestjs/common";
import { CreateAuthUseCase } from "./create-auth.usecase";
import { CreateAuthUseCaseImpl } from "./create-auth.impl";

export const CreateAuthProvider: Provider = { 
    provide: CreateAuthUseCase,
    useClass: CreateAuthUseCaseImpl
}