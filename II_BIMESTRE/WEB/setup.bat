@echo off
echo 🚀 Configurando proyecto Casa API...

REM Instalar dependencias de NestJS
echo 📦 Instalando dependencias...
call npm install @nestjs/core @nestjs/common @nestjs/platform-express
call npm install @nestjs/typeorm typeorm mysql2
call npm install class-validator class-transformer
call npm install @nestjs/swagger swagger-ui-express
call npm install reflect-metadata rxjs

REM Instalar dependencias de desarrollo
echo 🛠️ Instalando dependencias de desarrollo...
call npm install -D @nestjs/cli @nestjs/schematics @nestjs/testing
call npm install -D typescript ts-node ts-loader
call npm install -D @types/node @types/express
call npm install -D jest @types/jest ts-jest supertest @types/supertest
call npm install -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
call npm install -D prettier eslint-config-prettier eslint-plugin-prettier

echo ✅ Instalación completada!
echo.
echo 📝 Próximos pasos:
echo 1. Configura tu base de datos MySQL en src/app.module.ts
echo 2. Crea la base de datos: CREATE DATABASE casa_db;
echo 3. Ejecuta: npm run start:dev
echo 4. Visita: http://localhost:3000/api/docs (Swagger)
echo.
echo 🔧 Comandos útiles:
echo npm run start:dev  - Ejecutar en modo desarrollo
echo npm run build      - Construir para producción
echo npm run test       - Ejecutar pruebas

pause
