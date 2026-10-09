# JavaScript Desde Cero

## Capítulo 012 - Scope

**Fecha:** 10/10/2026  
**Tipo:** Código  
**Progreso:** 12/40  
**Autor:** Jonatan Jubert — Learning JavaScript

El scope, o alcance, define dónde podemos acceder a una variable.

## ¿Qué aprenderemos?

- Alcance global.
- Alcance de función.
- Alcance de bloque.
- Qué ocurre al acceder a una variable fuera de su ámbito.

---

## Ejemplo completo

```javascript
const lenguaje = "JavaScript";

function mostrar() {
    const mensaje = "Hola";

    console.log(lenguaje);
    console.log(mensaje);
}

mostrar();

if (true) {
    let numero = 10;

    console.log(numero);
}
```

Resultado:

```text
JavaScript
Hola
10
```

---

## Alcance global

`lenguaje` está declarado fuera de la función y del bloque.

En este script clásico, pertenece al ámbito global.
La función `mostrar()` puede acceder a él.

Este ejemplo se carga mediante un `<script>` sin `type="module"`.
En un módulo, las declaraciones superiores pertenecen al ámbito
del módulo, no al global.

---

## Alcance de función

`mensaje` está declarado dentro de `mostrar()`.

Podemos utilizarlo dentro de esa función, pero no directamente
desde fuera.

Después de llamar a la función, esto genera un error:

```javascript
console.log(mensaje); // ReferenceError
```

Ejecutar una función no vuelve globales sus variables locales.

---

## Alcance de bloque

`numero` está declarado con `let` dentro del bloque `if`.

Fuera de ese bloque, esto genera un error:

```javascript
console.log(numero); // ReferenceError
```

Tanto `let` como `const` tienen alcance de bloque.

`var` se comporta de otra manera: un bloque `if` no limita su
alcance. Dentro de una función, su alcance es el de esa función.

---

## Comparación

| Variable | Declaración | Disponible en |
| --- | --- | --- |
| `lenguaje` | Fuera de la función y del bloque | Ámbito global de este script y ámbitos internos |
| `mensaje` | Dentro de `mostrar()` | La función y sus ámbitos internos |
| `numero` | Dentro del `if` | Ese bloque y sus ámbitos internos |

---

## Ejercicio

1. Guardá `index.html` y `script.js` en la misma carpeta.
2. Abrí `index.html` en el navegador.
3. Abrí las herramientas de desarrollo y seleccioná Consola.
4. Observá los tres resultados.
5. En `script.js`, descomentá solamente el acceso a `mensaje`.
6. Recargá la página y observá el `ReferenceError`.
7. Volvé a comentarlo y repetí la prueba con `numero`.

Los accesos incorrectos están comentados para que el ejemplo
inicial pueda ejecutarse completo.

---

## Desafío

Creá una función `mostrarEdad()`.

Dentro de ella:

```javascript
const edad = 25;
```

Mostrá su valor desde la función.

Después, intentá acceder a `edad` desde fuera y explicá
por qué se produce el error.

---

## Idea para recordar

La ubicación de la declaración determina el alcance.

## Documentación

- [MDN: Scope](https://developer.mozilla.org/en-US/docs/Glossary/Scope)
- [MDN: let](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)
- [MDN: var](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var)

Repositorio:
https://github.com/Jonajubert/JavaScript-Desde-Cero

**Jonatan Jubert — Learning JavaScript**  
Pequeños pasos, grandes resultados.
