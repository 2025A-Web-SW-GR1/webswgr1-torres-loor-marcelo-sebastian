# 📸 GUÍA DE CAPTURAS PARA EL INFORME DE LABORATORIO

## 🎯 **INFORME: Conexión a Base de Datos SQLite con TypeORM y DBeaver**

---

## 📋 **CAPTURAS REQUERIDAS Y DÓNDE TOMARLAS**

### **📂 CAPTURA 1: "Estructura de archivos del proyecto"**

**📍 DÓNDE TOMAR LA CAPTURA:**
- En **VS Code Explorer** (panel izquierdo)
- Expande todas las carpetas para mostrar:

```
📁 WEB/
├── 📁 .vscode/
├── 📁 src/
│   ├── 📁 casa/
│   │   ├── 📁 dto/
│   │   │   ├── 📄 create-casa.dto.ts
│   │   │   └── 📄 buscar-casa.dto.ts
│   │   ├── 📁 entities/
│   │   │   └── 📄 casa.entity.ts
│   │   ├── 📄 casa.controller.ts
│   │   ├── 📄 casa.service.ts
│   │   └── 📄 casa.module.ts
│   ├── 📄 app.module.ts
│   ├── 📄 database.providers.ts  ⭐ (IMPORTANTE)
│   └── 📄 main.ts
├── 📄 db.sqlite  ⭐ (ARCHIVO DE BASE DE DATOS)
├── 📄 package.json
└── 📄 tsconfig.json
```

**🎯 QUÉ DEBE MOSTRARSE:**
- El archivo `database.providers.ts` creado ✅
- El archivo `db.sqlite` generado ✅
- La estructura completa del módulo Casa ✅

---

### **🗄️ CAPTURA 2: "Tabla en DBeaver con registros insertados"**

**📍 DÓNDE TOMAR LA CAPTURA:**

#### **PASO A: Descargar e instalar DBeaver**
1. Ir a: https://dbeaver.io/download/
2. Descargar DBeaver Community Edition
3. Instalar normalmente

#### **PASO B: Configurar conexión SQLite en DBeaver**
1. Abrir DBeaver
2. Click en **"Nueva Conexión"** (ícono +)
3. Seleccionar **"SQLite"**
4. En **"Path"** navegar a: `d:\Archivos\Nube\Escritorio\WEB\db.sqlite`
5. Click **"Test Connection"** → Debe aparecer "Connected"
6. Click **"Finish"**

#### **PASO C: Visualizar la tabla con datos**
1. En DBeaver, expandir la conexión SQLite
2. Expandir **"Schemas"** → **"main"** → **"Tables"**
3. Hacer doble clic en la tabla **"casas"**
4. Ir a la pestaña **"Data"**

**🎯 QUÉ DEBE MOSTRARSE EN LA CAPTURA:**
```
📊 TABLA: casas
┌────┬─────────────────┬─────────────────┬─────────┬──────────────┬──────────────┬───────┬───────┬────────────┬─────────────┬─────────────┐
│ id │ nombre          │ ubicacion       │ precio  │ descripcion  │ habitaciones │ banos │ area  │ disponible │ createdAt   │ updatedAt   │
├────┼─────────────────┼─────────────────┼─────────┼──────────────┼──────────────┼───────┼───────┼────────────┼─────────────┼─────────────┤
│ 1  │ Casa Moderna    │ Ciudad de Mexico│ 250000  │ Casa amplia  │ 3            │ 2     │ null  │ true       │ 2025-08-02  │ 2025-08-02  │
│ 2  │ Casa Colonial   │ Guadalajara     │ 180000  │ Casa tradic. │ 2            │ 1     │ null  │ true       │ 2025-08-02  │ 2025-08-02  │
│ 3  │ Casa Minimalista│ Monterrey       │ 320000  │ Casa de dis. │ 4            │ 3     │ 150.5 │ true       │ 2025-08-02  │ 2025-08-02  │
└────┴─────────────────┴─────────────────┴─────────┴──────────────┴──────────────┴───────┴───────┴────────────┴─────────────┴─────────────┘
```

**📸 ELEMENTOS IMPORTANTES EN LA CAPTURA:**
- ✅ Mostrar la ventana de DBeaver completa
- ✅ Panel izquierdo con la estructura de la base de datos
- ✅ Tabla "casas" seleccionada
- ✅ Pestaña "Data" activa
- ✅ Los 3 registros insertados visibles
- ✅ Todas las columnas de la tabla (id, nombre, ubicacion, precio, etc.)

---

## 🔧 **CAPTURAS ADICIONALES OPCIONALES**

### **📱 CAPTURA 3: "Postman - Prueba de API funcionando"**
**Ubicación:** En Postman
- Mostrar un GET exitoso: `GET http://localhost:3001/api/casa/todas`
- Respuesta con los 3 registros

### **🌐 CAPTURA 4: "Swagger UI - Documentación de la API"**
**Ubicación:** Navegador en `http://localhost:3001/api/docs`
- Mostrar todos los endpoints documentados

### **💻 CAPTURA 5: "Terminal - Logs de TypeORM"**
**Ubicación:** Terminal de VS Code
- Mostrar los logs SQL de TypeORM creando la tabla

---

## ✅ **CHECKLIST ANTES DE TOMAR LAS CAPTURAS**

### **Para Captura 1 (Estructura de archivos):**
- [ ] VS Code abierto en el proyecto WEB
- [ ] Explorer expandido completamente
- [ ] Archivo `database.providers.ts` visible
- [ ] Archivo `db.sqlite` visible en raíz
- [ ] Carpeta `src/casa/` expandida con todos sus archivos

### **Para Captura 2 (DBeaver con datos):**
- [ ] DBeaver instalado y funcionando
- [ ] Conexión SQLite configurada correctamente
- [ ] Tabla "casas" abierta en pestaña "Data"
- [ ] Los 3 registros de prueba visibles
- [ ] Todas las columnas visibles (puede requerir scroll horizontal)

---

## 🎯 **DATOS INSERTADOS PARA VERIFICAR**

**Ya tienes estos 3 registros en tu base de datos:**

1. **Casa Moderna** - Ciudad de México - $250,000 - 3 hab, 2 baños
2. **Casa Colonial** - Guadalajara - $180,000 - 2 hab, 1 baño  
3. **Casa Minimalista** - Monterrey - $320,000 - 4 hab, 3 baños, 150.5 m²

---

## 🚀 **¡LISTO PARA LAS CAPTURAS!**

1. ✅ **Estructura configurada**: database.providers.ts creado
2. ✅ **Base de datos**: db.sqlite generado con tabla "casas"
3. ✅ **Datos de prueba**: 3 registros insertados
4. ✅ **Servidor funcionando**: http://localhost:3001

**¡Ahora puedes tomar las capturas siguiendo esta guía!** 📸
