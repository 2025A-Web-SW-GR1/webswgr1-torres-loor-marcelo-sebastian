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
exports.CreateCasaDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
class CreateCasaDto {
}
exports.CreateCasaDto = CreateCasaDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Nombre de la casa', example: 'Casa Moderna' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'El nombre es obligatorio' }),
    (0, class_validator_1.IsString)({ message: 'El nombre debe ser un texto' }),
    __metadata("design:type", String)
], CreateCasaDto.prototype, "nombre", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Ubicación de la casa', example: 'Ciudad de México, CDMX' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'La ubicación es obligatoria' }),
    (0, class_validator_1.IsString)({ message: 'La ubicación debe ser un texto' }),
    __metadata("design:type", String)
], CreateCasaDto.prototype, "ubicacion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Precio de la casa', example: 250000 }),
    (0, class_validator_1.IsNumber)({}, { message: 'El precio debe ser un número' }),
    (0, class_validator_1.Min)(0, { message: 'El precio debe ser mayor o igual a 0' }),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], CreateCasaDto.prototype, "precio", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Descripción de la casa', example: 'Casa amplia con jardín' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: 'La descripción debe ser un texto' }),
    __metadata("design:type", String)
], CreateCasaDto.prototype, "descripcion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Número de habitaciones', example: 3 }),
    (0, class_validator_1.IsInt)({ message: 'El número de habitaciones debe ser un entero' }),
    (0, class_validator_1.Min)(1, { message: 'Debe tener al menos 1 habitación' }),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], CreateCasaDto.prototype, "habitaciones", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Número de baños', example: 2 }),
    (0, class_validator_1.IsInt)({ message: 'El número de baños debe ser un entero' }),
    (0, class_validator_1.Min)(1, { message: 'Debe tener al menos 1 baño' }),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], CreateCasaDto.prototype, "banos", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Área en metros cuadrados', example: 120.5 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)({}, { message: 'El área debe ser un número' }),
    (0, class_validator_1.Min)(0, { message: 'El área debe ser mayor o igual a 0' }),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], CreateCasaDto.prototype, "area", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Indica si la casa está disponible', example: true }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)({ message: 'Disponible debe ser verdadero o falso' }),
    (0, class_transformer_1.Type)(() => Boolean),
    __metadata("design:type", Boolean)
], CreateCasaDto.prototype, "disponible", void 0);
//# sourceMappingURL=create-casa.dto.js.map