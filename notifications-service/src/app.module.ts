import { Module } from '@nestjs/common';
import { NotificationsController } from './presentation/notifications.controller';
import { UseCaseProviders } from './domain/usecases/usecase.providers';
import { MailModule } from './infrastructure/mail/mail.module';
import { WebServicesModule } from './infrastructure/web-services/web-services.module';


@Module({
  imports: [MailModule, WebServicesModule],
  controllers: [NotificationsController],
  providers: [...UseCaseProviders],
})
export class AppModule {}
