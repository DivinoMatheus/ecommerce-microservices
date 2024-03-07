import { Product } from '../entities/product';

export abstract class UpdateProductRepository {
  public abstract update(product: Product): Promise<void>;
}
