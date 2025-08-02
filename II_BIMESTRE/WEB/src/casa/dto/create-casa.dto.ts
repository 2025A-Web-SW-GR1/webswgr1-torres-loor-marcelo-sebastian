import { IsNotEmpty, IsString, IsNumber, IsOptional, Min, IsBoolean, IsInt } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class CreateCasaDto {
  @ApiProperty({ description: 'Nombre de la casa', example: 'Casa Moderna' })
  @IsNotEmpty({ message: 'El nombre es obligatorio' })
  @IsString({ message: 'El nombre debe ser un texto' })
  nombre: string;

  @ApiProperty({ description: 'Ubicación de la casa', example: 'Ciudad de México, CDMX' })
  @IsNotEmpty({ message: 'La ubicación es obligatoria' })
  @IsString({ message: 'La ubicación debe ser un texto' })
  ubicacion: string;

  @ApiProperty({ description: 'Precio de la casa', example: 250000 })
  @IsNumber({}, { message: 'El precio debe ser un número' })
  @Min(0, { message: 'El precio debe ser mayor o igual a 0' })
  @Type(() => Number)
  precio: number;

  @ApiPropertyOptional({ description: 'Descripción de la casa', example: 'Casa amplia con jardín' })
  @IsOptional()
  @IsString({ message: 'La descripción debe ser un texto' })
  descripcion?: string;

  @ApiProperty({ description: 'Número de habitaciones', example: 3 })
  @IsInt({ message: 'El número de habitaciones debe ser un entero' })
  @Min(1, { message: 'Debe tener al menos 1 habitación' })
  @Type(() => Number)
  habitaciones: number;

  @ApiProperty({ description: 'Número de baños', example: 2 })
  @IsInt({ message: 'El número de baños debe ser un entero' })
  @Min(1, { message: 'Debe tener al menos 1 baño' })
  @Type(() => Number)
  banos: number;

  @ApiPropertyOptional({ description: 'Área en metros cuadrados', example: 120.5 })
  @IsOptional()
  @IsNumber({}, { message: 'El área debe ser un número' })
  @Min(0, { message: 'El área debe ser mayor o igual a 0' })
  @Type(() => Number)
  area?: number;

  @ApiPropertyOptional({ description: 'Indica si la casa está disponible', example: true })
  @IsOptional()
  @IsBoolean({ message: 'Disponible debe ser verdadero o falso' })
  @Type(() => Boolean)
  disponible?: boolean;
}
