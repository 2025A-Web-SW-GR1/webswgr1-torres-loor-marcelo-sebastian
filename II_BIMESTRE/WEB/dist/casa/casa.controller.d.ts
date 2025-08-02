import { CasaService } from './casa.service';
import { CreateCasaDto } from './dto/create-casa.dto';
import { BuscarCasaDto } from './dto/buscar-casa.dto';
import { Casa } from './entities/casa.entity';
export declare class CasaController {
    private readonly casaService;
    constructor(casaService: CasaService);
    crear(createCasaDto: CreateCasaDto): Promise<Casa>;
    buscarCasas(filtros: BuscarCasaDto): Promise<{
        data: Casa[];
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    }>;
    buscarTodas(): Promise<Casa[]>;
    buscarPorNombre(nombre: string): Promise<Casa[]>;
    buscarPorId(id: number): Promise<Casa>;
    actualizar(id: number, updateData: Partial<CreateCasaDto>): Promise<Casa>;
    eliminar(id: number): Promise<void>;
    cambiarDisponibilidad(id: number, body: {
        disponible: boolean;
    }): Promise<Casa>;
}
