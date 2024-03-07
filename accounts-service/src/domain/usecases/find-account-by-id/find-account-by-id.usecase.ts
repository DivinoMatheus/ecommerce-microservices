import { PublicAccount } from 'src/domain/entities/public-account';

export abstract class FindAccountByIdUseCase {
  public abstract findById(accountId: string): Promise<PublicAccount>;
}
