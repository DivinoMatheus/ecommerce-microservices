import { Module } from '@nestjs/common';
import { FindAccountByIdDataProvider } from './accounts/find-account-by-id/find-account-by-id.provider';
import { CreateAccountProvider } from './accounts/create-account/create-account.provider';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountOrm } from './orms/account.orm';
import { DATABASE_CONFIG } from './database.config';
import { DeleteAccountDataProvider } from './accounts/delete-account/delete-account.provider';
import { UpdateAccountDataProvider } from './accounts/update-account/update-account.provider';
import { FindAccountByEmailDataProvider } from './accounts/find-account-by-email/find-account-by-email.provider';

@Module({
  imports: [TypeOrmModule.forRoot(DATABASE_CONFIG), TypeOrmModule.forFeature([AccountOrm])],
  providers: [CreateAccountProvider, FindAccountByEmailDataProvider, FindAccountByIdDataProvider, UpdateAccountDataProvider, DeleteAccountDataProvider],
  exports: [CreateAccountProvider, FindAccountByEmailDataProvider, FindAccountByIdDataProvider, UpdateAccountDataProvider, DeleteAccountDataProvider],
})
export class DatabaseModule {}
