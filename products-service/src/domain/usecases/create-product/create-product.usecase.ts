import { Product } from 'src/domain/entities/product';

export abstract class CreateProductUseCase {
  public abstract create(product: Product): Promise<void>;
}
