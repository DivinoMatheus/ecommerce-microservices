export abstract class CreateOrderUseCase { 
    public abstract create(accountId: string): Promise<{ orderId: string }>
}