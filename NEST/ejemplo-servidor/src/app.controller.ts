import { Controller, Get, Post, Param, Query, Headers, Body, HttpCode, NotFoundException } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/ejemplo/:id')
  @HttpCode(200)
  ejemplo(
    @Param('id') id: string, // Parámetro de ruta llamado 'id'
    @Query('hola') hola: string, // Parámetro de consulta llamado 'hola'
    @Headers('x-cuela') xCuela: string, // Cabecera con nombre 'x-cuela'
    @Body() monto: number, // Parámetro de cuerpo llamado 'monto'
  ): string {
    if (id && hola && xCuela && monto) {
      return `funcionando ${xCuela} ${monto}`;
    } else {
      throw new NotFoundException('No encontrado');
    }
  }
}