import { CreateCartRepository } from 'src/domain/repositories/create-cart.repository';
import { AddProductToCartUseCase } from './add-product-to-cart.usecase';
import { Cart } from 'src/domain/entities/cart';
import { Injectable } from '@nestjs/common';
import { CartItem } from 'src/domain/entities/cart-item';
import { UpdateCartRepository } from 'src/domain/repositories/update-cart.repository';
import { DeleteCartRepository } from 'src/domain/repositories/delete-cart.repository';
import { FindCartByOwnerRepository } from 'src/domain/repositories/find-cart-by-owner.repository';

@Injectable()
export class AddProductToCartUseCaseImpl implements AddProductToCartUseCase {
  constructor(
    private readonly findCartByOwnerRepository: FindCartByOwnerRepository,
    private readonly createCartRepository: CreateCartRepository,
    private readonly updateCartRepository: UpdateCartRepository,
  ) {}

  async add(owner: string, item: CartItem): Promise<Cart> {
    let cart = await this.findCartByOwnerRepository.findByOwner(owner)

    if (!cart) return this.createCartRepository.create(owner, [ item ])

    return this.updateCartRepository.update({ ...cart, items: [...cart.items, item]})
  }
}
