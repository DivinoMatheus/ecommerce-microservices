import { Product } from 'src/domain/entities/product';
import { Injectable } from '@nestjs/common';
import { UpdateProductUseCase } from './update-product.usecase';
import { UpdateProductRepository } from 'src/domain/repositories/update-product.repository';

@Injectable()
export class UpdateProductUseCaseImpl implements UpdateProductUseCase {
  constructor(
    private readonly updateProductRepository: UpdateProductRepository,
  ) {}

  async update(product: Product): Promise<void> {
    return this.updateProductRepository.update({ ...product, formattedPrice: this.formatPrice(product.price) });
  }

  private formatPrice(price: number) {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
  }).format(price / 100)
  }
}
