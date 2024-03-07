import { Order } from 'src/domain/entities/order';
import { FindOrderByIdUseCase } from './find-order-by-id.usecase';
import { Injectable } from '@nestjs/common';
import { FindOrderByIdRepository } from 'src/domain/repositories/find-order-by-id.repository';

@Injectable()
export class FindOrderByIdUseCaseImpl implements FindOrderByIdUseCase {
  constructor(
    private readonly findOrderByIdRepository: FindOrderByIdRepository,
  ) {}

  async findById(orderId: string): Promise<Order> {
    return this.findOrderByIdRepository.findById(orderId);
  }
}
