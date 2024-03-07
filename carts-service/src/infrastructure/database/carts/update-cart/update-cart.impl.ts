import { Injectable } from '@nestjs/common';
import { InjectRepository as InjectOrm } from '@nestjs/typeorm';
import { CartOrm } from '../../orms/cart.orm';
import { Repository as ORM } from 'typeorm';
import { Cart } from 'src/domain/entities/cart';
import { UpdateCartRepository } from 'src/domain/repositories/update-cart.repository';

@Injectable()
export class UpdateCartData implements UpdateCartRepository {
  constructor(@InjectOrm (CartOrm) private readonly cartOrm: ORM<CartOrm>) {}

  async update(cart: Cart): Promise<Cart> {
    return this.cartOrm.save(cart)
  }
}
