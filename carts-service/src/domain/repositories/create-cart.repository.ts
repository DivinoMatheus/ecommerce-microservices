import { Cart } from '../entities/cart';
import { CartItem } from '../entities/cart-item';

export abstract class CreateCartRepository {
  public abstract create(owner: string, items: Array<CartItem>): Promise<Cart>;
}
