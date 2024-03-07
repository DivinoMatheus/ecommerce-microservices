import { Product } from 'src/domain/entities/product';

export abstract class FindAllProductsUseCase {
  public abstract findAll(): Promise<Product[]>;
}
