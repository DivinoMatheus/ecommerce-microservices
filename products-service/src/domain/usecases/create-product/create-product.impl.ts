import { CreateProductRepository } from 'src/domain/repositories/create-product.repository';
import { CreateProductUseCase } from './create-product.usecase';
import { Product } from 'src/domain/entities/product';
import { Injectable, Logger } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { fakeProducts } from './fake-products';

@Injectable()
export class CreateProductUseCaseImpl implements CreateProductUseCase {
  constructor(
    private readonly createProductRepository: CreateProductRepository,
  ) {}

  async create(product: Product): Promise<void> {
    return this.createProductRepository.create({ ...product, id: uuidv4(), formattedPrice: this.formatPrice(product.price) });
  }

  private formatPrice(price: number) {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(price / 100)
  }

  onApplicationBootstrap()	{
    const logger = new Logger(CreateProductUseCase.name)
    logger.log("Creating fake products...")
    fakeProducts.map(fakeProduct => 
      this.createProductRepository.create({ 
        ...fakeProduct, 
        formattedPrice: this.formatPrice(fakeProduct.price)   
      }))
  }
}
