var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var persona1 = {
    nombre: "Marcelo",
    edad: 22,
};
var persona2 = {
    nombre: "Sebastián",
    edad: 23,
};
// Combinar objetos
var combinado = __assign(__assign({}, persona1), persona2);
console.log("Combinación de objetos:", combinado);
// Destructuración de objetos
var nombre = persona1.nombre, edad = persona1.edad;
console.log("Destructuración - Nombre:", nombre, "Edad:", edad);
// Destructuración de arreglos
var colores = ["rojo", "verde", "azul"];
var primero = colores[0], segundo = colores[1];
console.log("Destructuración - Colores:", primero, segundo);
// Funciones con tipos
function saludar(nombre) {
    console.log("\u00A1Hola, ".concat(nombre, "!"));
}
saludar("Marcelo");
// Arrow function sin parámetros
var mensaje = function () {
    console.log("Función arrow sin parámetros");
};
mensaje();
// Retorno undefined
function noHayRetorno() {
    console.log("Esta función retorna undefined");
    return;
}
noHayRetorno();
