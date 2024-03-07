import { Product } from 'src/domain/entities/product';

export abstract class UpdateProductUseCase {
  public abstract update(product: Product): Promise<void>;
}
