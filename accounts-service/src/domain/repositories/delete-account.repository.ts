export abstract class DeleteAccountRepository {
    public abstract delete(accountId: string): Promise<void>
}