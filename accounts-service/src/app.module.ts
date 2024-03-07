import { Module } from '@nestjs/common';
import { AccountsController } from './presentation/accounts.controller';
import { DatabaseModule } from './infrastructure/database/database.module';
import { UseCaseProviders } from './domain/usecases/usecase.providers';
import { UtilitiesModule } from './infrastructure/utilities/utilities.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './configuration/jwt-constants';
import { AuthController } from './presentation/auth.controller';


@Module({
  imports: [DatabaseModule, UtilitiesModule, JwtModule.register({
    global: true,
    secret: jwtConstants.secret,
    signOptions: { expiresIn: '8h'}
  })],
  controllers: [AccountsController, AuthController],
  providers: [...UseCaseProviders],
})
export class AppModule {}
