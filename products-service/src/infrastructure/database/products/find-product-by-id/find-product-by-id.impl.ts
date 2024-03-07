import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Product } from 'src/domain/entities/product';
import { FindProductByIdRepository } from 'src/domain/repositories/find-product-by-id.repository';
import { Repository as ORM } from 'typeorm';
import { ProductOrm } from '../../orms/product.orm';
import { InjectRepository as InjectOrm } from '@nestjs/typeorm';

@Injectable()
export class FindProductByIdData implements FindProductByIdRepository {
  constructor(@InjectOrm(ProductOrm) private readonly productsOrm: ORM<ProductOrm>) {}

  async findById(productId: string): Promise<Product> {
    return this.productsOrm.findOneBy({ id: productId }).then(product => {
      if (!product) throw new HttpException("Product not found", HttpStatus.NOT_FOUND)
      return product
    });
  }
}
