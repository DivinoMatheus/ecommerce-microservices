import { Account } from '../entities/account';

export abstract class UpdateAccountRepository {
  public abstract update(account: Account): Promise<void>;
}
