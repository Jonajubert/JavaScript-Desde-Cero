# JavaScript Desde Cero

## Capítulo 003 - Variables: let y const

En el capítulo anterior aprendimos a conectar nuestro archivo JavaScript con HTML utilizando `defer`.

Ahora comenzaremos a almacenar información utilizando variables.

---

# ¿Qué aprenderás?

- Qué es una variable.
- Cómo declarar variables con `let`.
- Cómo declarar variables con `const`.
- Cuándo utilizar cada una.
- Por qué evitaremos `var` al comenzar.

---

# ¿Qué es una variable?

Una variable nos permite almacenar información para utilizarla posteriormente.

Por ejemplo:

```javascript
const nombre = "Jonatan";
```

En este caso tenemos:

```text
const     → forma de declarar la variable
nombre    → nombre de la variable
"Jonatan" → valor almacenado
```

---

# let

Utilizamos `let` cuando necesitamos que el valor pueda cambiar.

```javascript
let edad = 30;
```

Podemos reasignarlo:

```javascript
edad = 31;
```

Ahora `edad` contiene:

```text
31
```

---

# const

Utilizamos `const` cuando no necesitamos reasignar la variable.

```javascript
const nombre = "Jonatan";
```

Si intentamos:

```javascript
nombre = "Juan";
```

JavaScript generará un error.

---

# Comparación rápida

| Característica | let | const |
|---|---|---|
| Declarar una variable | Sí | Sí |
| Reasignar | Sí | No |
| Alcance de bloque | Sí | Sí |
| Recomendado actualmente | Sí | Sí |

---

# ¿Cuál debería utilizar?

Una buena regla para comenzar es:

```text
¿El valor necesita ser reasignado?

NO → const
SÍ → let
```

Por ejemplo:

```javascript
const nombre = "Jonatan";
let edad = 30;

edad = 31;
```

`nombre` no necesita cambiar, por eso utilizamos `const`.

`edad` sí cambia, por eso utilizamos `let`.

---

# ¿Y var?

También podemos encontrar:

```javascript
var nombre = "Jonatan";
```

`var` forma parte de JavaScript desde hace muchos años.

Sin embargo, presenta diferencias importantes relacionadas con el alcance (`scope`) y el comportamiento de las variables.

En JavaScript moderno normalmente utilizamos `let` y `const`.

Más adelante profundizaremos en estas diferencias.

---

# Resultado esperado

Ejecutando `script.js` veremos:

```text
Edad inicial: 30
Nueva edad: 31
Nombre: Jonatan
Jonatan tiene 31 años.
```

---

# Ejercicio

Crear las siguientes variables:

```text
nombre
edad
lenguaje
```

Utilizar `const` o `let` según corresponda.

Luego modificar `edad` y mostrar todos los valores utilizando:

```javascript
console.log()
```

---

# Dato importante

`const` no significa que el contenido de un objeto sea completamente inmutable.

Significa que la variable no puede ser reasignada.

Este concepto será importante cuando trabajemos con objetos y arrays.

---

# Próximo capítulo

## Tipos de datos

Veremos cómo JavaScript representa:

- Strings.
- Numbers.
- Booleans.
- Undefined.
- Null.
