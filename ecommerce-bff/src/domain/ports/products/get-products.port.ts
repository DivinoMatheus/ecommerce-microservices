import { Product } from "../../entities/product";

export abstract class GetProductsPort {
    public abstract getById(productId: string): Promise<Product>
}