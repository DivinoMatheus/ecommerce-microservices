export abstract class DeleteProductUseCase {
    public abstract delete(productId: string): Promise<void>
}