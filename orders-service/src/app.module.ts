import { Module } from '@nestjs/common';
import { OrdersController } from './presentation/orders.controller';
import { DatabaseModule } from './infrastructure/database/database.module';
import { UseCaseProviders } from './domain/usecases/usecase.providers';
import { RabbitMqModule } from './infrastructure/rabbitmq/rabbitmq.module';
import { WebServicesModule } from './infrastructure/web-services/web-services.module';


@Module({
  imports: [DatabaseModule, RabbitMqModule, WebServicesModule],
  controllers: [OrdersController],
  providers: [...UseCaseProviders],
})
export class AppModule {}
