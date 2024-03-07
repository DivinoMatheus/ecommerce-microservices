export abstract class DeleteAccountUseCase {
    public abstract delete(accountId: string): Promise<void>
}