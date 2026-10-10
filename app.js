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
    metal: 'Separadores facetados en baño de oro de 14K y acero inoxidable'
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
    metal: 'Charm de Orfebrería bañado en Oro de 14K y acero inoxidable'
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
    metal: 'Pez tallado con chapa de oro de 14K y rondelas en acero inoxidable'
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
    metal: 'Esferas separadoras facetadas en oro de 14K y acero inoxidable'
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
    metal: 'Cuentas cúbicas facetadas en oro de 14K y acero inoxidable'
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
    metal: 'Charms de orfebrería con esmaltado marfil y baño de oro 14K en acero inoxidable'
  }
];

// ==========================================================================
// ESTADO GLOBAL DE LA TIENDA, TEMA & MULTILENGUAJE (ES / EN / GA)
// ==========================================================================

let currentLang = 'es';
try {
  const savedLang = localStorage.getItem('magica_lang');
  if (savedLang && (savedLang === 'es' || savedLang === 'en' || savedLang === 'ga')) {
    currentLang = savedLang;
  }
} catch (e) {
  currentLang = 'es';
}

let currentTheme = 'light';
try {
  const savedTheme = localStorage.getItem('magica_theme');
  if (savedTheme === 'dark' || savedTheme === 'light') {
    currentTheme = savedTheme;
  }
} catch (e) {
  currentTheme = 'light';
}

function applyTheme(theme = currentTheme) {
  document.documentElement.setAttribute('data-theme', theme);
  const isDark = theme === 'dark';

  const t = (typeof TRANSLATIONS !== 'undefined' && TRANSLATIONS[currentLang]) ? TRANSLATIONS[currentLang] : null;

  const desktopIcon = document.getElementById('themeToggleIcon');
  const desktopLabel = document.getElementById('themeLabelText');
  const mobileIcon = document.getElementById('mobileThemeIcon');
  const mobileText = document.getElementById('mobileThemeText');

  const labelLight = t?.theme_light || 'Luz';
  const labelDark = t?.theme_dark || 'Noche';
  const modeLight = t?.theme_mode_light || 'Modo Luz';
  const modeDark = t?.theme_mode_dark || 'Modo Noche';

  if (desktopIcon) desktopIcon.textContent = isDark ? '☼' : '☾';
  if (desktopLabel) desktopLabel.textContent = isDark ? labelLight : labelDark;
  if (mobileIcon) mobileIcon.textContent = isDark ? '☼' : '☾';
  if (mobileText) mobileText.textContent = isDark ? modeLight : modeDark;
}

// Aplicar tema inmediatamente en tiempo de carga
applyTheme(currentTheme);

window.toggleTheme = function() {
  currentTheme = currentTheme === 'light' ? 'dark' : 'light';
  try {
    localStorage.setItem('magica_theme', currentTheme);
  } catch (e) {}

  applyTheme(currentTheme);

  const t = (typeof TRANSLATIONS !== 'undefined' && TRANSLATIONS[currentLang]) ? TRANSLATIONS[currentLang] : null;
  const tMsg = currentTheme === 'dark'
    ? (t?.theme_toast_dark || '✦ Modo Noche Mística activado')
    : (t?.theme_toast_light || '✦ Modo Luz Alquímica activado');
  if (typeof showToast === 'function') {
    showToast(tMsg, 'gold');
  }
};

let cart = [];
let activeCategory = 'all';
let searchQuery = '';

// Helper para obtener el producto con sus textos traducidos al idioma activo
function getLocalizedProduct(prod, lang = currentLang) {
  if (!prod) return null;
  const pTrans = (typeof PRODUCT_TRANSLATIONS !== 'undefined' && PRODUCT_TRANSLATIONS[prod.id] && PRODUCT_TRANSLATIONS[prod.id][lang])
    ? PRODUCT_TRANSLATIONS[prod.id][lang]
    : null;

  if (!pTrans) return prod;

  return {
    ...prod,
    name: pTrans.name || prod.name,
    mineral: pTrans.mineral || prod.mineral,
    categoryName: pTrans.categoryName || prod.categoryName,
    tag: pTrans.tag || prod.tag,
    intention: pTrans.intention || prod.intention,
    chakra: pTrans.chakra || prod.chakra,
    element: pTrans.element || prod.element,
    zodiac: pTrans.zodiac || prod.zodiac,
    metal: pTrans.metal || prod.metal
  };
}

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
// SISTEMA DE INTERNACIONALIZACIÓN REACTIVO (ES / EN / GA)
// ==========================================================================

window.switchLanguage = function(lang) {
  if (lang !== 'es' && lang !== 'en' && lang !== 'ga') return;
  currentLang = lang;
  try {
    localStorage.setItem('magica_lang', lang);
  } catch (e) {}

  applyLanguage();
  const notify = lang === 'ga'
    ? '✦ Teanga athraithe go Gaeilge'
    : (lang === 'en' ? '✦ Language switched to English' : '✦ Idioma cambiado a Español');
  showToast(notify, 'gold');
};

function applyLanguage() {
  applyTheme();
  const t = (typeof TRANSLATIONS !== 'undefined' && TRANSLATIONS[currentLang])
    ? TRANSLATIONS[currentLang]
    : null;
  if (!t) return;

  // 1. Selector de botones activos (.lang-btn)
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === currentLang);
  });

  // 2. Elementos estáticos con atributo data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) {
      el.innerHTML = t[key];
    }
  });

  // 3. Placeholders con atributo data-i18n-placeholder
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key] !== undefined) {
      el.setAttribute('placeholder', t[key]);
    }
  });

  // 4. Actualizar título de la página
  if (t['page_title']) {
    document.title = t['page_title'];
  }

  // 5. Re-renderizar catálogo con datos localizados
  renderCatalog();

  // 6. Re-renderizar bolsa de joyas con datos localizados
  updateCart();

  // 7. Si el oráculo tiene recomendación activa, refrescar su texto
  if (ORACLE_STATE.intention && ORACLE_STATE.zodiac) {
    computeOracleMatch();
  }
}

// ==========================================================================
// RENDERIZADO DEL CATÁLOGO CON FILTROS Y BÚSQUEDA MULTILINGÜE
// ==========================================================================

function getFilteredProducts() {
  return PRODUCTS.filter(prod => {
    const matchesCategory = activeCategory === 'all' || prod.category === activeCategory;
    const q = searchQuery.toLowerCase().trim();
    const loc = getLocalizedProduct(prod);
    const matchesSearch = !q || (
      loc.name.toLowerCase().includes(q) ||
      loc.mineral.toLowerCase().includes(q) ||
      loc.intention.toLowerCase().includes(q) ||
      loc.chakra.toLowerCase().includes(q) ||
      loc.zodiac.toLowerCase().includes(q)
    );
    return matchesCategory && matchesSearch;
  });
}

const LORENZA_META = {
  'cuarzo-blanco-jade': { badge: 'Best Seller', badgeType: 'black', reviews: 24, colors: ['#EDECE6', '#7F9D83'] },
  'jade-pez-dorado': { badge: '● Últimas piezas', badgeType: 'red', reviews: 18, colors: ['#E6D799', '#CF9B48'] },
  'lapislazuli-cabujon-oval': { badge: 'Best Seller', badgeType: 'black', reviews: 31, colors: ['#1C376A', '#CF9B48'] },
  'turmalina-negra-pez': { badge: 'Nuevo', badgeType: 'neutral', reviews: 14, colors: ['#1B1B1B', '#CF9B48'] },
  'lapislazuli-placas': { badge: 'Best Seller', badgeType: 'black', reviews: 22, colors: ['#213E78', '#BF9D58'] },
  'cuarzo-rosa-nacar': { badge: '● Últimas piezas', badgeType: 'red', reviews: 19, colors: ['#F3C5C5', '#F8F6F2'] },
  'jade-crema-imperial': { badge: 'Nuevo', badgeType: 'neutral', reviews: 16, colors: ['#E9DBBA', '#CF9B48'] },
  'stacking-amatista-oro': { badge: 'Set de Colección', badgeType: 'black', reviews: 27, colors: ['#885D96', '#CF9B48'] }
};

function renderCatalog() {
  if (!productsGrid) return;
  const t = (typeof TRANSLATIONS !== 'undefined' && TRANSLATIONS[currentLang]) ? TRANSLATIONS[currentLang] : {};
  const filtered = getFilteredProducts();

  if (filtered.length === 0) {
    productsGrid.innerHTML = `
      <div class="catalog-empty-search">
        <span class="empty-icon">✧</span>
        <h3>${t.empty_catalog_title || 'No encontramos piezas con ese criterio'}</h3>
        <p>${t.empty_catalog_p || 'Intenta con otro mineral o restablece los filtros.'}</p>
        <button class="btn btn-translucent" onclick="resetFilters()">${t.empty_catalog_btn || 'Restablecer Filtros'}</button>
      </div>
    `;
    return;
  }

  productsGrid.innerHTML = filtered.map(rawProd => {
    const prod = getLocalizedProduct(rawProd);
    const meta = LORENZA_META[rawProd.id] || { badge: prod.tag, badgeType: 'black', reviews: 18, colors: ['#CF9B48'] };
    const btnAdd = t.card_add_bag || '+ Añadir a Bolsa';

    const badgeClass = meta.badgeType === 'red' ? 'lorenza-badge badge-red' : (meta.badgeType === 'neutral' ? 'lorenza-badge badge-neutral' : 'lorenza-badge badge-black');
    const swatchesHtml = (meta.colors || []).map(c => `<span class="lorenza-swatch" style="background-color: ${c};" title="Gema / Tono"></span>`).join('');

    return `
      <article class="lorenza-card" data-category="${rawProd.category}">
        <div class="lorenza-card-img-wrap">
          <span class="${badgeClass}">${meta.badge}</span>
          <img src="${prod.image}" alt="${prod.name}" loading="lazy" decoding="async" width="400" height="400" onclick="openQuickView('${prod.id}')">
          <button class="lorenza-quick-add" onclick="openQuickView('${prod.id}')" aria-label="Ver detalles y tallas de ${prod.name}" title="Vista Rápida & Tallas">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
          </button>
        </div>
        <div class="lorenza-card-info">
          <h3 class="lorenza-product-title" onclick="openQuickView('${prod.id}')">${prod.name.toUpperCase()}</h3>
          <div class="lorenza-stars">
            <span class="stars-gold">★★★★★</span>
            <span class="review-count">(${meta.reviews})</span>
          </div>
          <div class="lorenza-price-row">
            <span class="lorenza-price">$${prod.price.toFixed(0)} USD</span>
          </div>
          <div class="lorenza-swatches">
            ${swatchesHtml}
          </div>
          <button class="lorenza-btn-bag" onclick="addToCart('${prod.id}')" aria-label="${btnAdd}">
            <span>${btnAdd.toUpperCase()}</span>
          </button>
        </div>
      </article>
    `;
  }).join('');
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
  const rawP = PRODUCTS.find(item => item.id === productId);
  if (!rawP) return;
  const p = getLocalizedProduct(rawP);
  const t = (typeof TRANSLATIONS !== 'undefined' && TRANSLATIONS[currentLang]) ? TRANSLATIONS[currentLang] : {};

  quickViewContent.innerHTML = `
    <div class="qv-image">
      <img src="${p.image}" alt="${p.name}">
      <div class="qv-authentic-seal">
        <span>✦</span> ${t.qv_guarantee || 'AUTENTICIDAD MINERAL GARANTIZADA'} <span>✦</span>
      </div>
    </div>
    <div class="qv-info">
      <span class="gold-overline">${p.mineral} · ${p.categoryName}</span>
      <h3>${p.name}</h3>
      <p class="qv-desc">${p.intention}</p>
      
      <div class="qv-specs">
        <div class="spec-cell">
          <strong>${t.qv_chakra_rector || 'Chakra Rector'}</strong>
          <span>${p.chakra}</span>
        </div>
        <div class="spec-cell">
          <strong>${t.qv_alchemical_element || 'Elemento Alquímico'}</strong>
          <span>${p.element}</span>
        </div>
        <div class="spec-cell">
          <strong>${t.qv_zodiac_signs || 'Signos Zodiacales'}</strong>
          <span>${p.zodiac}</span>
        </div>
        <div class="spec-cell">
          <strong>${t.qv_fine_jewelry || 'Orfebrería Fina'}</strong>
          <span>${p.metal}</span>
        </div>
      </div>

      <div class="qv-inclusion-note">
        <span class="star-gold">✧</span> ${t.qv_inclusion_note || 'Incluye cofre rígido <em>The Rose Vault</em>, paño de gamuza y certificado nominativo de autenticidad.'}
      </div>

      <div class="qv-footer">
        <div class="qv-price-stack">
          <span class="qv-price-label">${t.card_fixed_investment || 'Inversión Fija'}</span>
          <span class="qv-price">$${p.price.toFixed(2)} USD</span>
        </div>
        <div class="qv-actions-group">
          <button class="btn btn-gold" onclick="addToCart('${p.id}'); closeQuickViewModal();">
            ${t.qv_add_bag || '+ Añadir a la Bolsa'}
          </button>
          <button class="btn btn-whatsapp-subtle" onclick="inquireProductViaWhatsApp('${p.id}')">
            ${t.qv_wa_inquire || '<span>❦</span> Pedir por WhatsApp (+52 1 81 1031 6819)'}
          </button>
        </div>
      </div>
    </div>
  `;
  quickViewModal.classList.add('active');
  document.body.style.overflow = 'hidden';
};

window.inquireProductViaWhatsApp = function(productId) {
  const rawP = PRODUCTS.find(item => item.id === productId);
  if (!rawP) return;
  const p = getLocalizedProduct(rawP);
  const t = (typeof TRANSLATIONS !== 'undefined' && TRANSLATIONS[currentLang]) ? TRANSLATIONS[currentLang] : {};

  const title = t.wa_inquire_title || '✦ CONSULTA DE PIEZA EXCLUSIVA — MÁGICA ✦';
  const greeting = t.wa_inquire_body || '¡Hola Joyera Concierge! Me interesa adquirir esta pieza exclusiva:\n\n';
  const closing = t.wa_inquire_closing || '¿Tienen disponibilidad para consagración inmediata y coordinación de pago? ¡Muchas gracias!';
  const mineralTag = currentLang === 'ga' ? 'Mianra' : (currentLang === 'en' ? 'Mineral' : 'Mineral');
  const intentionTag = currentLang === 'ga' ? 'Rún' : (currentLang === 'en' ? 'Intention' : 'Intención');

  const msg = `${title}\n\n` +
    `${greeting}` +
    `💎 *${p.name}* ($${p.price.toFixed(2)} USD)\n` +
    `• ${mineralTag}: ${p.mineral}\n` +
    `• Chakra: ${p.chakra}\n` +
    `• ${intentionTag}: ${p.intention}\n\n` +
    `${closing}`;

  CONCIERGE_WHATSAPP.open(msg);
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
  const t = (typeof TRANSLATIONS !== 'undefined' && TRANSLATIONS[currentLang]) ? TRANSLATIONS[currentLang] : {};
  if (cartCount) cartCount.textContent = cart.length;

  if (cart.length === 0) {
    if (cartItems) {
      cartItems.innerHTML = `
        <div class="cart-empty-state">
          <div class="empty-gem-symbol">❦</div>
          <h4>${t.cart_empty_title || 'Tu bolsa de alta joyería está vacía'}</h4>
          <p>${t.cart_empty_desc || 'Explora nuestras piezas consagradas para iniciar tu colección energética.'}</p>
          <a href="#catalogo" class="btn btn-translucent" onclick="closeCartDrawer()">${t.cart_empty_btn || 'Ver Catálogo'}</a>
        </div>
      `;
    }
    const directWaBtn = document.getElementById('directWhatsAppCheckoutBtn');
    if (cartTotalVal) cartTotalVal.textContent = '$0.00 USD';
    if (checkoutBtn) checkoutBtn.disabled = true;
    if (directWaBtn) directWaBtn.disabled = true;
    return;
  }

  const total = cart.reduce((sum, item) => sum + item.price, 0);
  const directWaBtn = document.getElementById('directWhatsAppCheckoutBtn');
  if (cartTotalVal) cartTotalVal.textContent = `$${total.toFixed(2)} USD`;
  if (checkoutBtn) checkoutBtn.disabled = false;
  if (directWaBtn) directWaBtn.disabled = false;

  if (cartItems) {
    cartItems.innerHTML = cart.map((rawItem, idx) => {
      const item = getLocalizedProduct(rawItem);
      return `
        <div class="cart-row">
          <img src="${item.image}" alt="${item.name}" class="cart-thumb">
          <div class="cart-row-info">
            <span class="cart-row-mineral">${item.mineral}</span>
            <h4 class="cart-row-title">${item.name}</h4>
            <span class="cart-row-price">$${item.price.toFixed(2)} USD</span>
          </div>
          <button class="cart-row-remove" onclick="removeFromCart(${idx})" title="${t.cart_row_remove || 'Retirar de la bolsa'}">&times;</button>
        </div>
      `;
    }).join('');
  }
}

window.addToCart = function(productId) {
  const rawP = PRODUCTS.find(p => p.id === productId);
  if (!rawP) return;
  const product = getLocalizedProduct(rawP);
  const t = (typeof TRANSLATIONS !== 'undefined' && TRANSLATIONS[currentLang]) ? TRANSLATIONS[currentLang] : {};

  cart.push(rawP);
  updateCart();
  const msg = t.toast_added ? t.toast_added.replace('{name}', product.name) : `✦ ${product.name} añadida a tu Bolsa de Joyas`;
  showToast(msg);
  openCart();
};

window.removeFromCart = function(index) {
  const removed = cart.splice(index, 1);
  updateCart();
  if (removed[0]) {
    const loc = getLocalizedProduct(removed[0]);
    const t = (typeof TRANSLATIONS !== 'undefined' && TRANSLATIONS[currentLang]) ? TRANSLATIONS[currentLang] : {};
    const msg = t.toast_removed ? t.toast_removed.replace('{name}', loc.name) : `Retirada: ${loc.name}`;
    showToast(msg, 'info');
  }
};

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
// CONFIGURACIÓN DE CONCIERGE & WHATSAPP MULTILINGÜE
// ==========================================================================
const CONCIERGE_WHATSAPP = {
  display: '+52 1 81 1031 6819',
  clean: '5218110316819',
  open: function(text) {
    const url = `https://wa.me/${this.clean}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  }
};

// Formateador Senior de lista detallada de productos para WhatsApp
function formatOrderItemsForWhatsApp(items) {
  const t = (typeof TRANSLATIONS !== 'undefined' && TRANSLATIONS[currentLang]) ? TRANSLATIONS[currentLang] : {};
  if (!items || items.length === 0) {
    return currentLang === 'ga' ? 'Gan phíosaí roghnaithe' : (currentLang === 'en' ? 'No pieces selected' : 'Sin piezas seleccionadas');
  }

  const itemMap = new Map();
  items.forEach(item => {
    const key = item.id || item.name;
    if (!itemMap.has(key)) {
      itemMap.set(key, { ...item, quantity: 1 });
    } else {
      itemMap.get(key).quantity += 1;
    }
  });

  const lines = [];
  let index = 1;
  const mineralTag = currentLang === 'ga' ? 'Mianra:' : (currentLang === 'en' ? 'Mineral:' : 'Mineral:');
  const invTag = currentLang === 'ga' ? 'Infheistíocht:' : (currentLang === 'en' ? 'Investment:' : 'Inversión:');

  itemMap.forEach(rawItem => {
    const item = getLocalizedProduct(rawItem);
    const qtyLabel = item.quantity > 1 ? ` (x${item.quantity})` : '';
    const itemSubtotal = (item.price * item.quantity).toFixed(2);
    lines.push(
      `${index}️⃣ *${item.name}*${qtyLabel}\n` +
      `   ▫ ${mineralTag} ${item.mineral || 'Gema Natural'}\n` +
      `   ▫ ${invTag} $${itemSubtotal} USD`
    );
    index++;
  });

  return lines.join('\n\n');
}

// Generador de Mensaje Completo de Adquisición Multilingüe (ES / EN / GA)
function buildWhatsAppCartMessage(items, customerData = null) {
  const t = (typeof TRANSLATIONS !== 'undefined' && TRANSLATIONS[currentLang]) ? TRANSLATIONS[currentLang] : {};
  const folio = customerData?.orderFolio || ('MAG-LUX-' + Math.floor(100000 + Math.random() * 900000));
  const total = items.reduce((sum, item) => sum + item.price, 0);
  const itemsText = formatOrderItemsForWhatsApp(items);
  const piecesWord = currentLang === 'ga' ? 'seod(a)' : (currentLang === 'en' ? 'jewel(s)' : 'joya(s) de autor');

  let message = `${t.wa_order_title || '✦ ORDEN MÁGICA BOUTIQUE'} [${folio}] ✦\n\n`;
  message += `${t.wa_order_greeting || '¡Hola Concierge de Mágica Joyería! Deseo coordinar la adquisición de las siguientes piezas de mi carrito:'}\n\n`;
  message += `${t.wa_selected_pieces || '🛍️ *PIEZAS SELECCIONADAS:*'}\n${itemsText}\n\n`;
  message += `─────────────────────────\n`;
  message += `${t.wa_total_pieces || '📦 *Total Piezas:*'} ${items.length} ${piecesWord}\n`;
  message += `${t.wa_total_pay || '💰 *TOTAL A PAGAR:*'} $${total.toFixed(2)} USD\n`;
  message += `${t.wa_perks_note || '✨ *Cortesía:* Estuche The Rose Vault + Envío Courier Asegurado'}\n`;
  message += `─────────────────────────\n\n`;

  if (customerData) {
    message += `${t.wa_customer_title || '👤 *DATOS DEL CLIENTE / ENVÍO:*'}\n`;
    message += `${t.wa_cust_name || '• Nombre:'} ${customerData.name}\n`;
    if (customerData.phone) message += `${t.wa_cust_phone || '• Teléfono WhatsApp:'} ${customerData.phone}\n`;
    if (customerData.email) message += `${t.wa_cust_email || '• Correo Electrónico:'} ${customerData.email}\n`;
    if (customerData.size) message += `${t.wa_cust_size || '• Talla de Muñeca:'} ${customerData.size}\n`;
    if (customerData.address) message += `${t.wa_cust_address || '• Dirección de Entrega:'} ${customerData.address}\n\n`;
    const payTitle = t.wa_payment_title || '💳 *CONFIRMACIÓN DE PAGO:*';
    const payBody = t.wa_payment_body || 'Por favor envíenme los datos bancarios / método de pago para transferirles de inmediato mi comprobante de pago y que puedan trabajar en mi pedido. ¡Muchas gracias!';
    message += `${payTitle}\n${payBody}`;
  } else {
    message += `🤖 *DATOS DE ENTREGA & CONFIRMACIÓN:*\n`;
    message += currentLang === 'ga'
      ? `Dia duit a bhota/choncierge! Iarr mo chuid sonraí seachadta (Ainm, Seoladh seachadta, Méid láimhe) le do thoil agus seol na roghanna íocaíochta chugam chun m’ordú a dheimhniú. Go raibh maith agat!`
      : (currentLang === 'en'
        ? `Hello bot/concierge! Please ask me for my shipping details (Full name, Delivery address, Wrist size) and provide the payment details to confirm my order. Thank you!`
        : `¡Hola bot/concierge! Por favor solicítame mis datos de envío (Nombre completo, Dirección de entrega, Talla de muñeca) y envíame las opciones de pago para confirmar mi orden. ¡Muchas gracias!`);
  }

  return message;
}

// Pedido Directo por WhatsApp desde la Bolsa de Joyas
window.checkoutDirectViaWhatsApp = function() {
  const t = (typeof TRANSLATIONS !== 'undefined' && TRANSLATIONS[currentLang]) ? TRANSLATIONS[currentLang] : {};
  if (cart.length === 0) {
    showToast(t.cart_empty_title || 'Tu bolsa de joyas está vacía', 'gold');
    return;
  }
  const message = buildWhatsAppCartMessage(cart);
  CONCIERGE_WHATSAPP.open(message);
  const redirectMsg = currentLang === 'ga'
    ? '✦ Ag atreorú chuig WhatsApp Concierge le d’ordú...'
    : (currentLang === 'en' ? '✦ Redirecting to WhatsApp Concierge with your order...' : '✦ Redirigiendo a WhatsApp Concierge con tu orden...');
  showToast(redirectMsg, 'gold');
};

// ==========================================================================
// CHECKOUT & RESERVA PRIVADA
// ==========================================================================

if (checkoutBtn) {
  checkoutBtn.addEventListener('click', () => {
    closeCartDrawer();
    const t = (typeof TRANSLATIONS !== 'undefined' && TRANSLATIONS[currentLang]) ? TRANSLATIONS[currentLang] : {};
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const piecesWord = currentLang === 'ga' ? 'seod(a)' : (currentLang === 'en' ? 'jewel(s)' : 'joya(s) de autor');

    if (modalOrderSummary) {
      modalOrderSummary.innerHTML = `
        <div class="summary-box">
          <div class="summary-line">
            <span>${t.modal_summary_selected || 'Piezas Seleccionadas:'}</span>
            <strong>${cart.length} ${piecesWord}</strong>
          </div>
          <div class="summary-line">
            <span>${t.modal_summary_total || 'Inversión Total:'}</span>
            <strong class="gold-amount">$${total.toFixed(2)} USD</strong>
          </div>
          <div class="summary-perks">
            <span>✓ ${t.vault_perk1 || 'Estuche rígido de preservación mineral'}</span>
            <span>✓ ${t.vault_perk3 || 'Envío Priority Courier Asegurado mundial sin cargo'}</span>
            <span>✓ ${t.vault_perk2 || 'Certificado gemológico nominativo con folio'}</span>
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
    const t = (typeof TRANSLATIONS !== 'undefined' && TRANSLATIONS[currentLang]) ? TRANSLATIONS[currentLang] : {};
    if (cart.length === 0) {
      showToast(t.cart_empty_title || 'Tu bolsa de joyas está vacía', 'gold');
      return;
    }
    const name = document.getElementById('custName')?.value || 'Cliente Exclusivo';
    const phone = document.getElementById('custPhone')?.value || '';
    const email = document.getElementById('custEmail')?.value || '';
    const size = document.getElementById('custSize')?.value || '16.5cm Estándar';
    const address = document.getElementById('custAddress')?.value || '';
    const orderFolio = 'MAG-LUX-' + Math.floor(100000 + Math.random() * 900000);

    const customerData = { name, phone, email, size, address, orderFolio };
    const waText = buildWhatsAppCartMessage(cart, customerData);

    CONCIERGE_WHATSAPP.open(waText);

    cart = [];
    updateCart();
    if (checkoutModal) checkoutModal.classList.remove('active');
    document.body.style.overflow = '';

    const toastMsg = currentLang === 'ga'
      ? `✦ Ordú ${orderFolio} cruthaithe. Ag oscailt WhatsApp...`
      : (currentLang === 'en' ? `✦ Order ${orderFolio} generated. Opening WhatsApp...` : `✦ Orden ${orderFolio} generada. Abriendo WhatsApp...`);
    showToast(toastMsg, 'gold');
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
  const t = (typeof TRANSLATIONS !== 'undefined' && TRANSLATIONS[currentLang]) ? TRANSLATIONS[currentLang] : {};

  if (!ORACLE_STATE.intention || !ORACLE_STATE.zodiac) {
    resultBox.innerHTML = `
      <div class="oracle-prompt">
        <span class="oracle-prompt-icon">✧</span>
        <p>${t.oracle_empty_prompt || 'Selecciona tu <strong>Intención Principal</strong> y tu <strong>Signo Zodiacal</strong> para que el oráculo alinee tu mineral rector.'}</p>
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
  const p = getLocalizedProduct(matchedProduct);

  playCrystalChime(432);

  let explanation = '';
  if (currentLang === 'ga') {
    explanation = `I gcás mhinicíocht bhreithe <strong>${z}</strong> dírithe ar <strong>${i}</strong>, feidhmíonn an seod seo mar athshonadóir bithfhuinniúil. Déanann sé comhchuibhiú ar <strong>${p.chakra}</strong> ag soláthar daingneachta agus soiléireachta lonraí.`;
  } else if (currentLang === 'en') {
    explanation = `For the natal frequency of <strong>${z}</strong> focused on <strong>${i}</strong>, this jewel acts as a bioenergetic resonator. It harmonizes the <strong>${p.chakra}</strong> providing sacred grounding and luminous clarity.`;
  } else {
    explanation = `Para la frecuencia natal de <strong>${z}</strong> enfocada en <strong>${i}</strong>, esta joya actúa como un resonador bioenergético. Armoniza el <strong>${p.chakra}</strong> proporcionando anclaje y claridad luminosa.`;
  }

  const alignmentLabel = currentLang === 'ga'
    ? `AILÍNIÚ: ${z.toUpperCase()} + ${i.toUpperCase()}`
    : (currentLang === 'en' ? `ALIGNMENT: ${z.toUpperCase()} + ${i.toUpperCase()}` : `ALINEACIÓN: ${z.toUpperCase()} + ${i.toUpperCase()}`);

  resultBox.innerHTML = `
    <div class="oracle-card-revealed">
      <div class="oracle-glow-halo"></div>
      <div class="oracle-card-grid">
        <div class="oracle-img-wrap">
          <img src="${p.image}" alt="${p.name}">
          <span class="oracle-match-badge">${t.oracle_resonance_badge || '99.8% Resonancia Astral'}</span>
        </div>
        <div class="oracle-details-wrap">
          <span class="gold-overline">${alignmentLabel}</span>
          <h3>${p.name}</h3>
          <span class="oracle-mineral-tag">${p.mineral}</span>
          <p class="oracle-alchemical-text">
            ${explanation}
          </p>
          <div class="oracle-meta-row">
            <div class="oracle-meta-item">
              <small>${t.oracle_elem_label || 'Elemento'}</small>
              <strong>${p.element}</strong>
            </div>
            <div class="oracle-meta-item">
              <small>${t.oracle_metal_label || 'Orfebrería'}</small>
              <strong>${p.metal.split('&')[0]}</strong>
            </div>
            <div class="oracle-meta-item">
              <small>${t.oracle_inv_label || 'Inversión'}</small>
              <strong class="gold-text">$${p.price.toFixed(2)} USD</strong>
            </div>
          </div>
          <div class="oracle-actions">
            <button class="btn btn-gold" onclick="addToCart('${p.id}')">
              ${t.oracle_add_rec || '✦ Añadir Amuleto Recomendado a la Bolsa'}
            </button>
            <button class="btn btn-whatsapp-subtle" onclick="inquireOracleViaWhatsApp('${p.id}')">
              <span>❦</span> ${t.oracle_wa_btn || 'Consultar Recomendación por WhatsApp (+52 1 81 1031 6819)'}
            </button>
            <button class="btn btn-translucent" onclick="openQuickView('${p.id}')">
              ${t.oracle_inspect_btn || 'Inspección Gemológica Detallada'}
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}

window.inquireOracleViaWhatsApp = function(productId) {
  const rawP = PRODUCTS.find(item => item.id === productId);
  if (!rawP) return;
  const p = getLocalizedProduct(rawP);
  const z = ORACLE_STATE.zodiac || 'Mi Signo';
  const i = ORACLE_STATE.intention || 'Mi Intención';

  let msg = '';
  if (currentLang === 'ga') {
    msg = `✦ COMHAIRLE AN ORACAIL AILCEAMAIGH — MÁGICA ✦\n\n` +
      `Dia duit, a Chonciérge Mágica! Mhol an tOracal Réaltach an seod seo dom:\n\n` +
      `🔮 *${p.name}* ($${p.price.toFixed(2)} USD)\n` +
      `• Mianra: ${p.mineral}\n` +
      `• Comhartha Réaltach: ${z}\n` +
      `• Rún: ${i}\n\n` +
      `Ba mhaith liom treoir a fháil chun é a ordú coisricthe do mo chairt bhreithe agus íocaíocht a shocrú. Go raibh míle maith agat!`;
  } else if (currentLang === 'en') {
    msg = `✦ ALCHEMICAL ORACLE CONSULTATION — MÁGICA ✦\n\n` +
      `Hello Mágica Jewelry Concierge! The Astral Oracle recommended this jewel to me:\n\n` +
      `🔮 *${p.name}* ($${p.price.toFixed(2)} USD)\n` +
      `• Mineral: ${p.mineral}\n` +
      `• Resonant Astral Sign: ${z}\n` +
      `• Intention: ${i}\n\n` +
      `I would like guidance to acquire it consecrated to my natal chart and coordinate payment. Thank you!`;
  } else {
    msg = `✦ CONSULTA DEL ORÁCULO ALQUÍMICO — MÁGICA ✦\n\n` +
      `¡Hola Concierge de Mágica Joyería! El Oráculo Astral me recomendó esta joya:\n\n` +
      `🔮 *${p.name}* ($${p.price.toFixed(2)} USD)\n` +
      `• Mineral: ${p.mineral}\n` +
      `• Signo Astral Afín: ${z}\n` +
      `• Intención: ${i}\n\n` +
      `Deseo asesoría para adquirirla consagrada a mi carta natal y coordinar el pago. ¡Gracias!`;
  }
  CONCIERGE_WHATSAPP.open(msg);
};

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
  const t = (typeof TRANSLATIONS !== 'undefined' && TRANSLATIONS[currentLang]) ? TRANSLATIONS[currentLang] : {};

  if (display) {
    const isCustom = size.includes('Medida') || size.includes('Custom') || size.includes('Saincheaptha');
    const selectedLabel = currentLang === 'ga' ? 'Méid Roghnaithe' : (currentLang === 'en' ? 'Selected Size' : 'Talla Seleccionada');
    const customBtnText = currentLang === 'ga'
      ? '<span>❦</span> Seol mo mhéid cruinn chuig an gConciérge (+52 1 81 1031 6819)'
      : (currentLang === 'en' ? '<span>❦</span> Send my exact wrist size to Concierge (+52 1 81 1031 6819)' : '<span>❦</span> Enviar mi medida exacta a Concierge (+52 1 81 1031 6819)');
    const waCustomMsg = currentLang === 'ga'
      ? 'Dia duit a Mágica, ba mhaith liom cúngú le méid saincheaptha do mo chaol na láimhe a ordú.'
      : (currentLang === 'en' ? 'Hello Mágica Jewelry, I would like to order a bracelet with a custom wrist size.' : 'Hola Mágica Joyería, deseo encargar una pulsera con medida personalizada para mi muñeca.');
    const guaranteeText = t.size_guarantee || '✓ Todos nuestros hilos utilizan silicona náutica con memoria elástica indeformable y garantía de ajuste ergonómico perpetuo.';

    display.innerHTML = `
      <div class="size-feedback">
        <span class="size-tag-bold">${selectedLabel}: ${size}</span>
        <p>${desc}</p>
        ${isCustom ? `
          <div style="margin: 14px 0;">
            <a href="https://wa.me/${CONCIERGE_WHATSAPP.clean}?text=${encodeURIComponent(waCustomMsg)}" target="_blank" class="btn btn-whatsapp-subtle" style="display:inline-flex; width:auto; text-decoration:none;">
              ${customBtnText}
            </a>
          </div>
        ` : ''}
        <small>${guaranteeText}</small>
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
  const PARTICLE_COUNT = window.innerWidth < 768 ? 25 : 60;

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
      this.opacity = currentTheme === 'dark' ? (Math.random() * 0.6 + 0.2) : (Math.random() * 0.35 + 0.15);
      this.pulseSpeed = Math.random() * 0.02 + 0.008;
      this.pulse = Math.random() * Math.PI;
      const isDark = currentTheme === 'dark';
      this.color = isDark
        ? (Math.random() > 0.35 ? '230, 194, 168' : '244, 222, 208')
        : (Math.random() > 0.35 ? '180, 130, 85' : '150, 107, 67');
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

// Inicialización de botones de cambio de tema
function initThemeToggle() {
  const btnDesktop = document.getElementById('themeToggleBtn');
  const btnMobile = document.getElementById('mobileThemeToggleBtn');
  if (btnDesktop) {
    btnDesktop.addEventListener('click', () => window.toggleTheme());
  }
  if (btnMobile) {
    btnMobile.addEventListener('click', () => window.toggleTheme());
  }
}

// ==========================================================================
// SISTEMA LEGAL & COMPLIANCE PARA PRODUCCIÓN (AVISO, TÉRMINOS, ENVÍOS)
// ==========================================================================

const LEGAL_DOCS = {
  privacidad: {
    title: 'Aviso de Privacidad Integral',
    updated: 'Última actualización: Enero 2026 · Conforme a LFPDPPP & GDPR',
    content: `
      <p>En <strong>MÁGICA INTENCIÓN</strong> (<em>magicaintencion.com</em>), con domicilio fiscal y de taller en San Pedro Garza García / Monterrey, N.L., México, y canales oficiales <strong>contacto@magicaintencion.com</strong> y WhatsApp Concierge <strong>+52 1 81 1031 6819</strong>, nos comprometemos a resguardar la privacidad de cada uno de nuestros guardianes y coleccionistas.</p>
      
      <h4>1. Datos Personales Recabados</h4>
      <p>Los datos que recopilamos a través de nuestro sitio web y enlace directo con WhatsApp Business incluyen: nombre completo del titular o destinatario del certificado gemológico, número telefónico de WhatsApp, dirección completa de entrega con código postal, correo electrónico y medida de muñeca.</p>

      <h4>2. Finalidades Primarias</h4>
      <p>Sus datos son empleados estrictamente para: confeccionar a medida su talismán, emitir el Certificado Nominativo de Autenticidad Mineral con folio reservado, generar la guía de mensajería courier satelital asegurada y coordinar la entrega personalizada vía Concierge.</p>

      <h4>3. No Transferencia a Terceros</h4>
      <p>MÁGICA no vende, alquila ni comparte sus datos con redes publicitarias de terceros ni intermediarios ajenos al servicio logístico directo de entrega (DHL Express, FedEx o Estafeta).</p>

      <h4>4. Derechos ARCO</h4>
      <p>En todo momento usted podrá ejercer sus derechos de Acceso, Rectificación, Cancelación u Oposición enviando una solicitud formal a <strong>contacto@magicaintencion.com</strong> con el asunto "Derechos ARCO".</p>
    `
  },
  terminos: {
    title: 'Términos y Condiciones del Servicio',
    updated: 'Vigencia 2026 · Venta en Línea de Alta Joyería Holística',
    content: `
      <p>Al acceder y realizar un pedido en <strong>magicaintencion.com</strong> o a través de nuestros canales oficiales de WhatsApp Concierge, usted acepta los siguientes términos:</p>

      <h4>1. Precios y Divisas</h4>
      <p>Nuestra colección se comercializa a una inversión transparente fija de <strong>$89.00 USD</strong> por pieza (o su equivalente en Pesos Mexicanos al tipo de cambio oficial vigente al momento de emitir la orden). Todos los precios incluyen estuche rígido de lujo <em>The Rose Vault</em>, paño de gamuza, certificado gemológico y envío prioritario asegurado de cortesía.</p>

      <h4>2. Autenticidad Mineral Garantizada</h4>
      <p>Garantizamos al 100% que los cuarzos y piedras empleadas son minerales naturales legítimos extraídos de vetas geológicas reales (Grado AAA+), libres de resinas o imitaciones plásticas. Cada gema puede presentar variaciones cromáticas naturales irrepetibles inherentes a su formación geológica.</p>

      <h4>3. Proceso de Pedido y Concierge</h4>
      <p>Al pulsar "Crear Pedido en WhatsApp", su carrito genera una orden reservada comunicada directamente a nuestro número verificado <strong>+52 1 81 1031 6819</strong>, donde se confirman medidas, detalles de empaque y enlaces seguros de pago (SPEI, Tarjeta de Crédito vía Stripe o Mercado Pago).</p>
    `
  },
  envios: {
    title: 'Políticas de Envío & Garantía de Ajuste',
    updated: 'Cobertura Nacional (México) e Internacional Asegurada',
    content: `
      <p>En MÁGICA cada pieza es tratada como un objeto de arte sagrado. Todos nuestros envíos viajan con cobertura de seguro contra robo o extravío.</p>

      <h4>1. Tiempos de Entrega</h4>
      <p>• <strong>Envíos Nacionales (México):</strong> De 2 a 4 días hábiles vía Courier Express.<br>
      • <strong>Envíos Internacionales (EE.UU., Canadá, Europa, Latinoamérica):</strong> De 4 a 7 días hábiles con seguimiento satelital privado.</p>

      <h4>2. Garantía de Ajuste de Muñeca de Cortesía</h4>
      <p>Si al recibir tu pieza notas que prefieres un calce más ceñido o más holgado, cuentas con <strong>Garantía Total de Ajuste de Cortesía</strong>: nuestro taller reconfigura los nudos o añade/retira cuentas sin ningún costo por el trabajo artesanal.</p>

      <h4>3. Devoluciones por Defecto de Taller</h4>
      <p>Cuentas con 15 días naturales a partir de la recepción para notificar cualquier eventualidad con los herrajes o acabados orfebres vía WhatsApp al <strong>+52 1 81 1031 6819</strong> o al correo <strong>contacto@magicaintencion.com</strong> para reemplazo prioritario inmediato.</p>
    `
  }
};

window.openLegalModal = function(tabKey = 'privacidad') {
  const modal = document.getElementById('legalModal');
  if (!modal) return;
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
  window.switchLegalTab(tabKey);
};

window.closeLegalModal = function() {
  const modal = document.getElementById('legalModal');
  if (!modal) return;
  modal.classList.remove('active');
  document.body.style.overflow = '';
};

window.switchLegalTab = function(tabKey) {
  const doc = LEGAL_DOCS[tabKey] || LEGAL_DOCS.privacidad;
  const bodyEl = document.getElementById('legalContentBody');
  if (bodyEl) {
    bodyEl.innerHTML = `
      <div class="legal-doc-header">
        <span class="gold-overline">DOCUMENTO OFICIAL · MÁGICA INTENCIÓN</span>
        <h2>${doc.title}</h2>
        <small class="legal-date-tag">${doc.updated}</small>
      </div>
      <div class="legal-doc-text">
        ${doc.content}
      </div>
      <div class="legal-doc-footer">
        <a href="https://wa.me/5218110316819?text=Hola%20Concierge%20de%20M%C3%A1gica%2C%20tengo%20una%20consulta%20legal%20o%20de%20env%C3%ADo." target="_blank" class="btn btn-whatsapp-subtle">
          <span>❦</span> Consultar con Concierge (+52 1 81 1031 6819)
        </a>
      </div>
    `;
  }

  document.querySelectorAll('.legal-tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.id === `tab${tabKey.charAt(0).toUpperCase() + tabKey.slice(1)}`);
  });
};

// ==========================================================================
// REPRODUCTOR DE LA CANCIÓN OFICIAL DE MÁGICA (432 Hz)
// ==========================================================================

let isMagicaMusicPlaying = false;

window.toggleMagicaMusic = function() {
  const audio = document.getElementById('magicaAudioPlayer');
  if (!audio) return;

  const ambientBtn = document.getElementById('ambientMusicBtn');
  const mobileBtn = document.getElementById('mobileMusicBtn');
  const ritualPlayBtn = document.getElementById('ritualPlayBtn');
  const ritualPlayIcon = document.getElementById('ritualPlayIcon');
  const ritualPlayText = document.getElementById('ritualPlayText');
  const waveIndicator = document.getElementById('musicWaveIndicator');
  const musicLabel = document.getElementById('musicBtnLabel');
  const mobileMusicIcon = document.getElementById('mobileMusicIcon');

  if (audio.paused) {
    audio.play().then(() => {
      isMagicaMusicPlaying = true;
      if (ambientBtn) ambientBtn.classList.add('playing');
      if (mobileBtn) mobileBtn.classList.add('playing');
      if (ritualPlayBtn) ritualPlayBtn.classList.add('playing');
      if (waveIndicator) waveIndicator.classList.add('active');
      if (musicLabel) musicLabel.textContent = 'Pausar Melodía';
      if (mobileMusicIcon) mobileMusicIcon.textContent = '❚❚';
      if (ritualPlayIcon) ritualPlayIcon.textContent = '❚❚';
      if (ritualPlayText) ritualPlayText.textContent = 'Pausar Melodía Sagrada';
      showToast('♫ Melodía Oficial Mágica (432 Hz) iniciada', 'gold');
    }).catch(err => {
      console.warn('Audio play prevented:', err);
      showToast('Toca para reproducir la melodía', 'gold');
    });
  } else {
    audio.pause();
    isMagicaMusicPlaying = false;
    if (ambientBtn) ambientBtn.classList.remove('playing');
    if (mobileBtn) mobileBtn.classList.remove('playing');
    if (ritualPlayBtn) ritualPlayBtn.classList.remove('playing');
    if (waveIndicator) waveIndicator.classList.remove('active');
    if (musicLabel) musicLabel.textContent = 'Música 432 Hz';
    if (mobileMusicIcon) mobileMusicIcon.textContent = '♫';
    if (ritualPlayIcon) ritualPlayIcon.textContent = '▶';
    if (ritualPlayText) ritualPlayText.textContent = 'Escuchar Melodía Oficial (3:49)';
    showToast('Melodía en pausa', 'gold');
  }
};

// ==========================================================================
// CONCIERGE BOT ALQUÍMICO INTERACTIVO (INFORMES EN VIVO ANTES DE WHATSAPP)
// ==========================================================================

let isConciergeChatInitialized = false;

window.toggleConciergeChat = function() {
  const widget = document.getElementById('conciergeChatWidget');
  if (!widget) return;

  const isActive = widget.classList.contains('active');
  if (isActive) {
    window.closeConciergeChat();
  } else {
    window.openConciergeChat();
  }
};

window.openConciergeChat = function() {
  const widget = document.getElementById('conciergeChatWidget');
  const overlay = document.getElementById('conciergeChatOverlay');
  if (!widget) return;

  widget.classList.add('active');
  if (overlay) overlay.classList.add('active');

  if (!isConciergeChatInitialized) {
    initConciergeChat();
    isConciergeChatInitialized = true;
  }

  setTimeout(() => {
    const msgContainer = document.getElementById('chatMessages');
    if (msgContainer) msgContainer.scrollTop = msgContainer.scrollHeight;
    const input = document.getElementById('chatTextInput');
    if (input && window.innerWidth > 768) input.focus();
  }, 100);
};

window.closeConciergeChat = function() {
  const widget = document.getElementById('conciergeChatWidget');
  const overlay = document.getElementById('conciergeChatOverlay');
  if (widget) widget.classList.remove('active');
  if (overlay) overlay.classList.remove('active');
};

function initConciergeChat() {
  const msgContainer = document.getElementById('chatMessages');
  if (!msgContainer) return;

  const welcomeHtml = `
    <div class="chat-msg bot">
      <p>✦ <strong>¡Hola y bienvenida/o a Mágica!</strong> Soy tu Concierge Alquímica virtual.</p>
      <p>Estoy aquí para darte <strong>todos los informes de nuestras joyas</strong> antes de comprar: propiedades de los cuarzos, sintonía con tu carta astral, guía de tallas y autenticidad mineral.</p>
      <p><em>¿Qué intención o gema te gustaría explorar hoy?</em></p>
    </div>
  `;
  msgContainer.innerHTML = welcomeHtml;
}

window.handleChatChip = function(queryText) {
  const input = document.getElementById('chatTextInput');
  if (input) input.value = queryText;
  processChatQuery(queryText);
};

window.handleChatSubmit = function(e) {
  if (e) e.preventDefault();
  const input = document.getElementById('chatTextInput');
  if (!input) return;
  const q = input.value.trim();
  if (!q) return;
  input.value = '';
  processChatQuery(q);
};

function appendChatMessage(sender, htmlContent) {
  const msgContainer = document.getElementById('chatMessages');
  if (!msgContainer) return;

  const msgDiv = document.createElement('div');
  msgDiv.className = `chat-msg ${sender}`;
  msgDiv.innerHTML = htmlContent;
  msgContainer.appendChild(msgDiv);

  msgContainer.scrollTop = msgContainer.scrollHeight;
}

function processChatQuery(rawQuery) {
  appendChatMessage('user', rawQuery);
  const q = rawQuery.toLowerCase();

  setTimeout(() => {
    let reply = '';

    // 1. CONFIRMACIÓN EN WHATSAPP / COMPRA
    if (q.includes('confirmar') || q.includes('whatsapp') || q.includes('comprar') || q.includes('pedido') || q.includes('orden')) {
      const totalCartCount = cart.reduce((sum, i) => sum + i.quantity, 0);
      const totalAmount = cart.reduce((sum, i) => sum + (i.price * i.quantity), 0);

      if (totalCartCount > 0) {
        const itemNames = cart.map(i => `• ${i.name} ($${i.price} USD)`).join('<br>');
        const waMsg = encodeURIComponent(`Hola Concierge de Mágica, deseo confirmar mi pedido con las siguientes piezas:\n${cart.map(i => `• ${i.name}`).join('\n')}\nTotal: $${totalAmount.toFixed(0)} USD.`);
        reply = `
          <p>✦ <strong>¡Excelente elección!</strong> Tienes <strong>${totalCartCount} pieza(s)</strong> en tu bolsa de joyas:</p>
          <p style="margin: 6px 0; color: #555;">${itemNames}</p>
          <p><strong>Total: $${totalAmount.toFixed(0)} USD</strong> (Envío asegurado y estuche The Rose Vault de cortesía incluidos).</p>
          <p>Pulsa el botón de abajo para pasar a nuestro <strong>WhatsApp Concierge Oficial (+52 1 81 1031 6819)</strong> donde una joyera humana confirmará tu folio y emitirá tu certificado:</p>
          <a href="https://wa.me/5218110316819?text=${waMsg}" target="_blank" class="chat-btn-wa-confirm">
            <span>❦</span> Confirmar Orden en WhatsApp (+52 1 81 1031 6819) ↗
          </a>
        `;
      } else {
        reply = `
          <p>Aún no has agregado piezas a tu bolsa. Puedes elegir tu talismán favorito en nuestro catálogo por una inversión fija de <strong>$89.00 USD</strong>.</p>
          <p>Si deseas coordinar una orden especial directamente con un concierge humano, puedes enlazar ahora mismo:</p>
          <a href="https://wa.me/5218110316819?text=Hola%20M%C3%A1gica%20Joyer%C3%ADa%2C%20deseo%20confirmar%20un%20pedido%20con%20una%20joyera%20concierge." target="_blank" class="chat-btn-wa-confirm">
            <span>❦</span> Hablar con Joyera en WhatsApp (+52 1 81 1031 6819) ↗
          </a>
        `;
      }
    }
    // 2. PROTECCIÓN
    else if (q.includes('protec') || q.includes('envidia') || q.includes('negativ') || q.includes('escudo') || q.includes('ónix') || q.includes('onix') || q.includes('turmalina')) {
      reply = `
        <p>🛡️ <strong>Para Protección y Blindaje Energético</strong> recomendamos nuestros dos talismanes supremos:</p>
        <div class="chat-card-suggestion">
          <div class="chat-card-top">
            <img src="assets/Catalogo/pulsera-onix-centinela-azul.jpg" class="chat-card-thumb" alt="Ónix Centinela">
            <div class="chat-card-info">
              <h5>Ónix Nocturno & Centinela Azul</h5>
              <span>Ónix Negro Pulido & Lapislázuli · $89 USD</span>
            </div>
          </div>
          <button class="chat-card-btn" onclick="addToCart('onix-centinela-azul'); showToast('Añadido a la bolsa', 'gold');">+ Agregar a la Bolsa</button>
        </div>
        <div class="chat-card-suggestion">
          <div class="chat-card-top">
            <img src="assets/Catalogo/770701607_18079976153421186_6230702332285530384_n.jpg" class="chat-card-thumb" alt="Turmalina Negra">
            <div class="chat-card-info">
              <h5>Turmalina Negra & Pez de Oro</h5>
              <span>Transmutación de Radiación · $89 USD</span>
            </div>
          </div>
          <button class="chat-card-btn" onclick="addToCart('turmalina-negra-pez'); showToast('Añadido a la bolsa', 'gold');">+ Agregar a la Bolsa</button>
        </div>
        <p style="margin-top: 8px;">Ambas piezas transmutan vibraciones densas y anclan el chakra raíz.</p>
      `;
    }
    // 3. ABUNDANCIA Y DINERO
    else if (q.includes('abundan') || q.includes('dinero') || q.includes('prosper') || q.includes('riquez') || q.includes('exito') || q.includes('éxito') || q.includes('jade') || q.includes('fortuna')) {
      reply = `
        <p>💰 <strong>Para Atracción de Abundancia y Flujo Financiero</strong>:</p>
        <div class="chat-card-suggestion">
          <div class="chat-card-top">
            <img src="assets/Catalogo/pulsera-jade-pez-dorado.jpg" class="chat-card-thumb" alt="Jade Dorado">
            <div class="chat-card-info">
              <h5>Jade Dorado & Pez de Fortuna</h5>
              <span>Jade Amarillo Crema & Oro 14K · $89 USD</span>
            </div>
          </div>
          <button class="chat-card-btn" onclick="addToCart('jade-pez-dorado'); showToast('Añadido a la bolsa', 'gold');">+ Agregar a la Bolsa</button>
        </div>
        <p style="margin-top: 8px;">El Jade Amarillo actúa sobre el Plexo Solar, disolviendo bloqueos de merecimiento e impulsando proyectos comerciales.</p>
      `;
    }
    // 4. SABIDURÍA, ENFOQUE, LAPISLÁZULI
    else if (q.includes('sabidur') || q.includes('mente') || q.includes('lapis') || q.includes('clarividencia') || q.includes('estudio') || q.includes('decision') || q.includes('liderazgo')) {
      reply = `
        <p>✦ <strong>Para Claridad Mental, Intuición y Liderazgo</strong> el rey indiscutible es el <strong>Lapislázuli Grado AAA+</strong>:</p>
        <div class="chat-card-suggestion">
          <div class="chat-card-top">
            <img src="assets/Catalogo/pulsera-lapislazuli-esferas.jpg" class="chat-card-thumb" alt="Lapislázuli Imperial">
            <div class="chat-card-info">
              <h5>Lapislázuli Imperial & Plata</h5>
              <span>Gema de Faraones & Reyes · $89 USD</span>
            </div>
          </div>
          <button class="chat-card-btn" onclick="addToCart('lapislazuli-esferas'); showToast('Añadido a la bolsa', 'gold');">+ Agregar a la Bolsa</button>
        </div>
        <p style="margin-top: 8px;">Estimula el Tercer Ojo y la autoexpresión lúcida en juntas de negocios y momentos decisivos.</p>
      `;
    }
    // 5. AMOR, SERENIDAD, CUARZO ROSA
    else if (q.includes('amor') || q.includes('paz') || q.includes('calma') || q.includes('serenidad') || q.includes('pareja') || q.includes('rosa')) {
      reply = `
        <p>🌸 <strong>Para Amor Propio, Armonía y Sanación Emocional</strong>:</p>
        <div class="chat-card-suggestion">
          <div class="chat-card-top">
            <img src="assets/Catalogo/774846059_18081190472421186_1130630737402685250_n.jpg" class="chat-card-thumb" alt="Cuarzo Rosa">
            <div class="chat-card-info">
              <h5>Cuarzo Rosa & Nácar de Luna</h5>
              <span>Gema de Corazón & Ternura · $89 USD</span>
            </div>
          </div>
          <button class="chat-card-btn" onclick="addToCart('cuarzo-rosa-nacar'); showToast('Añadido a la bolsa', 'gold');">+ Agregar a la Bolsa</button>
        </div>
        <p style="margin-top: 8px;">Abre el Chakra Anahata, atrayendo vínculos sanos y paz interior.</p>
      `;
    }
    // 6. TALLAS Y MEDIDAS
    else if (q.includes('talla') || q.includes('medida') || q.includes('muñeca') || q.includes('centimetro') || q.includes('ajuste') || q.includes('cm')) {
      reply = `
        <p>📏 <strong>Guía de Medidas Ergonómicas:</strong></p>
        <p>• <strong>15.0 cm (Petite):</strong> Para muñecas muy esbeltas o calce ceñido.<br>
        • <strong>16.5 cm (Estándar Mujer):</strong> Nuestra medida más vendida (90% de compras). Fluye con elegancia natural.<br>
        • <strong>18.0 cm (Comfort / Caballero):</strong> Para muñecas más anchas o porte holgado.<br>
        • <strong>Personalizada:</strong> Al confirmar en WhatsApp, tu concierge verifica tus centímetros exactos sin costo adicional.</p>
        <p><em>✓ Confeccionadas con silicona náutica con memoria indeformable y garantía de ajuste perpetuo.</em></p>
      `;
    }
    // 7. AUTENTICIDAD Y MINERALES
    else if (q.includes('autentic') || q.includes('natural') || q.includes('sintet') || q.includes('fals') || q.includes('plastico') || q.includes('certificado')) {
      reply = `
        <p>💎 <strong>Garantía Gemológica de Origen:</strong></p>
        <p>Todos los minerales de MÁGICA son <strong>100% naturales geológicos Grado AAA+</strong> extraídos éticamente. No usamos resinas, tintes químicos ni imitaciones plásticas.</p>
        <p>Cada pieza se entrega con su <strong>Certificado Nominativo de Autenticidad</strong> numerado y ha sido consagrada a <strong>432 Hz</strong> con cuencos de cuarzo antes de ser sellada.</p>
      `;
    }
    // 8. PRECIO, ENVIOS, COFRE THE ROSE VAULT
    else if (q.includes('precio') || q.includes('costo') || q.includes('envio') || q.includes('envío') || q.includes('estuche') || q.includes('vault') || q.includes('cuanto') || q.includes('cuánto')) {
      reply = `
        <p>🎁 <strong>Inversión Fija Transparente:</strong></p>
        <p>Cada pulsera tiene una inversión fija de <strong>$89.00 USD</strong> y te incluye sin cargo adicional:</p>
        <p>• Cofre rígido de lujo <em>The Rose Vault</em> (valorado en $35 USD).<br>
        • Bolsa de gamuza y paño abrillantador de orfebrería.<br>
        • Certificado Nominativo de Autenticidad.<br>
        • <strong>Envío Priority Courier Asegurado mundial de cortesía</strong> (2-4 días México, 4-7 días internacional).</p>
      `;
    }
    // 9. SIGNOS ZODIACALES ESPECÍFICOS
    else if (q.includes('aries') || q.includes('tauro') || q.includes('geminis') || q.includes('géminis') || q.includes('cancer') || q.includes('cáncer') || q.includes('leo') || q.includes('virgo') || q.includes('libra') || q.includes('escorpio') || q.includes('sagitario') || q.includes('capricornio') || q.includes('acuario') || q.includes('piscis')) {
      reply = `
        <p>⭐ <strong>Sintonía Astrológica:</strong></p>
        <p>Puedes probar nuestro <strong>Oráculo Astral</strong> en la sección superior para calcular la gema que equilibra tu elemento rector (Fuego, Tierra, Aire o Agua).</p>
        <p>Las piezas más versátiles con compatibilidad universal son el <strong>Lapislázuli Imperial</strong> (aire y agua), el <strong>Ónix Centinela</strong> (tierra) y el <strong>Jade Dorado</strong> (fuego y abundancia).</p>
      `;
    }
    // RESPUESTA GENERAL
    else {
      reply = `
        <p>✦ Entiendo tu consulta sobre <em>"${rawQuery}"</em>.</p>
        <p>En Mágica diseñamos alta joyería con intención energética. Cada pieza tiene una inversión fija de <strong>$89 USD</strong> e incluye el cofre <em>The Rose Vault</em> y envío express asegurado.</p>
        <p>¿Te gustaría que te recomiende gemas para <strong>Protección</strong>, <strong>Abundancia</strong>, <strong>Sabiduría</strong> o conocer tu <strong>Talla recomendada</strong>?</p>
        <p><small>Si ya tienes claro tu pedido, podemos pasar a WhatsApp (+52 1 81 1031 6819) solo para confirmar tu entrega y folio.</small></p>
      `;
    }

    appendChatMessage('bot', reply);
  }, 400);
}

// ==========================================================================
// INICIALIZACIÓN GLOBAL AL CARGAR
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  applyTheme();
  applyLanguage();
  initThemeToggle();
  initStardust();
  initFaqAccordion();
  initMobileMenu();
  initNewsletter();
});
