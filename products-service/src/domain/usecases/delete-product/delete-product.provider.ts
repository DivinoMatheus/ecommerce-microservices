import { Provider } from "@nestjs/common";
import { DeleteProductUseCase } from "./delete-product.usecase";
import { DeleteProductUseCaseImpl } from "./delete-product.impl";

export const DeleteProductUseCaseProvider: Provider = { 
    provide: DeleteProductUseCase,
    useClass: DeleteProductUseCaseImpl
}