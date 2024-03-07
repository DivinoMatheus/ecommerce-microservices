import { Cart } from "src/domain/entities/cart";

export abstract class RemoveProductsFromCartUseCase {
    public abstract remove(owner: string, items: Array<string>): Promise<Cart>
}