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
exports.CasaController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const casa_service_1 = require("./casa.service");
const create_casa_dto_1 = require("./dto/create-casa.dto");
const buscar_casa_dto_1 = require("./dto/buscar-casa.dto");
const casa_entity_1 = require("./entities/casa.entity");
let CasaController = class CasaController {
    constructor(casaService) {
        this.casaService = casaService;
    }
    async crear(createCasaDto) {
        return await this.casaService.crear(createCasaDto);
    }
    async buscarCasas(filtros) {
        return await this.casaService.buscarCasas(filtros);
    }
    async buscarTodas() {
        return await this.casaService.buscarTodas();
    }
    async buscarPorNombre(nombre) {
        return await this.casaService.buscarPorNombre(nombre);
    }
    async buscarPorId(id) {
        return await this.casaService.buscarPorId(id);
    }
    async actualizar(id, updateData) {
        return await this.casaService.actualizar(id, updateData);
    }
    async eliminar(id) {
        return await this.casaService.eliminar(id);
    }
    async cambiarDisponibilidad(id, body) {
        return await this.casaService.cambiarDisponibilidad(id, body.disponible);
    }
};
exports.CasaController = CasaController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Crear una nueva casa' }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Casa creada exitosamente',
        type: casa_entity_1.Casa
    }),
    (0, swagger_1.ApiResponse)({
        status: 400,
        description: 'Datos de entrada inválidos'
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_casa_dto_1.CreateCasaDto]),
    __metadata("design:returntype", Promise)
], CasaController.prototype, "crear", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Buscar casas con filtros' }),
    (0, swagger_1.ApiResponse)({
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
    }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [buscar_casa_dto_1.BuscarCasaDto]),
    __metadata("design:returntype", Promise)
], CasaController.prototype, "buscarCasas", null);
__decorate([
    (0, common_1.Get)('todas'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener todas las casas sin filtros' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Lista de todas las casas',
        type: [casa_entity_1.Casa]
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CasaController.prototype, "buscarTodas", null);
__decorate([
    (0, common_1.Get)('buscar-por-nombre'),
    (0, swagger_1.ApiOperation)({ summary: 'Buscar casas por nombre (búsqueda simple)' }),
    (0, swagger_1.ApiQuery)({ name: 'nombre', description: 'Nombre o parte del nombre de la casa' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Casas encontradas por nombre',
        type: [casa_entity_1.Casa]
    }),
    __param(0, (0, common_1.Query)('nombre')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CasaController.prototype, "buscarPorNombre", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener una casa por ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID de la casa' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Casa encontrada',
        type: casa_entity_1.Casa
    }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'Casa no encontrada'
    }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CasaController.prototype, "buscarPorId", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Actualizar una casa' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID de la casa a actualizar' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Casa actualizada exitosamente',
        type: casa_entity_1.Casa
    }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'Casa no encontrada'
    }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], CasaController.prototype, "actualizar", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    (0, swagger_1.ApiOperation)({ summary: 'Eliminar una casa' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID de la casa a eliminar' }),
    (0, swagger_1.ApiResponse)({
        status: 204,
        description: 'Casa eliminada exitosamente'
    }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'Casa no encontrada'
    }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CasaController.prototype, "eliminar", null);
__decorate([
    (0, common_1.Put)(':id/disponibilidad'),
    (0, swagger_1.ApiOperation)({ summary: 'Cambiar disponibilidad de una casa' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID de la casa' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Disponibilidad actualizada',
        type: casa_entity_1.Casa
    }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], CasaController.prototype, "cambiarDisponibilidad", null);
exports.CasaController = CasaController = __decorate([
    (0, swagger_1.ApiTags)('Casas'),
    (0, common_1.Controller)('casa'),
    __metadata("design:paramtypes", [casa_service_1.CasaService])
], CasaController);
//# sourceMappingURL=casa.controller.js.map