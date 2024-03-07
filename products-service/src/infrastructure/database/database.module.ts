import { Module } from '@nestjs/common';
import { FindAllProductsDataProvider } from './products/find-all-products/find-all-products.provider';
import { CreateProductProvider } from './products/create-product/create-product.provider';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductOrm } from './orms/product.orm';
import { DATABASE_CONFIG } from './database.config';
import { DeleteProductDataProvider } from './products/delete-product/delete-product.provider';
import { UpdateProductDataProvider } from './products/update-product/update-product.provider';
import { FindProductByIdDataProvider } from './products/find-product-by-id/find-product-by-id.provider';

@Module({
  imports: [TypeOrmModule.forRoot(DATABASE_CONFIG), TypeOrmModule.forFeature([ProductOrm])],
  providers: [CreateProductProvider, FindProductByIdDataProvider, FindAllProductsDataProvider, UpdateProductDataProvider, DeleteProductDataProvider],
  exports: [CreateProductProvider, FindProductByIdDataProvider, FindAllProductsDataProvider, UpdateProductDataProvider, DeleteProductDataProvider],
})
export class DatabaseModule {}
