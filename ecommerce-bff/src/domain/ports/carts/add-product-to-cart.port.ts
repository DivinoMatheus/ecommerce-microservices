import { Cart } from "../../entities/cart";

export abstract class AddProductToCartPort { 
    public abstract add(accountId: string, productId: string): Promise<Cart>
}