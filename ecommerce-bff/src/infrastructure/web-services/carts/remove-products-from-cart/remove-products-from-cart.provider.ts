
import { Provider } from "@nestjs/common";
import { RemoveProductsFromCartPort } from "src/domain/ports/carts/remove-products-from-cart.port";
import { RemoveProductsFromCartAdapter } from "./remove-products-from-cart.adapter";

export const RemoveProductsFromCartProvider: Provider = {
    provide: RemoveProductsFromCartPort, 
    useClass: RemoveProductsFromCartAdapter
}