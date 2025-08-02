import { Controller, Get, Post, Render, Redirect, Body, Session } from '@nestjs/common';
import { CasaService } from './casa.service';

@Controller('casa')
export class CasaController {
  constructor(private readonly casaService: CasaService) {}

  // Mostrar tabla de casas (requiere autenticación)
  @Get('tabla')
  @Render('casas-tabla')
  async mostrarTablaCasas(@Session() session: Record<string, any>) {
    // Verificar si el usuario está autenticado
    if (!session.usuario) {
      return { redirect: '/auth/login' };
    }

    try {
      const casas = await this.casaService.obtenerTodasLasCasas();
      
      return {
        casas: casas,
        usuario: session.usuario,
        totalCasas: casas.length,
        valorTotal: casas.reduce((total, casa) => total + casa.valor, 0),
        titulo: 'Lista de Casas - Examen'
      };
    } catch (error) {
      console.error('Error al obtener casas:', error);
      return {
        casas: [],
        usuario: session.usuario,
        error: 'Error al cargar los datos de las casas',
        titulo: 'Lista de Casas - Examen'
      };
    }
  }

  // Endpoint para obtener casa por ID (API JSON)
  @Get('api/:id')
  async obtenerCasaPorId(@Session() session: Record<string, any>) {
    if (!session.usuario) {
      return { error: 'No autorizado' };
    }

    // Este endpoint podría usarse para futuras funcionalidades
    return { mensaje: 'Funcionalidad disponible solo para usuarios autenticados' };
  }
}
