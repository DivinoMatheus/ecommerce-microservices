import { Product } from 'src/domain/entities/product';
import { FindAllProductsUseCase } from './find-all-products.usecase';
import { FindAllProductsRepository } from 'src/domain/repositories/find-all-products.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class FindAllProductsUseCaseImpl implements FindAllProductsUseCase {
  constructor(
    private readonly findAllProductsRepository: FindAllProductsRepository,
  ) {}

  async findAll(): Promise<Product[]> {
    return this.findAllProductsRepository.findAll();
  }
}
