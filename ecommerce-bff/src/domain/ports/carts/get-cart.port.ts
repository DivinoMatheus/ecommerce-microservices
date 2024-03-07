import { Cart } from "../../entities/cart";

export abstract class GetCartPort { 
    public abstract getByOwner(owner: string): Promise<Cart>
}