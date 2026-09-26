# JavaScript Desde Cero

## Capítulo 010 - Funciones

Una función permite agrupar instrucciones para poder ejecutarlas cuando las necesitemos.

En lugar de repetir código, podemos definir una función y reutilizarla.

---

## Primera función

La estructura básica es:

```javascript
function saludar() {
    console.log("¡Hola!");
}
```

Aquí solamente estamos definiendo la función.

Para ejecutarla debemos llamarla:

```javascript
saludar();
```

Resultado:

```text
¡Hola!
```

---

## Partes de una función

Analicemos:

```javascript
function saludar() {
    console.log("¡Hola!");
}
```

Tenemos:

```text
function
   ↓
Palabra clave

saludar
   ↓
Nombre de la función

()
↓
Parámetros

{ }
 ↓
Código que ejecutará
```

---

## Parámetros

Las funciones pueden recibir información.

```javascript
function saludar(nombre) {
    console.log(`Hola, ${nombre}!`);
}
```

Ahora podemos utilizar:

```javascript
saludar("Jonatan");
```

Resultado:

```text
Hola, Jonatan!
```

También:

```javascript
saludar("Ana");
```

Resultado:

```text
Hola, Ana!
```

La función es la misma.

Lo que cambia es el valor recibido mediante `nombre`.

---

## Varios parámetros

Podemos recibir más de un valor:

```javascript
function sumar(a, b) {
    console.log(a + b);
}
```

Y llamar:

```javascript
sumar(5, 3);
```

Resultado:

```text
8
```

En este caso:

```text
a = 5
b = 3
```

---

## return

Una función también puede devolver un resultado.

```javascript
function sumar(a, b) {
    return a + b;
}
```

Podemos guardar ese resultado:

```javascript
let resultado = sumar(5, 3);

console.log(resultado);
```

Resultado:

```text
8
```

La diferencia conceptual es importante.

Esto:

```javascript
console.log(a + b);
```

muestra un resultado.

Mientras que:

```javascript
return a + b;
```

devuelve un resultado para que pueda ser utilizado por otra parte del programa.

---

## Reutilización

Supongamos que necesitamos realizar varias sumas:

```javascript
function sumar(a, b) {
    return a + b;
}

console.log(sumar(10, 5));
console.log(sumar(20, 8));
console.log(sumar(100, 50));
```

Utilizamos la misma lógica varias veces sin volver a escribirla.

---

## ¿Por qué usar funciones?

Nos permiten crear código:

```text
Más organizado
Más reutilizable
Más fácil de leer
Más fácil de mantener
```

En lugar de construir un programa enorme con todas las instrucciones juntas, podemos dividirlo en pequeñas tareas.

Por ejemplo:

```text
Programa

├── iniciarSesion()
├── calcularTotal()
├── mostrarProductos()
└── cerrarSesion()
```

Cada función tiene una responsabilidad concreta.

---

## Funciones sin parámetros

No todas necesitan recibir información.

```javascript
function mostrarMensaje() {
    console.log("¡Bienvenido!");
}

mostrarMensaje();
```

---

## Funciones con parámetros

```javascript
function saludar(nombre) {
    console.log(`Hola, ${nombre}!`);
}

saludar("Jonatan");
```

---

## Funciones que retornan valores

```javascript
function multiplicar(a, b) {
    return a * b;
}

let resultado = multiplicar(4, 5);

console.log(resultado);
```

Resultado:

```text
20
```

---

## Curiosidad

El concepto de función no es exclusivo de JavaScript.

Encontraremos funciones o conceptos equivalentes en prácticamente todos los lenguajes que estamos estudiando:

```text
Python
C#
JavaScript
SQL
```

La sintaxis cambia, pero la idea de encapsular y reutilizar lógica aparece constantemente en programación.

---

## Ejercicio

Crear una función:

```javascript
function saludar(nombre) {
    // código
}
```

Debe recibir un nombre y mostrar:

```text
Hola, Jonatan!
```

Después probarla con diferentes nombres.

---

## Desafío

Crear:

```javascript
function calcularPromedio(a, b, c) {
    // código
}
```

La función debe:

1. Recibir tres números.
2. Calcular el promedio.
3. Devolver el resultado con `return`.

Ejemplo:

```javascript
let promedio = calcularPromedio(8, 9, 10);

console.log(promedio);
```

---

## Resumen

Definir una función:

```javascript
function saludar() {
    console.log("Hola");
}
```

Ejecutarla:

```javascript
saludar();
```

Recibir información:

```javascript
function saludar(nombre) {
    console.log(nombre);
}
```

Devolver información:

```javascript
function sumar(a, b) {
    return a + b;
}
```

La idea fundamental es:

```text
FUNCIÓN
   ↓
Agrupar lógica
   ↓
Reutilizar código
```

A partir de este punto, las funciones van a convertirse en una herramienta central para construir programas JavaScript más organizados.
