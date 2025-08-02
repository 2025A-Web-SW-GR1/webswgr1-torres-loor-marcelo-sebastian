# Trabajo en Clase - Promesas - Marcelo Torres L.

## Descripción
Este trabajo tiene como objetivo practicar el manejo de archivos de texto con JavaScript utilizando tres enfoques diferentes:

- Callbacks
- Promesas con `.then()` y `.catch()`
- Promesas con `async/await`

El proceso consiste en leer un archivo de texto (`a.txt`), agregarle la fecha actual al final del contenido y guardar los cambios, mostrando los resultados por consola.

---

## Objetivos

- Leer el archivo `a.txt`.
- Concatenar la fecha actual (usando `Date().toString()`) al contenido existente.
- Escribir nuevamente el archivo con el nuevo contenido.
- Mostrar los resultados en la consola.
- Implementar el mismo funcionamiento con tres versiones distintas:
  - Con callbacks
  - Con promesas encadenadas
  - Con async/await



## Instrucciones de Uso

### 1. Asegúrate de tener Node.js instalado
Puedes descargarlo desde: https://nodejs.org/ 

### 2. Instalar dependencias (no aplica, no se usan paquetes externos)

### 3. Ejecutar cada archivo individualmente

```bash
node 01-callbacks.js
node 02-then.catch.js
node 03-async-await-function.js
```

Cada script realizará las siguientes acciones:

- Leerá el contenido actual de a.txt
- Agregará la fecha actual al final
- Sobrescribirá el archivo
- Leerá nuevamente el archivo y mostrará el contenido final en consola

## Resultados Esperados
El archivo a.txt será modificado tras ejecutar cualquiera de los scripts.
En la consola deberías ver:
- El contenido original
- Un mensaje de confirmación de escritura
- El contenido final del archivo

## Autor
Marcelo Torres - Estudiante de Ingeniería en Sistemas

Escuela Politécnica Nacional - Quito, Ecuador

