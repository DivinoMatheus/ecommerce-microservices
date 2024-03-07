import { Injectable } from '@nestjs/common';
import { Product } from 'src/domain/entities/product';
import { FindAllProductsRepository } from 'src/domain/repositories/find-all-products.repository';
import { Repository as ORM } from 'typeorm';
import { ProductOrm } from '../../orms/product.orm';
import { InjectRepository as InjectOrm } from '@nestjs/typeorm';

@Injectable()
export class FindAllProductsData implements FindAllProductsRepository {
  constructor(@InjectOrm(ProductOrm) private readonly productsOrm: ORM<ProductOrm>) {}

  async findAll(): Promise<Product[]> {
    return this.productsOrm.find();
  }
}
