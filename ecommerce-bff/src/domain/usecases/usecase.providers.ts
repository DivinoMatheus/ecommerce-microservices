import { Provider } from "@nestjs/common";
import { AddProductToCartUseCaseProvider } from "./add-product-to-cart/add-product-to-cart.provider";
import { RemoveProductsFromCartUseCaseProvider } from "./remove-products-from-cart/remove-products-from-cart.provider";
import { CreateOrderUseCaseProvider } from "./create-order/create-order.provider";

export const UseCaseProviders: Provider[] = [
    AddProductToCartUseCaseProvider,
    RemoveProductsFromCartUseCaseProvider,
    CreateOrderUseCaseProvider
]