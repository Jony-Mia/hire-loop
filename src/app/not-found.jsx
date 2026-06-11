"use client";

import { useEffect, useRef, useState } from "react";
import { Button,Chip, Separator as Divider} from "@heroui/react";

import Link from "next/link";

// ─── Starfield Canvas ────────────────────────────────────────────────────────
function StarfieldCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Generate stars
    const STAR_COUNT = 160;
    const stars = Array.from({ length: STAR_COUNT }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      r: Math.random() * 1.4 + 0.2,
      alpha: Math.random() * 0.7 + 0.15,
      speed: Math.random() * 0.18 + 0.04,
      twinkleSpeed: Math.random() * 0.012 + 0.004,
      twinkleOffset: Math.random() * Math.PI * 2,
    }));

    // Floating debris particles
    const DEBRIS_COUNT = 28;
    const debris = Array.from({ length: DEBRIS_COUNT }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      size: Math.random() * 3 + 1,
      alpha: Math.random() * 0.35 + 0.05,
      hue: Math.random() > 0.6 ? 185 : 260, // cyan or purple
    }));

    let t = 0;
    const draw = () => {
      t += 0.016;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw stars
      for (const s of stars) {
        s.y += s.speed;
        if (s.y > canvas.height) {
          s.y = 0;
          s.x = Math.random() * canvas.width;
        }
        const twinkle = Math.sin(t * s.twinkleSpeed * 60 + s.twinkleOffset) * 0.3 + 0.7;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200, 220, 255, ${s.alpha * twinkle})`;
        ctx.fill();
      }

      // Draw debris
      for (const d of debris) {
        d.x += d.vx;
        d.y += d.vy;
        if (d.x < -10) d.x = canvas.width + 10;
        if (d.x > canvas.width + 10) d.x = -10;
        if (d.y < -10) d.y = canvas.height + 10;
        if (d.y > canvas.height + 10) d.y = -10;

        ctx.save();
        ctx.translate(d.x, d.y);
        ctx.rotate(t * 0.3);
        ctx.fillStyle = `hsla(${d.hue}, 80%, 70%, ${d.alpha})`;
        ctx.fillRect(-d.size / 2, -d.size / 2, d.size, d.size);
        ctx.restore();
      }

      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0"
      style={{ opacity: 0.85 }}
    />
  );
}

// ─── Glitch Text ─────────────────────────────────────────────────────────────
function GlitchText({ text, className }) {
  return (
    <span className={`relative inline-block ${className ?? ""}`} data-text={text}>
      <span
        className="glitch-base"
        style={{
          display: "inline-block",
          position: "relative",
          color: "transparent",
          WebkitTextStroke: "2px #00f5ff",
          textShadow: "0 0 32px #00f5ff88, 0 0 80px #00f5ff33",
          fontFamily: "'Courier New', monospace",
          fontWeight: 900,
          letterSpacing: "-0.04em",
        }}
      >
        {text}
        {/* Glitch layer 1 */}
        <span
          aria-hidden
          style={{
            position: "absolute",
            top: 0,
            left: "2px",
            color: "#ff00aa",
            WebkitTextStroke: "1px #ff00aa",
            clipPath: "polygon(0 30%, 100% 30%, 100% 55%, 0 55%)",
            animation: "glitch1 3.2s infinite linear",
            opacity: 0.7,
          }}
        >
          {text}
        </span>
        {/* Glitch layer 2 */}
        <span
          aria-hidden
          style={{
            position: "absolute",
            top: 0,
            left: "-3px",
            color: "#6e40ff",
            WebkitTextStroke: "1px #6e40ff",
            clipPath: "polygon(0 60%, 100% 60%, 100% 80%, 0 80%)",
            animation: "glitch2 2.7s infinite linear",
            opacity: 0.6,
          }}
        >
          {text}
        </span>
      </span>
    </span>
  );
}

// ─── Scan Line Overlay ────────────────────────────────────────────────────────
function ScanLines() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-10"
      style={{
        background:
          "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.06) 2px, rgba(0,0,0,0.06) 4px)",
        mixBlendMode: "overlay",
      }}
    />
  );
}

// ─── Terminal Log Lines ───────────────────────────────────────────────────────
const LOG_LINES = [
  { t: 0.0, text: "BOOT SEQUENCE: NEXOS v7.4.1", color: "#00f5ff" },
  { t: 0.6, text: "LOADING KERNEL MODULES... [OK]", color: "#4ade80" },
  { t: 1.0, text: "MOUNTING FILESYSTEM... [FAILED]", color: "#f87171" },
  { t: 1.4, text: "SECTOR 404 — ROUTE NOT FOUND", color: "#facc15" },
  { t: 1.9, text: "ATTEMPTING RECOVERY... [ABORT]", color: "#f87171" },
  { t: 2.4, text: "SIGNAL LOST. AWAITING INPUT.", color: "#a78bfa" },
];

function TerminalLog() {
  const [visible, setVisible] = useState(0);

  useEffect(() => {
    const timers = LOG_LINES.map((line, i) =>
      setTimeout(
        () => setVisible((v) => Math.max(v, i + 1)),
        line.t * 1000 + 400
      )
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div
      className="w-full max-w-md font-mono text-xs leading-6"
      style={{
        background: "rgba(0,0,0,0.55)",
        border: "1px solid rgba(0,245,255,0.2)",
        borderRadius: "8px",
        padding: "14px 18px",
        backdropFilter: "blur(10px)",
      }}
    >
      {LOG_LINES.slice(0, visible).map((line, i) => (
        <div key={i} className="flex gap-3 items-start">
          <span style={{ color: "rgba(0,245,255,0.4)", userSelect: "none" }}>›</span>
          <span style={{ color: line.color }}>{line.text}</span>
        </div>
      ))}
      {/* Blinking cursor */}
      {visible < LOG_LINES.length ? (
        <div className="flex gap-3 items-start">
          <span style={{ color: "rgba(0,245,255,0.4)" }}>›</span>
          <span
            style={{ color: "#00f5ff", animation: "blink 1s step-end infinite" }}
          >
            █
          </span>
        </div>
      ) : (
        <div className="flex gap-3 items-start">
          <span style={{ color: "rgba(0,245,255,0.4)" }}>›</span>
          <span style={{ color: "#00f5ff", animation: "blink 1s step-end infinite" }}>
            _
          </span>
        </div>
      )}
    </div>
  );
}

// ─── Orbit Ring (SVG decoration) ─────────────────────────────────────────────
function OrbitRing() {
  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center z-0">
      <svg
        width="520"
        height="520"
        viewBox="0 0 520 520"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ opacity: 0.18, animation: "spin 22s linear infinite" }}
      >
        <circle cx="260" cy="260" r="240" stroke="#00f5ff" strokeWidth="1" strokeDasharray="8 14" />
        <circle cx="260" cy="260" r="180" stroke="#a78bfa" strokeWidth="0.8" strokeDasharray="4 18" />
        <circle cx="260" cy="260" r="120" stroke="#00f5ff" strokeWidth="0.5" strokeDasharray="2 20" />
      </svg>
    </div>
  );
}

// ─── Nav Suggestions ─────────────────────────────────────────────────────────
const NAV_ITEMS = [
  { label: "Home", href: "/", icon: "🏠" },
  { label: "Dashboard", href: "/dashboard", icon: "⬡" },
  { label: "Browse", href: "/browse", icon: "◈" },
  { label: "Contact", href: "/contact", icon: "⟁" },
];

// ─── Main 404 Page ────────────────────────────────────────────────────────────
export default function NotFound() {
  const [mounted, setMounted] = useState(false);
  const [errorCode] = useState("0x" + Math.floor(Math.random() * 0xffff).toString(16).toUpperCase().padStart(4, "0"));

  useEffect(() => {
    // Slight delay so animations enter cleanly
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      {/* Global animation keyframes */}
      <style>{`
        @keyframes glitch1 {
          0%,100% { transform: translateX(0); opacity:0.7; clip-path: polygon(0 25%, 100% 25%, 100% 50%, 0 50%); }
          10%      { transform: translateX(-4px); opacity:0.9; }
          20%      { transform: translateX(4px);  opacity:0.5; }
          30%      { transform: translateX(0); clip-path: polygon(0 10%, 100% 10%, 100% 35%, 0 35%); }
          45%      { transform: translateX(-6px); opacity:0.8; }
          55%      { transform: translateX(0); opacity:0; }
          60%      { transform: translateX(3px); opacity:0.7; clip-path: polygon(0 60%, 100% 60%, 100% 75%, 0 75%); }
          80%      { transform: translateX(-2px); }
        }
        @keyframes glitch2 {
          0%,100% { transform: translateX(0); opacity:0.6; }
          15%      { transform: translateX(5px); opacity:0.3; clip-path: polygon(0 70%, 100% 70%, 100% 90%, 0 90%); }
          30%      { transform: translateX(-3px); opacity:0.7; }
          50%      { transform: translateX(0); opacity:0; }
          65%      { transform: translateX(4px); opacity:0.6; clip-path: polygon(0 50%, 100% 50%, 100% 65%, 0 65%); }
          85%      { transform: translateX(-4px); opacity:0.4; }
        }
        @keyframes blink {
          0%,100% { opacity:1; }
          50%     { opacity:0; }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes float {
          0%,100% { transform: translateY(0px); }
          50%     { transform: translateY(-14px); }
        }
        @keyframes pulse-glow {
          0%,100% { box-shadow: 0 0 20px #00f5ff33, 0 0 60px #00f5ff11; }
          50%     { box-shadow: 0 0 40px #00f5ff66, 0 0 100px #00f5ff22; }
        }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes scanMove {
          from { top: -8%; }
          to   { top: 108%; }
        }
      `}</style>

      {/* Page root */}
      <div
        className="relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-center"
        style={{
          background: "radial-gradient(ellipse 80% 70% at 50% 40%, #0a0e1a 0%, #050810 60%, #000308 100%)",
          fontFamily: "'Courier New', monospace",
        }}
      >
        {/* Layers */}
        <StarfieldCanvas />
        <ScanLines />

        {/* Moving scan beam */}
        <div
          className="pointer-events-none fixed left-0 right-0 z-10"
          style={{
            height: "2px",
            background: "linear-gradient(90deg, transparent 0%, #00f5ff55 40%, #00f5ff99 50%, #00f5ff55 60%, transparent 100%)",
            animation: "scanMove 6s linear infinite",
            opacity: 0.5,
          }}
        />

        {/* Main content */}
        <main
          className="relative z-20 flex flex-col items-center gap-8 px-4 py-16 w-full max-w-3xl text-center"
          style={{
            opacity: mounted ? 1 : 0,
            transition: "opacity 0.5s ease",
          }}
        >
          {/* Status chip */}
          <div style={{ animation: "fadeSlideUp 0.6s ease 0.1s both" }}>
            <Chip
              size="sm"
              variant="bordered"
              style={{
                borderColor: "rgba(0,245,255,0.4)",
                color: "#00f5ff",
                fontSize: "10px",
                letterSpacing: "0.18em",
                fontFamily: "'Courier New', monospace",
                background: "rgba(0,245,255,0.06)",
              }}
            >
              NEXOS · SYSTEM ERROR · {errorCode}
            </Chip>
          </div>

          {/* 404 glitch number — with orbit rings behind */}
          <div
            className="relative flex items-center justify-center"
            style={{ animation: "fadeSlideUp 0.7s ease 0.2s both" }}
          >
            <OrbitRing />
            <div
              style={{
                fontSize: "clamp(96px, 20vw, 180px)",
                lineHeight: 1,
                animation: "float 5s ease-in-out infinite",
                position: "relative",
                zIndex: 2,
              }}
            >
              <GlitchText text="404" />
            </div>
          </div>

          {/* Divider with icon */}
          <div
            className="flex justify-center items-center gap-4 w-full max-w-sm"
            style={{ animation: "fadeSlideUp 0.7s ease 0.35s both" }}
          >
            <Divider style={{ background: "rgba(0,245,255,0.2)" }} />
            <span style={{ color: "#00f5ff", fontSize: "20px", flexShrink: 0 }}>⦿</span>
            <Divider style={{ background: "rgba(0,245,255,0.2)" }} />
          </div>

          {/* Headline */}
          <div style={{ animation: "fadeSlideUp 0.7s ease 0.45s both" }}>
            <h1
              className="text-2xl md:text-3xl font-bold tracking-widest uppercase"
              style={{
                color: "#e2e8f0",
                textShadow: "0 0 40px rgba(148,130,255,0.4)",
                letterSpacing: "0.2em",
              }}
            >
              Content Not Found
            </h1>
            <p
              className="mt-3 text-sm md:text-base max-w-md mx-auto leading-relaxed"
              style={{ color: "rgba(148,163,184,0.85)", letterSpacing: "0.04em" }}
            >
              The coordinates you entered don't map to any known sector.
              <br />
              This region may have been decommissioned, relocated, or never existed.
            </p>
          </div>

          {/* Terminal log */}
          <div
            className="w-full flex justify-center"
            style={{ animation: "fadeSlideUp 0.7s ease 0.55s both" }}
          >
            <TerminalLog />
          </div>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row items-center gap-3"
            style={{ animation: "fadeSlideUp 0.7s ease 0.7s both" }}
          >
            <Link href={"/"} >
            <Button
              as={Link}
              href="/"
              size="md"
              variant="solid"
              style={{
                  background: "linear-gradient(135deg, #00f5ff22 0%, #6e40ff22 100%)",
                  border: "1px solid rgba(0,245,255,0.55)",
                  color: "#00f5ff",
                  fontFamily: "'Courier New', monospace",
                  letterSpacing: "0.14em",
                  fontSize: "12px",
                  fontWeight: 700,
                  animation: "pulse-glow 3s ease-in-out infinite",
                  minWidth: "160px",
                }}
                >
              ⟵ RETURN HOME
            </Button>
                </Link>

            <Button
              as={Link}
              href="javascript:history.back()"
              size="md"
              variant="bordered"
              style={{
                borderColor: "rgba(110,64,255,0.5)",
                color: "#a78bfa",
                fontFamily: "'Courier New', monospace",
                letterSpacing: "0.14em",
                fontSize: "12px",
                fontWeight: 700,
                minWidth: "160px",
              }}
            >
              ↩ GO BACK
            </Button>
          </div>

          {/* Divider */}
          <div
            className="w-full max-w-sm"
            style={{ animation: "fadeSlideUp 0.7s ease 0.8s both" }}
          >
            <Divider style={{ background: "rgba(255,255,255,0.07)" }} />
          </div>

          {/* Navigation suggestions */}
          <div
            className="flex flex-col items-center gap-3 w-full"
            style={{ animation: "fadeSlideUp 0.7s ease 0.9s both" }}
          >
            <p
              style={{
                color: "rgba(148,163,184,0.5)",
                fontSize: "10px",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
              }}
            >
              Navigate to Home Page
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {NAV_ITEMS.map((item) => (
                <Link key={item.href} href={item.href}>
                  <Chip
                    variant="bordered"
                    size="sm"
                    style={{
                      borderColor: "rgba(148,130,255,0.3)",
                      color: "rgba(167,139,250,0.9)",
                      background: "rgba(110,64,255,0.06)",
                      fontFamily: "'Courier New', monospace",
                      fontSize: "11px",
                      letterSpacing: "0.1em",
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget;
                      el.style.borderColor = "rgba(148,130,255,0.7)";
                      el.style.background = "rgba(110,64,255,0.18)";
                      el.style.color = "#c4b5fd";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget;
                      el.style.borderColor = "rgba(148,130,255,0.3)";
                      el.style.background = "rgba(110,64,255,0.06)";
                      el.style.color = "rgba(167,139,250,0.9)";
                    }}
                  >
                    {item.icon} {item.label}
                  </Chip>
                </Link>
              ))}
            </div>
          </div>

          {/* Footer tag */}
          <p
            style={{
              color: "rgba(100,116,139,0.4)",
              fontSize: "9px",
              letterSpacing: "0.2em",
              marginTop: "8px",
              animation: "fadeSlideUp 0.7s ease 1s both",
            }}
          >
            NEXOS OS v7.4.1 · SECTOR GRID OFFLINE · {new Date().getFullYear()}
          </p>
        </main>
      </div>
    </>
  );
}