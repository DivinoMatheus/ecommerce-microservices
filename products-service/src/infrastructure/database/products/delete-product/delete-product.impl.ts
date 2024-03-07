import { DeleteProductRepository } from "src/domain/repositories/delete-product.repository";
import { Repository as ORM } from 'typeorm';
import { ProductOrm } from '../../orms/product.orm';
import { InjectRepository as InjectOrm } from '@nestjs/typeorm';

export default class DeleteProductData implements DeleteProductRepository {
    constructor(@InjectOrm(ProductOrm) private readonly productsOrm: ORM<ProductOrm>) {}

    public async delete(productId: string): Promise<void> {
        await this.productsOrm.delete(productId)
    }
} 