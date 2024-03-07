import { AddProductToCartPort } from "src/domain/ports/carts/add-product-to-cart.port";
import { AddProductToCartAdapter } from "./add-product-to-cart.adapter";
import { Provider } from "@nestjs/common";

export const AddProductToCartProvider: Provider = {
    provide: AddProductToCartPort, 
    useClass: AddProductToCartAdapter
}