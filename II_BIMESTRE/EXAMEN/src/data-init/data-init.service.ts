import { Injectable, OnModuleInit } from '@nestjs/common';
import { CasaService } from '../casa/casa.service';

@Injectable()
export class DataInitService implements OnModuleInit {
  constructor(private readonly casaService: CasaService) {}

  async onModuleInit() {
    try {
      // Crear datos de ejemplo al inicializar la aplicación
      await this.casaService.crearDatosEjemplo();
      console.log('✅ Datos del examen inicializados correctamente');
    } catch (error) {
      console.error('❌ Error al inicializar datos del examen:', error);
    }
  }
}
