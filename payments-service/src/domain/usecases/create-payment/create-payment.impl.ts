import { CreatePaymentUseCase } from './create-payment.usecase';
import { Payment } from 'src/domain/entities/payment';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CreatePaymentUseCaseImpl implements CreatePaymentUseCase {
  constructor() {}

  async create(): Promise<Payment> {
    const success = this.generateRandomBoolean()

    return { 
      result: success ? "SUCCESS" : "FAIL"
    }
  }

  private generateRandomBoolean(): boolean { 
    return Boolean(Math.floor(Math.random() * 2))
  }
}
