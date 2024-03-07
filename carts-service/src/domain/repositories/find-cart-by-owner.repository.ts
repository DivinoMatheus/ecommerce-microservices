import { Cart } from 'src/domain/entities/cart';

export abstract class FindCartByOwnerRepository {
  public abstract findByOwner(owner: string): Promise<Cart>;
}
