import { ClientsModuleOptions, Transport } from "@nestjs/microservices"

export const ORDERS_QUEUE = "ORDERS_QUEUE"

export const queues: ClientsModuleOptions = [ 
    {
        name: ORDERS_QUEUE,
        transport: Transport.RMQ,
        options: {
            urls: ['amqp://localhost:5672'],
            queue: 'orders',
            queueOptions: {
            durable: true,
            },
        },
    }
]