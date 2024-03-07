import { Injectable } from '@nestjs/common';
import { InjectRepository as InjectOrm } from '@nestjs/typeorm';
import { ProductOrm } from '../../orms/product.orm';
import { CreateProductRepository } from 'src/domain/repositories/create-product.repository';
import { Repository as ORM } from 'typeorm';
import { Product } from '../../../../domain/entities/product';

@Injectable()
export class CreateProductData implements CreateProductRepository {
  constructor(@InjectOrm (ProductOrm) private readonly productOrm: ORM<ProductOrm>) {}

  async create(product: Product): Promise<void> {
    await this.productOrm.save({
      ...product
    })
  }
}
