# Casa API - Guía de Implementación

Este proyecto implementa una API REST para gestión de casas con filtros de búsqueda y validaciones utilizando NestJS, TypeORM y class-validator.

## 🚀 Instalación y Configuración

### 1. Instalar Dependencias

```bash
npm install
```

### 2. Configuración de Base de Datos

Edita el archivo `src/app.module.ts` y configura tu conexión a MySQL:

```typescript
TypeOrmModule.forRoot({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'tu_usuario',
  password: 'tu_password',
  database: 'casa_db',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: true, // Solo para desarrollo
  logging: true,
})
```

### 3. Crear Base de Datos

```sql
CREATE DATABASE casa_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

### 4. Ejecutar la Aplicación

```bash
# Desarrollo
npm run start:dev

# Producción
npm run build
npm run start:prod
```

## 📚 Endpoints Disponibles

### Base URL: `http://localhost:3000/api`

### 1. Crear Casa
- **POST** `/casa`
- **Body**:
```json
{
  "nombre": "Casa Moderna",
  "ubicacion": "Ciudad de México, CDMX",
  "precio": 250000,
  "descripcion": "Casa amplia con jardín",
  "habitaciones": 3,
  "banos": 2,
  "area": 120.5,
  "disponible": true
}
```

### 2. Buscar Casas con Filtros
- **GET** `/casa?nombre=moderna&precioMin=100000&precioMax=500000&page=1&limit=10`

**Parámetros de Query disponibles:**
- `nombre`: Búsqueda parcial por nombre
- `ubicacion`: Búsqueda parcial por ubicación
- `precioMin`: Precio mínimo
- `precioMax`: Precio máximo
- `habitacionesMin`: Número mínimo de habitaciones
- `banosMin`: Número mínimo de baños
- `disponible`: Solo casas disponibles (true/false)
- `page`: Número de página (default: 1)
- `limit`: Elementos por página (default: 10)

### 3. Obtener Todas las Casas
- **GET** `/casa/todas`

### 4. Buscar por Nombre (Simple)
- **GET** `/casa/buscar-por-nombre?nombre=moderna`

### 5. Obtener Casa por ID
- **GET** `/casa/{id}`

### 6. Actualizar Casa
- **PUT** `/casa/{id}`
- **Body**: Campos a actualizar

### 7. Eliminar Casa
- **DELETE** `/casa/{id}`

### 8. Cambiar Disponibilidad
- **PUT** `/casa/{id}/disponibilidad`
- **Body**:
```json
{
  "disponible": false
}
```

## 🔍 Ejemplos de Pruebas en Postman

### Crear Casa (POST)
```json
{
  "nombre": "Casa Familiar",
  "ubicacion": "Guadalajara, Jalisco",
  "precio": 180000,
  "descripcion": "Casa perfecta para familia",
  "habitaciones": 4,
  "banos": 3,
  "area": 150,
  "disponible": true
}
```

### Buscar con Filtros (GET)
- URL: `http://localhost:3000/api/casa?nombre=casa&precioMin=100000&precioMax=300000&habitacionesMin=3&disponible=true&page=1&limit=5`

### Respuesta Esperada:
```json
{
  "data": [
    {
      "id": 1,
      "nombre": "Casa Familiar",
      "ubicacion": "Guadalajara, Jalisco",
      "precio": 180000,
      "descripcion": "Casa perfecta para familia",
      "habitaciones": 4,
      "banos": 3,
      "area": 150,
      "disponible": true,
      "createdAt": "2025-01-01T12:00:00.000Z",
      "updatedAt": "2025-01-01T12:00:00.000Z"
    }
  ],
  "total": 1,
  "page": 1,
  "limit": 5,
  "totalPages": 1
}
```

## ✅ Validaciones Implementadas

### CreateCasaDto
- `nombre`: Requerido, debe ser string
- `ubicacion`: Requerida, debe ser string
- `precio`: Requerido, debe ser número ≥ 0
- `habitaciones`: Requerido, debe ser entero ≥ 1
- `banos`: Requerido, debe ser entero ≥ 1
- `descripcion`: Opcional, debe ser string
- `area`: Opcional, debe ser número ≥ 0
- `disponible`: Opcional, debe ser boolean

### BuscarCasaDto
- Todos los campos son opcionales
- Validaciones numéricas y de tipo
- Paginación con valores por defecto

## 🧪 Características Implementadas

✅ **Filtros de Búsqueda con TypeORM**
- Operador LIKE para búsquedas parciales
- QueryBuilder para filtros complejos
- Paginación incluida

✅ **Validaciones con class-validator**
- DTOs tipados para entrada y salida
- Validaciones robustas en todos los campos
- Mensajes de error personalizados

✅ **Endpoints RESTful**
- CRUD completo
- Filtros avanzados
- Documentación con Swagger

✅ **Documentación API**
- Swagger UI disponible en: `http://localhost:3000/api/docs`
- Ejemplos y esquemas incluidos

## 🔧 Configuración Adicional

### TypeScript
```json
{
  "compilerOptions": {
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true
  }
}
```

### Nest CLI
```json
{
  "collection": "@nestjs/schematics",
  "sourceRoot": "src"
}
```

## 📝 Notas Importantes

1. **Synchronize**: Configurado como `true` solo para desarrollo
2. **Validaciones**: GlobalValidationPipe configurado en `main.ts`
3. **CORS**: Habilitado para desarrollo
4. **Logging**: Activado para ver queries SQL
5. **Swagger**: Documentación automática generada
