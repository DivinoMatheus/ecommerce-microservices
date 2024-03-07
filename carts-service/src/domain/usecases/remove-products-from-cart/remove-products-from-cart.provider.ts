import { Provider } from "@nestjs/common";
import { RemoveProductsFromCartUseCase } from "./remove-products-from-cart.usecase";
import { RemoveProductsFromCartUseCaseImpl } from "./remove-products-from-cart.impl";

export const RemoveCartUseCaseProvider: Provider = { 
    provide: RemoveProductsFromCartUseCase,
    useClass: RemoveProductsFromCartUseCaseImpl
}