import { Product } from 'src/domain/entities/product';

export abstract class FindProductByIdUseCase {
  public abstract findById(productId: string): Promise<Product>;
}
