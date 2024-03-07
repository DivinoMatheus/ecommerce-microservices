import { Module } from "@nestjs/common";
import { ClientsModule, Transport } from "@nestjs/microservices";
import { queues } from "./queues";
import { OrderPaymentSuccessProvider } from "./publishers/order-payment-success/order-payment-success.provider";
import { OrderPaymentFailProvider } from "./publishers/order-payment-fail/order-payment-fail.provider";
import { OrderCreatedProvider } from "./publishers/order-created/order-created.provider";

@Module({
    imports: [ClientsModule.register(queues)],
    exports: [OrderPaymentSuccessProvider, OrderPaymentFailProvider, OrderCreatedProvider],
    providers: [OrderPaymentSuccessProvider, OrderPaymentFailProvider, OrderCreatedProvider]
})
export class RabbitMqModule {}