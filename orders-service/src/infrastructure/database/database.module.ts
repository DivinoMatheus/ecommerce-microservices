import { Module } from '@nestjs/common';
import { CreateOrderProvider } from './orders/create-order/create-order.provider';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderOrm } from './orms/order.orm';
import { DATABASE_CONFIG } from './database.config';
import { FindOrderByIdDataProvider } from './orders/find-order-by-id/find-order-by-id.provider';

@Module({
  imports: [
    TypeOrmModule.forRoot(DATABASE_CONFIG),
    TypeOrmModule.forFeature([OrderOrm]),
  ],
  providers: [
    CreateOrderProvider,
    FindOrderByIdDataProvider,
  ],
  exports: [
    CreateOrderProvider,
    FindOrderByIdDataProvider,
  ],
})
export class DatabaseModule {}
