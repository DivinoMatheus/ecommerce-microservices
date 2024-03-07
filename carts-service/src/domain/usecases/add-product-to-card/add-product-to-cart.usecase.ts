import { Cart } from 'src/domain/entities/cart';
import { CartItem } from 'src/domain/entities/cart-item';

export abstract class AddProductToCartUseCase {
  public abstract add(owner: string, item: CartItem): Promise<Cart>;
}
