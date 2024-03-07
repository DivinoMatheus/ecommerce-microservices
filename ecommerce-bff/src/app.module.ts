import { MiddlewareConsumer, Module } from '@nestjs/common';
import { OrdersController } from './presentation/orders.controller';
import { UseCaseProviders } from './domain/usecases/usecase.providers';
import { CartsController } from './presentation/carts.controller';
import { AuthMiddleware } from './infrastructure/middlewares/auth.middleware';
import { WebServicesModule } from './infrastructure/web-services/web-services.module';


@Module({
  imports: [WebServicesModule],
  controllers: [OrdersController, CartsController],
  providers: [...UseCaseProviders],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes("*")
  }
}
