import { Body, Controller } from '@nestjs/common';
import { Ctx, MessagePattern, Payload, RmqContext } from '@nestjs/microservices';
import { ApiTags } from '@nestjs/swagger';
import { SendOrderPaymentNotificationUseCase } from 'src/domain/usecases/send-order-payment-notification/send-order-payment-notification.usecase';
import { OrderPaymentNotification } from 'src/domain/value-objects/notifications/order-payment.notification';

@ApiTags('notifications')
@Controller('notifications')
export class NotificationsController {

  constructor(
    private readonly sendOrderPaymentNotificationUseCase: SendOrderPaymentNotificationUseCase,
  ) {}

  @MessagePattern('payment-success')
  async processOrderPaymentSuccess(@Payload() data, @Ctx() context: RmqContext): Promise<void> {
    console.log('message received', data)
    try { 
      const channel = context.getChannelRef();
      const originalMsg = context.getMessage();

      channel.ack(originalMsg);
      await this.sendOrderPaymentNotificationUseCase.send({ ...data, status: "SUCCESS" } as OrderPaymentNotification);
    } catch(error) {
      // this.logger.error(`Something wrong happened: ${error.message}`, error);
    }
  }

  @MessagePattern('payment-fail')
  async processOrderPaymentFail(@Payload() data, @Ctx() context: RmqContext): Promise<void> {
    console.log('message received', data)
    try { 
      const channel = context.getChannelRef();
      const originalMsg = context.getMessage();

      channel.ack(originalMsg);
      return this.sendOrderPaymentNotificationUseCase.send({ ...data, status: "FAIL" } as OrderPaymentNotification);
    } catch (error) {
      // this.logger.error(`Something wrong happened: ${error.message}`, error);
    }
  }
}
