import { Provider } from "@nestjs/common";
import { RemoveProductsFromCartUseCase } from "./remove-products-from-cart.usecase";
import { RemoveProductsFromCartUseCaseImpl } from "./remove-products-from-cart.impl";

export const RemoveProductsFromCartUseCaseProvider: Provider = { 
    provide: RemoveProductsFromCartUseCase,
    useClass: RemoveProductsFromCartUseCaseImpl
}