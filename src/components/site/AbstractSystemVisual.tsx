/**
 * Abstract "system" visual used on top of Works cards.
 * Pure CSS/SVG so it can be swapped with a real image later.
 * variant switches the composition (dashboard / grid / network / diagram / flow).
 */
type Variant = "dashboard" | "grid" | "network" | "diagram" | "flow";

export function AbstractSystemVisual({ variant }: { variant: Variant }) {
  return (
    <div
      className="relative h-full w-full overflow-hidden"
      style={{ background: "var(--gradient-panel)" }}
    >
      {/* grid backdrop */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(var(--grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />
      {/* radial glow */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 80% 20%, oklch(0.6 0.18 255 / 0.35), transparent 55%)",
        }}
      />
      <div className="absolute inset-0">
        {variant === "network" && <NetworkArt />}
        {variant === "dashboard" && <DashboardArt />}
        {variant === "grid" && <DataGridArt />}
        {variant === "diagram" && <DiagramArt />}
        {variant === "flow" && <FlowArt />}
      </div>
    </div>
  );
}

function NetworkArt() {
  const nodes: [number, number, number][] = [
    [60, 60, 4],
    [180, 40, 3],
    [140, 130, 6],
    [240, 110, 4],
    [80, 170, 3],
    [220, 190, 4],
  ];
  const lines: [number, number, number, number][] = [
    [60, 60, 140, 130],
    [180, 40, 140, 130],
    [140, 130, 240, 110],
    [140, 130, 80, 170],
    [140, 130, 220, 190],
    [240, 110, 220, 190],
  ];
  return (
    <svg viewBox="0 0 300 220" className="h-full w-full">
      <defs>
        <linearGradient id="nline" x1="0" x2="1">
          <stop offset="0%" stopColor="oklch(0.8 0.14 250 / 0.7)" />
          <stop offset="100%" stopColor="oklch(0.55 0.14 255 / 0.1)" />
        </linearGradient>
      </defs>
      {lines.map(([x1, y1, x2, y2], i) => (
        <line
          key={i}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke="url(#nline)"
          strokeWidth="1"
        />
      ))}
      {nodes.map(([x, y, r], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r={r * 3} fill="oklch(0.7 0.16 250 / 0.15)" />
          <circle cx={x} cy={y} r={r} fill="oklch(0.9 0.08 250)" />
        </g>
      ))}
    </svg>
  );
}

function DashboardArt() {
  return (
    <div className="absolute inset-4 rounded-md border border-white/10 bg-white/[0.04] p-3 backdrop-blur-sm">
      <div className="flex gap-1.5">
        <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
        <span className="h-1.5 w-1.5 rounded-full bg-white/25" />
        <span className="h-1.5 w-1.5 rounded-full bg-white/25" />
      </div>
      <div className="mt-3 grid grid-cols-3 gap-2">
        {[0.6, 0.4, 0.8].map((v, i) => (
          <div key={i} className="rounded bg-white/5 p-2">
            <div className="h-1 w-8 rounded bg-white/25" />
            <div className="mt-1.5 h-2 w-10 rounded bg-white/40" />
            <div
              className="mt-2 h-1 rounded bg-[oklch(0.7_0.16_250)]"
              style={{ width: `${v * 100}%` }}
            />
          </div>
        ))}
      </div>
      <div className="mt-3 flex h-14 items-end gap-1 rounded bg-white/[0.03] p-2">
        {[30, 55, 40, 70, 50, 85, 60, 90, 65, 80].map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-sm bg-gradient-to-t from-[oklch(0.55_0.16_255)] to-[oklch(0.75_0.12_240)] opacity-80"
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
    </div>
  );
}

function DataGridArt() {
  return (
    <div className="absolute inset-4 overflow-hidden rounded-md border border-white/10 bg-white/[0.04]">
      <div className="grid grid-cols-4 border-b border-white/10 bg-white/[0.05] text-[8px] uppercase tracking-wider text-white/50">
        {["id", "name", "status", "amt"].map((h) => (
          <div key={h} className="px-2 py-1.5">
            {h}
          </div>
        ))}
      </div>
      {[...Array(6)].map((_, r) => (
        <div key={r} className="grid grid-cols-4 border-b border-white/5">
          {[0, 1, 2, 3].map((c) => (
            <div key={c} className="px-2 py-1.5">
              <div
                className="h-1 rounded bg-white/25"
                style={{ width: `${40 + ((r * 17 + c * 13) % 55)}%` }}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

function DiagramArt() {
  return (
    <svg viewBox="0 0 300 220" className="h-full w-full">
      {[
        [30, 90, 80, 40],
        [110, 60, 80, 40],
        [190, 90, 80, 40],
        [110, 150, 80, 40],
      ].map(([x, y, w, h], i) => (
        <g key={i}>
          <rect
            x={x}
            y={y}
            width={w}
            height={h}
            rx="6"
            fill="oklch(0.3 0.08 260 / 0.6)"
            stroke="oklch(0.7 0.14 250 / 0.5)"
          />
          <rect x={x + 8} y={y + 10} width={30} height={3} rx="1.5" fill="oklch(0.85 0.08 250 / 0.7)" />
          <rect x={x + 8} y={y + 20} width={50} height={3} rx="1.5" fill="oklch(0.85 0.08 250 / 0.35)" />
        </g>
      ))}
      {[
        [110, 110, 110, 80],
        [190, 110, 150, 80],
        [190, 110, 150, 170],
        [110, 130, 110, 170],
      ].map(([x1, y1, x2, y2], i) => (
        <line
          key={i}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke="oklch(0.7 0.14 250 / 0.5)"
          strokeDasharray="3 3"
        />
      ))}
    </svg>
  );
}

function FlowArt() {
  return (
    <svg viewBox="0 0 300 220" className="h-full w-full">
      <defs>
        <linearGradient id="flowline" x1="0" x2="1">
          <stop offset="0%" stopColor="oklch(0.55 0.16 255 / 0)" />
          <stop offset="50%" stopColor="oklch(0.85 0.12 250 / 0.8)" />
          <stop offset="100%" stopColor="oklch(0.55 0.16 255 / 0)" />
        </linearGradient>
      </defs>
      {[50, 90, 130, 170].map((y, i) => (
        <path
          key={i}
          d={`M0 ${y} C 80 ${y - 20}, 220 ${y + 20}, 300 ${y}`}
          stroke="url(#flowline)"
          fill="none"
          strokeWidth="1"
        />
      ))}
      {[
        [70, 60],
        [150, 110],
        [230, 90],
        [110, 170],
        [220, 160],
      ].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="3" fill="oklch(0.9 0.08 250)" />
      ))}
    </svg>
  );
}
