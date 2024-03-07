import { DeleteCartRepository } from "src/domain/repositories/delete-cart.repository";
import { Repository as ORM } from 'typeorm';
import { CartOrm } from '../../orms/cart.orm';
import { InjectRepository as InjectOrm } from '@nestjs/typeorm';

export default class DeleteCartData implements DeleteCartRepository {
    constructor(@InjectOrm(CartOrm) private readonly cartsOrm: ORM<CartOrm>) {}

    public async delete(cartId: string): Promise<void> {
        await this.cartsOrm.delete(cartId)
    }
} 