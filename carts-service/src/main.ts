import './env'
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { queues } from './infrastructure/database/rabbitmq/queues';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Carts Service')
    .setDescription('Microservice to manage carts')
    .setVersion('1.0')
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
