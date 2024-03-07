
export abstract class OrderPaymentFailPublisher { 
    constructor() { }

    public abstract publish(message: { orderId: string, owner: string }): void
}