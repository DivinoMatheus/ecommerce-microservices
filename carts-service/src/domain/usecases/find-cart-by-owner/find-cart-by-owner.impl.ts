import { Cart } from 'src/domain/entities/cart';
import { FindCartByOwnerUseCase } from './find-cart-by-owner.usecase';
import { Injectable } from '@nestjs/common';
import { FindCartByOwnerRepository } from 'src/domain/repositories/find-cart-by-owner.repository';
import { CreateCartRepository } from 'src/domain/repositories/create-cart.repository';

@Injectable()
export class FindCartByOwnerUseCaseImpl implements FindCartByOwnerUseCase {
  constructor(
    private readonly findCartByOwnerRepository: FindCartByOwnerRepository,
    private readonly createCartRepository: CreateCartRepository
  ) {}

  async findByOwner(owner: string): Promise<Cart> {
    const cart = await this.findCartByOwnerRepository.findByOwner(owner);

    if (!cart) return this.createCartRepository.create(owner, [])

    return cart
  }
}
