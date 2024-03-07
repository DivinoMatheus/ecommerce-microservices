import { Module } from '@nestjs/common';
import { ProductsController } from './presentation/products.controller';
import { DatabaseModule } from './infrastructure/database/database.module';
import { UseCaseProviders } from './domain/usecases/usecase.providers';


@Module({
  imports: [DatabaseModule],
  controllers: [ProductsController],
  providers: [...UseCaseProviders],
})
export class AppModule {}
