import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {MicroserviceOptions} from "@nestjs/microservices";
import {grpcClientOptions} from "./grpc-client.options";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.connectMicroservice<MicroserviceOptions>(grpcClientOptions);

  await app.startAllMicroservicesAsync();
  await app.listen(3001);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
