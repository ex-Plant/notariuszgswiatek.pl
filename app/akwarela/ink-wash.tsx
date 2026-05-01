export function InkWash() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 600 1400"
      preserveAspectRatio="xMaxYMid slice"
      className="pointer-events-none absolute right-[-6%] top-0 h-full w-[35%] md:w-[28%]"
    >
      <defs>
        <filter
          id="akwarela-paper"
          x="-20%"
          y="-10%"
          width="140%"
          height="120%"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.012 0.018"
            numOctaves="3"
            seed="11"
          />
          <feDisplacementMap in="SourceGraphic" scale="48" />
          <feGaussianBlur stdDeviation="0.8" />
        </filter>
        <linearGradient
          id="akwarela-stroke"
          x1="0%"
          y1="20%"
          x2="0%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#0F1B2D" stopOpacity="0" />
          <stop offset="22%" stopColor="#1B2C4F" stopOpacity="0.55" />
          <stop offset="55%" stopColor="#0F1B2D" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#0F1B2D" stopOpacity="0.45" />
        </linearGradient>
        <radialGradient
          id="akwarela-pool"
          cx="35%"
          cy="60%"
          r="55%"
          fx="30%"
          fy="55%"
        >
          <stop offset="0%" stopColor="#0F1B2D" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#0F1B2D" stopOpacity="0" />
        </radialGradient>
      </defs>
      <g filter="url(#akwarela-paper)">
        <path
          d="M 280 60 C 240 220, 320 380, 260 560 C 210 720, 340 880, 280 1080 C 240 1220, 320 1320, 300 1400 L 600 1400 L 600 0 L 320 0 Z"
          fill="url(#akwarela-stroke)"
        />
        <ellipse cx="320" cy="780" rx="220" ry="380" fill="url(#akwarela-pool)" />
        <ellipse
          cx="380"
          cy="500"
          rx="160"
          ry="240"
          fill="#0F1B2D"
          opacity="0.12"
        />
        <ellipse
          cx="280"
          cy="1080"
          rx="140"
          ry="200"
          fill="#0F1B2D"
          opacity="0.18"
        />
      </g>
    </svg>
  );
}
