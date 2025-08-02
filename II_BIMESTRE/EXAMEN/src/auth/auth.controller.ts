import { Controller, Get, Post, Render, Body, Session, Redirect, Res } from '@nestjs/common';
import { CasaService } from '../casa/casa.service';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly casaService: CasaService) {}

  // Mostrar formulario de login
  @Get('login')
  @Render('login')
  mostrarLogin(@Session() session: Record<string, any>) {
    // Si ya está autenticado, redirigir a la tabla
    if (session.usuario) {
      return { redirect: '/casa/tabla' };
    }
    
    return {
      titulo: 'Login - Examen',
      error: null
    };
  }

  // Procesar login
  @Post('login')
  async procesarLogin(
    @Body() loginDto: { username: string; password: string },
    @Session() session: Record<string, any>,
    @Res() res: Response,
  ) {
    try {
      const { username, password } = loginDto;

      // Validación específica para el examen: usuario "marcelo" con contraseña "admin"
      if (username === 'marcelo' && password === 'admin') {
        // Crear sesión exitosa
        session.usuario = {
          username: 'marcelo',
          nombre: 'Marcelo Torres',
          rol: 'administrador',
          loginTime: new Date()
        };

        // Redirigir a la tabla de casas
        return res.redirect('/casa/tabla');
      } else {
        // Login fallido - renderizar formulario con error
        return res.render('login', {
          titulo: 'Login - Examen',
          error: 'Credenciales incorrectas. Use: usuario "marcelo" y contraseña "admin"',
          username: username // Mantener el username ingresado
        });
      }
    } catch (error) {
      console.error('Error en login:', error);
      return res.render('login', {
        titulo: 'Login - Examen',
        error: 'Error interno del servidor. Intente nuevamente.',
        username: loginDto.username
      });
    }
  }

  // Cerrar sesión
  @Get('logout')
  cerrarSesion(@Session() session: Record<string, any>, @Res() res: Response) {
    session.destroy((err) => {
      if (err) {
        console.error('Error al cerrar sesión:', err);
      }
      res.redirect('/auth/login');
    });
  }

  // Ruta raíz que redirige al login
  @Get('')
  @Redirect('/auth/login')
  redirigirALogin() {
    return;
  }
}
