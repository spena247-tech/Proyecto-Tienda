/* ============================================
   TRAMA — script.js
   Todo lo que necesitas editar para tu negocio real
   está marcado con  ⚙️ CONFIGURA AQUÍ
   ============================================ */

/* ⚙️ CONFIGURA AQUÍ — número de WhatsApp del negocio (con indicativo, sin + ni espacios) */
const WHATSAPP_NUMBER = "573000000000";

/* ⚙️ CONFIGURA AQUÍ — catálogo de productos */
const PRODUCTS = [
  {
    id: "ox-anil",
    name: "Camisa Oxford",
    fabric: "Oxford 100% algodón",
    price: 129000,
    description: "Camisa clásica de tejido Oxford, gruesa y transpirable. Corte recto, ideal para uso diario o de oficina.",
    colors: [
      { name: "Añil", hex: "#2B3E63" },
      { name: "Blanco", hex: "#F4F1E7" },
      { name: "Vino", hex: "#6E2A32" }
    ],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: "lino-beige",
    name: "Camisa de Lino",
    fabric: "Lino natural",
    price: 149000,
    description: "Fresca y liviana, perfecta para el clima cálido. Textura natural del lino con caída relajada.",
    colors: [
      { name: "Beige", hex: "#C9B48C" },
      { name: "Blanco", hex: "#F4F1E7" },
      { name: "Verde oliva", hex: "#5C6B4A" }
    ],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: "franela-cuadros",
    name: "Camisa de Franela",
    fabric: "Franela a cuadros",
    price: 119000,
    description: "Cálida y suave al tacto, con el clásico patrón de cuadros. Ideal para climas fríos.",
    colors: [
      { name: "Rojo tinto", hex: "#8C2F2A" },
      { name: "Verde oliva", hex: "#5C6B4A" },
      { name: "Negro", hex: "#232323" }
    ],
    sizes: ["M", "L", "XL", "XXL"]
  },
  {
    id: "popelina-negra",
    name: "Camisa Popelina",
    fabric: "Popelina de algodón",
    price: 109000,
    description: "Tejido liso y ligero de acabado elegante. Se ajusta bien para looks formales o casuales.",
    colors: [
      { name: "Negro", hex: "#232323" },
      { name: "Añil", hex: "#2B3E63" },
      { name: "Blanco", hex: "#F4F1E7" }
    ],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: "denim-camisa",
    name: "Camisa Denim",
    fabric: "Denim liviano",
    price: 139000,
    description: "Camisa tipo mezclilla de peso liviano, versátil y resistente. Un básico que nunca pasa de moda.",
    colors: [
      { name: "Azul denim", hex: "#3E5772" },
      { name: "Negro", hex: "#232323" }
    ],
    sizes: ["S", "M", "L", "XL", "XXL"]
  },
  {
    id: "lino-vino",
    name: "Camisa Guayabera",
    fabric: "Lino y algodón",
    price: 159000,
    description: "Diseño tradicional con alforzas y bolsillos frontales. Fresca, elegante y perfecta para ocasiones especiales.",
    colors: [
      { name: "Blanco", hex: "#F4F1E7" },
      { name: "Beige", hex: "#C9B48C" }
    ],
    sizes: ["M", "L", "XL"]
  },
  {
    id: "manga-corta-verde",
    name: "Camisa Manga Corta",
    fabric: "Algodón ligero",
    price: 99000,
    description: "Camisa fresca de manga corta para el día a día. Corte moderno y tela suave.",
    colors: [
      { name: "Verde oliva", hex: "#5C6B4A" },
      { name: "Añil", hex: "#2B3E63" },
      { name: "Blanco", hex: "#F4F1E7" }
    ],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: "seda-vino",
    name: "Camisa de Seda Sintética",
    fabric: "Satín ligero",
    price: 169000,
    description: "Brillo sutil y caída fluida para looks de noche. Tacto suave y acabado elegante.",
    colors: [
      { name: "Vino", hex: "#6E2A32" },
      { name: "Negro", hex: "#232323" }
    ],
    sizes: ["S", "M", "L"]
  }
];

/* ⚙️ CONFIGURA AQUÍ — tiendas físicas */
const STORES = [
  {
    city: "Bucaramanga",
    name: "TRAMA Cabecera",
    address: "Cra 33 #45-10, Cabecera del Llano",
    hours: "Lun – Sáb, 9:00 a.m. – 7:00 p.m.",
    phone: "+57 300 000 0000"
  },
  {
    city: "Bucaramanga",
    name: "TRAMA Centro",
    address: "Calle 35 #18-22, Centro",
    hours: "Lun – Sáb, 9:00 a.m. – 6:30 p.m.",
    phone: "+57 300 000 0001"
  },
  {
    city: "Floridablanca",
    name: "TRAMA Cañaveral",
    address: "C.C. Cañaveral, Local 214",
    hours: "Todos los días, 10:00 a.m. – 8:00 p.m.",
    phone: "+57 300 000 0002"
  }
];

/* ============================================
   ESTADO
   ============================================ */
const state = {
  filters: { tela: null, color: null, talla: null },
  cart: [] // { productId, colorName, colorHex, size, qty }
};

const money = (n) => "$" + n.toLocaleString("es-CO");

/* ============================================
   ICONO DE CAMISA (SVG reutilizable, color dinámico)
   ============================================ */
function shirtSVG(hex, size = 118) {
  return `
  <svg viewBox="0 0 120 120" width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
    <path d="M40 10 L60 22 L80 10 L100 26 L90 42 L80 36 L80 108 L40 108 L40 36 L30 42 L20 26 Z"
      fill="${hex}" stroke="#23211C" stroke-opacity="0.25" stroke-width="2" stroke-linejoin="round"/>
    <path d="M55 10 C55 18 65 18 65 10" fill="none" stroke="#23211C" stroke-opacity="0.3" stroke-width="2"/>
    <line x1="60" y1="30" x2="60" y2="106" stroke="#23211C" stroke-opacity="0.18" stroke-width="1.5"/>
    <circle cx="60" cy="42" r="1.6" fill="#23211C" fill-opacity="0.3"/>
    <circle cx="60" cy="58" r="1.6" fill="#23211C" fill-opacity="0.3"/>
    <circle cx="60" cy="74" r="1.6" fill="#23211C" fill-opacity="0.3"/>
    <circle cx="60" cy="90" r="1.6" fill="#23211C" fill-opacity="0.3"/>
  </svg>`;
}

/* ============================================
   RENDER: FILTROS
   ============================================ */
function uniqueColors() {
  const map = new Map();
  PRODUCTS.forEach(p => p.colors.forEach(c => { if (!map.has(c.name)) map.set(c.name, c.hex); }));
  return map;
}
function uniqueSizes() {
  const set = new Set();
  PRODUCTS.forEach(p => p.sizes.forEach(s => set.add(s)));
  return [...set].sort((a, b) => ["S","M","L","XL","XXL"].indexOf(a) - ["S","M","L","XL","XXL"].indexOf(b));
}
function uniqueFabrics() {
  return [...new Set(PRODUCTS.map(p => p.fabric.split(" ")[0]))];
}

function renderFilters() {
  const telaWrap = document.getElementById("filterTela");
  const colorWrap = document.getElementById("filterColor");
  const tallaWrap = document.getElementById("filterTalla");

  telaWrap.innerHTML = uniqueFabrics().map(f =>
    `<button class="pill" data-type="tela" data-value="${f}">${f}</button>`
  ).join("");

  colorWrap.innerHTML = [...uniqueColors()].map(([name, hex]) =>
    `<button class="swatch" style="background:${hex}" data-type="color" data-value="${name}" title="${name}" aria-label="${name}"></button>`
  ).join("");

  tallaWrap.innerHTML = uniqueSizes().map(s =>
    `<button class="pill" data-type="talla" data-value="${s}">${s}</button>`
  ).join("");

  document.querySelectorAll("#filters [data-type]").forEach(btn => {
    btn.addEventListener("click", () => {
      const { type, value } = btn.dataset;
      state.filters[type] = state.filters[type] === value ? null : value;
      syncFilterUI();
      renderProducts();
    });
  });

  document.getElementById("filterReset").addEventListener("click", () => {
    state.filters = { tela: null, color: null, talla: null };
    syncFilterUI();
    renderProducts();
  });
}

function syncFilterUI() {
  document.querySelectorAll("#filters [data-type]").forEach(btn => {
    const { type, value } = btn.dataset;
    btn.classList.toggle("active", state.filters[type] === value);
  });
}

/* ============================================
   RENDER: PRODUCTOS
   ============================================ */
function filteredProducts() {
  return PRODUCTS.filter(p => {
    const okTela = !state.filters.tela || p.fabric.startsWith(state.filters.tela);
    const okColor = !state.filters.color || p.colors.some(c => c.name === state.filters.color);
    const okTalla = !state.filters.talla || p.sizes.includes(state.filters.talla);
    return okTela && okColor && okTalla;
  });
}

function renderProducts() {
  const grid = document.getElementById("productGrid");
  const list = filteredProducts();
  document.getElementById("resultsCount").textContent =
    `${list.length} camisa${list.length === 1 ? "" : "s"} encontrada${list.length === 1 ? "" : "s"}`;

  if (list.length === 0) {
    grid.innerHTML = `<p class="no-results">No encontramos camisas con esos filtros. Prueba quitando alguno.</p>`;
    return;
  }

  grid.innerHTML = list.map(p => `
    <article class="product-card" data-id="${p.id}" tabindex="0" role="button" aria-label="Ver detalle de ${p.name}">
      <span class="tag-hole"></span>
      <div class="product-visual">${shirtSVG(p.colors[0].hex)}</div>
      <p class="product-fabric">${p.fabric}</p>
      <h3 class="product-name">${p.name}</h3>
      <div class="product-colors">
        ${p.colors.map(c => `<span class="dot" style="background:${c.hex}" title="${c.name}"></span>`).join("")}
      </div>
      <div class="product-foot">
        <span class="product-price">${money(p.price)}</span>
        <span class="product-sizes">${p.sizes.join(" · ")}</span>
      </div>
    </article>
  `).join("");

  grid.querySelectorAll(".product-card").forEach(card => {
    const open = () => openModal(card.dataset.id);
    card.addEventListener("click", open);
    card.addEventListener("keydown", e => { if (e.key === "Enter") open(); });
  });
}

/* ============================================
   RENDER: TIENDAS
   ============================================ */
function renderStores() {
  const grid = document.getElementById("storeGrid");
  grid.innerHTML = STORES.map(s => {
    const mapsQuery = encodeURIComponent(`${s.name}, ${s.address}, ${s.city}, Colombia`);
    const waMsg = encodeURIComponent(`Hola, quiero más información sobre la tienda ${s.name} (${s.address}).`);
    return `
    <div class="store-card">
      <p class="store-city">${s.city}</p>
      <h3 class="store-name">${s.name}</h3>
      <p class="store-line">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 6-9 12-9 12s-9-6-9-12a9 9 0 0 1 18 0Z"/><circle cx="12" cy="10" r="3"/></svg>
        ${s.address}
      </p>
      <p class="store-line">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
        ${s.hours}
      </p>
      <p class="store-line">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.5 2.1L7.9 9.9a16 16 0 0 0 6 6l1.4-1.4a2 2 0 0 1 2.1-.5c.9.3 1.8.5 2.7.6a2 2 0 0 1 1.7 2Z"/></svg>
        ${s.phone}
      </p>
      <div class="store-links">
        <a href="https://www.google.com/maps/search/?api=1&query=${mapsQuery}" target="_blank" rel="noopener">Cómo llegar →</a>
        <a href="https://wa.me/${WHATSAPP_NUMBER}?text=${waMsg}" target="_blank" rel="noopener">Escribir a esta tienda →</a>
      </div>
    </div>`;
  }).join("");
}

/* ============================================
   MODAL DE PRODUCTO
   ============================================ */
let activeModalProduct = null;
let modalSelection = { color: null, size: null };

function openModal(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  activeModalProduct = p;
  modalSelection = { color: p.colors[0], size: null };

  document.getElementById("modalVisual").innerHTML = shirtSVG(p.colors[0].hex, 200);
  document.getElementById("modalTela").textContent = p.fabric;
  document.getElementById("modalTitle").textContent = p.name;
  document.getElementById("modalPrice").textContent = money(p.price);
  document.getElementById("modalDesc").textContent = p.description;

  document.getElementById("modalColors").innerHTML = p.colors.map((c, i) =>
    `<button class="swatch ${i === 0 ? "active" : ""}" style="background:${c.hex}" data-color-index="${i}" title="${c.name}" aria-label="${c.name}"></button>`
  ).join("");

  document.getElementById("modalTallas").innerHTML = p.sizes.map(s =>
    `<button class="pill" data-size="${s}">${s}</button>`
  ).join("");

  document.getElementById("modalColors").querySelectorAll("[data-color-index]").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("#modalColors .swatch").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      modalSelection.color = p.colors[btn.dataset.colorIndex];
      document.getElementById("modalVisual").innerHTML = shirtSVG(modalSelection.color.hex, 200);
      updateModalBuyLink();
    });
  });

  document.getElementById("modalTallas").querySelectorAll("[data-size]").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("#modalTallas .pill").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      modalSelection.size = btn.dataset.size;
      updateModalBuyLink();
    });
  });

  updateModalBuyLink();
  document.getElementById("modalOverlay").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  document.getElementById("modalOverlay").classList.remove("open");
  document.body.style.overflow = "";
}

function updateModalBuyLink() {
  const p = activeModalProduct;
  const sizeTxt = modalSelection.size ? modalSelection.size : "(elige talla)";
  const msg = encodeURIComponent(
    `Hola, quiero pedir:\n• Camisa: ${p.name}\n• Color: ${modalSelection.color.name}\n• Talla: ${sizeTxt}\n• Precio: ${money(p.price)}`
  );
  document.getElementById("modalBuyWhatsapp").href = `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;
}

document.getElementById("modalAddCart").addEventListener("click", () => {
  if (!modalSelection.size) {
    alert("Por favor elige una talla antes de agregar al carrito.");
    return;
  }
  addToCart(activeModalProduct, modalSelection.color, modalSelection.size);
  closeModal();
  openCart();
});

document.getElementById("modalClose").addEventListener("click", closeModal);
document.getElementById("modalOverlay").addEventListener("click", (e) => {
  if (e.target.id === "modalOverlay") closeModal();
});

/* ============================================
   CARRITO
   ============================================ */
function addToCart(product, color, size) {
  const existing = state.cart.find(i => i.productId === product.id && i.colorName === color.name && i.size === size);
  if (existing) {
    existing.qty += 1;
  } else {
    state.cart.push({
      productId: product.id,
      name: product.name,
      colorName: color.name,
      colorHex: color.hex,
      size,
      price: product.price,
      qty: 1
    });
  }
  renderCart();
}

function removeFromCart(index) {
  state.cart.splice(index, 1);
  renderCart();
}

function renderCart() {
  const itemsWrap = document.getElementById("cartItems");
  const total = state.cart.reduce((sum, i) => sum + i.price * i.qty, 0);
  document.getElementById("cartCount").textContent = state.cart.reduce((sum, i) => sum + i.qty, 0);
  document.getElementById("cartTotal").textContent = money(total);

  if (state.cart.length === 0) {
    itemsWrap.innerHTML = `<p class="cart-empty">Tu carrito está vacío.<br>Explora el catálogo y elige tu camisa.</p>`;
  } else {
    itemsWrap.innerHTML = state.cart.map((item, i) => `
      <div class="cart-item">
        <div class="cart-item-visual">${shirtSVG(item.colorHex, 46)}</div>
        <div class="cart-item-info">
          <p class="cart-item-name">${item.name}</p>
          <p class="cart-item-meta">${item.colorName} · Talla ${item.size} · x${item.qty}</p>
          <div class="cart-item-row">
            <span class="cart-item-price">${money(item.price * item.qty)}</span>
            <button class="cart-item-remove" data-index="${i}">Quitar</button>
          </div>
        </div>
      </div>
    `).join("");

    itemsWrap.querySelectorAll(".cart-item-remove").forEach(btn => {
      btn.addEventListener("click", () => removeFromCart(Number(btn.dataset.index)));
    });
  }

  updateCartCheckoutLink(total);
}

function updateCartCheckoutLink(total) {
  if (state.cart.length === 0) {
    document.getElementById("cartCheckout").href = `https://wa.me/${WHATSAPP_NUMBER}`;
    return;
  }
  const lines = state.cart.map(i => `• ${i.name} — ${i.colorName} — Talla ${i.size} — x${i.qty} — ${money(i.price * i.qty)}`);
  const msg = encodeURIComponent(`Hola, quiero hacer este pedido:\n${lines.join("\n")}\n\nTotal: ${money(total)}`);
  document.getElementById("cartCheckout").href = `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;
}

function openCart() {
  document.getElementById("cartOverlay").classList.add("open");
  document.body.style.overflow = "hidden";
}
function closeCart() {
  document.getElementById("cartOverlay").classList.remove("open");
  document.body.style.overflow = "";
}

document.getElementById("cartFab").addEventListener("click", openCart);
document.getElementById("cartClose").addEventListener("click", closeCart);
document.getElementById("cartOverlay").addEventListener("click", (e) => {
  if (e.target.id === "cartOverlay") closeCart();
});

/* ============================================
   ENLACES GENERALES DE WHATSAPP
   ============================================ */
function setGeneralWhatsappLinks() {
  const msg = encodeURIComponent("Hola, me gustaría hablar con un asesor sobre las camisas TRAMA.");
  const link = `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;
  ["navWhatsapp", "ctaWhatsapp", "footerWhatsapp", "floatWhatsapp"].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.href = link;
  });
}

/* ============================================
   MENÚ MÓVIL
   ============================================ */
document.getElementById("navToggle").addEventListener("click", () => {
  const header = document.querySelector(".site-header");
  const isOpen = header.classList.toggle("nav-open");
  document.getElementById("navToggle").setAttribute("aria-expanded", isOpen);
});
document.querySelectorAll(".main-nav a").forEach(a => {
  a.addEventListener("click", () => document.querySelector(".site-header").classList.remove("nav-open"));
});

/* ============================================
   INIT
   ============================================ */
setGeneralWhatsappLinks();
renderFilters();
renderProducts();
renderStores();
renderCart();
