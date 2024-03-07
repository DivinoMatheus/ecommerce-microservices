import { Payment } from 'src/domain/entities/payment';

export abstract class CreatePaymentUseCase {
  public abstract create(): Promise<Payment>;
}
