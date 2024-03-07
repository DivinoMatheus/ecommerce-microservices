import { Order } from 'src/domain/entities/order';

export abstract class FindOrderByIdRepository {
  public abstract findById(orderId: string): Promise<Order>;
}
