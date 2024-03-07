export class OrderPaymentNotification { 
    messageId: string
    orderId: string
    owner: string
    status: "SUCCESS" | "FAIL"
}