import { Provider } from "@nestjs/common";
import { CreateOrderUseCaseProvider } from "./create-order/create-order.provider";
import { FindOrderByIdUseCaseProvider } from "./find-order-by-id/find-order-by-id.provider";

export const UseCaseProviders: Provider[] = [
    CreateOrderUseCaseProvider, 
    FindOrderByIdUseCaseProvider,
]