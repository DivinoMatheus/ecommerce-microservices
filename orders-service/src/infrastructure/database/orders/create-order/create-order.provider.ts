import { CreateOrderRepository } from 'src/domain/repositories/create-order.repository';
import { CreateOrderData } from './create-order.impl';
import { Provider } from '@nestjs/common';

export const CreateOrderProvider: Provider = {
  provide: CreateOrderRepository,
  useClass: CreateOrderData,
};
