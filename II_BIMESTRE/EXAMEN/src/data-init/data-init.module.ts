import { Module } from '@nestjs/common';
import { DataInitService } from './data-init.service';
import { CasaModule } from '../casa/casa.module';

@Module({
  imports: [CasaModule],
  providers: [DataInitService],
  exports: [DataInitService],
})
export class DataInitModule {}
