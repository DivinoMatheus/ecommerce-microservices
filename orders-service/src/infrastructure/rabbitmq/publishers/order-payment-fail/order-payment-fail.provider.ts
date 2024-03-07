import { Provider } from "@nestjs/common";
import { OrderPaymentFailPublisher } from "src/domain/publishers/order-payment-fail.publisher";
import { OrderPaymentFailPublisherImpl } from "./order-payment-fail.impl";

export const OrderPaymentFailProvider: Provider = { 
    provide: OrderPaymentFailPublisher,
    useClass: OrderPaymentFailPublisherImpl
}