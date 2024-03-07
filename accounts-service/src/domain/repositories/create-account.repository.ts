import { Account } from '../entities/account';
import { PublicAccount } from '../entities/public-account';

export abstract class CreateAccountRepository {
  public abstract create(account: Account): Promise<PublicAccount>;
}
