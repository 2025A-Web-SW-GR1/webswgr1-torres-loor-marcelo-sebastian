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
exports.Casa = void 0;
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
let Casa = class Casa {
};
exports.Casa = Casa;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID único de la casa' }),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Casa.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Nombre de la casa' }),
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], Casa.prototype, "nombre", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Ubicación de la casa' }),
    (0, typeorm_1.Column)({ type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], Casa.prototype, "ubicacion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Precio de la casa' }),
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], Casa.prototype, "precio", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Descripción de la casa', required: false }),
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], Casa.prototype, "descripcion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Número de habitaciones' }),
    (0, typeorm_1.Column)({ type: 'int', default: 1 }),
    __metadata("design:type", Number)
], Casa.prototype, "habitaciones", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Número de baños' }),
    (0, typeorm_1.Column)({ type: 'int', default: 1 }),
    __metadata("design:type", Number)
], Casa.prototype, "banos", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Área en metros cuadrados' }),
    (0, typeorm_1.Column)({ type: 'decimal', precision: 8, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], Casa.prototype, "area", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Indica si la casa está disponible' }),
    (0, typeorm_1.Column)({ type: 'boolean', default: true }),
    __metadata("design:type", Boolean)
], Casa.prototype, "disponible", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Fecha de creación' }),
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Casa.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Fecha de última actualización' }),
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Casa.prototype, "updatedAt", void 0);
exports.Casa = Casa = __decorate([
    (0, typeorm_1.Entity)('casas')
], Casa);
//# sourceMappingURL=casa.entity.js.map