import { Cart } from '../entities/cart';

export abstract class UpdateCartRepository {
  public abstract update(cart: Cart): Promise<Cart>;
}
