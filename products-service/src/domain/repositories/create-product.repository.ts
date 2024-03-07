import { Product } from '../entities/product';

export abstract class CreateProductRepository {
  public abstract create(product: Product): Promise<void>;
}
