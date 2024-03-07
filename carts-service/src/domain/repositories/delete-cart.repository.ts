export abstract class DeleteCartRepository {
    public abstract delete(cartId: string): Promise<void>
}