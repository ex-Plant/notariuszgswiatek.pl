export function Guilloche() {
  const lines = 40;
  const width = 600;
  const height = 1400;
  const paths: string[] = [];

  for (let i = 0; i < lines; i++) {
    const phase = (i / lines) * Math.PI * 2;
    const amplitude = 38 + Math.sin(phase * 1.5) * 14;
    const baseX = (i / lines) * width;
    const points: string[] = [];
    const steps = 240;
    for (let s = 0; s <= steps; s++) {
      const t = s / steps;
      const y = t * height;
      const x =
        baseX +
        Math.sin(t * Math.PI * 6 + phase) * amplitude +
        Math.cos(t * Math.PI * 11 + phase * 1.3) * (amplitude * 0.45);
      points.push(`${s === 0 ? "M" : "L"} ${x.toFixed(2)} ${y.toFixed(2)}`);
    }
    paths.push(points.join(" "));
  }

  return (
    <svg
      aria-hidden
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="xMinYMid slice"
      className="pointer-events-none absolute inset-y-0 left-0 h-full w-[28%] md:w-[22%]"
    >
      <defs>
        <linearGradient id="gilosz-fade" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0F1B2D" stopOpacity="0.45" />
          <stop offset="60%" stopColor="#0F1B2D" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#0F1B2D" stopOpacity="0" />
        </linearGradient>
        <mask id="gilosz-mask">
          <rect width={width} height={height} fill="url(#gilosz-fade)" />
        </mask>
      </defs>
      <g mask="url(#gilosz-mask)" stroke="#1B2C4F" strokeWidth="0.6" fill="none">
        {paths.map((d, i) => (
          <path key={i} d={d} />
        ))}
      </g>
    </svg>
  );
}
