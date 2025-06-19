const fs = require('fs');

// Leer archivo
fs.readFile('./a.txt', 'utf-8', (errorLectura, contenido) => {
    if (errorLectura) {
        console.error('ERROR lectura:', errorLectura);
    } else {
        console.log('Contenido leído:', contenido);
    }
});

// Escribir archivo
fs.writeFile('./a.txt', 'Hola! ' + new Date().toString(), 'utf-8', (errorEscritura) => {
    if (errorEscritura) {
        console.error('ERROR escritura:', errorEscritura);
    } else {
        console.log('Archivo escrito correctamente.');
    }
});