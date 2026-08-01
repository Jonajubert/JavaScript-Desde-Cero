/*
========================================
Archivo: script.js
========================================
*/

// Buscamos el botón utilizando su identificador.
const botonSaludar = document.querySelector("#botonSaludar");

// Escuchamos el evento clic del botón.
botonSaludar.addEventListener("click", saludar);

// Esta función se ejecuta cuando el usuario hace clic.
function saludar() {
    alert("¡Hola! JavaScript está conectado correctamente.");
}
