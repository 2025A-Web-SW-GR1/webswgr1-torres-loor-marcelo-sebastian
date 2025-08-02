function promesaEsPar(numero) {
    return new Promise((resolve, reject) => {
        if (numero % 2 === 0) {
            resolve(numero); // Resuelve si es par
        } else {
            reject('No es par!'); // Rechaza si no es par
        }
    });
}

// Uso de then/catch
promesaEsPar(4)
    .then((respuestaEsPar) => {
        console.log('Número es par:', respuestaEsPar);
    })
    .catch((error) => {
        console.error('Error:', error);
    });

function leerArchivoPromesa(nombreArchivo) {
    return new Promise((resolve, reject) => {
        fs.readFile(nombreArchivo, 'utf-8', (errorLectura, contenido) => {
            if (errorLectura) {
                reject(errorLectura);
            } else {
                resolve(contenido);
            }
        });
    });
}

async function correrLogicaPromesas() {
    try {
        const respuestaArchivo1 = await leerArchivoPromesa('./a.txt');
        console.log('Respuesta archivo 1:', respuestaArchivo1);

        const respuestaArchivo2 = await leerArchivoPromesa('./a.txt');
        console.log('Respuesta archivo 2:', respuestaArchivo2);

        // Intentar leer un archivo inexistente
        const respuestaArchivo3 = await leerArchivoPromesa('./ai23.txt');
        console.log('Respuesta archivo 3:', respuestaArchivo3);
    } catch (error) {
        console.error('ERROR:', error);
    }
}

correrLogicaPromesas();