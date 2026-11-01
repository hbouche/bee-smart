/**
 * BEE SMART — Script Común del Sitio Web Integrado (V4)
 * - Menú móvil accesible con anclaje dinámico bajo el header, focus-trap y ARIA
 * - Selección inteligente de video/poster (desktop 16:9 vs móvil 9:16) en un solo reproductor
 * - Manejo riguroso de prefers-reduced-motion
 * - Seguimiento sutil de cursor/fondo en desktop (desactivado en táctil y reduced-motion)
 * - Intercepción de acciones externas en modo de revisión técnica
 */

(function () {
  'use strict';

  // 1. Detección y Gestión de Reduced Motion
  const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

  window.isReducedMotion = function () {
    return reducedMotionQuery.matches;
  };

  // 2. Control de Menú Móvil Accesible con Ajuste Dinámico de Header y Focus Trap
  function initMobileMenu() {
    const toggleBtn = document.querySelector('.mobile-toggle');
    const drawer = document.querySelector('.mobile-drawer');
    const header = document.querySelector('.site-header');

    if (!toggleBtn || !drawer) return;

    function updateDrawerPosition() {
      if (header) {
        const headerRect = header.getBoundingClientRect();
        const topPos = Math.max(0, headerRect.bottom);
        drawer.style.top = topPos + 'px';
        drawer.style.height = `calc(100vh - ${topPos}px)`;
      }
    }

    function openMenu() {
      updateDrawerPosition();
      toggleBtn.classList.add('active');
      toggleBtn.setAttribute('aria-expanded', 'true');
      drawer.classList.add('open');
      drawer.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';

      // Poner foco en el primer enlace interactivo
      const focusable = drawer.querySelectorAll('a, button, [tabindex]:not([tabindex="-1"])');
      if (focusable.length > 0) {
        setTimeout(function() { focusable[0].focus(); }, 50);
      }
    }

    function closeMenu() {
      toggleBtn.classList.remove('active');
      toggleBtn.setAttribute('aria-expanded', 'false');
      drawer.classList.remove('open');
      drawer.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
      toggleBtn.focus();
    }

    toggleBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      const isOpen = drawer.classList.contains('open');
      if (isOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    // Cerrar con Escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && drawer.classList.contains('open')) {
        closeMenu();
      }
    });

    // Focus trapping dentro del drawer móvil
    drawer.addEventListener('keydown', function (e) {
      if (e.key === 'Tab') {
        const focusable = drawer.querySelectorAll('a, button, [tabindex]:not([tabindex="-1"])');
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey) {
          if (document.activeElement === first) {
            last.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === last) {
            first.focus();
            e.preventDefault();
          }
        }
      }
    });

    // Cerrar al pulsar un enlace interno dentro del drawer
    const drawerLinks = drawer.querySelectorAll('a');
    drawerLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        closeMenu();
      });
    });

    window.addEventListener('resize', function () {
      if (drawer.classList.contains('open')) {
        updateDrawerPosition();
      }
    });

    window.addEventListener('scroll', function () {
      if (drawer.classList.contains('open')) {
        updateDrawerPosition();
      }
    }, { passive: true });
  }

  // 3. Sistema de Notificaciones de Modo Revisión
  let toastEl = null;
  let toastTimer = null;

  function ensureToast() {
    if (toastEl) return toastEl;
    toastEl = document.createElement('div');
    toastEl.className = 'review-toast';
    toastEl.setAttribute('role', 'alert');
    toastEl.innerHTML = `
      <div class="review-toast-header">
        <span class="review-toast-title">Modo de Demostración</span>
        <button class="review-toast-close" aria-label="Cerrar notificación">&times;</button>
      </div>
      <div class="review-toast-body" id="reviewToastMsg"></div>
    `;
    document.body.appendChild(toastEl);

    toastEl.querySelector('.review-toast-close').addEventListener('click', function () {
      toastEl.classList.remove('show');
    });

    return toastEl;
  }

  window.showReviewNotice = function (message) {
    const toast = ensureToast();
    const msgEl = toast.querySelector('#reviewToastMsg');
    msgEl.innerHTML = message;
    toast.classList.add('show');

    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(function () {
      toast.classList.remove('show');
    }, 6000);
  };

  // 4. Interceptar Formularios en Modo Revisión
  function initReviewForms() {
    const forms = document.querySelectorAll('form.js-review-form');
    forms.forEach(function (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        const actionName = form.getAttribute('data-action-name') || 'Formulario';
        window.showReviewNotice(`
          <strong>${actionName}:</strong> Control interactivo en <em>modo de demostración</em>.
          <br>No se transmiten datos ni se emiten peticiones a servidores externos.
          <br>Para envíos oficiales, utiliza los enlaces directos a Google Forms o contacta vía WhatsApp / correo oficial.
        `);
      });
    });
  }

  // 5. Interceptar Ranuras de Calendario Ilustrativas
  function initCalendarSlots() {
    const slots = document.querySelectorAll('.js-calendar-slot');
    slots.forEach(function (slot) {
      slot.addEventListener('click', function (e) {
        e.preventDefault();
        const timeStr = slot.textContent.trim();
        window.showReviewNotice(`
          <strong>Ranura seleccionada (${timeStr}):</strong> Maqueta visual ilustrativa local.
          <br>Las citas reales se coordinan directamente en la agenda oficial de Google Calendar de Humberto Bouché.
        `);
      });
    });
  }

  // 6. Control del Reproductor de Video Hero con Selección Desktop vs Móvil y Reduced Motion
  window.initHeroVideoPlayer = function (videoSelector, btnSelector) {
    const video = document.querySelector(videoSelector);
    const btn = document.querySelector(btnSelector);

    if (!video || !btn) return;

    const mobileMql = window.matchMedia('(max-width: 768px)');
    let userHasPaused = false; // Rastreo riguroso de pausa manual del usuario

    function updateBtnState(isPlaying) {
      if (isPlaying) {
        btn.innerHTML = `
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
            <rect x="6" y="4" width="4" height="16" rx="1"/>
            <rect x="14" y="4" width="4" height="16" rx="1"/>
          </svg>
          <span>Pausar</span>
        `;
        btn.setAttribute('aria-label', 'Pausar video');
      } else {
        btn.innerHTML = `
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
            <polygon points="5 3 19 12 5 21 5 3"/>
          </svg>
          <span>Reproducir</span>
        `;
        btn.setAttribute('aria-label', 'Reproducir video');
      }
    }

    function configureVideoSource() {
      const isMobile = mobileMql.matches;
      const targetPoster = isMobile ? '/propuesta-v4/assets/images/motion-v3-mobile-hero.png' : '/propuesta-v4/assets/images/motion-v3-desktop-hero.png';
      const targetMp4 = isMobile ? '/propuesta-v4/assets/videos/bee-smart-motion-v3-mobile.mp4' : '/propuesta-v4/assets/videos/bee-smart-motion-v3-desktop.mp4';
      const targetWebm = isMobile ? '/propuesta-v4/assets/videos/bee-smart-motion-v3-mobile.webm' : '/propuesta-v4/assets/videos/bee-smart-motion-v3-desktop.webm';

      const currentSrc = video.currentSrc || (video.querySelector('source') ? video.querySelector('source').getAttribute('src') : '');
      const expectedKeyword = isMobile ? 'motion-v3-mobile' : 'motion-v3-desktop';

      if (!currentSrc || !currentSrc.includes(expectedKeyword)) {
        // Solo reanudar si estaba reproduciéndose Y el usuario NO pausó manualmente Y no hay reduced-motion
        const wasActuallyPlaying = !video.paused;
        const shouldResume = wasActuallyPlaying && !userHasPaused && !reducedMotionQuery.matches;

        video.poster = targetPoster;
        video.innerHTML = `
          <source src="${targetMp4}" type="video/mp4">
          <source src="${targetWebm}" type="video/webm">
          <img src="${targetPoster}" alt="Recorrido Cinemático V3 (4 fases)" style="width: 100%; height: 100%; object-fit: contain; display: block;">
        `;
        video.load();

        if (reducedMotionQuery.matches || userHasPaused || !shouldResume) {
          video.pause();
          updateBtnState(false);
        } else {
          video.play().then(function () {
            updateBtnState(true);
          }).catch(function () {
            updateBtnState(false);
          });
        }
      }
    }

    // Configuración inicial de fuente según viewport
    configureVideoSource();

    // Comprobación inicial de preferencia de movimiento
    if (reducedMotionQuery.matches) {
      try { video.pause(); } catch (err) {}
      updateBtnState(false);
    } else {
      updateBtnState(!video.paused);
    }

    // Toggle al hacer click en el botón (actualiza userHasPaused)
    btn.addEventListener('click', function () {
      if (video.paused) {
        userHasPaused = false;
        video.play().then(function () {
          updateBtnState(true);
        }).catch(function () {
          updateBtnState(false);
        });
      } else {
        userHasPaused = true;
        video.pause();
        updateBtnState(false);
      }
    });

    // Escuchar cambio de resolución para cambiar clip sin estiramiento y sin duplicar reproductores
    mobileMql.addEventListener('change', function () {
      configureVideoSource();
    });

    // Escuchar cambios dinámicos en reduced-motion
    reducedMotionQuery.addEventListener('change', function (e) {
      if (e.matches) {
        video.pause();
        updateBtnState(false);
        window.dispatchEvent(new CustomEvent('reduced-motion-changed', { detail: { reduced: true } }));
      } else {
        if (!userHasPaused) {
          video.play().then(function () {
            updateBtnState(true);
          }).catch(function () {});
        }
        window.dispatchEvent(new CustomEvent('reduced-motion-changed', { detail: { reduced: false } }));
      }
    });

    // Exponer estado para validación
    window.__heroVideoState = {
      isUserPaused: function() { return userHasPaused; },
      setUserPaused: function(val) { userHasPaused = val; },
      configureVideoSource: configureVideoSource
    };
  };

  // 7. Seguimiento Sutil de Cursor y Fondo en Desktop (Progressive Enhancement)
  function initDesktopAmbientPointer() {
    const finePointerQuery = window.matchMedia('(pointer: fine) and (hover: hover)');
    const studioBg = document.querySelector('.studio-bg');
    let glow = document.querySelector('.cursor-glow-ambient');

    let mouseX = -600;
    let mouseY = -600;
    let currentX = -600;
    let currentY = -600;
    let rafId = null;
    let isVisible = false;
    let isTrackingActive = false;

    function ensureGlow() {
      if (!glow) {
        glow = document.createElement('div');
        glow.className = 'cursor-glow-ambient';
        glow.setAttribute('aria-hidden', 'true');
        document.body.appendChild(glow);
      }
      return glow;
    }

    function onMouseMove(e) {
      if (!isTrackingActive) return;
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isVisible && glow) {
        isVisible = true;
        glow.style.opacity = '1';
      }
      if (!rafId) {
        rafId = requestAnimationFrame(updateGlow);
      }
    }

    function onMouseLeave() {
      isVisible = false;
      if (glow) glow.style.opacity = '0';
    }

    function onScroll() {
      if (!isTrackingActive || !studioBg) return;
      const scrolled = window.scrollY;
      if (scrolled < 1400) {
        studioBg.style.transform = `translate3d(0, ${scrolled * 0.06}px, 0)`;
      }
    }

    function updateGlow() {
      if (!isTrackingActive || !glow) {
        rafId = null;
        return;
      }
      currentX += (mouseX - currentX) * 0.12;
      currentY += (mouseY - currentY) * 0.12;
      glow.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;

      if (Math.abs(mouseX - currentX) > 0.5 || Math.abs(mouseY - currentY) > 0.5) {
        rafId = requestAnimationFrame(updateGlow);
      } else {
        rafId = null;
      }
    }

    function startTracking() {
      if (isTrackingActive) return;
      isTrackingActive = true;
      ensureGlow();
      window.addEventListener('mousemove', onMouseMove, { passive: true });
      window.addEventListener('mouseleave', onMouseLeave);
      window.addEventListener('scroll', onScroll, { passive: true });
    }

    function stopTracking() {
      if (!isTrackingActive) return;
      isTrackingActive = false;
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseleave', onMouseLeave);
      window.removeEventListener('scroll', onScroll);

      if (rafId) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
      if (glow) {
        glow.style.opacity = '0';
        glow.style.transform = '';
      }
      if (studioBg) {
        studioBg.style.transform = '';
      }
      isVisible = false;
    }

    function evaluateState() {
      const isFine = finePointerQuery.matches;
      const isReduced = reducedMotionQuery.matches;
      if (isFine && !isReduced) {
        startTracking();
      } else {
        stopTracking();
      }
    }

    // Inicialización según estado actual
    evaluateState();

    // Escuchar cambios dinámicos de reduced-motion
    reducedMotionQuery.addEventListener('change', evaluateState);

    // Escuchar cambios dinámicos de puntero / táctil si está soportado
    if (finePointerQuery.addEventListener) {
      finePointerQuery.addEventListener('change', evaluateState);
    }

    // Exponer API para comprobaciones unitarias
    window.__ambientPointerState = {
      evaluateState: evaluateState,
      startTracking: startTracking,
      stopTracking: stopTracking,
      isTrackingActive: function() { return isTrackingActive; }
    };
  }

  // Inicialización al cargar el DOM
  document.addEventListener('DOMContentLoaded', function () {
    initMobileMenu();
    initReviewForms();
    initCalendarSlots();
    initDesktopAmbientPointer();
  });

})();
