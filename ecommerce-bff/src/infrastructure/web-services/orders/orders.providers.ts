import { Provider } from "@nestjs/common";
import { CreateOrderProvider } from "./create-order/create-order.provider";

export const OrdersProviders: Provider[] = [
    CreateOrderProvider
]