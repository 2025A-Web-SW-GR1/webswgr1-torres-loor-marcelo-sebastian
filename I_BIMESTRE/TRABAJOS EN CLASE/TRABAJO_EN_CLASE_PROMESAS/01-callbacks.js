const fs = require('fs');
const archivo = __dirname + '/a.txt';

// Leer el archivo
fs.readFile(archivo, 'utf-8', (errorLectura, contenidoOriginal) => {
    if (errorLectura) {
        console.error('Error al leer el archivo:', errorLectura);
        return;
    }

    console.log('Contenido original:', contenidoOriginal);

    // Agregar la fecha actual
    const nuevaFecha = new Date().toString();
    const nuevoContenido = `${contenidoOriginal} ${nuevaFecha}`;

    // Escribir el archivo con la fecha
    fs.writeFile(archivo, nuevoContenido, (errorEscritura) => {
        if (errorEscritura) {
            console.error('Error al escribir el archivo:', errorEscritura);
            return;
        }

        console.log('Archivo actualizado correctamente.');

        // Leer de nuevo para confirmar
        fs.readFile(archivo, 'utf-8', (errorFinal, contenidoFinal) => {
            if (errorFinal) {
                console.error('Error al leer el archivo actualizado:', errorFinal);
                return;
            }

            console.log('Contenido final:', contenidoFinal);
        });
    });
});
