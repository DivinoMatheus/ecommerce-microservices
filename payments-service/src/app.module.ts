import { Module } from '@nestjs/common';
import { PaymentsController } from './presentation/payments.controller';
import { UseCaseProviders } from './domain/usecases/usecase.providers';


@Module({
  imports: [],
  controllers: [PaymentsController],
  providers: [...UseCaseProviders],
})
export class AppModule {}
