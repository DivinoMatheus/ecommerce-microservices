import { Provider } from "@nestjs/common";
import { GetOrdersProvider } from "./get-orders/get-orders.provider";

export const OrdersProviders: Provider [] = [
    GetOrdersProvider
]