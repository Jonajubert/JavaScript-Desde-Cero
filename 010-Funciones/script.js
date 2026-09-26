// ==========================================
// JAVASCRIPT DESDE CERO
// Capítulo 010 - Funciones
// ==========================================


// Función simple.
function mostrarMensaje() {
    console.log("¡Bienvenido!");
}

mostrarMensaje();


// Función con un parámetro.
function saludar(nombre) {
    return `Hola, ${nombre}!`;
}

console.log(saludar("Jonatan"));
console.log(saludar("Mundo"));


// Función con dos parámetros.
function sumar(a, b) {
    return a + b;
}

let resultado = sumar(5, 3);

console.log(`Resultado: ${resultado}`);
