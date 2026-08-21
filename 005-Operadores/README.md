# JavaScript Desde Cero

## Capítulo 005 - Operadores

En los capítulos anteriores aprendimos a crear variables y conocimos los principales tipos de datos.

Ahora aprenderemos a realizar operaciones con esos valores.

---

# ¿Qué aprenderás?

- Qué es un operador.
- Operadores aritméticos.
- Operadores de asignación.
- Operadores de comparación.
- Operadores lógicos.
- Diferencia entre `==` y `===`.

---

# ¿Qué es un operador?

Un operador permite realizar una operación sobre uno o más valores.

Por ejemplo:

```javascript
10 + 5
```

Tenemos:

```text
10 y 5
↓
valores

+
↓
operador
```

El resultado es:

```text
15
```

---

# Operadores aritméticos

Permiten realizar operaciones matemáticas.

| Operador | Operación |
|---|---|
| `+` | Suma |
| `-` | Resta |
| `*` | Multiplicación |
| `/` | División |
| `%` | Resto |

Ejemplo:

```javascript
const numero1 = 10;
const numero2 = 5;

console.log(numero1 + numero2);
console.log(numero1 - numero2);
console.log(numero1 * numero2);
console.log(numero1 / numero2);
```

Resultado:

```text
15
5
50
2
```

---

# Operador módulo %

El operador:

```javascript
%
```

devuelve el resto de una división.

Por ejemplo:

```javascript
console.log(10 % 3);
```

Resultado:

```text
1
```

Esto será útil posteriormente para determinar, por ejemplo, si un número es par.

---

# Operadores de asignación

Ya conocemos:

```javascript
=
```

Lo utilizamos para asignar un valor.

```javascript
let puntos = 10;
```

También existen operadores que combinan una operación con una asignación.

Por ejemplo:

```javascript
let puntos = 10;

puntos += 5;
```

Es equivalente a:

```javascript
puntos = puntos + 5;
```

Ahora:

```text
puntos = 15
```

Otros ejemplos:

```text
+=
-=
*=
/=
```

---

# Operadores de comparación

Permiten comparar valores.

El resultado de una comparación es un booleano:

```text
true
```

o:

```text
false
```

Algunos operadores son:

| Operador | Significado |
|---|---|
| `>` | Mayor que |
| `<` | Menor que |
| `>=` | Mayor o igual |
| `<=` | Menor o igual |
| `===` | Igualdad estricta |
| `!==` | Desigualdad estricta |

Ejemplo:

```javascript
const edad = 20;

console.log(edad >= 18);
```

Resultado:

```text
true
```

---

# == vs ===

JavaScript dispone de:

```javascript
==
```

y:

```javascript
===
```

No significan exactamente lo mismo.

Observemos:

```javascript
console.log(5 == "5");
```

Resultado:

```text
true
```

Pero:

```javascript
console.log(5 === "5");
```

Resultado:

```text
false
```

¿Por qué?

Tenemos:

```text
5
↓
number

"5"
↓
string
```

`==` puede realizar conversión de tipos antes de comparar.

`===` realiza una comparación estricta sin esa coerción.

Para nuestros primeros programas utilizaremos preferentemente:

```javascript
===
```

---

# Operadores lógicos

Permiten combinar o modificar condiciones.

Los principales son:

```text
&& → AND

|| → OR

!  → NOT
```

---

# AND

Utilizamos:

```javascript
&&
```

Cuando queremos que ambas condiciones sean verdaderas.

```javascript
const tieneEdad = true;
const tieneEntrada = true;

console.log(tieneEdad && tieneEntrada);
```

Resultado:

```text
true
```

---

# OR

Utilizamos:

```javascript
||
```

cuando alcanza con que una de las condiciones sea verdadera.

```javascript
const efectivo = false;
const tarjeta = true;

console.log(efectivo || tarjeta);
```

Resultado:

```text
true
```

---

# NOT

Utilizamos:

```javascript
!
```

para negar un valor booleano.

```javascript
const activo = true;

console.log(!activo);
```

Resultado:

```text
false
```

---

# Resumen

```text
ARITMÉTICOS
+  -  *  /  %

ASIGNACIÓN
=  +=  -=  *=  /=

COMPARACIÓN
>  <  >=  <=  ===  !==

LÓGICOS
&&  ||  !
```

---

# Curiosidad

Los operadores no siempre producen números.

Por ejemplo:

```javascript
10 + 5
```

produce:

```text
15
```

Pero:

```javascript
10 > 5
```

produce:

```text
true
```

El tipo de resultado depende de la operación que realizamos.

---

# Ejercicio

Declarar:

```javascript
const numero1 = 10;
const numero2 = 4;
```

Mostrar en consola:

- La suma.
- La resta.
- La multiplicación.
- La división.
- El resto.

Después comprobar:

```javascript
numero1 > numero2
numero1 === numero2
numero1 !== numero2
```

Observá cuáles devuelven `true` y cuáles `false`.

---

# Dato importante

En JavaScript:

```javascript
=
```

asigna un valor.

```javascript
===
```

compara valor y tipo.

No debemos confundirlos.

---

# Próximo capítulo

Ahora que podemos realizar operaciones y comparaciones, estamos preparados para comenzar a utilizarlas para controlar el comportamiento de nuestros programas.
