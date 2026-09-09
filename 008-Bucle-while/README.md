# JavaScript Desde Cero

## Capítulo 008 - Bucle while

En capítulos anteriores aprendimos a tomar decisiones utilizando condicionales.

Ahora comenzaremos a repetir instrucciones utilizando bucles.

En este capítulo veremos:

```javascript
while
```

---

## ¿Qué aprenderás?

- Qué es un bucle.
- Cómo funciona `while`.
- Qué es una condición de repetición.
- Cómo utilizar un contador.
- Cómo actualizar una variable.
- Qué es un bucle infinito.

---

# Sintaxis

La estructura básica es:

```javascript
while (condición) {
    // Código que queremos repetir.
}
```

Podemos interpretarla como:

```text
MIENTRAS
la condición sea verdadera
        ↓
ejecutar el código
```

---

# Nuestro primer while

```javascript
let contador = 1;

while (contador <= 5) {
    console.log(`Número: ${contador}`);
    contador++;
}
```

Resultado:

```text
Número: 1
Número: 2
Número: 3
Número: 4
Número: 5
```

---

# ¿Cómo funciona?

Primero declaramos:

```javascript
let contador = 1;
```

Después evaluamos:

```javascript
contador <= 5
```

Si el resultado es:

```text
true
```

JavaScript ejecuta el bloque.

Después:

```javascript
contador++;
```

incrementa el contador.

JavaScript vuelve entonces a evaluar la condición.

---

# Paso a paso

```text
contador = 1
1 <= 5 → true
imprime 1

contador = 2
2 <= 5 → true
imprime 2

contador = 3
3 <= 5 → true
imprime 3

contador = 4
4 <= 5 → true
imprime 4

contador = 5
5 <= 5 → true
imprime 5

contador = 6
6 <= 5 → false

FIN
```

---

# Las tres partes

En este ejemplo podemos identificar:

```text
1. INICIALIZACIÓN

let contador = 1;


2. CONDICIÓN

contador <= 5


3. ACTUALIZACIÓN

contador++;
```

Las tres trabajan juntas para controlar la repetición.

---

# Incrementar una variable

Utilizamos:

```javascript
contador++;
```

En este ejemplo podemos entenderlo como:

```javascript
contador = contador + 1;
```

Si tenemos:

```text
contador = 3
```

después de:

```javascript
contador++;
```

obtenemos:

```text
contador = 4
```

---

# Cuidado con el bucle infinito

Observemos:

```javascript
let contador = 1;

while (contador <= 5) {
    console.log(contador);
}
```

Tenemos un problema.

`contador` nunca cambia.

Por lo tanto:

```text
1 <= 5 → true
1 <= 5 → true
1 <= 5 → true
...
```

El bucle continúa ejecutándose.

Esto se denomina:

```text
BUCLE INFINITO
```

---

# ¿Cómo evitarlo?

Debemos asegurarnos de que exista alguna condición que permita terminar la repetición.

En nuestro ejemplo:

```javascript
contador++;
```

hace que eventualmente lleguemos a:

```text
contador = 6
```

Entonces:

```text
6 <= 5 → false
```

y el `while` termina.

---

# Pregunta importante

Antes de escribir un `while`, preguntate:

```text
¿Qué hará que esta condición
eventualmente sea falsa?
```

Si la respuesta es:

```text
Nada
```

revisá el código.

---

# Flujo

```text
        INICIO
           │
           ▼
   Inicializar variable
           │
           ▼
      ¿Condición?
           │
      ┌────┴────┐
      │         │
     Sí         No
      │         │
      ▼         ▼
   Ejecutar     FIN
      │
      ▼
  Actualizar
      │
      └─────────→ volver
```

---

# Ejercicio

Utilizando `while`, mostrar los números:

```text
1
2
3
4
5
6
7
8
9
10
```

Comenzá con:

```javascript
let numero = 1;
```

Después pensá:

```text
¿Cuál debe ser la condición?

¿Cómo debe cambiar numero
en cada repetición?
```

---

# Desafío

Creá una cuenta regresiva:

```text
5
4
3
2
1
¡Despegue!
```

Pista:

En lugar de incrementar:

```javascript
contador++;
```

necesitarás hacer lo contrario.

---

# Dato importante

Un `while` ejecuta su bloque mientras la condición sea verdadera.

Recordá controlar:

```text
INICIALIZACIÓN
      ↓
CONDICIÓN
      ↓
ACTUALIZACIÓN
```

Si la condición nunca puede volverse falsa, tendremos un bucle infinito.

---

# Resumen

```javascript
let contador = 1;

while (contador <= 5) {
    console.log(contador);
    contador++;
}
```

puede interpretarse como:

```text
Comenzar en 1
     ↓
Mientras sea <= 5
     ↓
Mostrar el número
     ↓
Sumar 1
     ↓
Repetir
```
