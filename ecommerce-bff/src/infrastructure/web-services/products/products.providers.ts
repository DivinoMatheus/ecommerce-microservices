import { Provider } from "@nestjs/common";
import { GetProductsProvider } from "./get-products/get-products.provider";

export const ProductsProviders: Provider[] = [
    GetProductsProvider
]