import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { CasaModule } from '../casa/casa.module';

@Module({
  imports: [CasaModule], // Importamos CasaModule para usar CasaService
  controllers: [AuthController],
  providers: [],
})
export class AuthModule {}
