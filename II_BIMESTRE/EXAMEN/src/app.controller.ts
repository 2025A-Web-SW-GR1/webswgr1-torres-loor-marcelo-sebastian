import { Controller, Get, Redirect } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // Redirigir la ruta raíz al login
  @Get()
  @Redirect('/auth/login')
  redirigirAlLogin() {
    return;
  }

  // Endpoint de salud del servidor
  @Get('health')
  obtenerEstadoServidor(): object {
    return {
      status: 'OK',
      timestamp: new Date().toISOString(),
      message: 'Servidor del examen funcionando correctamente',
      version: '1.0.0'
    };
  }
}
