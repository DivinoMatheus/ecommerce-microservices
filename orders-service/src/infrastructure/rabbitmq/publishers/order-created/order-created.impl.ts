import { Inject, Injectable } from "@nestjs/common";
import { OrderCreatedPublisher } from "src/domain/publishers/order-created-publisher";
import { ORDERS_QUEUE } from "../../queues";
import { v4 as uuidv4 } from 'uuid';
import { ClientProxy } from "@nestjs/microservices";


@Injectable()
export class OrderCreatedPublisherImpl implements OrderCreatedPublisher { 
    constructor(@Inject(ORDERS_QUEUE) private readonly queue: ClientProxy) {}

    public publish(message: { orderId: string; owner: string; }): void {
        this.queue.emit('created', {
            messageId: uuidv4(),
            orderId: message.orderId,
            owner: message.owner
        })
    }
}