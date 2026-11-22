/**
 * ARCANO • Consultorio de Tarot Simbólico & Sabiduría Femenina
 * Script de Interactividad Mobile-First y Enlaces Dinámicos de WhatsApp
 */

(function () {
  'use strict';

  var DEFAULT_HERO_NAME = '[ TU NOMBRE O MARCA ]';
  var DEFAULT_FOOTER_NAME = '[ Tu Nombre o Marca ]';
  var WA_BASE = 'https://wa.me/528121912778';

  // Elementos DOM
  var toggleBtn = document.getElementById('personalize-toggle-btn');
  var panel = document.getElementById('personalize-panel');
  var closeBtn = document.getElementById('personalize-close-btn');
  var nameInput = document.getElementById('custom-name-input');
  var resetBtn = document.getElementById('reset-name-btn');
  var acceptNameBtn = document.getElementById('accept-name-btn');
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

  // Botón Aceptar y Probar WhatsApp
  if (acceptNameBtn) {
    acceptNameBtn.addEventListener('click', function () {
      var val = nameInput ? nameInput.value : '';
      updateAllLinks(val);
      togglePopover(false);
      if (heroWaBtn) {
        heroWaBtn.classList.remove('custom-pulse');
        void heroWaBtn.offsetWidth;
        heroWaBtn.classList.add('custom-pulse');
      }
    });
  }

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
  // AUDIO DE FONDO: "SOY MÁGICA" (INICIO AL PRIMER TOQUE O SCROLL EN MÓVIL)
  // --------------------------------------------------------------------------
  var TARGET_VOLUME = 0.45; // Volumen óptimo y envolvente
  var fadeInTimer = null;
  var audioStarted = false;

  function safeSetVolume(vol) {
    if (!bgAudio) return;
    try {
      bgAudio.volume = Math.max(0, Math.min(1, vol));
    } catch (e) {
      // Ignorar en dispositivos donde volume es de solo lectura (como iOS)
    }
  }

  function startFadeIn() {
    if (!bgAudio) return;
    if (fadeInTimer) clearInterval(fadeInTimer);

    // Intentar iniciar bajo y subir gradualmente
    safeSetVolume(0.05);
    var step = (TARGET_VOLUME - 0.05) / 25;

    fadeInTimer = setInterval(function () {
      if (!bgAudio || bgAudio.paused) {
        clearInterval(fadeInTimer);
        return;
      }
      try {
        if (bgAudio.volume + step < TARGET_VOLUME) {
          safeSetVolume(bgAudio.volume + step);
        } else {
          safeSetVolume(TARGET_VOLUME);
          clearInterval(fadeInTimer);
        }
      } catch (err) {
        clearInterval(fadeInTimer);
      }
    }, 120);
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
      if (audioStateLabel) audioStateLabel.textContent = 'Música';
    }
  }

  function removeAudioTriggers() {
    ['touchstart', 'touchend', 'pointerdown', 'pointerup', 'click', 'scroll'].forEach(function (evt) {
      window.removeEventListener(evt, onFirstInteraction, { passive: true, capture: true });
      document.removeEventListener(evt, onFirstInteraction, { passive: true, capture: true });
    });
  }

  function onFirstInteraction() {
    if (audioStarted || !bgAudio) return;

    safeSetVolume(0.05);
    var playPromise = bgAudio.play();
    if (playPromise !== undefined) {
      playPromise.then(function () {
        audioStarted = true;
        updateAudioUI(true);
        removeAudioTriggers();
        startFadeIn();
      }).catch(function () {
        // Si el navegador bloquea en este gesto, se mantiene esperando al siguiente toque
      });
    }
  }

  // Escuchar en window y document para captura inmediata en celular
  ['touchstart', 'touchend', 'pointerdown', 'pointerup', 'click', 'scroll'].forEach(function (evt) {
    window.addEventListener(evt, onFirstInteraction, { passive: true, capture: true });
    document.addEventListener(evt, onFirstInteraction, { passive: true, capture: true });
  });

  // Botón joyero Play / Pause en el Header
  if (audioToggleBtn && bgAudio) {
    audioToggleBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      removeAudioTriggers();

      if (bgAudio.paused) {
        if (fadeInTimer) clearInterval(fadeInTimer);
        safeSetVolume(TARGET_VOLUME);
        var p = bgAudio.play();
        if (p !== undefined) {
          p.then(function () {
            audioStarted = true;
            updateAudioUI(true);
          }).catch(function () {});
        }
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
