import { Order } from 'src/domain/entities/order';

export abstract class CreateOrderUseCase {
  public abstract create(order: Order): Promise<Order>;
}
