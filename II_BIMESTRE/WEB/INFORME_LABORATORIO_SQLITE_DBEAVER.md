# Informe de Laboratorio: Conexión a Base de Datos SQLite con TypeORM y DBeaver

## Tema
Configuración de una base de datos SQLite en un proyecto NestJS usando TypeORM y visualización de datos con DBeaver.

## Objetivos
- Establecer conexión entre NestJS y SQLite mediante TypeORM.
- Visualizar y manipular datos usando DBeaver.
- Crear un módulo básico (Casa) para interactuar con la base de datos.

## Desarrollo

### 1. Instalación de Dependencias
Se instalaron los paquetes necesarios:

```bash
npm install typeorm sqlite3 @nestjs/typeorm
```

### 2. Configuración de TypeORM
Se creó `database.providers.ts` para la conexión:

```typescript
import { DataSource } from 'typeorm';
import { Casa } from './casa/entities/casa.entity';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'sqlite',
        database: 'db.sqlite',
        entities: [Casa],
        synchronize: true,
      });
      return dataSource.initialize();
    },
  },
];
```

Se configuró el módulo principal en `app.module.ts`:

```typescript
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CasaModule } from './casa/casa.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      logging: true,
    }),
    CasaModule,
  ],
})
export class AppModule {}
```

**Captura 1**: (Mostrar estructura de archivos del proyecto)
- Archivo `database.providers.ts` creado
- Archivo `db.sqlite` generado automáticamente
- Estructura completa del módulo Casa

### 3. Creación del Módulo Casa
Se implementó la entidad Casa con TypeORM:

```typescript
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('casas')
export class Casa {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  nombre: string;

  @Column({ type: 'varchar', length: 255 })
  ubicacion: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  precio: number;

  @Column({ type: 'text', nullable: true })
  descripcion?: string;

  @Column({ type: 'int', default: 1 })
  habitaciones: number;

  @Column({ type: 'int', default: 1 })
  banos: number;

  @Column({ type: 'decimal', precision: 8, scale: 2, nullable: true })
  area?: number;

  @Column({ type: 'boolean', default: true })
  disponible: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
```

### 4. Inserción de Datos de Prueba
Se insertaron registros mediante la API REST:

```json
// Casa 1
{
  "nombre": "Casa Moderna",
  "ubicacion": "Ciudad de México",
  "precio": 250000,
  "habitaciones": 3,
  "banos": 2,
  "descripcion": "Casa amplia con jardín"
}

// Casa 2
{
  "nombre": "Casa Colonial",
  "ubicacion": "Guadalajara", 
  "precio": 180000,
  "habitaciones": 2,
  "banos": 1,
  "descripcion": "Casa tradicional"
}

// Casa 3
{
  "nombre": "Casa Minimalista",
  "ubicacion": "Monterrey",
  "precio": 320000,
  "habitaciones": 4,
  "banos": 3,
  "area": 150.5,
  "descripcion": "Casa de diseño moderno"
}
```

### 5. Visualización en DBeaver
Se descargó e instaló DBeaver Community Edition desde https://dbeaver.io/download/

**Pasos para configuración:**
1. Crear nueva conexión SQLite
2. Seleccionar el archivo `db.sqlite` del proyecto
3. Establecer conexión exitosa
4. Explorar la estructura de la base de datos

**Captura 2**: (Mostrar tabla en DBeaver con registros insertados)
- Conexión SQLite establecida
- Tabla "casas" con los 3 registros insertados
- Todas las columnas visibles: id, nombre, ubicacion, precio, descripcion, habitaciones, banos, area, disponible, createdAt, updatedAt

### 6. Verificación de Funcionalidad
Se comprobó la persistencia de datos mediante:

- Consultas SQL directas en DBeaver
- Endpoints GET de la API REST
- Logs de TypeORM mostrando las operaciones SQL

**Operaciones CRUD verificadas:**
- ✅ CREATE: Inserción de nuevas casas
- ✅ READ: Consulta de casas con filtros
- ✅ UPDATE: Modificación de registros existentes  
- ✅ DELETE: Eliminación de registros

## Conclusión
Se estableció exitosamente la conexión entre NestJS y SQLite usando TypeORM, permitiendo operaciones CRUD completas. La integración con DBeaver facilitó la visualización y manipulación directa de datos, agilizando el desarrollo.

**Logros alcanzados:**
- Configuración automática de esquemas mediante `synchronize: true`
- Persistencia de datos en archivo `db.sqlite`
- Interfaz gráfica para administración de base de datos
- API REST completamente funcional con validaciones
- Documentación automática con Swagger

## Bibliografía
- TypeORM Documentation: https://typeorm.io
- DBeaver Official Site: https://dbeaver.io
- NestJS Documentation: https://docs.nestjs.com
