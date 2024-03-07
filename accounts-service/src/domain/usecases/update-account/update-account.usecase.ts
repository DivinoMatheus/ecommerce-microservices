import { Account } from 'src/domain/entities/account';

export abstract class UpdateAccountUseCase {
  public abstract update(account: Account): Promise<void>;
}
