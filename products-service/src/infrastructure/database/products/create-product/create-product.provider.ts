import { CreateProductRepository } from 'src/domain/repositories/create-product.repository';
import { CreateProductData } from './create-product.impl';
import { Provider } from '@nestjs/common';

export const CreateProductProvider: Provider = {
  provide: CreateProductRepository,
  useClass: CreateProductData,
};
