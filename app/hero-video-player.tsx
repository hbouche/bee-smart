"use client";

import { useEffect, useRef, useState } from "react";

export function HeroVideoPlayer() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const userHasPausedRef = useRef(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const mobileMql = window.matchMedia("(max-width: 768px)");
    const reducedMotionMql = window.matchMedia("(prefers-reduced-motion: reduce)");

    function configureVideoSource() {
      if (!video) return;
      const isMobile = mobileMql.matches;
      const targetPoster = isMobile
        ? "/assets/images/motion-v3-mobile-hero.png"
        : "/assets/images/motion-v3-desktop-hero.png";
      const targetMp4 = isMobile
        ? "/assets/videos/bee-smart-motion-v3-mobile.mp4"
        : "/assets/videos/bee-smart-motion-v3-desktop.mp4";
      const targetWebm = isMobile
        ? "/assets/videos/bee-smart-motion-v3-mobile.webm"
        : "/assets/videos/bee-smart-motion-v3-desktop.webm";

      const currentSrc = video.currentSrc || (video.querySelector("source") ? video.querySelector("source")?.getAttribute("src") : "");
      const expectedKeyword = isMobile ? "motion-v3-mobile" : "motion-v3-desktop";

      if (!currentSrc || !currentSrc.includes(expectedKeyword)) {
        const wasActuallyPlaying = !video.paused;
        const shouldResume = wasActuallyPlaying && !userHasPausedRef.current && !reducedMotionMql.matches;

        video.poster = targetPoster;
        video.innerHTML = `
          <source src="${targetMp4}" type="video/mp4">
          <source src="${targetWebm}" type="video/webm">
          <img src="${targetPoster}" alt="Visualización del modelo de capacidades operativas de BEE SMART" style="width: 100%; height: 100%; object-fit: contain; display: block;" loading="eager">
        `;
        video.load();

        if (reducedMotionMql.matches || userHasPausedRef.current || !shouldResume) {
          video.pause();
          setIsPlaying(false);
        } else {
          video.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
        }
      }
    }

    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    video.addEventListener("play", onPlay);
    video.addEventListener("pause", onPause);

    configureVideoSource();

    if (reducedMotionMql.matches) {
      video.pause();
      setIsPlaying(false);
    } else if (!userHasPausedRef.current) {
      video.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
    }

    const onResize = () => configureVideoSource();
    const onMotionChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        video.pause();
        setIsPlaying(false);
      } else if (!userHasPausedRef.current) {
        video.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
      }
    };

    mobileMql.addEventListener("change", onResize);
    window.addEventListener("resize", onResize, { passive: true });
    reducedMotionMql.addEventListener("change", onMotionChange);

    return () => {
      video.removeEventListener("play", onPlay);
      video.removeEventListener("pause", onPause);
      mobileMql.removeEventListener("change", onResize);
      window.removeEventListener("resize", onResize);
      reducedMotionMql.removeEventListener("change", onMotionChange);
    };
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      userHasPausedRef.current = false;
      video.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
    } else {
      userHasPausedRef.current = true;
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="hero-motion-card">
      <div className="motion-hud">
        <span>Modelo de Capacidades</span>
        <span>Visión Operativa</span>
      </div>

      <div className="motion-stage-container">
        <video
          ref={videoRef}
          id="heroVideo"
          className="hero-video-v3 js-hero-video"
          playsInline
          muted
          loop
          poster="/assets/images/motion-v3-desktop-hero.png"
          aria-label="Animación del modelo de capacidades operativas de BEE SMART"
        >
          <source src="/assets/videos/bee-smart-motion-v3-desktop.mp4" type="video/mp4" />
          <source src="/assets/videos/bee-smart-motion-v3-desktop.webm" type="video/webm" />
          <img
            src="/assets/images/motion-v3-desktop-hero.png"
            alt="Visualización del modelo de capacidades operativas de BEE SMART"
            style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }}
            loading="eager"
          />
        </video>
      </div>

      <div className="motion-controls-strip">
        <div className="motion-phase-indicators" aria-label="Indicadores de fases">
          <span className="phase-dot active" title="Diagnóstico" />
          <span className="phase-dot active" title="Conexión" />
          <span className="phase-dot active" title="Arquitectura" />
          <span className="phase-dot active" title="Supervisión" />
        </div>

        <button
          id="videoToggleBtn"
          className="video-ctrl-btn"
          type="button"
          aria-label={isPlaying ? "Pausar video" : "Reproducir video"}
          onClick={togglePlay}
        >
          {isPlaying ? (
            <>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <rect x="6" y="4" width="4" height="16" rx="1" />
                <rect x="14" y="4" width="4" height="16" rx="1" />
              </svg>
              <span>Pausar</span>
            </>
          ) : (
            <>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
              <span>Reproducir</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
