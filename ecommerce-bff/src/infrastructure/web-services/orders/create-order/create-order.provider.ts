import { CreateOrderPort } from "src/domain/ports/orders/create-order.port";
import { CreateOrderAdapter } from "./create-order.adapter";
import { Provider } from "@nestjs/common";

export const CreateOrderProvider: Provider = {
    provide: CreateOrderPort,
    useClass: CreateOrderAdapter
}