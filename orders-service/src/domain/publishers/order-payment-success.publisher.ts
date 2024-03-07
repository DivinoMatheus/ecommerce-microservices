
export abstract class OrderPaymentSuccessPublisher { 
    constructor() { }

    public abstract publish(message: { orderId: string, owner: string }): void
}