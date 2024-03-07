import { PublicAccount } from 'src/domain/entities/public-account';

export abstract class FindAccountByEmailUseCase {
  public abstract findByEmail(accountEmail: string): Promise<PublicAccount>;
}
