const fs = require('fs');

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
                resolve('Archivo actualizado correctamente.');
            }
        });
    });
}

// Ruta del archivo
const archivo = __dirname + '/a.txt';

// Función principal async
async function actualizarArchivo() {
    try {
        const contenidoInicial = await leerArchivo(archivo);
        console.log('Contenido original:', contenidoInicial);

        const mensaje = await escribirArchivo(archivo, contenidoInicial);
        console.log(mensaje);

        const contenidoFinal = await leerArchivo(archivo);
        console.log('Contenido final:', contenidoFinal);
    } catch (error) {
        console.error('Ocurrió un error:', error);
    }
}

// Ejecutar la función
actualizarArchivo();