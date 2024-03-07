import { Account } from "../entities/account";
import { Order } from "../entities/order";

export abstract class GetOrdersPort { 
    public abstract findById(orderId: string): Promise<Order>
}