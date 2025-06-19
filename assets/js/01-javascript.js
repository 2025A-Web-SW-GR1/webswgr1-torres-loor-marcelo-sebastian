// === VARIABLES MUTABLES E INMUTABLES ===
// Variable mutable (se puede reasignar)
let nombre = "Marcelo";
console.log("Nombre original:", nombre);
nombre = "Sebastián"; // Reasignación permitida
console.log("Nombre actualizado:", nombre);
// Variable inmutable (no se puede reasignar)
const cedula = 1727332247;
console.log("Cédula:", cedula);
// === TIPOS DE DATOS ===
// Boolean
console.log("Booleano true:", true);
console.log("Booleano false:", false);
// Number
console.log("Número entero:", 73);
console.log("Número decimal:", 3.141595);
// String
console.log("Cadena de texto:", "Hola Mundo");
// Array
console.log("Array:", [1, 2, 3]);
// Object
console.log("Objeto:", { nombre: "Marcelo", edad: 22 });
// Null
console.log("Null:", null);
// Undefined
console.log("Undefined:", undefined);

// Valores trutty
console.log(Boolean(1)); // true
console.log(Boolean("Hola")); // true

// Valores falsy
console.log(Boolean(0)); // false
console.log(Boolean("")); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean([])); // true (arrays vacíos son trutty)
console.log(Boolean({})); // true (objetos vacíos son trutty)