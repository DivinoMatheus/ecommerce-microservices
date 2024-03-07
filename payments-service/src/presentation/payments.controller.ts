import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Payment } from 'src/domain/entities/payment';
import { CreatePaymentUseCase } from 'src/domain/usecases/create-payment/create-payment.usecase';

@ApiTags('payments')
@Controller('payments')
export class PaymentsController {
  constructor(
    private readonly createPaymentUseCase: CreatePaymentUseCase,

  ) {}

  @Post()
  async create(): Promise<Payment> {
    return this.createPaymentUseCase.create();
  }
}
