import { Injectable, OnModuleInit } from '@nestjs/common';

@Injectable()
export class AppService implements OnModuleInit {
  constructor() {}

  // Método que se ejecuta al inicializar el módulo
  async onModuleInit() {
    try {
      console.log('✅ Aplicación del examen inicializada correctamente');
    } catch (error) {
      console.error('❌ Error al inicializar la aplicación:', error);
    }
  }

  obtenerMensajeBienvenida(): string {
    return '¡Bienvenido al Examen de Web II - Sistema de Casas con Login!';
  }

  obtenerInformacionExamen(): object {
    return {
      estudiante: 'Marcelo Torres Loor',
      materia: 'Desarrollo Web II',
      tipo: 'Examen',
      descripcion: 'Sistema de autenticación con tabla de casas',
      credenciales: {
        usuario: 'marcelo',
        password: 'admin'
      },
      funcionalidades: [
        'Login con validación de credenciales',
        'Tabla HTML con datos de entidad Casa',
        'Renderizado del lado del servidor con EJS',
        'Sesiones para mantener autenticación',
        'Base de datos SQLite con TypeORM'
      ]
    };
  }
}
