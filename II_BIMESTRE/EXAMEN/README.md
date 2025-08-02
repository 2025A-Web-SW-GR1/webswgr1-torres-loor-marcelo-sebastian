# 📋 EXAMEN - Desarrollo Web II
## Sistema de Casas con Autenticación y Renderizado del Servidor

### 👨‍🎓 **Información del Estudiante**
- **Nombre**: Marcelo Sebastian Torres Loor
- **Materia**: Desarrollo Web II - Software de Gestión
- **Fecha**: 03 de Agosto de 2025
- **Tipo**: Examen Práctico

---

## 🎯 **Consigna del Examen**

**"Mostrar los datos de la entidad Casa usando renderizado del servidor, con una interfaz de login para el usuario Marcelo con contraseña admin."**

### 📋 **Requisitos Específicos:**
1. ✅ **Entidad Casa** con campos: id, nombre, valor, imagenURL, etc.
2. ✅ **Sistema de autenticación** con login para usuario `marcelo` y contraseña `admin`
3. ✅ **Tabla HTML** que muestre los datos de las casas
4. ✅ **Renderizado del servidor** usando EJS como motor de plantillas
5. ✅ **Protección de rutas** - solo usuarios autenticados pueden ver la tabla
6. ✅ **Base de datos** SQLite con TypeORM para persistencia

---

## 🚀 **Cómo Iniciar la Aplicación**

### **Paso 1: Instalar Dependencias**
```bash
npm install
```

### **Paso 2: Iniciar el Servidor en Modo Desarrollo**
```bash
npm run start:dev
```

### **Paso 3: Acceder a la Aplicación**
1. Abrir el navegador en: **http://localhost:3000**
2. Se redirigirá automáticamente al formulario de login

### **Paso 4: Iniciar Sesión**
- **Usuario**: `marcelo`
- **Contraseña**: `admin`

### **Paso 5: Ver la Tabla de Casas**
Después del login exitoso, se mostrará automáticamente la tabla con los datos de las casas usando **renderizado del servidor**.

---

## 🔐 **Credenciales de Acceso**

### **Usuario del Examen:**
- **Username**: `marcelo`
- **Password**: `admin`

> ⚠️ **Nota**: Solo estas credenciales específicas permiten el acceso al sistema según los requisitos del examen.

---

## 🏗️ **Arquitectura de la Aplicación**

### **Tecnologías Utilizadas:**
- **Backend**: NestJS con TypeScript
- **Base de Datos**: SQLite + TypeORM
- **Motor de Plantillas**: EJS (renderizado del servidor)
- **Sesiones**: express-session
- **Estilos**: Bootstrap 5 + FontAwesome
- **Validación**: class-validator

### **Estructura del Proyecto:**

```text
src/
├── casa/                   # Módulo de Casas
│   ├── casa.entity.ts     # Entidad Casa con decoradores TypeORM
│   ├── casa.service.ts    # Lógica de negocio y datos de ejemplo
│   ├── casa.controller.ts # Controlador para rutas de casas
│   └── casa.module.ts     # Módulo Casa
├── auth/                  # Módulo de Autenticación
│   ├── auth.controller.ts # Controlador para login/logout
│   └── auth.module.ts     # Módulo Auth
├── data-init/            # Módulo de Inicialización
│   ├── data-init.service.ts # Servicio para crear datos de ejemplo
│   └── data-init.module.ts  # Módulo DataInit
├── app.module.ts         # Módulo principal con configuración TypeORM
├── app.controller.ts     # Controlador principal
├── app.service.ts        # Servicio principal
└── main.ts              # Punto de entrada con configuración EJS

views/                    # Plantillas EJS
├── login.ejs            # Formulario de login responsive
└── casas-tabla.ejs      # Tabla de casas con renderizado servidor
```

---

## 📊 **Funcionalidades Implementadas**

### **Sistema de Autenticación:**
- ✅ Formulario de login responsive con Bootstrap
- ✅ Validación específica: `marcelo/admin`
- ✅ Gestión de sesiones con express-session
- ✅ Protección de rutas (middleware de autenticación)
- ✅ Redirección automática después del login
- ✅ Funcionalidad de logout con destrucción de sesión

### **Renderizado del Servidor:**
- ✅ **Motor EJS** configurado en NestJS
- ✅ **Tabla HTML** generada dinámicamente
- ✅ **Datos de la entidad Casa** renderizados del servidor
- ✅ **Plantillas responsivas** con Bootstrap 5

### **Gestión de Casas:**
- ✅ Entidad Casa con TypeORM y decoradores
- ✅ Base de datos SQLite con 5 casas de ejemplo
- ✅ Servicio para consultas y operaciones CRUD
- ✅ Controlador para manejo de rutas RESTful

### **Interfaz de Usuario:**
- ✅ Diseño moderno y completamente responsive
- ✅ Tabla con imágenes, estadísticas y efectos visuales
- ✅ Iconos FontAwesome y gradientes CSS
- ✅ Resaltado especial para el usuario del examen

---

## 🗃️ **Base de Datos y Datos**

### **Configuración:**
- **Tipo**: SQLite (archivo: `examen.sqlite`)
- **ORM**: TypeORM con sincronización automática
- **Inicialización**: Datos de ejemplo creados automáticamente al iniciar

### **Datos de Ejemplo Precargados:**

| ID | Nombre | Valor | Usuario | URL Imagen |
|----|--------|-------|---------|------------|
| 1 | Casa de Playa | $125,000 | **marcelo** | ✅ Unsplash |
| 2 | Villa Moderna | $380,000 | usuario1 | ✅ Unsplash |
| 3 | Casa Colonial | $220,000 | usuario2 | ✅ Unsplash |
| 4 | Departamento Céntrico | $85,000 | usuario3 | ✅ Unsplash |
| 5 | Casa de Campo | $156,000 | usuario4 | ✅ Unsplash |

**Total del Inventario**: $966,000

---

## 🎨 **Características de las Vistas**

### **Página de Login (login.ejs):**
- Formulario centrado con gradientes modernos
- Validación de campos requeridos
- Mensajes de error informativos y amigables
- Información visible de credenciales del examen
- Auto-focus en campo usuario
- Diseño completamente responsive

### **Tabla de Casas (casas-tabla.ejs):**
- **Estadísticas en tiempo real**: total casas, valor inventario
- **Imágenes de alta calidad** desde Unsplash con fallback
- **Información completa**: ID, imagen, nombre, valor, usuario, URL
- **Resaltado visual** para el usuario del examen (marcelo)
- **Navbar informativa** con datos del usuario y botón logout
- **Footer académico** con información del estudiante
- **Efectos hover** y animaciones CSS suaves

---

## 🛠️ **Scripts Disponibles**

```bash
# Desarrollo
npm run start:dev          # Inicia en modo desarrollo con hot-reload
npm run start:debug        # Inicia en modo debug para depuración

# Producción
npm run build              # Compila TypeScript a JavaScript
npm run start:prod         # Inicia la aplicación compilada

# Calidad de Código
npm run format             # Formatea código con Prettier
npm run lint               # Ejecuta ESLint y corrige errores automáticamente

# Testing
npm run test               # Ejecuta pruebas unitarias
npm run test:watch         # Ejecuta pruebas en modo watch
npm run test:e2e           # Ejecuta pruebas end-to-end
```

---

## ✅ **Verificación del Examen**

### **Checklist de Requisitos Cumplidos:**

#### **Funcionales:**
- [x] **Entidad Casa** implementada con TypeORM
- [x] **Login específico** para usuario `marcelo` con contraseña `admin`
- [x] **Tabla HTML** mostrando datos de casas
- [x] **Renderizado del servidor** con EJS
- [x] **Autenticación** con protección de rutas
- [x] **Base de datos SQLite** funcional

#### **Técnicos:**
- [x] **NestJS** como framework principal
- [x] **TypeScript** en todo el proyecto
- [x] **Sesiones** para mantener autenticación
- [x] **Bootstrap** para interfaz responsive
- [x] **Datos de ejemplo** precargados automáticamente

#### **UX/UI:**
- [x] **Interfaz profesional** y amigable
- [x] **Responsive design** para móviles y desktop
- [x] **Feedback visual** apropiado
- [x] **Navegación intuitiva**

### **Flujo de Verificación:**
1. ✅ Usuario accede a `http://localhost:3000`
2. ✅ Se muestra formulario de login con EJS
3. ✅ Ingresa credenciales: `marcelo` / `admin`
4. ✅ **Sistema valida y crea sesión**
5. ✅ **Se renderiza tabla HTML del servidor** con datos de Casa
6. ✅ Tabla muestra 5 casas con toda la información
7. ✅ Usuario `marcelo` aparece resaltado visualmente
8. ✅ Logout funciona correctamente

---

## 🎓 **Cumplimiento de la Consigna**

### **Consigna Original:**
> *"Mostrar los datos de la entidad casa usando renderizado del servidor, con una interfaz de login para el usuario Marcelo con contraseña admin"*

### **Implementación Realizada:**
- ✅ **Datos de la entidad Casa**: Tabla HTML muestra ID, nombre, valor, imagen, usuario
- ✅ **Renderizado del servidor**: EJS configurado en NestJS genera HTML dinámicamente
- ✅ **Interfaz de login**: Formulario responsive con validación específica
- ✅ **Usuario Marcelo**: Credenciales `marcelo/admin` implementadas
- ✅ **Protección**: Solo usuarios autenticados ven la tabla

### **Valor Agregado Implementado:**
- 🚀 Diseño moderno y profesional
- 🚀 Base de datos real con TypeORM
- 🚀 Sesiones persistentes
- 🚀 Datos de ejemplo realistas
- 🚀 Estadísticas en tiempo real
- 🚀 Código bien estructurado y documentado

---

## 📞 **Troubleshooting**

### **Problemas Comunes:**

**Error: Puerto 3000 ocupado**
```bash
# Cambiar puerto en main.ts o detener proceso existente
npx kill-port 3000
```

**Error: Base de datos bloqueada**
```bash
# Eliminar archivo SQLite y reiniciar
rm examen.sqlite
npm run start:dev
```

**Error: Dependencias faltantes**
```bash
# Reinstalar dependencias
rm -rf node_modules package-lock.json
npm install
```

### **Verificación de Funcionamiento:**
1. ✅ Node.js versión 18+ instalado
2. ✅ Puerto 3000 disponible
3. ✅ Dependencias instaladas correctamente
4. ✅ No hay errores en la consola
5. ✅ Base de datos se crea automáticamente

---

## 🏆 **Conclusión**

**Este proyecto implementa completamente la consigna del examen:**

- ✅ **Renderizado del servidor** con EJS y NestJS
- ✅ **Tabla HTML** con datos reales de la entidad Casa
- ✅ **Sistema de login** específico para Marcelo/admin
- ✅ **Arquitectura profesional** con mejores prácticas
- ✅ **Interfaz moderna** y funcional

**¡El examen está listo para evaluación!** 🎉

---

**Desarrollado por:** Marcelo Sebastian Torres Loor  
**Fecha:** 03 de Agosto de 2025  
**Materia:** Desarrollo Web II - Software de Gestión
│   └── main.ts                   # Punto de entrada
├── views/
│   ├── login.ejs                 # Vista de login
│   ├── casas-tabla.ejs          # Vista tabla de casas
│   └── layout.ejs               # Layout principal
├── public/                       # Archivos estáticos
├── sessions/                     # Almacén de sesiones
└── database.sqlite              # Base de datos
```

## 🚀 Características Técnicas

### Backend
- **Framework:** NestJS
- **Base de Datos:** SQLite con TypeORM
- **Sesiones:** express-session con file-store
- **Renderizado:** EJS (Embedded JavaScript)

### Frontend
- **Estilos:** Bootstrap 5.3.7
- **Responsive Design:** Compatible con dispositivos móviles
- **UX/UI:** Interfaz limpia y profesional

## 📊 Funcionalidades de la Tabla

La tabla HTML muestra:
- **ID:** Identificador único de la casa
- **Nombre:** Nombre descriptivo de la casa
- **Valor:** Precio/valor de la casa
- **Imagen URL:** Enlace a imagen (si existe)
- **Username:** Usuario propietario
- **Archivos:** Estado de archivos asociados

## 🔐 Sistema de Autenticación

- **Credenciales de acceso:**
  - Usuario: `Marcelo`
  - Contraseña: `admin`
- **Seguridad:**
  - Sesiones seguras con cookies httpOnly
  - Validación server-side
  - Redirección automática si no autenticado

## 📝 Instrucciones de Uso

1. **Ejecutar la aplicación:**
   ```bash
   npm install
   npm run start:dev
   ```

2. **Acceder al sistema:**
   - URL: `http://localhost:3000`
   - Login con credenciales: Marcelo/admin

3. **Ver tabla de casas:**
   - Después del login exitoso, se muestra automáticamente la tabla
   - Datos renderizados desde la base de datos

## 🎓 Cumplimiento de Requisitos

✅ **Renderizado del servidor** implementado con EJS  
✅ **Tabla HTML** con datos de la entidad Casa  
✅ **Sistema de login** con usuario Marcelo/admin  
✅ **Base de datos** SQLite con TypeORM  
✅ **Documentación** completa en README.md  
✅ **Arquitectura modular** con NestJS  

## 📚 Tecnologías Utilizadas

- Node.js + NestJS
- TypeScript
- SQLite + TypeORM
- EJS Template Engine
- Express Sessions
- Bootstrap CSS
- HTML5 + CSS3

---

**Nota:** Este examen demuestra la implementación completa de renderizado del servidor para mostrar datos dinámicos en tablas HTML, con sistema de autenticación y gestión de sesiones.
