# 🧪 GUÍA COMPLETA DE PRUEBAS EN POSTMAN

## 🚀 **SERVIDOR FUNCIONANDO**
- **URL Base**: `http://localhost:3001`
- **Documentación Swagger**: `http://localhost:3001/api/docs`
- **Base de datos**: SQLite (configurada automáticamente)

---

## 📋 **PRUEBAS REQUERIDAS**

### 🔍 **1. PRUEBA GET - Búsqueda con filtros (200 OK)**

**URL**: `GET http://localhost:3001/api/casa?nombre=Ejemplo`

**Headers**:
```
Content-Type: application/json
```

**Respuesta esperada**: `200 OK`
```json
{
  "data": [],
  "total": 0,
  "page": 1,
  "limit": 10,
  "totalPages": 0
}
```

---

### ✅ **2. PRUEBA POST - Datos válidos (201 Created)**

**URL**: `POST http://localhost:3001/api/casa`

**Headers**:
```
Content-Type: application/json
```

**Body**:
```json
{
  "nombre": "Casa Ejemplo",
  "ubicacion": "Ciudad de México, CDMX",
  "precio": 250000,
  "habitaciones": 3,
  "banos": 2,
  "descripcion": "Casa amplia con jardín",
  "area": 120.5,
  "disponible": true
}
```

**Respuesta esperada**: `201 Created`
```json
{
  "nombre": "Casa Ejemplo",
  "ubicacion": "Ciudad de México, CDMX",
  "precio": 250000,
  "habitaciones": 3,
  "banos": 2,
  "descripcion": "Casa amplia con jardín",
  "area": 120.5,
  "disponible": true,
  "id": 1,
  "createdAt": "2025-08-02T22:22:21.000Z",
  "updatedAt": "2025-08-02T22:22:21.000Z"
}
```

---

### ❌ **3. PRUEBA POST - Datos inválidos (400 Bad Request)**

**URL**: `POST http://localhost:3001/api/casa`

**Headers**:
```
Content-Type: application/json
```

**Body (datos inválidos)**:
```json
{
  "nombre": "",
  "ubicacion": "",
  "precio": -100,
  "habitaciones": 0,
  "banos": 0
}
```

**Respuesta esperada**: `400 Bad Request`
```json
{
  "message": [
    "El nombre es obligatorio",
    "La ubicación es obligatoria",
    "El precio debe ser mayor o igual a 0",
    "Debe tener al menos 1 habitación",
    "Debe tener al menos 1 baño"
  ],
  "error": "Bad Request",
  "statusCode": 400
}
```

---

## 🔄 **PRUEBAS ADICIONALES DISPONIBLES**

### 4. **Búsqueda después de crear datos**
**URL**: `GET http://localhost:3001/api/casa?nombre=Ejemplo`
*(Después de crear una casa con "Casa Ejemplo")*

### 5. **Obtener todas las casas**
**URL**: `GET http://localhost:3001/api/casa/todas`

### 6. **Búsqueda por nombre simple**
**URL**: `GET http://localhost:3001/api/casa/buscar-por-nombre?nombre=Ejemplo`

### 7. **Filtros múltiples**
**URL**: `GET http://localhost:3001/api/casa?ubicacion=CDMX&precioMin=100000&precioMax=500000`

### 8. **Obtener casa por ID**
**URL**: `GET http://localhost:3001/api/casa/1`

---

## 📊 **SECUENCIA DE PRUEBAS RECOMENDADA**

1. **Verificar servidor**: `GET http://localhost:3001/api/casa` (debe devolver lista vacía)
2. **Crear casa válida**: `POST` con datos correctos → `201 Created`
3. **Buscar casa creada**: `GET http://localhost:3001/api/casa?nombre=Ejemplo` → `200 OK` con resultados
4. **Intentar crear casa inválida**: `POST` con datos incorrectos → `400 Bad Request`
5. **Verificar filtros**: Probar diferentes filtros de búsqueda

---

## 🎯 **VALIDACIONES QUE SE COMPRUEBAN**

### ✅ **Validaciones implementadas**:
- `nombre`: No vacío, tipo string
- `ubicacion`: No vacío, tipo string  
- `precio`: Número >= 0
- `habitaciones`: Entero >= 1
- `banos`: Entero >= 1
- `area`: Número opcional >= 0
- `descripcion`: String opcional
- `disponible`: Boolean opcional

### 🔍 **Filtros implementados**:
- Búsqueda por nombre (LIKE `%nombre%`)
- Búsqueda por ubicación (LIKE `%ubicacion%`)
- Filtro por rango de precios
- Filtro por número mínimo de habitaciones/baños
- Filtro por disponibilidad
- Paginación (page, limit)

---

## 🚀 **¡LISTO PARA PROBAR!**
Tu API está completamente configurada y funcionando. Abre Postman y comienza con las pruebas siguiendo esta guía.
