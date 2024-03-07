import { Cart } from 'src/domain/entities/cart';

export abstract class DeleteCartByOwnerUseCase {
  public abstract delete(owner: string): Promise<void>;
}
