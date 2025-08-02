import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Like } from 'typeorm';
import { Casa } from './entities/casa.entity';
import { CreateCasaDto } from './dto/create-casa.dto';
import { BuscarCasaDto } from './dto/buscar-casa.dto';

@Injectable()
export class CasaService {
  constructor(
    @InjectRepository(Casa)
    private casaRepository: Repository<Casa>,
  ) {}

  async buscarPorNombre(nombre: string): Promise<Casa[]> {
    return this.casaRepository.find({
      where: {
        nombre: Like(`%${nombre}%`), // Búsqueda parcial
      },
      order: {
        nombre: 'ASC'
      }
    });
  }

  async buscarCasas(filtros: BuscarCasaDto) {
    const { 
      nombre, 
      ubicacion, 
      precioMin, 
      precioMax, 
      habitacionesMin, 
      banosMin, 
      disponible, 
      page = 1, 
      limit = 10 
    } = filtros;
    
    const queryBuilder = this.casaRepository.createQueryBuilder('casa');

    if (nombre) {
      queryBuilder.andWhere('casa.nombre LIKE :nombre', { nombre: `%${nombre}%` });
    }

    if (ubicacion) {
      queryBuilder.andWhere('casa.ubicacion LIKE :ubicacion', { ubicacion: `%${ubicacion}%` });
    }

    if (precioMin !== undefined) {
      queryBuilder.andWhere('casa.precio >= :precioMin', { precioMin });
    }

    if (precioMax !== undefined) {
      queryBuilder.andWhere('casa.precio <= :precioMax', { precioMax });
    }

    if (habitacionesMin !== undefined) {
      queryBuilder.andWhere('casa.habitaciones >= :habitacionesMin', { habitacionesMin });
    }

    if (banosMin !== undefined) {
      queryBuilder.andWhere('casa.banos >= :banosMin', { banosMin });
    }

    if (disponible !== undefined) {
      queryBuilder.andWhere('casa.disponible = :disponible', { disponible });
    }

    queryBuilder
      .orderBy('casa.createdAt', 'DESC')
      .skip((page - 1) * limit)
      .take(limit);

    const [casas, total] = await queryBuilder.getManyAndCount();

    return {
      data: casas,
      total,
      page: Number(page),
      limit: Number(limit),
      totalPages: Math.ceil(total / limit)
    };
  }

  async crear(createCasaDto: CreateCasaDto): Promise<Casa> {
    const nuevaCasa = this.casaRepository.create(createCasaDto);
    return await this.casaRepository.save(nuevaCasa);
  }

  async buscarTodas(): Promise<Casa[]> {
    return await this.casaRepository.find({
      order: {
        createdAt: 'DESC'
      }
    });
  }

  async buscarPorId(id: number): Promise<Casa> {
    const casa = await this.casaRepository.findOne({ where: { id } });
    if (!casa) {
      throw new NotFoundException(`Casa con ID ${id} no encontrada`);
    }
    return casa;
  }

  async actualizar(id: number, updateData: Partial<CreateCasaDto>): Promise<Casa> {
    const casa = await this.buscarPorId(id);
    Object.assign(casa, updateData);
    return await this.casaRepository.save(casa);
  }

  async eliminar(id: number): Promise<void> {
    const casa = await this.buscarPorId(id);
    await this.casaRepository.remove(casa);
  }

  async cambiarDisponibilidad(id: number, disponible: boolean): Promise<Casa> {
    const casa = await this.buscarPorId(id);
    casa.disponible = disponible;
    return await this.casaRepository.save(casa);
  }
}
