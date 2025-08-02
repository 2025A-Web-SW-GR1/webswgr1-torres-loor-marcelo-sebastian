import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Casa } from './casa.entity';
import { CasaService } from './casa.service';
import { CasaController } from './casa.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Casa])],
  controllers: [CasaController],
  providers: [CasaService],
  exports: [CasaService], // Exportamos el servicio para uso en otros módulos
})
export class CasaModule {}
