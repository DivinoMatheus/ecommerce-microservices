import { Product } from './product';

export class Order {
  id: string;

  owner: string

  totalPrice: number
  
  formattedTotalPrice: string;

  products: Array<Product>;
}
