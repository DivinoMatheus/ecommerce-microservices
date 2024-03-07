import { Auth } from "src/domain/entities/auth";

export abstract class CreateAuthUseCase {
    public abstract login(email: string, password: string): Promise<Auth>
}