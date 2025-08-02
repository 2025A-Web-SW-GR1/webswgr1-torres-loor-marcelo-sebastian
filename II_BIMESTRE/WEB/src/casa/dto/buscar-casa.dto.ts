import { IsOptional, IsString, IsNumber, Min, IsBoolean, IsInt } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class BuscarCasaDto {
  @ApiPropertyOptional({ description: 'Nombre de la casa para búsqueda parcial', example: 'moderna' })
  @IsOptional()
  @IsString({ message: 'El nombre debe ser un texto' })
  nombre?: string;

  @ApiPropertyOptional({ description: 'Ubicación para búsqueda parcial', example: 'CDMX' })
  @IsOptional()
  @IsString({ message: 'La ubicación debe ser un texto' })
  ubicacion?: string;

  @ApiPropertyOptional({ description: 'Precio mínimo', example: 100000 })
  @IsOptional()
  @IsNumber({}, { message: 'El precio mínimo debe ser un número' })
  @Min(0, { message: 'El precio mínimo debe ser mayor o igual a 0' })
  @Type(() => Number)
  precioMin?: number;

  @ApiPropertyOptional({ description: 'Precio máximo', example: 500000 })
  @IsOptional()
  @IsNumber({}, { message: 'El precio máximo debe ser un número' })
  @Min(0, { message: 'El precio máximo debe ser mayor o igual a 0' })
  @Type(() => Number)
  precioMax?: number;

  @ApiPropertyOptional({ description: 'Número mínimo de habitaciones', example: 2 })
  @IsOptional()
  @IsInt({ message: 'El número de habitaciones debe ser un entero' })
  @Min(1, { message: 'Debe ser al menos 1 habitación' })
  @Type(() => Number)
  habitacionesMin?: number;

  @ApiPropertyOptional({ description: 'Número mínimo de baños', example: 1 })
  @IsOptional()
  @IsInt({ message: 'El número de baños debe ser un entero' })
  @Min(1, { message: 'Debe ser al menos 1 baño' })
  @Type(() => Number)
  banosMin?: number;

  @ApiPropertyOptional({ description: 'Solo casas disponibles', example: true })
  @IsOptional()
  @IsBoolean({ message: 'Disponible debe ser verdadero o falso' })
  @Type(() => Boolean)
  disponible?: boolean;

  @ApiPropertyOptional({ description: 'Número de página', example: 1, default: 1 })
  @IsOptional()
  @IsInt({ message: 'La página debe ser un entero' })
  @Min(1, { message: 'La página debe ser mayor o igual a 1' })
  @Type(() => Number)
  page?: number = 1;

  @ApiPropertyOptional({ description: 'Elementos por página', example: 10, default: 10 })
  @IsOptional()
  @IsInt({ message: 'El límite debe ser un entero' })
  @Min(1, { message: 'El límite debe ser mayor o igual a 1' })
  @Type(() => Number)
  limit?: number = 10;
}
