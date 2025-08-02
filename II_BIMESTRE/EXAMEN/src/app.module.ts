import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CasaModule } from './casa/casa.module';
import { AuthModule } from './auth/auth.module';
import { DataInitModule } from './data-init/data-init.module';
import { Casa } from './casa/casa.entity';

@Module({
  imports: [
    // Configuración de TypeORM con SQLite
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'examen.sqlite',
      entities: [Casa],
      synchronize: true, // Solo para desarrollo
      logging: true,
    }),
    CasaModule,
    AuthModule,
    DataInitModule, // Agregamos el módulo de inicialización de datos
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
