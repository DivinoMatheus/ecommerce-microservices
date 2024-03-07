import { Product } from 'src/domain/entities/product';

export abstract class FindProductByIdRepository {
  public abstract findById(productId: string): Promise<Product>;
}
