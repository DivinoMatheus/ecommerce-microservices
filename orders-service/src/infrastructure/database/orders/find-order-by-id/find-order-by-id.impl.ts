import { Injectable } from '@nestjs/common';
import { Order } from 'src/domain/entities/order';
import { FindOrderByIdRepository } from 'src/domain/repositories/find-order-by-id.repository';
import { Repository as ORM } from 'typeorm';
import { OrderOrm } from '../../orms/order.orm';
import { InjectRepository as InjectOrm } from '@nestjs/typeorm';

@Injectable()
export class FindOrderByIdData implements FindOrderByIdRepository {
  constructor(@InjectOrm(OrderOrm) private readonly ordersOrm: ORM<OrderOrm>) {}

  async findById(orderId: string): Promise<Order> {
    return this.ordersOrm.findOneBy({ id: orderId });
  }
}
