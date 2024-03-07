import { Module } from "@nestjs/common";
import { ClientsModule, Transport } from "@nestjs/microservices";
import { queues } from "./queues";
import { OrderPaymentSuccessProvider } from "./publishers/order-payment-success/order-payment-success.provider";
import { OrderPaymentFailProvider } from "./publishers/order-payment-fail/order-payment-fail.provider";

@Module({
    imports: [ClientsModule.register(queues)],
    exports: [OrderPaymentSuccessProvider, OrderPaymentFailProvider],
    providers: [OrderPaymentSuccessProvider, OrderPaymentFailProvider]
})
export class RabbitMqModule {}