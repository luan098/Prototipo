// import { createDatabase } from 'typeorm-extension';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  // createDatabase({
  //   ifNotExist: true,
  //   charset: 'utf8mb4_general_ci',
  //   characterSet: 'utf8mb4',
  // });
  const app = await NestFactory.create(AppModule);
  await app.listen(3001);
  console.log('Server running in //127.0.0.1:3001');
}
bootstrap();
