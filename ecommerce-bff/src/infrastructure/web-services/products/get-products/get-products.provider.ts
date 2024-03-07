import { GetProductsPort } from "src/domain/ports/products/get-products.port";
import { GetProductsAdapter } from "./get-products.adapter";

export const GetProductsProvider = { 
    provide: GetProductsPort,
    useClass: GetProductsAdapter
}