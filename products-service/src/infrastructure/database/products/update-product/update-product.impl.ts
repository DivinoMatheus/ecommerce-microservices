
import { Repository as ORM } from 'typeorm';
import { ProductOrm } from '../../orms/product.orm';
import { InjectRepository as InjectOrm } from '@nestjs/typeorm';
import { UpdateProductRepository } from 'src/domain/repositories/update-product.repository';
import { Product } from 'src/domain/entities/product';

export default class UpdateProductData implements UpdateProductRepository {
    constructor(@InjectOrm(ProductOrm) private readonly productsOrm: ORM<ProductOrm>) {}

    public async update(product: Product): Promise<void> {
        const existingProduct = await this.productsOrm.findBy({ id: product.id })
        await this.productsOrm.save({ ...existingProduct, ...product })
    }
} 