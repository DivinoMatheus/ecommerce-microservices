import { Cart } from "src/domain/entities/cart";

export abstract class AddProductToCartUseCase {
    public abstract add(accountId: string, productId: string): Promise<Cart>
}