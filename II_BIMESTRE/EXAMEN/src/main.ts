import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import session from 'express-session';
import sessionFileStore from 'session-file-store';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as path from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  
  // Configuración de validación global
  app.useGlobalPipes(new ValidationPipe());
  
  // Configuración de sesiones
  const FileStore = sessionFileStore(session);
  app.use(
    session({
      secret: 'examen-marcelo-torres-secreto-seguro',
      resave: false,
      saveUninitialized: false,
      store: new FileStore({
        path: './sessions',
        ttl: 3600, // 1 hora
      }),
      cookie: {
        maxAge: 3600000, // 1 hora en millisegundos
        secure: process.env.NODE_ENV === 'production',
        httpOnly: true,
      },
    }),
  );

  // Configuración del motor de renderizado EJS
  app.set('view engine', 'ejs');
  app.setBaseViewsDir(path.join(__dirname, '..', 'views'));
  app.useStaticAssets(path.join(__dirname, '..', 'public'));

  const port = process.env.PORT ?? 3000;
  await app.listen(port);
  
  console.log(`🚀 Examen - Aplicación ejecutándose en: http://localhost:${port}`);
  console.log(`📋 Usuario: Marcelo | Contraseña: admin`);
}

bootstrap();
