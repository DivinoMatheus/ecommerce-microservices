import { Provider } from "@nestjs/common";
import { RemoveCartUseCaseProvider } from "./remove-products-from-cart/remove-products-from-cart.provider";
import { FindCartByOwnerUseCaseProvider } from "./find-cart-by-owner/find-cart-by-owner.provider";
import { AddProductToCartUseCaseProvider } from "./add-product-to-card/add-product-to-cart.provider";

export const UseCaseProviders: Provider[] = [
    AddProductToCartUseCaseProvider,
    FindCartByOwnerUseCaseProvider,
    RemoveCartUseCaseProvider
]