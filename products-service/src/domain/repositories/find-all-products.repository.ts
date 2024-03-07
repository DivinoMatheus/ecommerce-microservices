import { Product } from 'src/domain/entities/product';

export abstract class FindAllProductsRepository {
  public abstract findAll(): Promise<Product[]>;
}
