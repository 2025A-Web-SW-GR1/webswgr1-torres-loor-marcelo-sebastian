import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CasaController } from './casa.controller';
import { CasaService } from './casa.service';
import { Casa } from './entities/casa.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Casa])],
  controllers: [CasaController],
  providers: [CasaService],
  exports: [CasaService],
})
export class CasaModule {}
