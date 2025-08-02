import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configurar ValidationPipe globalmente
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
    transformOptions: {
      enableImplicitConversion: true,
    },
  }));

  // Configurar prefijo global para la API
  app.setGlobalPrefix('api');

  // Configurar Swagger
  const config = new DocumentBuilder()
    .setTitle('Casa API')
    .setDescription('API REST para gestión de casas con filtros y validaciones')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  // Habilitar CORS
  app.enableCors();

  await app.listen(3001);
  console.log('Aplicación corriendo en: http://localhost:3001');
  console.log('Documentación Swagger en: http://localhost:3001/api/docs');
}
bootstrap();
