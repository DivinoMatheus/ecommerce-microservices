import { Cart } from 'src/domain/entities/cart';

export abstract class FindCartByOwnerUseCase {
  public abstract findByOwner(owner: string): Promise<Cart>;
}
