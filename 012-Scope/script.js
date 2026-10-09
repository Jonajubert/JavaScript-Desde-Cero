// ==========================================
// JAVASCRIPT DESDE CERO
// Capítulo 012 - Scope
// ==========================================


// ALCANCE GLOBAL
// En este script clásico, lenguaje pertenece al ámbito global.
const lenguaje = "JavaScript";


// ALCANCE DE FUNCIÓN
function mostrar() {
    const mensaje = "Hola";

    // Podemos acceder a una variable del ámbito externo.
    console.log(lenguaje);

    // También podemos acceder a la variable local.
    console.log(mensaje);
}

mostrar();


// ALCANCE DE BLOQUE
if (true) {
    let numero = 10;

    // numero está disponible dentro de este bloque.
    console.log(numero);
}


// ACCESOS FUERA DEL ALCANCE
// Descomentá una línea por vez y recargá la página.

// mensaje pertenece a la función mostrar().
// console.log(mensaje); // ReferenceError

// numero pertenece al bloque if.
// console.log(numero); // ReferenceError
