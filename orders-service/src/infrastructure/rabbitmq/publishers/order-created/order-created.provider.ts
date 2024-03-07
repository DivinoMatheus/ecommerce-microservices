import { Provider } from "@nestjs/common";
import { OrderCreatedPublisherImpl } from "./order-created.impl";
import { OrderCreatedPublisher } from "src/domain/publishers/order-created-publisher";

export const OrderCreatedProvider: Provider = { 
    provide: OrderCreatedPublisher,
    useClass: OrderCreatedPublisherImpl
}