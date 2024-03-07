import { Body, Controller, Headers, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CreateOrderUseCase } from 'src/domain/usecases/create-order/create-order.usecase';


@ApiTags('orders')
@Controller('orders')
export class OrdersController {
  constructor(
    private readonly createOrderUseCase: CreateOrderUseCase
  ) {}

  @Post()
  @ApiBearerAuth()
  createOrder(@Headers() headers: Record<string, string>): Promise<{ orderId: string}> {
    const accountId = headers['x-account-id']
    return this.createOrderUseCase.create(accountId)
  }
}
