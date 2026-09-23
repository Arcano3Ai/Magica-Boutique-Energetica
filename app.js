// ==========================================================================
// MÁGICA — ALTA JOYERÍA ENERGÉTICA · SISTEMA DE CATÁLOGO & EXPERIENCIA LUXURY
// ==========================================================================

const PRODUCTS = [
  {
    id: 'lapislazuli-esferas',
    name: 'Lapislázuli Imperial & Plata',
    mineral: 'Lapislázuli Natural Grado AAA+',
    image: 'assets/Catalogo/pulsera-lapislazuli-esferas.jpg',
    tag: 'Edición Signature',
    category: 'sabiduria',
    categoryName: 'Sabiduría & Clarividencia',
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
    category: 'proteccion',
    categoryName: 'Protección & Blindaje',
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
    category: 'amor',
    categoryName: 'Amor & Alta Frecuencia',
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
    category: 'abundancia',
    categoryName: 'Abundancia & Fortuna',
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
    category: 'sabiduria',
    categoryName: 'Sabiduría & Clarividencia',
    price: 89.00,
    intention: 'Una gema focal de gran gramaje que descansa sobre el pulso. Diseñada para líderes y creadores que requieren enfoque y magnetismo.',
    chakra: 'Tercer Ojo & Corona',
    element: 'Éter',
    zodiac: 'Acuario, Sagitario, Aries',
    metal: 'Montura satinada antialérgica de alta duración'
  },
  {
    id: 'turmalina-negra-pez',
    name: 'Turmalina Negra & Pez de Oro',
    mineral: 'Turmalina Negra Facetada & Mate',
    image: 'assets/Catalogo/770701607_18079976153421186_6230702332285530384_n.jpg',
    tag: 'Escudo Supremo',
    category: 'proteccion',
    categoryName: 'Protección & Blindaje',
    price: 89.00,
    intention: 'La turmalina negra es el transmutador por excelencia de radiación electromagnética y energías densas, ennoblecida con el pez de la suerte en oro pulido.',
    chakra: 'Raíz (Muladhara)',
    element: 'Tierra / Fuego',
    zodiac: 'Escorpio, Capricornio, Aries',
    metal: 'Pez tallado con chapa de oro de 18K y rondelas satinadas'
  },
  {
    id: 'lapislazuli-placas',
    name: 'Lapislázuli Placas Geométricas',
    mineral: 'Placas Rectangulares de Lapislázuli',
    image: 'assets/Catalogo/772547497_18079974317421186_6213319053199122599_n.jpg',
    tag: 'Diseño Escultórico',
    category: 'sabiduria',
    categoryName: 'Sabiduría & Clarividencia',
    price: 89.00,
    intention: 'Corte arquitectónico de placas de lapislázuli con vetas de calcita y pirita dorada natural. Estética vanguardista de presencia aristocrática.',
    chakra: 'Tercer Ojo (Ajna)',
    element: 'Agua / Aire',
    zodiac: 'Sagitario, Libra, Acuario',
    metal: 'Esferas separadoras facetadas en oro de 18K'
  },
  {
    id: 'cuarzo-rosa-nacar',
    name: 'Cuarzo Rosa & Flor de Nácar',
    mineral: 'Cuarzo Rosa Natural & Hematita',
    image: 'assets/Catalogo/772889456_18080358014421186_4636135969191559439_n.jpg',
    tag: 'Amor Incondicional',
    category: 'amor',
    categoryName: 'Amor & Alta Frecuencia',
    price: 89.00,
    intention: 'Frecuencia suave de apertura del chakra corazón, reconciliación interior y atracción de vínculos de luz. Corona floral esculpida en nácar blanco.',
    chakra: 'Corazón (Anahata)',
    element: 'Agua',
    zodiac: 'Tauro, Cáncer, Libra, Piscis',
    metal: 'Detalles facetados en hematita cromada y plata'
  },
  {
    id: 'jade-crema-imperial',
    name: 'Jade Crema Imperial & Pez Tótem',
    mineral: 'Esferas de Jade Crema Calibradas',
    image: 'assets/Catalogo/774025930_18080358908421186_1575086666310639023_n.jpg',
    tag: 'Prosperidad Continua',
    category: 'abundancia',
    categoryName: 'Abundancia & Fortuna',
    price: 89.00,
    intention: 'Gema tradicional de la nobleza oriental. Irradia serenidad emocional, estabilidad material y fluidez en negocios e inversiones.',
    chakra: 'Plexo Solar & Corazón',
    element: 'Tierra',
    zodiac: 'Tauro, Virgo, Géminis, Leo',
    metal: 'Cuentas cúbicas facetadas en oro de 18K'
  },
  {
    id: 'stacking-amatista-oro',
    name: 'Stacking Alquímico Amatista & Oro',
    mineral: 'Amatista Noble & Cuarzos Pasteles',
    image: 'assets/Catalogo/774508968_18081052451421186_3480494639016074095_n.jpg',
    tag: 'Set de Colección',
    category: 'amor',
    categoryName: 'Amor & Alta Frecuencia',
    price: 89.00,
    intention: 'Combinación multidimensional de transmutación espiritual (amatista), pureza (cuarzo cristal) y manifestación con dije estrella y número sagrado.',
    chakra: 'Corona & Tercer Ojo',
    element: 'Aire / Éter',
    zodiac: 'Piscis, Acuario, Sagitario, Virgo',
    metal: 'Charms de orfebrería con esmaltado marfil y baño de oro 18K'
  }
];

// Estado global de la tienda
let cart = [];
let activeCategory = 'all';
let searchQuery = '';

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

// ==========================================================================
// RENDERIZADO DEL CATÁLOGO CON FILTROS Y BÚSQUEDA
// ==========================================================================

function getFilteredProducts() {
  return PRODUCTS.filter(prod => {
    const matchesCategory = activeCategory === 'all' || prod.category === activeCategory;
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch = !q || (
      prod.name.toLowerCase().includes(q) ||
      prod.mineral.toLowerCase().includes(q) ||
      prod.intention.toLowerCase().includes(q) ||
      prod.chakra.toLowerCase().includes(q) ||
      prod.zodiac.toLowerCase().includes(q)
    );
    return matchesCategory && matchesSearch;
  });
}

function renderCatalog() {
  if (!productsGrid) return;
  const filtered = getFilteredProducts();

  if (filtered.length === 0) {
    productsGrid.innerHTML = `
      <div class="catalog-empty-search">
        <span class="empty-icon">✧</span>
        <h3>No encontramos piezas con ese criterio</h3>
        <p>Intenta con otro mineral (ej. <em>Lapislázuli, Jade, Turmalina</em>) o selecciona "Todas las Piezas".</p>
        <button class="btn btn-translucent" onclick="resetFilters()">Restablecer Filtros</button>
      </div>
    `;
    return;
  }

  productsGrid.innerHTML = filtered.map(prod => `
    <article class="luxury-card" data-category="${prod.category}">
      <div class="card-image-box">
        <span class="card-badge">${prod.tag}</span>
        <img src="${prod.image}" alt="${prod.name}" loading="lazy">
        <div class="card-action-overlay">
          <button class="btn-inspect" onclick="openQuickView('${prod.id}')">
            <span>Inspección Gemológica</span> ↗
          </button>
        </div>
      </div>
      <div class="card-details">
        <div class="card-meta-top">
          <span class="card-mineral">${prod.mineral}</span>
          <span class="card-chakra-badge">Chakra ${prod.chakra.split('(')[0].trim()}</span>
        </div>
        <h3 class="card-title">${prod.name}</h3>
        <p class="card-intention">${prod.intention}</p>
        <div class="card-zodiac-tag">
          <strong>Afín a:</strong> ${prod.zodiac}
        </div>
        <div class="card-footer-row">
          <div class="card-price-block">
            <span class="card-price-label">Inversión Fija</span>
            <span class="card-price">$${prod.price.toFixed(2)} USD</span>
          </div>
          <button class="btn-add-bag" onclick="addToCart('${prod.id}')">
            <span>+ Añadir a Bolsa</span>
          </button>
        </div>
      </div>
    </article>
  `).join('');
}

window.setCategoryFilter = function(category, element) {
  activeCategory = category;
  document.querySelectorAll('.filter-pill').forEach(btn => btn.classList.remove('active'));
  if (element) element.classList.add('active');
  renderCatalog();
};

window.handleCatalogSearch = function(e) {
  searchQuery = e.target.value;
  renderCatalog();
};

window.resetFilters = function() {
  activeCategory = 'all';
  searchQuery = '';
  const searchInput = document.getElementById('catalogSearchInput');
  if (searchInput) searchInput.value = '';
  document.querySelectorAll('.filter-pill').forEach((btn, idx) => {
    btn.classList.toggle('active', idx === 0);
  });
  renderCatalog();
};

// ==========================================================================
// QUICK VIEW (DETALLE GEMOLÓGICO)
// ==========================================================================

window.openQuickView = function(productId) {
  const p = PRODUCTS.find(item => item.id === productId);
  if (!p) return;

  quickViewContent.innerHTML = `
    <div class="qv-image">
      <img src="${p.image}" alt="${p.name}">
      <div class="qv-authentic-seal">
        <span>✦</span> AUTENTICIDAD MINERAL GARANTIZADA <span>✦</span>
      </div>
    </div>
    <div class="qv-info">
      <span class="gold-overline">${p.mineral} · ${p.categoryName}</span>
      <h3>${p.name}</h3>
      <p class="qv-desc">${p.intention}</p>
      
      <div class="qv-specs">
        <div class="spec-cell">
          <strong>Chakra Rector</strong>
          <span>${p.chakra}</span>
        </div>
        <div class="spec-cell">
          <strong>Elemento Alquímico</strong>
          <span>${p.element}</span>
        </div>
        <div class="spec-cell">
          <strong>Signos Zodiacales</strong>
          <span>${p.zodiac}</span>
        </div>
        <div class="spec-cell">
          <strong>Orfebrería Fina</strong>
          <span>${p.metal}</span>
        </div>
      </div>

      <div class="qv-inclusion-note">
        <span class="star-gold">✧</span> Incluye cofre rígido <em>The Rose Vault</em>, paño de gamuza y certificado nominativo de autenticidad.
      </div>

      <div class="qv-footer">
        <div class="qv-price-stack">
          <span class="qv-price-label">Inversión Certificada</span>
          <span class="qv-price">$${p.price.toFixed(2)} USD</span>
        </div>
        <button class="btn btn-gold" onclick="addToCart('${p.id}'); closeQuickViewModal();">
          Adquirir esta Joya
        </button>
      </div>
    </div>
  `;
  quickViewModal.classList.add('active');
  document.body.style.overflow = 'hidden';
};

function closeQuickViewModal() {
  quickViewModal.classList.remove('active');
  document.body.style.overflow = '';
}

if (closeQuickView) closeQuickView.addEventListener('click', closeQuickViewModal);
if (quickViewModal) {
  quickViewModal.addEventListener('click', (e) => {
    if (e.target === quickViewModal) closeQuickViewModal();
  });
}

// ==========================================================================
// BOLSA DE JOYAS (SHOPPING CART & TOASTS)
// ==========================================================================

window.addToCart = function(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  cart.push(product);
  updateCart();
  showToast(`✦ ${product.name} añadida a tu Bolsa de Joyas`);
  openCart();
};

window.removeFromCart = function(index) {
  const removed = cart.splice(index, 1);
  updateCart();
  if (removed[0]) {
    showToast(`Retirada: ${removed[0].name}`, 'info');
  }
};

function updateCart() {
  if (cartCount) cartCount.textContent = cart.length;

  if (cart.length === 0) {
    if (cartItems) {
      cartItems.innerHTML = `
        <div class="cart-empty-state">
          <div class="empty-gem-symbol">❦</div>
          <h4>Tu bolsa de alta joyería está vacía</h4>
          <p>Explora nuestras piezas consagradas para iniciar tu colección energética.</p>
          <a href="#catalogo" class="btn btn-translucent" onclick="closeCartDrawer()">Ver Catálogo</a>
        </div>
      `;
    }
    if (cartTotalVal) cartTotalVal.textContent = '$0.00 USD';
    if (checkoutBtn) checkoutBtn.disabled = true;
    return;
  }

  const total = cart.reduce((sum, item) => sum + item.price, 0);
  if (cartTotalVal) cartTotalVal.textContent = `$${total.toFixed(2)} USD`;
  if (checkoutBtn) checkoutBtn.disabled = false;

  if (cartItems) {
    cartItems.innerHTML = cart.map((item, idx) => `
      <div class="cart-row">
        <img src="${item.image}" alt="${item.name}" class="cart-thumb">
        <div class="cart-row-info">
          <span class="cart-row-mineral">${item.mineral}</span>
          <h4 class="cart-row-title">${item.name}</h4>
          <span class="cart-row-price">$${item.price.toFixed(2)} USD</span>
        </div>
        <button class="cart-row-remove" onclick="removeFromCart(${idx})" title="Retirar de la bolsa">&times;</button>
      </div>
    `).join('');
  }
}

function openCart() {
  if (cartDrawer) cartDrawer.classList.add('active');
  if (cartOverlay) cartOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeCartDrawer() {
  if (cartDrawer) cartDrawer.classList.remove('active');
  if (cartOverlay) cartOverlay.classList.remove('active');
  document.body.style.overflow = '';
}

if (cartTrigger) cartTrigger.addEventListener('click', openCart);
if (closeCart) closeCart.addEventListener('click', closeCartDrawer);
if (cartOverlay) cartOverlay.addEventListener('click', closeCartDrawer);

// ==========================================================================
// TOAST NOTIFICATIONS DE ALTO LUJO
// ==========================================================================

function showToast(message, type = 'gold') {
  let container = document.getElementById('toastContainer');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toastContainer';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `toast-item toast-${type}`;
  toast.innerHTML = `
    <span class="toast-sparkle">✦</span>
    <span class="toast-message">${message}</span>
  `;
  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('fade-out');
    setTimeout(() => toast.remove(), 400);
  }, 3200);
}

// ==========================================================================
// CHECKOUT & RESERVA PRIVADA
// ==========================================================================

if (checkoutBtn) {
  checkoutBtn.addEventListener('click', () => {
    closeCartDrawer();
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    if (modalOrderSummary) {
      modalOrderSummary.innerHTML = `
        <div class="summary-box">
          <div class="summary-line">
            <span>Piezas Seleccionadas:</span>
            <strong>${cart.length} joya(s) de autor</strong>
          </div>
          <div class="summary-line">
            <span>Inversión Total:</span>
            <strong class="gold-amount">$${total.toFixed(2)} USD</strong>
          </div>
          <div class="summary-perks">
            <span>✓ Estuche The Rose Vault de cortesía</span>
            <span>✓ Envío Priority Courier Asegurado mundial</span>
            <span>✓ Certificado Mineral Nominativo con Folio</span>
          </div>
        </div>
      `;
    }
    if (checkoutModal) checkoutModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  });
}

if (modalClose) {
  modalClose.addEventListener('click', () => {
    if (checkoutModal) checkoutModal.classList.remove('active');
    document.body.style.overflow = '';
  });
}

if (checkoutModal) {
  checkoutModal.addEventListener('click', (e) => {
    if (e.target === checkoutModal) {
      checkoutModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
}

if (orderForm) {
  orderForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('custName')?.value || 'Cliente Exclusivo';
    const phone = document.getElementById('custPhone')?.value || '';
    const email = document.getElementById('custEmail')?.value || '';
    const size = document.getElementById('custSize')?.value || '16.5cm Estándar';
    const address = document.getElementById('custAddress')?.value || '';
    const orderFolio = 'MAG-LUX-' + Math.floor(100000 + Math.random() * 900000);
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const itemsList = cart.map(i => i.name).join(', ');

    const confirmMsg = `✦ ADQUISICIÓN CONFIRMADA — MÁGICA ✦\n\nEstimada/o ${name},\nTu orden con Folio Exclusivo [${orderFolio}] ha sido ingresada con éxito al taller.\n\nPiezas: ${itemsList}\nTotal: $${total.toFixed(2)} USD\nTalla de Muñeca: ${size}\n\nTu joyera concierge privada se pondrá en contacto al ${phone} para validar el grabado caligráfico de tu certificado de autenticidad.`;

    alert(confirmMsg);

    const waText = encodeURIComponent(
      `✦ ORDEN MÁGICA BOUTIQUE [${orderFolio}] ✦\n\n` +
      `Hola Mágica, acabo de registrar mi adquisición privada:\n` +
      `• Nombre: ${name}\n` +
      `• Piezas: ${itemsList}\n` +
      `• Total: $${total.toFixed(2)} USD\n` +
      `• Talla: ${size}\n` +
      `• Envío: ${address}\n\n` +
      `Deseo confirmar la orden y coordinar la entrega asegurada.`
    );
    window.open(`https://wa.me/?text=${waText}`, '_blank');

    cart = [];
    updateCart();
    if (checkoutModal) checkoutModal.classList.remove('active');
    document.body.style.overflow = '';
    showToast(`✦ Orden ${orderFolio} generada con éxito`, 'gold');
  });
}

// ==========================================================================
// ORÁCULO ALQUÍMICO INTERACTIVO & SINTETIZADOR 432 HZ
// ==========================================================================

const ORACLE_STATE = {
  intention: null,
  zodiac: null
};

// Sintetizador armónico Web Audio API a 432 Hz (Frecuencia Sagrada)
function playCrystalChime(frequency = 432) {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();

    // Oscilador maestro (tono puro de cuenco de cuarzo)
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    // Oscilador armónico superior (brillo angelical)
    const harmonic = ctx.createOscillator();
    const harmonicGain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(frequency, ctx.currentTime);

    harmonic.type = 'triangle';
    harmonic.frequency.setValueAtTime(frequency * 1.5, ctx.currentTime);

    gain.gain.setValueAtTime(0.001, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.35, ctx.currentTime + 0.08);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 2.8);

    harmonicGain.gain.setValueAtTime(0.001, ctx.currentTime);
    harmonicGain.gain.exponentialRampToValueAtTime(0.12, ctx.currentTime + 0.06);
    harmonicGain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1.8);

    osc.connect(gain);
    harmonic.connect(harmonicGain);
    gain.connect(ctx.destination);
    harmonicGain.connect(ctx.destination);

    osc.start();
    harmonic.start();
    osc.stop(ctx.currentTime + 3.0);
    harmonic.stop(ctx.currentTime + 3.0);
  } catch (err) {
    console.debug('Audio chime note:', err);
  }
}

window.selectOracleIntention = function(intention, btn) {
  ORACLE_STATE.intention = intention;
  document.querySelectorAll('.oracle-intent-card').forEach(c => c.classList.remove('active'));
  if (btn) btn.classList.add('active');
  playCrystalChime(396);
  computeOracleMatch();
};

window.selectOracleZodiac = function(zodiac, btn) {
  ORACLE_STATE.zodiac = zodiac;
  document.querySelectorAll('.oracle-zodiac-pill').forEach(c => c.classList.remove('active'));
  if (btn) btn.classList.add('active');
  playCrystalChime(528);
  computeOracleMatch();
};

function computeOracleMatch() {
  const resultBox = document.getElementById('oracleResultBox');
  if (!resultBox) return;

  if (!ORACLE_STATE.intention || !ORACLE_STATE.zodiac) {
    resultBox.innerHTML = `
      <div class="oracle-prompt">
        <span class="oracle-prompt-icon">✧</span>
        <p>Selecciona tu <strong>Intención Principal</strong> y tu <strong>Signo Zodiacal</strong> para que el oráculo alinee tu mineral rector.</p>
      </div>
    `;
    return;
  }

  let matchedProduct = null;
  const i = ORACLE_STATE.intention;
  const z = ORACLE_STATE.zodiac;

  if (i === 'proteccion') {
    matchedProduct = (z === 'Escorpio' || z === 'Capricornio' || z === 'Aries')
      ? PRODUCTS.find(p => p.id === 'turmalina-negra-pez')
      : PRODUCTS.find(p => p.id === 'onix-centinela-azul');
  } else if (i === 'abundancia') {
    matchedProduct = (z === 'Tauro' || z === 'Virgo')
      ? PRODUCTS.find(p => p.id === 'jade-crema-imperial')
      : PRODUCTS.find(p => p.id === 'jade-pez-dorado');
  } else if (i === 'sabiduria') {
    matchedProduct = (z === 'Acuario' || z === 'Sagitario')
      ? PRODUCTS.find(p => p.id === 'lapislazuli-cabujon-oval')
      : (z === 'Libra' ? PRODUCTS.find(p => p.id === 'lapislazuli-placas') : PRODUCTS.find(p => p.id === 'lapislazuli-esferas'));
  } else if (i === 'amor') {
    matchedProduct = (z === 'Tauro' || z === 'Cáncer' || z === 'Libra')
      ? PRODUCTS.find(p => p.id === 'cuarzo-rosa-nacar')
      : PRODUCTS.find(p => p.id === 'cuarzo-blanco-jade');
  } else if (i === 'espiritualidad') {
    matchedProduct = PRODUCTS.find(p => p.id === 'stacking-amatista-oro') || PRODUCTS.find(p => p.id === 'cuarzo-blanco-jade');
  }

  if (!matchedProduct) matchedProduct = PRODUCTS[0];

  playCrystalChime(432);

  resultBox.innerHTML = `
    <div class="oracle-card-revealed">
      <div class="oracle-glow-halo"></div>
      <div class="oracle-card-grid">
        <div class="oracle-img-wrap">
          <img src="${matchedProduct.image}" alt="${matchedProduct.name}">
          <span class="oracle-match-badge">99.8% Resonancia Astral</span>
        </div>
        <div class="oracle-details-wrap">
          <span class="gold-overline">ALINEACIÓN: ${z.toUpperCase()} + ${i.toUpperCase()}</span>
          <h3>${matchedProduct.name}</h3>
          <span class="oracle-mineral-tag">${matchedProduct.mineral}</span>
          <p class="oracle-alchemical-text">
            Para la frecuencia natal de <strong>${z}</strong> enfocada en <strong>${i}</strong>, esta joya actúa como un resonador bioenergético. Armoniza el <strong>${matchedProduct.chakra}</strong> proporcionando anclaje y claridad luminosa.
          </p>
          <div class="oracle-meta-row">
            <div class="oracle-meta-item">
              <small>Elemento</small>
              <strong>${matchedProduct.element}</strong>
            </div>
            <div class="oracle-meta-item">
              <small>Orfebrería</small>
              <strong>${matchedProduct.metal.split('&')[0]}</strong>
            </div>
            <div class="oracle-meta-item">
              <small>Inversión</small>
              <strong class="gold-text">$${matchedProduct.price.toFixed(2)} USD</strong>
            </div>
          </div>
          <div class="oracle-actions">
            <button class="btn btn-gold" onclick="addToCart('${matchedProduct.id}')">
              ✦ Añadir Amuleto Recomendado a la Bolsa
            </button>
            <button class="btn btn-translucent" onclick="openQuickView('${matchedProduct.id}')">
              Inspección Gemológica Detallada
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}

// ==========================================================================
// FAQ ACCORDION INTERACTIVO
// ==========================================================================

function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    if (!question) return;

    question.addEventListener('click', () => {
      const isOpen = item.classList.contains('active');
      faqItems.forEach(i => i.classList.remove('active'));
      if (!isOpen) {
        item.classList.add('active');
      }
    });
  });
}

// ==========================================================================
// PROBADOR INTERACTIVO DE TALLAS
// ==========================================================================

window.selectWristSizeTest = function(size, desc, el) {
  document.querySelectorAll('.size-select-btn').forEach(btn => btn.classList.remove('active'));
  if (el) el.classList.add('active');
  const display = document.getElementById('sizeResultDisplay');
  if (display) {
    display.innerHTML = `
      <div class="size-feedback">
        <span class="size-tag-bold">Talla Seleccionada: ${size}</span>
        <p>${desc}</p>
        <small>✓ Todos nuestros hilos utilizan silicona náutica con memoria elástica indeformable y garantía de ajuste ergonómico perpetuo.</small>
      </div>
    `;
  }
};

// ==========================================================================
// MENÚ MÓVIL (HAMBURGER DRAWER)
// ==========================================================================

function initMobileMenu() {
  const mobileToggle = document.getElementById('mobileMenuToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileOverlay = document.getElementById('mobileOverlay');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  function openMenu() {
    if (mobileMenu) mobileMenu.classList.add('active');
    if (mobileOverlay) mobileOverlay.classList.add('active');
    if (mobileToggle) mobileToggle.classList.add('is-active');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    if (mobileMenu) mobileMenu.classList.remove('active');
    if (mobileOverlay) mobileOverlay.classList.remove('active');
    if (mobileToggle) mobileToggle.classList.remove('is-active');
    document.body.style.overflow = '';
  }

  if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
      if (mobileMenu && mobileMenu.classList.contains('active')) {
        closeMenu();
      } else {
        openMenu();
      }
    });
  }

  if (mobileOverlay) mobileOverlay.addEventListener('click', closeMenu);
  mobileLinks.forEach(link => link.addEventListener('click', closeMenu));
}

// ==========================================================================
// NEWSLETTER CLUB PRIVADO "EL CÍRCULO ÍNTIMO"
// ==========================================================================

function initNewsletter() {
  const form = document.getElementById('vipClubForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const emailInput = document.getElementById('vipEmail');
    const email = emailInput?.value || '';
    if (!email) return;

    showToast(`✦ Bienvenida/o al Círculo Íntimo de Mágica`, 'gold');
    form.innerHTML = `
      <div class="vip-success-box">
        <span class="gold-sparkle">✦</span>
        <h4>Membresía Registrada</h4>
        <p>Hemos enviado tu credencial privada a <strong>${email}</strong> junto al calendario lunar de recarga de gemas.</p>
      </div>
    `;
  });
}

// ==========================================================================
// EFECTO CANVAS STARDUST (PARTÍCULAS ESTELARES DE ORO ROSA)
// ==========================================================================

function initStardust() {
  const canvas = document.getElementById('stardustCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width, height;
  let particles = [];
  const PARTICLE_COUNT = 60;

  function resize() {
    width = canvas.width = canvas.parentElement.offsetWidth;
    height = canvas.height = canvas.parentElement.offsetHeight;
  }

  window.addEventListener('resize', resize);
  resize();

  class Particle {
    constructor() {
      this.reset(true);
    }

    reset(initial = false) {
      this.x = Math.random() * width;
      this.y = initial ? Math.random() * height : height + 10;
      this.size = Math.random() * 2.2 + 0.6;
      this.speedY = Math.random() * 0.45 + 0.15;
      this.speedX = (Math.random() - 0.5) * 0.3;
      this.opacity = Math.random() * 0.6 + 0.2;
      this.pulseSpeed = Math.random() * 0.02 + 0.008;
      this.pulse = Math.random() * Math.PI;
      this.color = Math.random() > 0.35 ? '230, 194, 168' : '244, 222, 208';
    }

    update() {
      this.y -= this.speedY;
      this.x += this.speedX;
      this.pulse += this.pulseSpeed;

      if (this.y < -10 || this.x < -10 || this.x > width + 10) {
        this.reset();
      }
    }

    draw() {
      const alpha = (Math.sin(this.pulse) * 0.35 + 0.65) * this.opacity;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${this.color}, ${alpha})`;
      ctx.shadowBlur = this.size * 5;
      ctx.shadowColor = `rgba(${this.color}, 0.8)`;
      ctx.fill();
    }
  }

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    particles.push(new Particle());
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);
    for (let p of particles) {
      p.update();
      p.draw();
    }
    requestAnimationFrame(animate);
  }

  animate();
}

// ==========================================================================
// INICIALIZACIÓN GLOBAL AL CARGAR
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  renderCatalog();
  updateCart();
  initStardust();
  initFaqAccordion();
  initMobileMenu();
  initNewsletter();
});
