import { Product } from 'src/domain/entities/product';
import { FindProductByIdUseCase } from './find-product-by-id.usecase';
import { Injectable } from '@nestjs/common';
import { FindProductByIdRepository } from 'src/domain/repositories/find-product-by-id.repository';

@Injectable()
export class FindProductByIdUseCaseImpl implements FindProductByIdUseCase {
  constructor(
    private readonly findProductByIdRepository: FindProductByIdRepository,
  ) {}

  async findById(productId: string): Promise<Product> {
    return this.findProductByIdRepository.findById(productId);
  }
}
