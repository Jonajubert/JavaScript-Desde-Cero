# JavaScript Desde Cero

## Capítulo 004 - Tipos de datos

En el capítulo anterior aprendimos a crear variables utilizando `let` y `const`.

Ahora veremos qué tipo de información podemos almacenar dentro de esas variables.

---

# ¿Qué aprenderás?

- Qué es un tipo de dato.
- Qué es `string`.
- Qué es `number`.
- Qué es `boolean`.
- Qué significa `undefined`.
- Qué significa `null`.
- Cómo utilizar `typeof`.

---

# ¿Qué es un tipo de dato?

Un programa necesita trabajar con diferentes tipos de información.

Por ejemplo:

```text
Jonatan
30
true
```

Representan datos diferentes.

JavaScript necesita distinguirlos para saber cómo trabajar con cada valor.

---

# string

Utilizamos `string` para representar texto.

```javascript
const nombre = "Jonatan";
```

También podemos escribir:

```javascript
const lenguaje = 'JavaScript';
```

El texto debe estar delimitado por comillas.

---

# number

JavaScript utiliza `number` para representar números.

Por ejemplo:

```javascript
const edad = 30;
```

También puede almacenar números decimales:

```javascript
const altura = 1.75;
```

A diferencia de otros lenguajes, JavaScript no utiliza tipos separados como `int` y `double` para estos ejemplos básicos.

Ambos son:

```text
number
```

---

# boolean

Un `boolean` representa solamente dos posibilidades:

```text
true
false
```

Por ejemplo:

```javascript
const estudiante = true;
```

Los booleanos serán fundamentales cuando comencemos a trabajar con condiciones.

---

# undefined

Una variable puede existir sin tener todavía un valor asignado.

```javascript
let ciudad;
```

Si mostramos:

```javascript
console.log(ciudad);
```

obtendremos:

```text
undefined
```

Esto significa que la variable existe, pero todavía no contiene un valor definido.

---

# null

También podemos indicar intencionalmente que una variable no contiene un valor.

```javascript
const telefono = null;
```

En este caso nosotros asignamos explícitamente `null`.

---

# undefined vs null

Aunque ambos pueden representar ausencia de información, no significan exactamente lo mismo.

```text
undefined
↓
Todavía no se definió un valor.

null
↓
Definimos intencionalmente
la ausencia de un valor.
```

---

# typeof

JavaScript proporciona el operador:

```javascript
typeof
```

que permite consultar el tipo de un valor.

Por ejemplo:

```javascript
const nombre = "Jonatan";
const edad = 30;
const estudiante = true;

console.log(typeof nombre);
console.log(typeof edad);
console.log(typeof estudiante);
```

Resultado:

```text
string
number
boolean
```

---

# Comparación rápida

| Tipo | Ejemplo |
|---|---|
| `string` | `"Jonatan"` |
| `number` | `30` |
| `boolean` | `true` |
| `undefined` | `let ciudad;` |
| `null` | `const telefono = null;` |

---

# Una curiosidad de JavaScript

Si ejecutamos:

```javascript
console.log(typeof null);
```

JavaScript devuelve:

```text
object
```

Puede parecer extraño.

Es un comportamiento histórico de JavaScript que se mantiene por compatibilidad.

Por ahora lo importante es recordar que utilizamos `null` para representar intencionalmente la ausencia de un valor.

---

# Ejercicio

Crear las siguientes variables:

```javascript
const nombre = "Tu nombre";
const edad = 30;
const programador = true;
let lenguaje;
const telefono = null;
```

Luego mostrar cada variable utilizando:

```javascript
console.log()
```

Finalmente utilizar `typeof` para investigar el tipo de:

```text
nombre
edad
programador
```

---

# Dato importante

JavaScript determina automáticamente el tipo según el valor almacenado.

Por ejemplo:

```javascript
const nombre = "Jonatan";
const edad = 30;
```

JavaScript reconoce:

```text
nombre → string
edad   → number
```

No necesitamos indicar explícitamente el tipo al declarar la variable.

---

# Próximo capítulo

Continuaremos trabajando con estos valores y aprenderemos a utilizarlos dentro de expresiones y programas cada vez más completos.
