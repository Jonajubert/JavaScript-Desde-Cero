# JavaScript Desde Cero

# 📖 Capítulo 002

## Cómo conectar JavaScript con HTML

En el capítulo anterior aprendimos qué es JavaScript y cuál es su función dentro de una página web.

Ahora veremos cómo conectar un archivo JavaScript con un documento HTML utilizando la forma recomendada actualmente.

---

# 🎯 ¿Qué aprenderás?

- Cómo conectar JavaScript con HTML.
- Qué hace la etiqueta `<script>`.
- Para qué sirve el atributo `defer`.
- Diferencias entre JavaScript externo e interno.
- Cuál es la forma recomendada.

---

# ¿Cómo se conecta JavaScript?

La forma más utilizada consiste en crear un archivo independiente llamado:

```
script.js
```

Luego se conecta desde el `<head>` del documento HTML utilizando la etiqueta `<script>`.

```html
<script src="script.js" defer></script>
```

---

# ¿Qué hace el atributo defer?

Cuando el navegador encuentra esta línea:

```html
<script src="script.js" defer></script>
```

ocurren dos cosas:

1. Descarga el archivo JavaScript mientras continúa procesando el HTML.

2. Ejecuta el código únicamente cuando el documento ya fue analizado completamente.

Esto evita errores al intentar acceder a elementos HTML que todavía no existen.

---

# ¿Por qué utilizar defer?

## Ventajas

- Código más organizado.
- Mejor rendimiento.
- Evita problemas de carga del DOM.
- Es la práctica recomendada actualmente.

---

# ¿Qué diferencia hay con JavaScript interno?

También podríamos escribir código directamente dentro del documento HTML.

```html
<script>

    alert("Hola");

</script>
```

Esta opción es útil para ejemplos pequeños, pero en proyectos reales se recomienda utilizar archivos `.js` independientes.

---

# Estructura del proyecto

```
002-Como-conectar-JavaScript-con-HTML

│

├── index.html

└── script.js
```

---

# Código principal

```html
<script src="script.js" defer></script>
```

---

# Resultado esperado

Al presionar el botón:

```
¡Hola! JavaScript está conectado correctamente.
```

---

# 💡 Ejercicio

Crear una página HTML que contenga:

- Un título.
- Un botón.
- Un archivo `script.js`.

Conectar ambos archivos utilizando:

```html
<script src="script.js" defer></script>
```

Al hacer clic sobre el botón deberá aparecer un mensaje utilizando `alert()`.

---

# 📌 ¿Sabías que?

Durante muchos años era habitual colocar la etiqueta `<script>` justo antes de cerrar el `<body>`.

Actualmente, la práctica más recomendada consiste en colocarla dentro del `<head>` utilizando el atributo **defer**, ya que mantiene el código más limpio y permite que el navegador procese primero el HTML.

---

# 🚀 Próximo capítulo

## Capítulo 003

### Variables: `let` y `const`

Aprenderemos cómo almacenar información en variables y cuál es la diferencia entre `let` y `const`.
