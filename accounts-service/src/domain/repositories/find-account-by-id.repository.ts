import { PublicAccount } from '../entities/public-account';

export abstract class FindAccountByIdRepository {
  public abstract findById(accountId: string): Promise<PublicAccount>;
}
