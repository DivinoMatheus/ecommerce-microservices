import { Provider } from "@nestjs/common";
import { AddProductToCartUseCase } from "./add-product-to-cart.usecase";
import { AddProductToCartUseCaseImpl } from "./add-product-to-cart.impl";

export const AddProductToCartUseCaseProvider: Provider = { 
    provide: AddProductToCartUseCase,
    useClass: AddProductToCartUseCaseImpl
}