import { CartItem } from "./cart-item";

export class Cart {
  id: string;
  owner: string;
  items: Array<CartItem>
}
