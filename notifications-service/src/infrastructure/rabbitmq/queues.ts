import { ClientProviderOptions, Transport } from "@nestjs/microservices"

export const ORDERS_QUEUE = "ORDERS_QUEUE"

export const queues: Array<ClientProviderOptions> = [ 
    {
        name: ORDERS_QUEUE,
        transport: Transport.RMQ,
        options: {
            urls: ['amqp://localhost:5672'],
            queue: 'orders',
            noAck: false,
            queueOptions: {
                durable: true,
            },
        },
    }
]