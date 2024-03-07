export abstract class DeleteProductRepository {
    public abstract delete(productId: string): Promise<void>
}