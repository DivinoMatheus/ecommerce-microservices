
import { Cart } from "../../entities/cart";

export abstract class RemoveProductsFromCartPort { 
    public abstract remove(accountId: string, productIds: Array<string>): Promise<Cart>
}