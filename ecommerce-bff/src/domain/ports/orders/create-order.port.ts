import { Product } from "src/domain/entities/product";

export abstract class CreateOrderPort { 
    public abstract create(accountId: string, products: Array<Product>): Promise<string>
}