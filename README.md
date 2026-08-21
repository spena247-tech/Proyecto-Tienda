# TRAMA — Catálogo de camisas

Catálogo web funcional (HTML + CSS + JS puro, sin frameworks ni build) para mostrar camisas, filtrar por tela/color/talla, comprar por WhatsApp o desde un carrito, y mostrar tiendas físicas. Pensado para publicarse gratis en **GitHub Pages**.

## Estructura

```
trama-catalogo/
├── index.html          → estructura de la página (una sola página, con secciones)
├── styles.css          → toda la identidad visual (colores, tipografía, layout)
├── script.js           → datos del catálogo, tiendas, filtros, carrito y enlaces de WhatsApp
└── favicon.svg         → ícono de la marca
```

## Qué personalizar primero

Todo lo editable está centralizado en **`script.js`**, marcado con `⚙️ CONFIGURA AQUÍ`:

1. **Número de WhatsApp** — variable `WHATSAPP_NUMBER` (arriba del todo del archivo). Debe llevar indicativo de país sin `+` ni espacios, ej. `"573001234567"`.
2. **Productos** — arreglo `PRODUCTS`. Cada camisa tiene: nombre, tela, precio, descripción, colores (nombre + código hexadecimal) y tallas disponibles. Agrega, edita o elimina objetos libremente; el catálogo, los filtros y el carrito se generan solos a partir de esta lista.
3. **Tiendas físicas** — arreglo `STORES`. Cada tienda tiene ciudad, nombre, dirección, horario y teléfono. El enlace "Cómo llegar" arma automáticamente una búsqueda de Google Maps con la dirección — no necesitas API key.

## Sobre las imágenes

Por ahora cada camisa se muestra con un ícono ilustrado (SVG) que cambia de color según la prenda, para que el catálogo se vea completo sin depender de fotos reales. Cuando tengas fotografías de producto:

1. Guarda las imágenes en una carpeta `assets/productos/`.
2. En `js/script.js`, añade un campo `image: "assets/productos/nombre.jpg"` a cada producto.
3. En `renderProducts()` y `openModal()` (dentro de `script.js`), reemplaza la llamada a `shirtSVG(...)` por una etiqueta `<img>` que use `p.image` cuando exista, y el ícono SVG como respaldo si no hay foto.

Si quieres, en otra conversación puedo hacer ese cambio directamente sobre tus fotos.

## Cómo publicarlo en GitHub Pages

1. Crea un repositorio nuevo en GitHub (por ejemplo `trama-catalogo`).
2. Sube el contenido de esta carpeta a la raíz del repositorio (no dentro de una subcarpeta), o sea que `index.html` quede en la raíz.
3. En el repositorio, ve a **Settings → Pages**.
4. En "Build and deployment", selecciona **Deploy from a branch**, rama `main` (o `master`) y carpeta `/ (root)`.
5. Guarda. En un par de minutos GitHub te dará una URL como `https://tu-usuario.github.io/trama-catalogo/`.

También puedes simplemente abrir `index.html` directamente en el navegador para probarlo en tu computador antes de subirlo.

## Notas

- No requiere backend, base de datos ni claves de API: los "pedidos" arman un mensaje de WhatsApp automáticamente con los datos elegidos (producto, color, talla y precio) y abren `wa.me` con ese mensaje ya escrito.
- El carrito vive solo en memoria del navegador (se vacía al recargar la página) — es un catálogo de venta asistida, no una tienda con pagos en línea. Si más adelante quieres pagos en línea reales (tarjeta, PSE, etc.), se necesitaría integrar una pasarela de pagos, lo cual sí requiere backend.
- Todos los textos, precios, productos y tiendas son de ejemplo — reemplázalos por los datos reales de tu marca.
