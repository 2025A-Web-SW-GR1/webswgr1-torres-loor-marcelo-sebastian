// Definir dos objetos
interface Persona {
    nombre: string;
    edad: number;
}
const persona1: Persona = {
    nombre: "Marcelo",
    edad: 22,
};
const persona2: Persona = {
    nombre: "Sebastián",
    edad: 23,
};
// Combinar objetos
const combinado = { ...persona1, ...persona2 };
console.log("Combinación de objetos:", combinado);
// Destructuración de objetos
const { nombre, edad } = persona1;
console.log("Destructuración - Nombre:", nombre, "Edad:", edad);
// Destructuración de arreglos
const colores = ["rojo", "verde", "azul"];
const [primero, segundo] = colores;
console.log("Destructuración - Colores:", primero, segundo);
// Funciones con tipos
function saludar(nombre: string): void {
    console.log(`¡Hola, ${nombre}!`);
}
saludar("Marcelo");
// Arrow function sin parámetros
const mensaje = (): void => {
    console.log("Función arrow sin parámetros");
};
mensaje();
// Retorno undefined
function noHayRetorno(): undefined {
    console.log("Esta función retorna undefined");
    return;
}
noHayRetorno();