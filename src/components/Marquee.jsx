import { useEffect, useRef, useState } from "react";

const Marquee = ({
  children,
  speed = 50, // pixels per second
  direction = "left", // "left" | "right"
  pauseOnHover = true,
  pauseOnClick = false,
  gradient = false,
  gradientWidth = 200,
  play = true,
  delay = 0,
  loop = 0, // 0 = infinite
}) => {
  const contentRef = useRef(null);
  const [contentWidth, setContentWidth] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (contentRef.current) {
      setContentWidth(contentRef.current.offsetWidth);
    }
  }, [children]);

  const duration = contentWidth ? contentWidth / speed : 0;
  const paused = !play || isPaused;

  return (
    <div
      style={{
        overflow: "hidden",
        position: "relative",
        width: "100%",
        ...(gradient && {
          maskImage: `linear-gradient(to right, transparent, black ${gradientWidth}px, black calc(100% - ${gradientWidth}px), transparent)`,
          WebkitMaskImage: `linear-gradient(to right, transparent, black ${gradientWidth}px, black calc(100% - ${gradientWidth}px), transparent)`,
        }),
      }}
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
      onClick={() => pauseOnClick && setIsPaused((p) => !p)}
    >
      <div
        style={{
          display: "flex",
          width: "max-content",
          animationName: "rfm-marquee-scroll",
          animationTimingFunction: "linear",
          animationIterationCount: loop > 0 ? loop : "infinite",
          animationDuration: `${duration}s`,
          animationDelay: `${delay}s`,
          animationDirection: direction === "right" ? "reverse" : "normal",
          animationPlayState: paused ? "paused" : "running",
          "--rfm-shift": `-${contentWidth}px`,
        }}
      >
        <div
          ref={contentRef}
          style={{ display: "flex", whiteSpace: "nowrap", paddingRight: 48 }}
        >
          {children}
        </div>
        <div
          style={{ display: "flex", whiteSpace: "nowrap", paddingRight: 48 }}
          aria-hidden="true"
        >
          {children}
        </div>
      </div>

      <style>{`
        @keyframes rfm-marquee-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(var(--rfm-shift)); }
        }
        @media (prefers-reduced-motion: reduce) {
          div[style*="rfm-marquee-scroll"] { animation: none !important; }
        }
      `}</style>
    </div>
  );
};

export default Marquee;
