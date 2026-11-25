// ==========================================================================
// BOUTIQUE ESOTÉRICA MÁGICA INTENCIÓN — LÓGICA FRONTEND PURA (SIN BACKEND)
// ==========================================================================
(function () {
  'use strict';

  var WA_PHONE = '528121912778';
  var CART_STORAGE_KEY = 'magica_boutique_cart_v1';

  // SVG Icons Místicos para cada categoría
  var ICONS = {
    cards: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="5" width="13" height="17" rx="2" stroke="currentColor"/><rect x="8" y="2" width="13" height="17" rx="2" stroke="currentColor" stroke-dasharray="2 2"/><circle cx="9.5" cy="13.5" r="2.5" fill="currentColor" fill-opacity="0.3"/><path d="M9.5 9v1.5M9.5 16.5V18"/></svg>',
    candle: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M7 10h10v12H7z" stroke="currentColor" rx="1"/><path d="M12 10V6" stroke="currentColor"/><path d="M12 2c-1.5 1.5-2 2.5-2 3.5a2 2 0 0 0 4 0c0-1-.5-2-2-3.5z" fill="currentColor" fill-opacity="0.45"/><circle cx="12" cy="16" r="2" fill="currentColor" fill-opacity="0.25"/></svg>',
    smoke: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M6 19c2-3 2-5 0-8s-2-5 0-8" stroke-linecap="round"/><path d="M12 21c2.5-3.5 2.5-6 0-9.5s-2.5-6 0-9.5" stroke-linecap="round"/><path d="M18 19c2-3 2-5 0-8s-2-5 0-8" stroke-linecap="round"/><ellipse cx="12" cy="21.5" rx="7" ry="1.5" fill="currentColor" fill-opacity="0.25"/></svg>',
    crystal: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><polygon points="6 2 18 2 22 8 12 22 2 8" stroke="currentColor"/><line x1="2" y1="8" x2="22" y2="8" stroke="currentColor"/><polyline points="6 2 12 8 18 2" stroke="currentColor"/><polyline points="2 8 12 22 22 8" stroke="currentColor"/></svg>',
    moon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.5 5.5 0 0 1-7.54-7.54C12.92 3.04 12.46 3 12 3z" fill="currentColor" fill-opacity="0.3"/><circle cx="17.5" cy="5.5" r="1.5" fill="currentColor"/><circle cx="19" cy="9.5" r="1" fill="currentColor"/></svg>',
    sparkle: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 2l2.4 6.6L21 11l-6.6 2.4L12 20l-2.4-6.6L3 11l6.6-2.4L12 2z" fill="currentColor" fill-opacity="0.35"/><circle cx="19" cy="4" r="1.5" fill="currentColor"/><circle cx="5" cy="19" r="1.5" fill="currentColor"/></svg>'
  };

  // Elementos del DOM
  var productsGrid = document.getElementById('products-grid');
  var emptyState = document.getElementById('empty-state');
  var productsCountEl = document.getElementById('products-count');
  var searchInput = document.getElementById('search-input');
  var btnClearSearch = document.getElementById('btn-clear-search');
  var btnResetFilters = document.getElementById('btn-reset-filters');
  var chipButtons = document.querySelectorAll('.chip-btn');

  // Carrito Elementos
  var headerCartCount = document.getElementById('header-cart-count');
  var floatingBar = document.getElementById('floating-order-bar');
  var floatingCount = document.getElementById('floating-order-count');
  var floatingTotal = document.getElementById('floating-order-total');
  var cartBackdrop = document.getElementById('cart-modal-backdrop');
  var cartItemsList = document.getElementById('cart-items-list');
  var cartTotalAmount = document.getElementById('cart-total-amount');
  var btnCheckoutWa = document.getElementById('btn-checkout-wa');

  var currentCategory = 'all';
  var searchQuery = '';
  var cart = loadCart();

  // --------------------------------------------------------------------------
  // RENDERIZADO DE PRODUCTOS
  // --------------------------------------------------------------------------
  function renderProducts() {
    if (!productsGrid || !window.BOUTIQUE_PRODUCTS) return;

    var filtered = window.BOUTIQUE_PRODUCTS.filter(function (p) {
      var matchCat = (currentCategory === 'all') || (p.category === currentCategory);
      var matchSearch = true;
      if (searchQuery.trim().length > 0) {
        var q = searchQuery.toLowerCase();
        var fullText = (p.name + ' ' + p.intent + ' ' + p.description + ' ' + p.categoryName).toLowerCase();
        matchSearch = fullText.indexOf(q) !== -1;
      }
      return matchCat && matchSearch;
    });

    if (productsCountEl) {
      productsCountEl.textContent = 'Mostrando ' + filtered.length + ' de ' + window.BOUTIQUE_PRODUCTS.length + ' objetos sagrados';
    }

    if (filtered.length === 0) {
      productsGrid.innerHTML = '';
      if (emptyState) emptyState.classList.add('is-visible');
      return;
    }

    if (emptyState) emptyState.classList.remove('is-visible');

    var html = '';
    for (var i = 0; i < filtered.length; i++) {
      var item = filtered[i];
      var iconHtml = ICONS[item.icon] || ICONS.sparkle;
      var visualContent = '';

      if (item.image) {
        visualContent += '<img src="' + item.image + '" alt="' + item.name + '" class="product-real-img" loading="lazy" onerror="this.style.display=\'none\'; this.nextElementSibling.style.display=\'flex\';">';
        visualContent += '<div class="product-visual-icon" style="display:none;">' + iconHtml + '</div>';
      } else {
        visualContent += '<div class="product-visual-icon">' + iconHtml + '</div>';
      }

      html += '<article class="product-card" data-product-id="' + item.id + '">';
      html += '  <div class="product-visual-wrap">';
      html += '    <div class="product-visual-halo" aria-hidden="true"></div>';
      html += '    ' + visualContent;
      html += '  </div>';

      html += '  <div class="product-badge-wrap">';
      html += '    <span class="product-badge">' + item.badge + '</span>';
      html += '    <span class="product-category-tag">' + item.categoryName + '</span>';
      html += '  </div>';

      html += '  <h3 class="product-title">' + item.name + '</h3>';
      html += '  <div class="product-intent">' + item.intent + '</div>';
      html += '  <p class="product-desc">' + item.description + '</p>';

      html += '  <div class="product-footer">';
      html += '    <div class="product-price-box">';
      html += '      <span class="product-price-label">Precio</span>';
      html += '      <span class="product-price-val">' + item.priceFormatted + '</span>';
      html += '    </div>';

      html += '    <div class="product-actions-btn-group">';
      html += '      <button type="button" class="btn-add-cart" data-action="add-cart" data-id="' + item.id + '" aria-label="Agregar ' + item.name + ' al pedido">';
      html += '        <span>+ Agregar</span>';
      html += '      </button>';
      html += '      <button type="button" class="btn-direct-wa" data-action="direct-wa" data-id="' + item.id + '" title="Pedir esta pieza directamente por WhatsApp" aria-label="Pedir por WhatsApp">';
      html += '        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>';
      html += '      </button>';
      html += '    </div>';

      html += '  </div>';
      html += '</article>';
    }

    productsGrid.innerHTML = html;
  }

  // --------------------------------------------------------------------------
  // GESTIÓN DE CARRITO / BOLSA SAGRADA (LOCALSTORAGE)
  // --------------------------------------------------------------------------
  function loadCart() {
    try {
      var raw = localStorage.getItem(CART_STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  }

  function saveCart() {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    } catch (e) {}
  }

  function addToCart(productId) {
    var product = findProduct(productId);
    if (!product) return;

    var existing = null;
    for (var i = 0; i < cart.length; i++) {
      if (cart[i].id === productId) {
        existing = cart[i];
        break;
      }
    }

    if (existing) {
      existing.qty += 1;
    } else {
      cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        qty: 1
      });
    }

    saveCart();
    updateCartUI();
    showToastNotification('Agregado a tu pedido: ' + product.name);
  }

  function updateQty(productId, delta) {
    for (var i = 0; i < cart.length; i++) {
      if (cart[i].id === productId) {
        cart[i].qty += delta;
        if (cart[i].qty <= 0) {
          cart.splice(i, 1);
        }
        break;
      }
    }
    saveCart();
    updateCartUI();
  }

  function findProduct(id) {
    if (!window.BOUTIQUE_PRODUCTS) return null;
    for (var i = 0; i < window.BOUTIQUE_PRODUCTS.length; i++) {
      if (window.BOUTIQUE_PRODUCTS[i].id === id) return window.BOUTIQUE_PRODUCTS[i];
    }
    return null;
  }

  function getCartSummary() {
    var count = 0;
    var total = 0;
    for (var i = 0; i < cart.length; i++) {
      count += cart[i].qty;
      total += (cart[i].price * cart[i].qty);
    }
    return { count: count, total: total };
  }

  function updateCartUI() {
    var summary = getCartSummary();

    // 1. Contador cabecera
    if (headerCartCount) {
      headerCartCount.textContent = summary.count;
    }

    // 2. Barra flotante inferior
    if (floatingBar) {
      if (summary.count > 0) {
        floatingBar.classList.add('is-visible');
        if (floatingCount) floatingCount.textContent = summary.count + (summary.count === 1 ? ' pieza seleccionada' : ' piezas seleccionadas');
        if (floatingTotal) floatingTotal.textContent = '$' + summary.total.toLocaleString('es-MX') + ' MXN';
      } else {
        floatingBar.classList.remove('is-visible');
      }
    }

    // 3. Modal / Drawer de Carrito
    if (cartItemsList) {
      if (cart.length === 0) {
        cartItemsList.innerHTML = '<div style="text-align: center; padding: 32px 0; color: #A396B8;">' +
          '<div style="font-size: 32px; margin-bottom: 8px;">🛍️</div>' +
          '<p>Tu bolsa de pedido está vacía.</p>' +
          '<p style="font-size: 12px; margin-top: 4px; color: #7DD3C8;">Agrega tus piezas favoritas del catálogo.</p>' +
          '</div>';
      } else {
        var rows = '';
        for (var j = 0; j < cart.length; j++) {
          var item = cart[j];
          var subtotal = item.price * item.qty;
          rows += '<div class="cart-item-row">';
          rows += '  <div class="cart-item-info">';
          rows += '    <div class="cart-item-title">' + item.name + '</div>';
          rows += '    <div class="cart-item-unit-price">$' + item.price.toLocaleString('es-MX') + ' MXN c/u · Subtotal: $' + subtotal.toLocaleString('es-MX') + '</div>';
          rows += '  </div>';
          rows += '  <div class="cart-item-controls">';
          rows += '    <button type="button" class="btn-qty" data-action="minus" data-id="' + item.id + '" aria-label="Disminuir cantidad">-</button>';
          rows += '    <span class="cart-item-qty">' + item.qty + '</span>';
          rows += '    <button type="button" class="btn-qty" data-action="plus" data-id="' + item.id + '" aria-label="Aumentar cantidad">+</button>';
          rows += '  </div>';
          rows += '</div>';
        }
        cartItemsList.innerHTML = rows;
      }
    }

    if (cartTotalAmount) {
      cartTotalAmount.textContent = '$' + summary.total.toLocaleString('es-MX') + ' MXN';
    }

    // 4. Enlace dinámico de WhatsApp para Checkout
    if (btnCheckoutWa) {
      if (summary.count > 0) {
        var msg = '¡Hola! Me gustaría hacer el pedido de las siguientes piezas de la Boutique Mágica Intención:\n\n';
        for (var k = 0; k < cart.length; k++) {
          msg += '• ' + cart[k].qty + 'x ' + cart[k].name + ' ($' + (cart[k].price * cart[k].qty).toLocaleString('es-MX') + ' MXN)\n';
        }
        msg += '\n✨ Total de piezas: ' + summary.count;
        msg += '\n💰 Total estimado: $' + summary.total.toLocaleString('es-MX') + ' MXN';
        msg += '\n\n¿Me confirman disponibilidad y datos para el envío, por favor?';

        btnCheckoutWa.href = 'https://wa.me/' + WA_PHONE + '?text=' + encodeURIComponent(msg);
        btnCheckoutWa.style.pointerEvents = 'auto';
        btnCheckoutWa.style.opacity = '1';
      } else {
        btnCheckoutWa.href = '#';
        btnCheckoutWa.style.pointerEvents = 'none';
        btnCheckoutWa.style.opacity = '0.5';
      }
    }
  }

  function orderSingleViaWhatsApp(productId) {
    var p = findProduct(productId);
    if (!p) return;
    var msg = '¡Hola! Me gustaría pedir esta pieza de la Boutique Mágica Intención:\n\n' +
      '✦ ' + p.name + '\n' +
      '💰 Precio: ' + p.priceFormatted + '\n' +
      '✨ Intención: ' + p.intent + '\n\n' +
      '¿Me confirmas disponibilidad y costo de envío, por favor?';
    window.open('https://wa.me/' + WA_PHONE + '?text=' + encodeURIComponent(msg), '_blank');
  }

  // Notificación Toast Efímera
  function showToastNotification(text) {
    var existing = document.getElementById('boutique-toast');
    if (existing) existing.remove();

    var toast = document.createElement('div');
    toast.id = 'boutique-toast';
    toast.textContent = text;
    toast.style.cssText = 'position: fixed; top: 70px; left: 50%; transform: translateX(-50%); ' +
      'background: rgba(26, 14, 38, 0.96); border: 1px solid rgba(243, 213, 165, 0.65); ' +
      'color: #F3D5A5; padding: 8px 18px; border-radius: 9999px; font-size: 12.5px; font-weight: 600; ' +
      'box-shadow: 0 4px 20px rgba(0,0,0,0.5); z-index: 300; pointer-events: none; ' +
      'opacity: 0; transition: opacity 0.25s ease; max-width: 90vw; text-align: center;';
    document.body.appendChild(toast);

    requestAnimationFrame(function () {
      toast.style.opacity = '1';
    });

    setTimeout(function () {
      toast.style.opacity = '0';
      setTimeout(function () { if (toast.parentNode) toast.parentNode.removeChild(toast); }, 300);
    }, 2200);
  }

  // --------------------------------------------------------------------------
  // EVENT LISTENERS DE FILTROS Y BÚSQUEDA
  // --------------------------------------------------------------------------
  chipButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      chipButtons.forEach(function (b) { b.classList.remove('is-active'); });
      btn.classList.add('is-active');
      currentCategory = btn.getAttribute('data-category') || 'all';
      renderProducts();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', function (e) {
      searchQuery = e.target.value;
      if (btnClearSearch) {
        if (searchQuery.length > 0) {
          btnClearSearch.classList.add('is-visible');
        } else {
          btnClearSearch.classList.remove('is-visible');
        }
      }
      renderProducts();
    });
  }

  if (btnClearSearch) {
    btnClearSearch.addEventListener('click', function () {
      if (searchInput) {
        searchInput.value = '';
        searchQuery = '';
        btnClearSearch.classList.remove('is-visible');
        renderProducts();
        searchInput.focus();
      }
    });
  }

  if (btnResetFilters) {
    btnResetFilters.addEventListener('click', function () {
      currentCategory = 'all';
      searchQuery = '';
      if (searchInput) searchInput.value = '';
      if (btnClearSearch) btnClearSearch.classList.remove('is-visible');
      chipButtons.forEach(function (b) {
        if (b.getAttribute('data-category') === 'all') b.classList.add('is-active');
        else b.classList.remove('is-active');
      });
      renderProducts();
    });
  }

  // Delegación de eventos en la grilla de productos
  if (productsGrid) {
    productsGrid.addEventListener('click', function (e) {
      var btn = e.target.closest('button[data-action]');
      if (!btn) return;
      var action = btn.getAttribute('data-action');
      var id = btn.getAttribute('data-id');

      if (action === 'add-cart') {
        addToCart(id);
      } else if (action === 'direct-wa') {
        orderSingleViaWhatsApp(id);
      }
    });
  }

  // Delegación de eventos en los controles del Drawer de Carrito
  if (cartItemsList) {
    cartItemsList.addEventListener('click', function (e) {
      var btn = e.target.closest('button[data-action]');
      if (!btn) return;
      var action = btn.getAttribute('data-action');
      var id = btn.getAttribute('data-id');

      if (action === 'plus') {
        updateQty(id, 1);
      } else if (action === 'minus') {
        updateQty(id, -1);
      }
    });
  }

  // Control del Modal / Drawer
  function openCartDrawer() {
    if (cartBackdrop) {
      cartBackdrop.classList.add('is-open');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeCartDrawer() {
    if (cartBackdrop) {
      cartBackdrop.classList.remove('is-open');
      document.body.style.overflow = '';
    }
  }

  document.querySelectorAll('[data-open-cart]').forEach(function (el) {
    el.addEventListener('click', openCartDrawer);
  });

  document.querySelectorAll('[data-close-cart]').forEach(function (el) {
    el.addEventListener('click', closeCartDrawer);
  });

  if (cartBackdrop) {
    cartBackdrop.addEventListener('click', function (e) {
      if (e.target === cartBackdrop) {
        closeCartDrawer();
      }
    });
  }

  // --------------------------------------------------------------------------
  // INICIALIZACIÓN
  // --------------------------------------------------------------------------
  renderProducts();
  updateCartUI();

})();
