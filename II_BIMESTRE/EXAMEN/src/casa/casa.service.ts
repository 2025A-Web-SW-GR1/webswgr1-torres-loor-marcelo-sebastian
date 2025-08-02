import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Casa } from './casa.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CasaService {
  constructor(
    @InjectRepository(Casa)
    private readonly casaRepository: Repository<Casa>,
  ) {}

  // Obtener todas las casas para mostrar en la tabla
  async obtenerTodasLasCasas(): Promise<Casa[]> {
    return this.casaRepository.find({
      order: {
        id: 'ASC'
      }
    });
  }

  // Método para obtener una casa por ID
  async obtenerUnaPorId(id: number): Promise<Casa> {
    return this.casaRepository.findOneByOrFail({ id });
  }

  // Método para buscar por username (usado en autenticación)
  async buscarUnoPorUsername(username: string): Promise<Casa> {
    return this.casaRepository.findOneByOrFail({ username });
  }

  // Crear datos de ejemplo para el examen
  async crearDatosEjemplo(): Promise<void> {
    const existeCasas = await this.casaRepository.count();
    
    if (existeCasas === 0) {
      const casasEjemplo = [
        {
          nombre: 'Casa de Playa',
          valor: 125000.00,
          imagenURL: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400',
          username: 'marcelo',
          password: 'admin'
        },
        {
          nombre: 'Villa Moderna',
          valor: 380000.00,
          imagenURL: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=400',
          username: 'usuario1',
          password: '123456'
        },
        {
          nombre: 'Casa Colonial',
          valor: 220000.00,
          imagenURL: 'https://images.unsplash.com/photo-1553830591-fddf68762329?w=400',
          username: 'usuario2',
          password: 'password'
        },
        {
          nombre: 'Departamento Céntrico',
          valor: 85000.00,
          imagenURL: 'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=400',
          username: 'usuario3',
          password: 'test123'
        },
        {
          nombre: 'Casa de Campo',
          valor: 156000.00,
          imagenURL: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400',
          username: 'usuario4',
          password: 'campo2024'
        }
      ];

      for (const casaData of casasEjemplo) {
        const casa = this.casaRepository.create(casaData);
        await this.casaRepository.save(casa);
      }

      console.log('✅ Datos de ejemplo creados para el examen');
    }
  }
}
