// ==========================================================================
// MÁGICA — ALTA JOYERÍA ENERGÉTICA · CATÁLOGO REAL & SHOPPING SYSTEM
// ==========================================================================

const PRODUCTS = [
  {
    id: 'lapislazuli-esferas',
    name: 'Lapislázuli Imperial & Plata',
    mineral: 'Lapislázuli Natural Grado AAA+',
    image: 'assets/Catalogo/pulsera-lapislazuli-esferas.jpg',
    tag: 'Edición Signature',
    price: 89.00,
    intention: 'Gema sagrada de sabiduría ancestral, intuición y verdad. Favorece la autoexpresión lúcida y armoniza el campo áurico superior.',
    chakra: 'Tercer Ojo (Ajna) & Garganta (Vishuddha)',
    element: 'Agua / Éter',
    zodiac: 'Sagitario, Libra, Piscis',
    metal: 'Herrajes facetados en Plata Ley 925'
  },
  {
    id: 'onix-centinela-azul',
    name: 'Ónix Nocturno & Centinela Azul',
    mineral: 'Ónix Negro Pulido & Lapislázuli',
    image: 'assets/Catalogo/pulsera-onix-centinela-azul.jpg',
    tag: 'Protección Mayor',
    price: 89.00,
    intention: 'Blindaje magnético contra vibraciones densas. Combina el anclaje inamovible del ónix con la clarividencia de la gema centinela.',
    chakra: 'Raíz (Muladhara) & Tercer Ojo',
    element: 'Tierra',
    zodiac: 'Capricornio, Escorpio, Tauro',
    metal: 'Núcleo elástico de silicona náutica reforzada'
  },
  {
    id: 'cuarzo-blanco-jade',
    name: 'Cuarzo Blanco & Jade Esculpido',
    mineral: 'Cuarzo Lechoso & Jadeíta Rústica',
    image: 'assets/Catalogo/pulsera-cuarzo-blanco-jade.jpg',
    tag: 'Alta Frecuencia',
    price: 89.00,
    intention: 'Unión alquímica entre la pureza mental del cuarzo maestro y la prosperidad infinita del jade noble. Calma y magnetismo sereno.',
    chakra: 'Corona (Sahasrara) & Corazón (Anahata)',
    element: 'Tierra / Aire',
    zodiac: 'Tauro, Virgo, Cáncer',
    metal: 'Separadores facetados en baño de oro de 18K'
  },
  {
    id: 'jade-pez-dorado',
    name: 'Jade Dorado & Pez de Fortuna',
    mineral: 'Jade Amarillo Crema Natural',
    image: 'assets/Catalogo/pulsera-jade-pez-dorado.jpg',
    tag: 'Amuleto de Abundancia',
    price: 89.00,
    intention: 'Inspirada en el flujo perpetuo de la riqueza y el bienestar. El tótem del pez simboliza superación de obstáculos y dicha financiera.',
    chakra: 'Plexo Solar (Manipura)',
    element: 'Fuego / Tierra',
    zodiac: 'Leo, Géminis, Aries',
    metal: 'Charm de Orfebrería bañado en Oro de 18K'
  },
  {
    id: 'lapislazuli-cabujon-oval',
    name: 'Lapislázuli Cabujón Soberana',
    mineral: 'Cabujón Ovalado de Lapislázuli Puro',
    image: 'assets/Catalogo/pulsera-lapislazuli-cabujon-oval.png',
    tag: 'Pieza de Autor',
    price: 89.00,
    intention: 'Una gema focal de gran gramaje que descansa sobre el pulso. Diseñada para líderes y creadores que requieren enfoque y magnetismo.',
    chakra: 'Tercer Ojo & Corona',
    element: 'Éter',
    zodiac: 'Acuario, Sagitario, Aries',
    metal: 'Montura satinada antialérgica de alta duración'
  }
];

// Estado global de la orden
let cart = [];

// Elementos del DOM
const productsGrid = document.getElementById('productsGrid');
const cartTrigger = document.getElementById('cartTrigger');
const cartCount = document.getElementById('cartCount');
const cartDrawer = document.getElementById('cartDrawer');
const cartOverlay = document.getElementById('cartOverlay');
const closeCart = document.getElementById('closeCart');
const cartItems = document.getElementById('cartItems');
const cartTotalVal = document.getElementById('cartTotalVal');
const checkoutBtn = document.getElementById('checkoutBtn');

const quickViewModal = document.getElementById('quickViewModal');
const closeQuickView = document.getElementById('closeQuickView');
const quickViewContent = document.getElementById('quickViewContent');

const checkoutModal = document.getElementById('checkoutModal');
const modalClose = document.getElementById('modalClose');
const orderForm = document.getElementById('orderForm');
const modalOrderSummary = document.getElementById('modalOrderSummary');

// Renderizar el catálogo principal con las imágenes reales
function renderCatalog() {
  productsGrid.innerHTML = PRODUCTS.map(prod => `
    <article class="luxury-card">
      <div class="card-image-box">
        <span class="card-badge">${prod.tag}</span>
        <img src="${prod.image}" alt="${prod.name}" loading="lazy">
        <div class="card-action-overlay">
          <button class="btn-inspect" onclick="openQuickView('${prod.id}')">Inspección Gemológica ↗</button>
        </div>
      </div>
      <div class="card-details">
        <span class="card-mineral">${prod.mineral}</span>
        <h3 class="card-title">${prod.name}</h3>
        <p class="card-intention">${prod.intention}</p>
        <div class="card-footer-row">
          <div class="card-price-block">
            <span class="card-price-label">Inversión</span>
            <span class="card-price">$${prod.price.toFixed(2)} USD</span>
          </div>
          <button class="btn-add-bag" onclick="addToCart('${prod.id}')">+ Añadir a la Bolsa</button>
        </div>
      </div>
    </article>
  `).join('');
}

// Abrir Quick View (Detalle gemológico)
window.openQuickView = function(productId) {
  const p = PRODUCTS.find(item => item.id === productId);
  if (!p) return;

  quickViewContent.innerHTML = `
    <div class="qv-image">
      <img src="${p.image}" alt="${p.name}">
    </div>
    <div class="qv-info">
      <span class="gold-overline">${p.mineral}</span>
      <h3>${p.name}</h3>
      <p class="qv-desc">${p.intention}</p>
      
      <div class="qv-specs">
        <div class="spec-cell">
          <strong>Chakra Principal</strong>
          <span>${p.chakra}</span>
        </div>
        <div class="spec-cell">
          <strong>Elemento</strong>
          <span>${p.element}</span>
        </div>
        <div class="spec-cell">
          <strong>Signos Afines</strong>
          <span>${p.zodiac}</span>
        </div>
        <div class="spec-cell">
          <strong>Orfebrería</strong>
          <span>${p.metal}</span>
        </div>
      </div>

      <div class="qv-footer">
        <span class="qv-price">$${p.price.toFixed(2)} USD</span>
        <button class="btn btn-gold" onclick="addToCart('${p.id}'); closeQuickViewModal();">
          Adquirir esta Pieza
        </button>
      </div>
    </div>
  `;
  quickViewModal.classList.add('active');
};

function closeQuickViewModal() {
  quickViewModal.classList.remove('active');
}

closeQuickView.addEventListener('click', closeQuickViewModal);
quickViewModal.addEventListener('click', (e) => {
  if (e.target === quickViewModal) closeQuickViewModal();
});

// Carrito de Compras
window.addToCart = function(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  cart.push(product);
  updateCart();
  openCart();
};

window.removeFromCart = function(index) {
  cart.splice(index, 1);
  updateCart();
};

function updateCart() {
  cartCount.textContent = cart.length;

  if (cart.length === 0) {
    cartItems.innerHTML = '<div class="cart-empty-state">Tu bolsa de alta joyería está esperando tu primera elección.</div>';
    cartTotalVal.textContent = '$0.00 USD';
    checkoutBtn.disabled = true;
    return;
  }

  const total = cart.reduce((sum, item) => sum + item.price, 0);
  cartTotalVal.textContent = `$${total.toFixed(2)} USD`;
  checkoutBtn.disabled = false;

  cartItems.innerHTML = cart.map((item, idx) => `
    <div class="cart-row">
      <img src="${item.image}" alt="${item.name}" class="cart-thumb">
      <div class="cart-row-info">
        <h4 class="cart-row-title">${item.name}</h4>
        <span class="cart-row-price">$${item.price.toFixed(2)} USD</span>
      </div>
      <button class="cart-row-remove" onclick="removeFromCart(${idx})">Retirar</button>
    </div>
  `).join('');
}

function openCart() {
  cartDrawer.classList.add('active');
  cartOverlay.classList.add('active');
}

function closeCartDrawer() {
  cartDrawer.classList.remove('active');
  cartOverlay.classList.remove('active');
}

cartTrigger.addEventListener('click', openCart);
closeCart.addEventListener('click', closeCartDrawer);
cartOverlay.addEventListener('click', closeCartDrawer);

// Checkout
checkoutBtn.addEventListener('click', () => {
  closeCartDrawer();
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  modalOrderSummary.innerHTML = `
    <strong>Resumen de tu Adquisición Privada:</strong><br>
    ${cart.length} Joya(s) de Cuarzo de Autor: <strong>$${total.toFixed(2)} USD</strong><br>
    <small>✦ Incluye Cofre The Rose Vault y Seguro Courier Prioritario sin cargo.</small>
  `;
  checkoutModal.classList.add('active');
});

modalClose.addEventListener('click', () => {
  checkoutModal.classList.remove('active');
});

checkoutModal.addEventListener('click', (e) => {
  if (e.target === checkoutModal) checkoutModal.classList.remove('active');
});

orderForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('custName').value;
  const phone = document.getElementById('custPhone').value;
  const size = document.getElementById('custSize').value;
  const orderFolio = 'MAG-LUX-' + Math.floor(100000 + Math.random() * 900000);
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  // Mensaje elegante de confirmación
  const confirmMsg = `✦ ADQUISICIÓN CONFIRMADA — MÁGICA ✦\n\nEstimada ${name},\nTu orden con Folio Exclusivo [${orderFolio}] ha sido reservada.\n\nTotal: $${total.toFixed(2)} USD\nTalla seleccionada: ${size}\n\nTu joyera concierge personal se pondrá en contacto al ${phone} para validar el grabado de tu certificado y coordinar la entrega prioritaria asegurada.`;

  alert(confirmMsg);

  // Preparar mensaje para abrir WhatsApp opcional
  const waText = encodeURIComponent(`Hola Mágica Joyería, acabo de registrar mi adquisición con Folio ${orderFolio} por $${total.toFixed(2)} USD a nombre de ${name}. Deseo coordinar la entrega.`);
  window.open(`https://wa.me/?text=${waText}`, '_blank');

  cart = [];
  updateCart();
  checkoutModal.classList.remove('active');
});

// Inicializar catálogo al cargar
document.addEventListener('DOMContentLoaded', () => {
  renderCatalog();
  updateCart();
});
