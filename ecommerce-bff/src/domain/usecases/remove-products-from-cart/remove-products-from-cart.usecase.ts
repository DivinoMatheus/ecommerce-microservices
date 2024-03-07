import { Cart } from "src/domain/entities/cart";

export abstract class RemoveProductsFromCartUseCase {
    public abstract remove(accountId: string, productIds: Array<string>): Promise<Cart>
}