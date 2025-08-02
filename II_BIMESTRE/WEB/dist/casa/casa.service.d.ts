import { Repository } from 'typeorm';
import { Casa } from './entities/casa.entity';
import { CreateCasaDto } from './dto/create-casa.dto';
import { BuscarCasaDto } from './dto/buscar-casa.dto';
export declare class CasaService {
    private casaRepository;
    constructor(casaRepository: Repository<Casa>);
    buscarPorNombre(nombre: string): Promise<Casa[]>;
    buscarCasas(filtros: BuscarCasaDto): Promise<{
        data: Casa[];
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    }>;
    crear(createCasaDto: CreateCasaDto): Promise<Casa>;
    buscarTodas(): Promise<Casa[]>;
    buscarPorId(id: number): Promise<Casa>;
    actualizar(id: number, updateData: Partial<CreateCasaDto>): Promise<Casa>;
    eliminar(id: number): Promise<void>;
    cambiarDisponibilidad(id: number, disponible: boolean): Promise<Casa>;
}
