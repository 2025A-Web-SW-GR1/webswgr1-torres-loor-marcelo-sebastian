import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('casas')
export class Casa {
  @ApiProperty({ description: 'ID único de la casa' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ description: 'Nombre de la casa' })
  @Column({ type: 'varchar', length: 255 })
  nombre: string;

  @ApiProperty({ description: 'Ubicación de la casa' })
  @Column({ type: 'varchar', length: 255 })
  ubicacion: string;

  @ApiProperty({ description: 'Precio de la casa' })
  @Column({ type: 'decimal', precision: 10, scale: 2 })
  precio: number;

  @ApiProperty({ description: 'Descripción de la casa', required: false })
  @Column({ type: 'text', nullable: true })
  descripcion?: string;

  @ApiProperty({ description: 'Número de habitaciones' })
  @Column({ type: 'int', default: 1 })
  habitaciones: number;

  @ApiProperty({ description: 'Número de baños' })
  @Column({ type: 'int', default: 1 })
  banos: number;

  @ApiProperty({ description: 'Área en metros cuadrados' })
  @Column({ type: 'decimal', precision: 8, scale: 2, nullable: true })
  area?: number;

  @ApiProperty({ description: 'Indica si la casa está disponible' })
  @Column({ type: 'boolean', default: true })
  disponible: boolean;

  @ApiProperty({ description: 'Fecha de creación' })
  @CreateDateColumn()
  createdAt: Date;

  @ApiProperty({ description: 'Fecha de última actualización' })
  @UpdateDateColumn()
  updatedAt: Date;
}
