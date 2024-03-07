import { Account } from 'src/domain/entities/account';
import { PublicAccount } from 'src/domain/entities/public-account';

export abstract class CreateAccountUseCase {
  public abstract create(account: Account): Promise<PublicAccount>;
}
