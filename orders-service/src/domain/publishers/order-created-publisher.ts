
export abstract class OrderCreatedPublisher { 
    constructor() { }

    public abstract publish(message: { orderId: string, owner: string }): void
}