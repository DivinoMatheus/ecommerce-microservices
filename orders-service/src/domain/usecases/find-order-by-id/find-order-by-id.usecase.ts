import { Order } from 'src/domain/entities/order';

export abstract class FindOrderByIdUseCase {
  public abstract findById(orderId: string): Promise<Order>;
}
