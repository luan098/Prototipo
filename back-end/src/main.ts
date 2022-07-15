import { INestApplication, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { QueryExceptionFilter } from './filters/query-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
  });

  createSwaggerDoc(app);

  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));

  app.useGlobalFilters(new QueryExceptionFilter());

  await app.listen(3001);
  console.log('Server running in //127.0.0.1:3001');
}

/** Create documentation for development help */
function createSwaggerDoc(app: INestApplication) {
  const config = new DocumentBuilder()
    .setTitle('Prototipo')
    .setDescription('Documentação api swagger')
    .setVersion('1.0')
    .addTag('prototipo')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
}

bootstrap();
