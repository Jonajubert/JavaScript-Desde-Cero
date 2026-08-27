# JavaScript Desde Cero

## Capítulo 006 - Condicionales

Hasta ahora aprendimos a:

- Crear variables.
- Trabajar con diferentes tipos de datos.
- Utilizar operadores.
- Realizar comparaciones.

Ahora vamos a combinar estos conocimientos para hacer que nuestros programas puedan tomar decisiones.

---

# ¿Qué aprenderás?

En este capítulo veremos:

- Qué es una condición.
- Cómo utilizar `if`.
- Cómo utilizar `else`.
- Cómo utilizar `else if`.
- Cómo combinar condiciones con operadores.
- Cómo funciona el orden de evaluación.

---

# ¿Qué es una condición?

Una condición es una expresión que puede evaluarse como:

```text
true
```

o:

```text
false
```

Por ejemplo:

```javascript
const edad = 20;

console.log(edad >= 18);
```

Resultado:

```text
true
```

Esta comparación puede utilizarse para decidir qué código ejecutar.

---

# if

`if` permite ejecutar código solamente cuando una condición es verdadera.

```javascript
const edad = 20;

if (edad >= 18) {
    console.log("Sos mayor de edad");
}
```

Podemos leerlo como:

```text
SI edad es mayor o igual a 18
              ↓
      ejecutar el código
```

---

# else

¿Qué ocurre si queremos ejecutar algo cuando la condición es falsa?

Utilizamos:

```javascript
else
```

Por ejemplo:

```javascript
const edad = 16;

if (edad >= 18) {
    console.log("Sos mayor de edad");
} else {
    console.log("Sos menor de edad");
}
```

Ahora tenemos dos caminos:

```text
              edad >= 18
                   │
           ┌───────┴───────┐
           │               │
         true            false
           │               │
           ▼               ▼
         if              else
           │               │
     Mayor de edad    Menor de edad
```

---

# else if

Cuando necesitamos evaluar más de dos posibilidades podemos utilizar:

```javascript
else if
```

Por ejemplo:

```javascript
const nota = 8;

if (nota >= 9) {
    console.log("Excelente");
} else if (nota >= 6) {
    console.log("Aprobado");
} else {
    console.log("Desaprobado");
}
```

Tenemos tres posibles resultados:

```text
Excelente
Aprobado
Desaprobado
```

---

# ¿Cómo se evalúa?

Con:

```javascript
const nota = 8;
```

JavaScript comienza por:

```text
nota >= 9

8 >= 9

false
```

Continúa:

```text
nota >= 6

8 >= 6

true
```

Entonces ejecuta:

```text
Aprobado
```

y no continúa evaluando los siguientes bloques de esa cadena.

---

# Flujo completo

```text
                 nota >= 9
                     │
              ┌──────┴──────┐
            true           false
              │               │
              ▼               ▼
         Excelente        nota >= 6
                              │
                       ┌──────┴──────┐
                     true           false
                       │               │
                       ▼               ▼
                   Aprobado       Desaprobado
```

---

# El orden importa

Consideremos:

```javascript
const nota = 10;
```

Esta estructura está correctamente ordenada:

```javascript
if (nota >= 9) {
    console.log("Excelente");
} else if (nota >= 6) {
    console.log("Aprobado");
}
```

La primera condición:

```text
10 >= 9 → true
```

Resultado:

```text
Excelente
```

---

# ¿Qué ocurre si invertimos las condiciones?

```javascript
if (nota >= 6) {
    console.log("Aprobado");
} else if (nota >= 9) {
    console.log("Excelente");
}
```

Con:

```javascript
const nota = 10;
```

la primera condición ya se cumple:

```text
10 >= 6 → true
```

Resultado:

```text
Aprobado
```

JavaScript no llega al siguiente `else if`.

Por eso:

```text
EL ORDEN DE LAS CONDICIONES IMPORTA
```

---

# Operadores de comparación

Las condiciones suelen construirse utilizando operadores de comparación.

| Operador | Significado |
|---|---|
| `===` | Igualdad estricta |
| `!==` | Desigualdad estricta |
| `>` | Mayor que |
| `<` | Menor que |
| `>=` | Mayor o igual |
| `<=` | Menor o igual |

Por ejemplo:

```javascript
edad >= 18
```

produce:

```text
true
```

o:

```text
false
```

---

# Igualdad estricta

En el capítulo anterior vimos una particularidad importante de JavaScript.

Tenemos:

```javascript
==
```

y:

```javascript
===
```

Por ejemplo:

```javascript
5 == "5"
```

produce:

```text
true
```

mientras que:

```javascript
5 === "5"
```

produce:

```text
false
```

Esto ocurre porque `==` puede realizar coerción de tipos.

En nuestros ejemplos utilizaremos preferentemente igualdad estricta:

```javascript
===
```

y desigualdad estricta:

```javascript
!==
```

---

# Combinar condiciones

También podemos utilizar los operadores lógicos vistos anteriormente.

## AND

```javascript
&&
```

Ejemplo:

```javascript
const edad = 25;
const tieneEntrada = true;

if (edad >= 18 && tieneEntrada === true) {
    console.log("Puede ingresar");
}
```

Las dos condiciones deben ser verdaderas.

---

# OR

```javascript
||
```

Ejemplo:

```javascript
const esAdmin = false;
const esModerador = true;

if (esAdmin || esModerador) {
    console.log("Tiene permisos");
}
```

Alcanza con que una condición sea verdadera.

---

# NOT

```javascript
!
```

Permite negar un valor booleano.

```javascript
const bloqueado = false;

if (!bloqueado) {
    console.log("Usuario habilitado");
}
```

---

# Estructura general

Podemos pensar una cadena condicional así:

```javascript
if (condicion1) {

    // Primera posibilidad

} else if (condicion2) {

    // Segunda posibilidad

} else {

    // Ninguna condición anterior

}
```

Podemos utilizar varios `else if` cuando el problema lo requiera.

---

# Ejemplo completo

```javascript
const nota = 8;

if (nota >= 9) {

    console.log("Excelente");

} else if (nota >= 6) {

    console.log("Aprobado");

} else {

    console.log("Desaprobado");

}
```

Resultado:

```text
Aprobado
```

---

# Dato importante

JavaScript evalúa una cadena:

```javascript
if
else if
else
```

de arriba hacia abajo.

Cuando encuentra la primera condición verdadera, ejecuta ese bloque y omite los restantes.

Por eso el orden puede modificar el resultado del programa.

---

# Ejercicio

Crear una variable:

```javascript
const edad = 30;
```

Después clasificarla utilizando condicionales:

```text
Menor de 18
→ Menor de edad

Entre 18 y 64
→ Mayor de edad

65 o más
→ Adulto mayor
```

Intentá resolverlo utilizando:

```javascript
if
else if
else
```

---

# Desafío extra

Agregá otra variable:

```javascript
const tieneEntrada = true;
```

y utilizá:

```javascript
&&
```

para permitir el ingreso solamente cuando la persona:

```text
sea mayor de edad
Y
tenga entrada
```

---

# Próximo capítulo

Ya sabemos almacenar datos, realizar operaciones y tomar decisiones.

Con estas herramientas empezamos a construir programas que pueden modificar su comportamiento según la información que reciben.
