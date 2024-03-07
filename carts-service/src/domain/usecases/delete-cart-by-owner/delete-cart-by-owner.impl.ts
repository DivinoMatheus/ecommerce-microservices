import { Injectable } from '@nestjs/common';
import { FindCartByOwnerRepository } from 'src/domain/repositories/find-cart-by-owner.repository';
import { DeleteCartByOwnerUseCase } from './delete-cart-by-owner.usecase';
import { DeleteCartRepository } from 'src/domain/repositories/delete-cart.repository';

@Injectable()
export class DeleteCartByOwnerUseCaseImpl implements DeleteCartByOwnerUseCase {
  constructor(
    private readonly findCartByOwnerRepository: FindCartByOwnerRepository,
    private readonly deleteCartRepository: DeleteCartRepository
  ) {}

  async delete(owner: string): Promise<void> {
    const cart = await this.findCartByOwnerRepository.findByOwner(owner);
    if (cart) await this.deleteCartRepository.delete(cart.id)
  }
}
