/**
 * ARCANO • Consultorio de Tarot Simbólico & Sabiduría Femenina
 * Script de Interactividad Mobile-First y Enlaces Dinámicos de WhatsApp
 */

(function () {
  'use strict';

  var DEFAULT_HERO_NAME = '[ TU NOMBRE O MARCA ]';
  var DEFAULT_FOOTER_NAME = '[ Tu Nombre o Marca ]';
  var WA_BASE = 'https://wa.me/5215500000000';

  // Elementos DOM
  var toggleBtn = document.getElementById('personalize-toggle-btn');
  var panel = document.getElementById('personalize-panel');
  var closeBtn = document.getElementById('personalize-close-btn');
  var nameInput = document.getElementById('custom-name-input');
  var resetBtn = document.getElementById('reset-name-btn');
  var heroTitle = document.getElementById('hero-brand-name');
  var footerName = document.getElementById('footer-brand-name');
  var currentYearEl = document.getElementById('current-year');
  var heroWaBtn = document.getElementById('hero-whatsapp-btn');
  var floatingWaBtn = document.getElementById('floating-whatsapp-link');
  var contactWaBtn = document.getElementById('contact-whatsapp-btn');
  var sessionBtns = document.querySelectorAll('[data-session-key]');
  var chipButtons = document.querySelectorAll('.btn-chip-name');
  var bgAudio = document.getElementById('bg-music');
  var audioToggleBtn = document.getElementById('header-audio-toggle');
  var audioStateLabel = document.getElementById('audio-state-label');

  // Inicializar año actual
  if (currentYearEl) {
    currentYearEl.textContent = new Date().getFullYear();
  }

  /**
   * Genera la URL de WhatsApp con mensaje personalizado
   */
  function makeWaUrl(msg) {
    return WA_BASE + '?text=' + encodeURIComponent(msg);
  }

  /**
   * Actualiza el nombre y todos los enlaces de WhatsApp
   */
  function updateAllLinks(name) {
    var trimmed = (name || '').trim();
    var hasName = trimmed.length > 0;
    var displayName = hasName ? trimmed : DEFAULT_HERO_NAME;
    var displayFooter = hasName ? trimmed : DEFAULT_FOOTER_NAME;

    // 1. Título principal y footer
    if (heroTitle) {
      heroTitle.textContent = displayName;
      if (hasName) {
        heroTitle.classList.remove('custom-pulse');
        void heroTitle.offsetWidth;
        heroTitle.classList.add('custom-pulse');
      }
    }
    if (footerName) {
      footerName.textContent = displayFooter;
    }

    // 2. Prefijo de saludo para WhatsApp
    var prefix = hasName
      ? 'Hola, tarotista ' + trimmed + ', '
      : 'Hola, ';

    // 3. Enlaces principales
    var generalMsg = prefix + 'me gustaría agendar una sesión de Tarot Simbólico.';
    if (heroWaBtn) heroWaBtn.href = makeWaUrl(generalMsg);
    if (floatingWaBtn) floatingWaBtn.href = makeWaUrl(generalMsg);
    if (contactWaBtn) contactWaBtn.href = makeWaUrl(generalMsg);

    // 4. Enlaces de las 3 tarjetas de tarifas con duración visible
    sessionBtns.forEach(function (btn) {
      var key = btn.getAttribute('data-session-key');
      var sessionMsg = '';

      if (key === 'sesion1') {
        sessionMsg = prefix + 'me gustaría agendar la sesión de $350 MXN (Lectura de Claridad y Enfoque · 45 min).';
      } else if (key === 'sesion2') {
        sessionMsg = prefix + 'me gustaría agendar la sesión de $450 MXN (Panorama Simbólico Integral · 1 hora).';
      } else if (key === 'sesion3') {
        sessionMsg = prefix + 'me gustaría agendar la sesión de $650 MXN (Acompañamiento de Ciclo y Propósito · 1 hora y media).';
      }

      if (sessionMsg) {
        btn.href = makeWaUrl(sessionMsg);
      }
    });
  }

  /**
   * Toggle del Popover
   */
  function togglePopover(show) {
    if (!panel) return;
    var isOpen = typeof show === 'boolean' ? show : panel.hasAttribute('hidden');

    if (isOpen) {
      panel.removeAttribute('hidden');
      if (toggleBtn) toggleBtn.setAttribute('aria-expanded', 'true');
      if (nameInput) nameInput.focus();
    } else {
      panel.setAttribute('hidden', '');
      if (toggleBtn) {
        toggleBtn.setAttribute('aria-expanded', 'false');
        toggleBtn.focus();
      }
    }
  }

  // Event Listeners del Popover
  if (toggleBtn && panel) {
    toggleBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      togglePopover();
    });

    if (closeBtn) {
      closeBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        togglePopover(false);
      });
    }

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !panel.hasAttribute('hidden')) {
        togglePopover(false);
      }
    });

    document.addEventListener('click', function (e) {
      if (!panel.hasAttribute('hidden')) {
        if (!panel.contains(e.target) && e.target !== toggleBtn && !toggleBtn.contains(e.target)) {
          togglePopover(false);
        }
      }
    });

    panel.addEventListener('click', function (e) {
      e.stopPropagation();
    });
  }

  // Input reactivo en tiempo real
  if (nameInput) {
    nameInput.addEventListener('input', function () {
      updateAllLinks(this.value);
    });
  }

  // Chips de nombres rápidos
  chipButtons.forEach(function (chip) {
    chip.addEventListener('click', function () {
      var chosen = this.getAttribute('data-name');
      if (nameInput) nameInput.value = chosen;
      updateAllLinks(chosen);
    });
  });

  // Botón Restaurar
  if (resetBtn) {
    resetBtn.addEventListener('click', function () {
      if (nameInput) nameInput.value = '';
      updateAllLinks('');
    });
  }

  // Smooth scroll accesible para anclas
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      if (targetId && targetId !== '#') {
        var targetEl = document.querySelector(targetId);
        if (targetEl) {
          e.preventDefault();
          targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });

  // --------------------------------------------------------------------------
  // AUDIO DE FONDO: "SOY MÁGICA" (INICIO AL SCROLL CON FADE-IN SUAVE)
  // --------------------------------------------------------------------------
  var TARGET_VOLUME = 0.38; // Volumen normal óptimo para fondo
  var fadeInTimer = null;

  if (bgAudio) {
    bgAudio.volume = 0.02; // Inicia bajito
  }

  function startFadeIn() {
    if (!bgAudio) return;
    if (fadeInTimer) clearInterval(fadeInTimer);

    // Sube suavemente en ~3.5 segundos (35 pasos de 100ms)
    var step = (TARGET_VOLUME - 0.02) / 35;

    fadeInTimer = setInterval(function () {
      if (!bgAudio || bgAudio.paused) {
        clearInterval(fadeInTimer);
        return;
      }
      if (bgAudio.volume + step < TARGET_VOLUME) {
        bgAudio.volume = Math.min(TARGET_VOLUME, bgAudio.volume + step);
      } else {
        bgAudio.volume = TARGET_VOLUME;
        clearInterval(fadeInTimer);
      }
    }, 100);
  }

  function updateAudioUI(isPlaying) {
    if (!audioToggleBtn) return;
    if (isPlaying) {
      audioToggleBtn.classList.remove('is-paused');
      audioToggleBtn.classList.add('is-playing');
      audioToggleBtn.setAttribute('aria-label', 'Pausar música de fondo');
      if (audioStateLabel) audioStateLabel.textContent = 'Pausar';
    } else {
      audioToggleBtn.classList.remove('is-playing');
      audioToggleBtn.classList.add('is-paused');
      audioToggleBtn.setAttribute('aria-label', 'Reproducir música de fondo');
      if (audioStateLabel) audioStateLabel.textContent = 'Play';
    }
  }

  var audioStarted = false;

  function removeAudioTriggers() {
    window.removeEventListener('scroll', onFirstScrollOrTouch, { passive: true });
    window.removeEventListener('touchstart', onFirstScrollOrTouch, { passive: true });
    window.removeEventListener('pointerdown', onFirstScrollOrTouch, { passive: true });
    document.removeEventListener('click', onFirstScrollOrTouch);
  }

  function tryPlayAudioWithFadeIn() {
    if (!bgAudio || audioStarted) return;
    bgAudio.volume = 0.02; // Inicia bien bajito
    var playPromise = bgAudio.play();
    if (playPromise !== undefined) {
      playPromise.then(function () {
        audioStarted = true;
        updateAudioUI(true);
        removeAudioTriggers();
        startFadeIn(); // Va subiendo suavemente a su volumen normal
      }).catch(function () {
        // Espera al siguiente gesto del usuario si el navegador es estricto
      });
    }
  }

  function onFirstScrollOrTouch() {
    tryPlayAudioWithFadeIn();
  }

  // Detectar el primer scroll o interacción táctil para iniciar
  window.addEventListener('scroll', onFirstScrollOrTouch, { passive: true });
  window.addEventListener('touchstart', onFirstScrollOrTouch, { passive: true });
  window.addEventListener('pointerdown', onFirstScrollOrTouch, { passive: true });
  document.addEventListener('click', onFirstScrollOrTouch);

  // Botón típico Play / Pause en el Header
  if (audioToggleBtn && bgAudio) {
    audioToggleBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      removeAudioTriggers();
      if (bgAudio.paused) {
        if (fadeInTimer) clearInterval(fadeInTimer);
        bgAudio.volume = TARGET_VOLUME;
        bgAudio.play().then(function () {
          audioStarted = true;
          updateAudioUI(true);
        }).catch(function () {});
      } else {
        if (fadeInTimer) clearInterval(fadeInTimer);
        bgAudio.pause();
        updateAudioUI(false);
      }
    });
  }

  // Inicializar enlaces
  updateAllLinks('');

})();
