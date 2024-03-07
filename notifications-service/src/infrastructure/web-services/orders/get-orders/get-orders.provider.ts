import { Provider } from "@nestjs/common";
import { GetOrdersPort } from "src/domain/ports/get-orders.port";
import { GetOrdersAdapter } from "./get-orders.adapter";

export const GetOrdersProvider: Provider = { 
    provide: GetOrdersPort,
    useClass: GetOrdersAdapter
}