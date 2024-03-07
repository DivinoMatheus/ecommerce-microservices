import { Provider } from "@nestjs/common";
import { CreateOrderUseCaseImpl } from "./create-order.impl";
import { CreateOrderUseCase } from "./create-order.usecase";

export const CreateOrderUseCaseProvider: Provider = { 
    provide: CreateOrderUseCase,
    useClass: CreateOrderUseCaseImpl
}