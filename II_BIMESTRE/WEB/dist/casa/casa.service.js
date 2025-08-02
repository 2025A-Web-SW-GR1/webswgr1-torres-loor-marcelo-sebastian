"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CasaService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const casa_entity_1 = require("./entities/casa.entity");
let CasaService = class CasaService {
    constructor(casaRepository) {
        this.casaRepository = casaRepository;
    }
    async buscarPorNombre(nombre) {
        return this.casaRepository.find({
            where: {
                nombre: (0, typeorm_2.Like)(`%${nombre}%`),
            },
            order: {
                nombre: 'ASC'
            }
        });
    }
    async buscarCasas(filtros) {
        const { nombre, ubicacion, precioMin, precioMax, habitacionesMin, banosMin, disponible, page = 1, limit = 10 } = filtros;
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
    async crear(createCasaDto) {
        const nuevaCasa = this.casaRepository.create(createCasaDto);
        return await this.casaRepository.save(nuevaCasa);
    }
    async buscarTodas() {
        return await this.casaRepository.find({
            order: {
                createdAt: 'DESC'
            }
        });
    }
    async buscarPorId(id) {
        const casa = await this.casaRepository.findOne({ where: { id } });
        if (!casa) {
            throw new common_1.NotFoundException(`Casa con ID ${id} no encontrada`);
        }
        return casa;
    }
    async actualizar(id, updateData) {
        const casa = await this.buscarPorId(id);
        Object.assign(casa, updateData);
        return await this.casaRepository.save(casa);
    }
    async eliminar(id) {
        const casa = await this.buscarPorId(id);
        await this.casaRepository.remove(casa);
    }
    async cambiarDisponibilidad(id, disponible) {
        const casa = await this.buscarPorId(id);
        casa.disponible = disponible;
        return await this.casaRepository.save(casa);
    }
};
exports.CasaService = CasaService;
exports.CasaService = CasaService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(casa_entity_1.Casa)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CasaService);
//# sourceMappingURL=casa.service.js.map