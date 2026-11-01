"use client";

import { useEffect, useRef } from "react";

export function EmpresasCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const statusRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animFrameId: number | null = null;
    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const startTime = performance.now();

    function resizeCanvas() {
      if (!canvas || !ctx) return;
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = (rect.height || 420) * dpr;
      ctx.scale(dpr, dpr);
    }

    function drawAxonBlock(
      cx: number,
      cy: number,
      bw: number,
      bh: number,
      _depth: number,
      fillColor: string,
      tag: string,
      label: string,
      isGate: boolean,
      pulseState = false
    ) {
      if (!ctx) return;
      ctx.save();
      const left = cx - bw * 0.5;
      const top = cy - bh * 0.5;

      ctx.fillStyle = fillColor;
      ctx.strokeStyle = isGate ? "#F5D061" : "rgba(0, 229, 255, 0.4)";
      ctx.lineWidth = isGate ? 2 : 1;

      ctx.beginPath();
      const ctxAny = ctx as unknown as { roundRect?: (x: number, y: number, w: number, h: number, r: number) => void };
      if (typeof ctxAny.roundRect === "function") {
        ctxAny.roundRect(left, top, bw, bh, 8);
      } else {
        ctx.rect(left, top, bw, bh);
      }
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = isGate ? "rgba(245, 208, 97, 0.20)" : "rgba(0, 229, 255, 0.12)";
      ctx.beginPath();
      ctx.moveTo(left, top);
      ctx.lineTo(left + 16, top - 16);
      ctx.lineTo(left + bw + 16, top - 16);
      ctx.lineTo(left + bw, top);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = isGate ? "#F5D061" : "#00E5FF";
      ctx.font = "800 11px -apple-system, sans-serif";
      ctx.textAlign = "center";
      ctx.fillText(tag, cx, top + 26);

      ctx.fillStyle = "#FFFFFF";
      ctx.font = "700 13px -apple-system, sans-serif";
      ctx.fillText(label, cx, top + 46);

      if (isGate) {
        ctx.fillStyle = pulseState ? "#10B981" : "#F5D061";
        ctx.beginPath();
        ctx.arc(cx - 60, top + 66, 4, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = "rgba(255, 255, 255, 0.85)";
        ctx.font = "600 10px -apple-system, sans-serif";
        ctx.textAlign = "left";
        ctx.fillText(pulseState ? "VALIDADO POR SUPERVISOR" : "REVISIÓN PENDIENTE", cx - 50, top + 69);
      }

      ctx.restore();
    }

    function drawDataFlow(
      x1: number,
      y1: number,
      x2: number,
      y2: number,
      time: number,
      color: string,
      isStatic: boolean
    ) {
      if (!ctx) return;
      ctx.save();
      ctx.strokeStyle = "rgba(255, 255, 255, 0.15)";
      ctx.setLineDash([4, 6]);
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();

      if (!isStatic) {
        const progress = (time % 1.5) / 1.5;
        const px = x1 + (x2 - x1) * progress;
        const py = y1 + (y2 - y1) * progress;

        ctx.fillStyle = color;
        ctx.shadowColor = color;
        ctx.shadowBlur = 10;
        ctx.beginPath();
        ctx.arc(px, py, 4, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();
    }

    function drawAnatomy(t: number, isStatic: boolean) {
      if (!canvas || !ctx) return;
      const rect = canvas.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height || 420;

      ctx.clearRect(0, 0, w, h);

      const grad = ctx.createRadialGradient(w * 0.5, h * 0.55, 30, w * 0.5, h * 0.55, w * 0.5);
      grad.addColorStop(0, "rgba(16, 52, 100, 0.45)");
      grad.addColorStop(0.5, "rgba(10, 30, 60, 0.25)");
      grad.addColorStop(1, "rgba(6, 17, 34, 0)");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);

      ctx.strokeStyle = "rgba(0, 229, 255, 0.08)";
      ctx.lineWidth = 1;
      const gridSpacing = 40;
      for (let x = -w; x < w * 2; x += gridSpacing) {
        ctx.beginPath();
        ctx.moveTo(x, h);
        ctx.lineTo(x + h * 0.7, 0);
        ctx.stroke();
      }

      const bY = h * 0.52;
      const bW = Math.min(150, w * 0.26);
      const bH = 80;

      // Block 1: Ingesta
      drawAxonBlock(w * 0.2, bY, bW, bH, 50, "#0E2A54", "01. INGESTA", "Datos & Documentos", false);

      // Block 2: Compuerta Humana
      const gateActive = isStatic ? true : Math.sin(t * 2) > 0;
      drawAxonBlock(
        w * 0.5,
        bY - 15,
        Math.min(180, w * 0.32),
        bH + 10,
        60,
        "#173B6E",
        "02. COMPUERTA",
        "Supervisión Humana",
        true,
        gateActive
      );

      // Block 3: Despacho
      drawAxonBlock(w * 0.8, bY, bW, bH, 50, "#0E2A54", "03. DESPACHO", "Sistemas de Ejemplo", false);

      // Flujos
      drawDataFlow(w * 0.2 + bW * 0.5, bY, w * 0.5 - Math.min(180, w * 0.32) * 0.5, bY - 15, t, "#00E5FF", isStatic);
      drawDataFlow(w * 0.5 + Math.min(180, w * 0.32) * 0.5, bY - 15, w * 0.8 - bW * 0.5, bY, t + 0.5, "#F5D061", isStatic);
    }

    function updateCanvasLoop() {
      if (reducedMotionQuery.matches) {
        if (animFrameId) {
          cancelAnimationFrame(animFrameId);
          animFrameId = null;
        }
        drawAnatomy(0.5, true);
        if (statusRef.current) statusRef.current.textContent = "Modo Estático (Movimiento Reducido Detectado)";
      } else {
        if (statusRef.current) statusRef.current.textContent = "Supervisión Humana Conceptual";
        if (!animFrameId) {
          function loop(now: number) {
            if (reducedMotionQuery.matches) {
              drawAnatomy(0.5, true);
              animFrameId = null;
              return;
            }
            const elapsed = (now - startTime) / 1000;
            drawAnatomy(elapsed, false);
            animFrameId = requestAnimationFrame(loop);
          }
          animFrameId = requestAnimationFrame(loop);
        }
      }
    }

    const onMotionChange = () => updateCanvasLoop();
    const onResize = () => {
      resizeCanvas();
      if (reducedMotionQuery.matches) {
        drawAnatomy(0.5, true);
      }
    };

    reducedMotionQuery.addEventListener("change", onMotionChange);
    window.addEventListener("resize", onResize);

    resizeCanvas();
    updateCanvasLoop();

    return () => {
      if (animFrameId) cancelAnimationFrame(animFrameId);
      reducedMotionQuery.removeEventListener("change", onMotionChange);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div className="anatomy-canvas-container">
      <div className="canvas-hud">
        <span className="canvas-hud-title">Diagrama Conceptual del Flujo de Datos</span>
        <span ref={statusRef} id="canvasStatusText" style={{ color: "var(--cyan-bright)" }}>
          Supervisión Humana Conceptual
        </span>
      </div>
      <canvas
        ref={canvasRef}
        id="anatomyCanvas"
        role="img"
        aria-label="Diagrama axonométrico conceptual del flujo de trabajo con compuerta de supervisión humana"
        style={{ width: "100%", height: "420px", display: "block" }}
      />
    </div>
  );
}
