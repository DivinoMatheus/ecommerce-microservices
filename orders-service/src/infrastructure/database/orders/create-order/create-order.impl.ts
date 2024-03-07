import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { InjectRepository as InjectOrm } from '@nestjs/typeorm';
import { OrderOrm } from '../../orms/order.orm';
import { CreateOrderRepository } from 'src/domain/repositories/create-order.repository';
import { Repository as ORM } from 'typeorm';
import { Order } from '../../../../domain/entities/order';

@Injectable()
export class CreateOrderData implements CreateOrderRepository {
  constructor(@InjectOrm(OrderOrm) private readonly orderOrm: ORM<OrderOrm>) {}

  create(order: Order): Promise<Order> {
    return this.orderOrm.save({
      ...order,
      id: uuidv4(),
    });
  }
}
