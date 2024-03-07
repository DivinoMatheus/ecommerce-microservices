import { Account } from '../entities/account';

export abstract class FindAccountByEmailRepository {
  public abstract findByEmail(email: string): Promise<Account>;
}
