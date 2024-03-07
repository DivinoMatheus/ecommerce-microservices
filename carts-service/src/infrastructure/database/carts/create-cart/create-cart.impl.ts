import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { InjectRepository as InjectOrm } from '@nestjs/typeorm';
import { CartOrm } from '../../orms/cart.orm';
import { CreateCartRepository } from 'src/domain/repositories/create-cart.repository';
import { Repository as ORM } from 'typeorm';
import { CartItem } from 'src/domain/entities/cart-item';
import { Cart } from 'src/domain/entities/cart';

@Injectable()
export class CreateCartData implements CreateCartRepository {
  constructor(@InjectOrm (CartOrm) private readonly cartOrm: ORM<CartOrm>) {}

  async create(owner: string, items: Array<CartItem>): Promise<Cart> {
    return this.cartOrm.save({
      id: uuidv4(),
      owner,
      items
    })
  }
}
