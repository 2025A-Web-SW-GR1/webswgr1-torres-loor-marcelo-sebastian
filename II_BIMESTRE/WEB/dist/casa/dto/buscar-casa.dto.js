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
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuscarCasaDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
class BuscarCasaDto {
    constructor() {
        this.page = 1;
        this.limit = 10;
    }
}
exports.BuscarCasaDto = BuscarCasaDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Nombre de la casa para búsqueda parcial', example: 'moderna' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: 'El nombre debe ser un texto' }),
    __metadata("design:type", String)
], BuscarCasaDto.prototype, "nombre", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Ubicación para búsqueda parcial', example: 'CDMX' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: 'La ubicación debe ser un texto' }),
    __metadata("design:type", String)
], BuscarCasaDto.prototype, "ubicacion", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Precio mínimo', example: 100000 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)({}, { message: 'El precio mínimo debe ser un número' }),
    (0, class_validator_1.Min)(0, { message: 'El precio mínimo debe ser mayor o igual a 0' }),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], BuscarCasaDto.prototype, "precioMin", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Precio máximo', example: 500000 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)({}, { message: 'El precio máximo debe ser un número' }),
    (0, class_validator_1.Min)(0, { message: 'El precio máximo debe ser mayor o igual a 0' }),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], BuscarCasaDto.prototype, "precioMax", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Número mínimo de habitaciones', example: 2 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)({ message: 'El número de habitaciones debe ser un entero' }),
    (0, class_validator_1.Min)(1, { message: 'Debe ser al menos 1 habitación' }),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], BuscarCasaDto.prototype, "habitacionesMin", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Número mínimo de baños', example: 1 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)({ message: 'El número de baños debe ser un entero' }),
    (0, class_validator_1.Min)(1, { message: 'Debe ser al menos 1 baño' }),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], BuscarCasaDto.prototype, "banosMin", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Solo casas disponibles', example: true }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)({ message: 'Disponible debe ser verdadero o falso' }),
    (0, class_transformer_1.Type)(() => Boolean),
    __metadata("design:type", Boolean)
], BuscarCasaDto.prototype, "disponible", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Número de página', example: 1, default: 1 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)({ message: 'La página debe ser un entero' }),
    (0, class_validator_1.Min)(1, { message: 'La página debe ser mayor o igual a 1' }),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], BuscarCasaDto.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Elementos por página', example: 10, default: 10 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)({ message: 'El límite debe ser un entero' }),
    (0, class_validator_1.Min)(1, { message: 'El límite debe ser mayor o igual a 1' }),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], BuscarCasaDto.prototype, "limit", void 0);
//# sourceMappingURL=buscar-casa.dto.js.map