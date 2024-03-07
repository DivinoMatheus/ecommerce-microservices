import { Module } from '@nestjs/common';
import { CartsController } from './presentation/carts.controller';
import { DatabaseModule } from './infrastructure/database/database.module';
import { UseCaseProviders } from './domain/usecases/usecase.providers';


@Module({
  imports: [DatabaseModule],
  controllers: [CartsController],
  providers: [...UseCaseProviders],
})
export class AppModule {}
