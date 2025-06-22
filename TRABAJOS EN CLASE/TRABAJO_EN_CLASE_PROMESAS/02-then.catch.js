const fs = require('fs');
const archivo = __dirname + '/a.txt';

// Función para leer el archivo
function leerArchivo(ruta) {
    return new Promise((resolve, reject) => {
        fs.readFile(ruta, 'utf-8', (err, data) => {
            if (err) {
                reject(`Error al leer el archivo: ${err}`);
            } else {
                resolve(data);
            }
        });
    });
}

// Función para escribir el archivo
function escribirArchivo(ruta, contenidoAnterior) {
    const fechaActual = new Date().toString();
    const contenidoFinal = `${contenidoAnterior} ${fechaActual}`;
    
    return new Promise((resolve, reject) => {
        fs.writeFile(ruta, contenidoFinal, (err) => {
            if (err) {
                reject(`Error al escribir en el archivo: ${err}`);
            } else {
                resolve('Archivo escrito exitosamente.');
            }
        });
    });
}

// Ruta del archivo
const rutaArchivo = './a.txt';

// Usar las funciones con then/catch
leerArchivo(rutaArchivo)
    .then(contenido => {
        console.log('Contenido original:', contenido);
        return escribirArchivo(rutaArchivo, contenido);
    })
    .then(mensaje => {
        console.log(mensaje);
        return leerArchivo(rutaArchivo);
    })
    .then(contenidoFinal => {
        console.log('Contenido final:', contenidoFinal);
    })
    .catch(error => {
        console.error('Hubo un error:', error);
    });