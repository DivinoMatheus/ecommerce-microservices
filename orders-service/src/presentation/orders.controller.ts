import { Body, Controller, Delete, Get, Headers, Param, Post } from '@nestjs/common';
import { ApiHeader, ApiTags } from '@nestjs/swagger';
import { Order } from 'src/domain/entities/order';
import { CreateOrderUseCase } from 'src/domain/usecases/create-order/create-order.usecase';
import { CreateOrderRequest } from './dto/requests/create-order.request';
import { FindOrderByIdUseCase } from 'src/domain/usecases/find-order-by-id/find-order-by-id.usecase';
import { FindOrderByIdResponse } from './dto/responses/find-order-by-id.response';

@ApiTags('orders')
@Controller('orders')
export class OrdersController {
  constructor(
    private readonly findOrderByIdUseCase: FindOrderByIdUseCase,
    private readonly createOrderUseCase: CreateOrderUseCase,

  ) {}

  @Get(":orderId")
  async findById(@Param("orderId") orderId: string): Promise<FindOrderByIdResponse> {
    return this.findOrderByIdUseCase.findById(orderId);
  }

  @Post()
  @ApiHeader({ name: "x-account-id" })
  async create(
    @Headers() headers,
    @Body() body: CreateOrderRequest
  ): Promise<Order> {
    const accountId = headers['x-account-id']
    return this.createOrderUseCase.create({ ...body, owner: accountId } as unknown as Order);
  }
}
