import { Provider } from "@nestjs/common";
import { OrderPaymentSuccessPublisher } from "src/domain/publishers/order-payment-success.publisher";
import { OrderPaymentSuccessPublisherImpl } from "./order-payment-success.impl";

export const OrderPaymentSuccessProvider: Provider = { 
    provide: OrderPaymentSuccessPublisher,
    useClass: OrderPaymentSuccessPublisherImpl
}