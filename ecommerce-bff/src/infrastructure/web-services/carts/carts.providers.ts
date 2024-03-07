import { Provider } from "@nestjs/common";
import { AddProductToCartProvider } from "./add-product-to-cart/add-product-to-cart.provider";
import { RemoveProductsFromCartProvider } from "./remove-products-from-cart/remove-products-from-cart.provider";
import { GetCartProvider } from "./get-cart/get-cart.provider";

export const CartsProviders: Provider[] = [
    AddProductToCartProvider,
    RemoveProductsFromCartProvider,
    GetCartProvider
]