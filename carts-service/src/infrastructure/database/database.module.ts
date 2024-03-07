import { Module } from '@nestjs/common';
import { CreateCartProvider } from './carts/create-cart/create-cart.provider';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CartOrm } from './orms/cart.orm';
import { DATABASE_CONFIG } from './database.config';
import { DeleteCartDataProvider } from './carts/delete-cart/delete-cart.provider';
import { UpdateCartDataProvider } from './carts/update-cart/update-cart.provider';
import { FindCartByOwnerDataProvider } from './carts/find-cart-by-owner/find-cart-by-owner.provider';

@Module({
  imports: [TypeOrmModule.forRoot(DATABASE_CONFIG), TypeOrmModule.forFeature([CartOrm])],
  providers: [CreateCartProvider, FindCartByOwnerDataProvider, UpdateCartDataProvider, DeleteCartDataProvider],
  exports: [CreateCartProvider, FindCartByOwnerDataProvider, UpdateCartDataProvider, DeleteCartDataProvider],
})
export class DatabaseModule {}
