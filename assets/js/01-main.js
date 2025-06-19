// Variables por valor (primitivas)
let a = 10;
let b = a;
b = 20;
console.log("Variables por valor:", { a, b }); // a=10, b=20
// Variables por referencia (objetos)
let obj1 = { nombre: "Marcelo" };
let obj2 = obj1;
obj2.nombre = "Sebastián";
console.log("Variables por referencia:", obj1); // { nombre: "Ariel" }
// Objeto marcelo
const marcelo = {
    nombre: "Marcelo",
    edad: 22,
    profesion: "Programador",
};
console.log("Acceso al objeto Marcelo:", marcelo);
// Función para mostrar detalles
function mostrarDetalles(persona) {
    console.log(`${persona.nombre}, ${persona.edad} años`);
}
mostrarDetalles(marcelo);
// Arreglo de nombres
const nombres = ["Marcelo", "Sebastián", "Rotmy"];
// Agregar elemento
nombres.push("Lorena");
console.log("Arreglo después de push:", nombres);
// Eliminar último elemento
nombres.pop();
console.log("Arreglo después de pop:", nombres);
// Mapear arreglo
const nombresMayuscula = nombres.map(nombre => nombre.toUpperCase());
console.log("Arreglo mapeado:", nombresMayuscula);

console.log("null === null:", null === null); // true
console.log("undefined === undefined:", undefined === undefined); // true
console.log("null === undefined:", null === undefined); // false