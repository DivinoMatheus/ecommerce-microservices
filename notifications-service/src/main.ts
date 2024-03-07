import './env'
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { queues } from './infrastructure/rabbitmq/queues';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Notifications Service')
    .setDescription('Microservice to manage notifications')
    .setVersion('1.0')
    .addTag('notifications')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('swagger-ui', app, document);

  app.useGlobalPipes(new ValidationPipe());
  
  for (const queue of queues) {
    await app.connectMicroservice(queue);
  }

  await app.startAllMicroservices();
  await app.listen(process.env.PORT);
}
bootstrap();
