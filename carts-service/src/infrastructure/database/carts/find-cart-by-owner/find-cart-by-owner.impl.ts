import { Injectable } from '@nestjs/common';
import { Cart } from 'src/domain/entities/cart';
import { FindCartByOwnerRepository } from 'src/domain/repositories/find-cart-by-owner.repository';
import { Repository as ORM } from 'typeorm';
import { CartOrm } from '../../orms/cart.orm';
import { InjectRepository as InjectOrm } from '@nestjs/typeorm';

@Injectable()
export class FindCartByOwnerData implements FindCartByOwnerRepository {
  constructor(@InjectOrm(CartOrm) private readonly cartsOrm: ORM<CartOrm>) {}

  async findByOwner(owner: string): Promise<Cart> {
    return this.cartsOrm.findOneBy({ owner: owner });
  }
}
