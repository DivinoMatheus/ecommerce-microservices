import { Order } from '../entities/order';

export abstract class CreateOrderRepository {
  public abstract create(order: Order): Promise<Order>;
}
