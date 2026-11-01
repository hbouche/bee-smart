"use client";

import { useEffect, useRef } from "react";

export function AmbientPointer() {
  const glowRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const glow = glowRef.current;
    const studioBg = bgRef.current;
    if (!glow) return;

    const pointerFineMql = window.matchMedia("(pointer: fine) and (hover: hover)");
    const reducedMotionMql = window.matchMedia("(prefers-reduced-motion: reduce)");

    let rafId: number | null = null;
    let targetX = -600;
    let targetY = -600;
    let currentX = -600;
    let currentY = -600;
    let isVisible = false;
    let isTrackingActive = false;

    function renderGlow() {
      if (!isTrackingActive || !glow) {
        rafId = null;
        return;
      }

      currentX += (targetX - currentX) * 0.12;
      currentY += (targetY - currentY) * 0.12;
      // CSS ya tiene margin-left: -250px y margin-top: -250px; no restar 250px para evitar doble desplazamiento
      glow.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;

      // Detener bucle RAF cuando el puntero se asienta para evitar consumo perpetuo de CPU/GPU
      if (isVisible && (Math.abs(targetX - currentX) > 0.2 || Math.abs(targetY - currentY) > 0.2)) {
        rafId = requestAnimationFrame(renderGlow);
      } else {
        rafId = null;
      }
    }

    function onMouseMove(e: MouseEvent) {
      if (!isTrackingActive) return;
      targetX = e.clientX;
      targetY = e.clientY;
      if (!isVisible && glow) {
        isVisible = true;
        glow.style.opacity = "1";
      }
      if (!rafId) {
        rafId = requestAnimationFrame(renderGlow);
      }
    }

    function onMouseLeave() {
      isVisible = false;
      if (glow) glow.style.opacity = "0";
      if (rafId) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
    }

    function onVisibilityChange() {
      if (document.hidden) {
        isVisible = false;
        if (glow) glow.style.opacity = "0";
        if (rafId) {
          cancelAnimationFrame(rafId);
          rafId = null;
        }
      }
    }

    function onScroll() {
      if (!isTrackingActive || !studioBg) return;
      const scrolled = window.scrollY;
      if (scrolled < 1600) {
        studioBg.style.transform = `translate3d(0, ${(scrolled * 0.06).toFixed(2)}px, 0)`;
      }
    }

    function start() {
      const isFine = pointerFineMql.matches;
      const isReduced = reducedMotionMql.matches;

      if (isFine && !isReduced) {
        if (isTrackingActive) return;
        isTrackingActive = true;
        window.addEventListener("mousemove", onMouseMove, { passive: true });
        document.addEventListener("mouseleave", onMouseLeave, { passive: true });
        document.addEventListener("visibilitychange", onVisibilityChange);
        window.addEventListener("scroll", onScroll, { passive: true });
      } else {
        stop();
      }
    }

    function stop() {
      if (!isTrackingActive) return;
      isTrackingActive = false;
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      window.removeEventListener("scroll", onScroll);

      if (rafId) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
      if (glow) {
        glow.style.transform = "";
        glow.style.opacity = "0";
      }
      if (studioBg) {
        studioBg.style.transform = "";
      }
      isVisible = false;
    }

    start();

    const onPointerChange = () => start();
    const onMotionChange = () => start();

    if (pointerFineMql.addEventListener) {
      pointerFineMql.addEventListener("change", onPointerChange);
    }
    reducedMotionMql.addEventListener("change", onMotionChange);

    return () => {
      stop();
      if (pointerFineMql.removeEventListener) {
        pointerFineMql.removeEventListener("change", onPointerChange);
      }
      reducedMotionMql.removeEventListener("change", onMotionChange);
    };
  }, []);

  return (
    <>
      <div ref={bgRef} className="studio-bg" />
      <div ref={glowRef} className="cursor-glow-ambient" style={{ opacity: 0 }} aria-hidden="true" />
    </>
  );
}
