import { 
  Controller, 
  Get, 
  Post, 
  Put, 
  Delete, 
  Body, 
  Param, 
  Query, 
  ParseIntPipe,
  HttpCode,
  HttpStatus 
} from '@nestjs/common';
import { 
  ApiTags, 
  ApiOperation, 
  ApiResponse, 
  ApiParam, 
  ApiQuery 
} from '@nestjs/swagger';
import { CasaService } from './casa.service';
import { CreateCasaDto } from './dto/create-casa.dto';
import { BuscarCasaDto } from './dto/buscar-casa.dto';
import { Casa } from './entities/casa.entity';

@ApiTags('Casas')
@Controller('casa')
export class CasaController {
  constructor(private readonly casaService: CasaService) {}

  @Post()
  @ApiOperation({ summary: 'Crear una nueva casa' })
  @ApiResponse({ 
    status: 201, 
    description: 'Casa creada exitosamente',
    type: Casa 
  })
  @ApiResponse({ 
    status: 400, 
    description: 'Datos de entrada inválidos' 
  })
  async crear(@Body() createCasaDto: CreateCasaDto): Promise<Casa> {
    return await this.casaService.crear(createCasaDto);
  }

  @Get()
  @ApiOperation({ summary: 'Buscar casas con filtros' })
  @ApiResponse({ 
    status: 200, 
    description: 'Lista de casas encontradas',
    schema: {
      type: 'object',
      properties: {
        data: {
          type: 'array',
          items: { $ref: '#/components/schemas/Casa' }
        },
        total: { type: 'number' },
        page: { type: 'number' },
        limit: { type: 'number' },
        totalPages: { type: 'number' }
      }
    }
  })
  async buscarCasas(@Query() filtros: BuscarCasaDto) {
    return await this.casaService.buscarCasas(filtros);
  }

  @Get('todas')
  @ApiOperation({ summary: 'Obtener todas las casas sin filtros' })
  @ApiResponse({ 
    status: 200, 
    description: 'Lista de todas las casas',
    type: [Casa] 
  })
  async buscarTodas(): Promise<Casa[]> {
    return await this.casaService.buscarTodas();
  }

  @Get('buscar-por-nombre')
  @ApiOperation({ summary: 'Buscar casas por nombre (búsqueda simple)' })
  @ApiQuery({ name: 'nombre', description: 'Nombre o parte del nombre de la casa' })
  @ApiResponse({ 
    status: 200, 
    description: 'Casas encontradas por nombre',
    type: [Casa] 
  })
  async buscarPorNombre(@Query('nombre') nombre: string): Promise<Casa[]> {
    return await this.casaService.buscarPorNombre(nombre);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener una casa por ID' })
  @ApiParam({ name: 'id', description: 'ID de la casa' })
  @ApiResponse({ 
    status: 200, 
    description: 'Casa encontrada',
    type: Casa 
  })
  @ApiResponse({ 
    status: 404, 
    description: 'Casa no encontrada' 
  })
  async buscarPorId(@Param('id', ParseIntPipe) id: number): Promise<Casa> {
    return await this.casaService.buscarPorId(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Actualizar una casa' })
  @ApiParam({ name: 'id', description: 'ID de la casa a actualizar' })
  @ApiResponse({ 
    status: 200, 
    description: 'Casa actualizada exitosamente',
    type: Casa 
  })
  @ApiResponse({ 
    status: 404, 
    description: 'Casa no encontrada' 
  })
  async actualizar(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateData: Partial<CreateCasaDto>
  ): Promise<Casa> {
    return await this.casaService.actualizar(id, updateData);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Eliminar una casa' })
  @ApiParam({ name: 'id', description: 'ID de la casa a eliminar' })
  @ApiResponse({ 
    status: 204, 
    description: 'Casa eliminada exitosamente' 
  })
  @ApiResponse({ 
    status: 404, 
    description: 'Casa no encontrada' 
  })
  async eliminar(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return await this.casaService.eliminar(id);
  }

  @Put(':id/disponibilidad')
  @ApiOperation({ summary: 'Cambiar disponibilidad de una casa' })
  @ApiParam({ name: 'id', description: 'ID de la casa' })
  @ApiResponse({ 
    status: 200, 
    description: 'Disponibilidad actualizada',
    type: Casa 
  })
  async cambiarDisponibilidad(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: { disponible: boolean }
  ): Promise<Casa> {
    return await this.casaService.cambiarDisponibilidad(id, body.disponible);
  }
}
