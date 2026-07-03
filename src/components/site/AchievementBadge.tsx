import { cn } from "@/lib/utils";

/**
 * Certification-style achievement badge — crown + laurel wreath + navy shield
 * + ribbon, drawn entirely in SVG/CSS (no images).
 * Palette: navy shield, white/blue text, restrained muted gold ornament.
 * Inspired by BtoB "authority" badges but implemented independently for RuxelTech.
 */

const GOLD = "#c2a25c";
const GOLD_LIGHT = "#e0c988";
const NAVY = "#13233f";

// Laurel leaves along the right side of the shield; left side is mirrored.
const RIGHT_LEAVES = Array.from({ length: 8 }, (_, i) => {
  const start = 292; // deg (0 = right, 90 = up) — lower right
  const sweep = 138; // up toward the shoulder of the shield
  const t = start + (sweep * i) / 7;
  const rad = (t * Math.PI) / 180;
  const R = 45;
  const cx = 60 + R * Math.cos(rad);
  const cy = 80 - R * Math.sin(rad);
  return { cx, cy, rot: 90 - t };
});

export function AchievementBadge({
  main,
  sub,
  ribbon = "POINT",
  className,
}: {
  main: string;
  sub?: string;
  ribbon?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative h-[7.1rem] w-[5.8rem] flex-none lg:h-[8rem] lg:w-[6.6rem]",
        className,
      )}
    >
      <svg
        viewBox="0 0 120 148"
        className="absolute inset-0 h-full w-full drop-shadow-[0_14px_26px_oklch(0.3_0.09_260/0.18)]"
        aria-hidden
      >
        <defs>
          <linearGradient id="shieldFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1c3057" />
            <stop offset="100%" stopColor={NAVY} />
          </linearGradient>
        </defs>

        {/* laurel wreath */}
        <g fill={GOLD}>
          {RIGHT_LEAVES.map((l, i) => (
            <ellipse
              key={`r${i}`}
              cx={l.cx}
              cy={l.cy}
              rx="6"
              ry="2.6"
              transform={`rotate(${l.rot} ${l.cx} ${l.cy})`}
            />
          ))}
          <g transform="translate(120,0) scale(-1,1)">
            {RIGHT_LEAVES.map((l, i) => (
              <ellipse
                key={`l${i}`}
                cx={l.cx}
                cy={l.cy}
                rx="6"
                ry="2.6"
                transform={`rotate(${l.rot} ${l.cx} ${l.cy})`}
              />
            ))}
          </g>
        </g>

        {/* crown */}
        <g>
          <path
            d="M43 33 L47 18 L53.5 26 L60 13 L66.5 26 L73 18 L77 33 Z"
            fill={GOLD}
            stroke={GOLD_LIGHT}
            strokeWidth="0.6"
            strokeLinejoin="round"
          />
          <circle cx="60" cy="12" r="2.2" fill={GOLD_LIGHT} />
          <circle cx="47" cy="17.5" r="1.6" fill={GOLD_LIGHT} />
          <circle cx="73" cy="17.5" r="1.6" fill={GOLD_LIGHT} />
        </g>

        {/* shield */}
        <path
          d="M30 41 Q30 34 37 34 L83 34 Q90 34 90 41 L90 84 Q90 107 60 121 Q30 107 30 84 Z"
          fill="url(#shieldFill)"
          stroke={GOLD}
          strokeWidth="1.6"
        />
        {/* inner hairline */}
        <path
          d="M35 44 Q35 39 40 39 L80 39 Q85 39 85 44 L85 83 Q85 101 60 113 Q35 101 35 83 Z"
          fill="none"
          stroke={GOLD}
          strokeOpacity="0.4"
          strokeWidth="0.7"
        />

        {/* ribbon */}
        <g>
          <path d="M26 116 L40 112 L40 126 L26 130 Z" fill="#a4863f" />
          <path d="M94 116 L80 112 L80 126 L94 130 Z" fill="#a4863f" />
          <rect x="38" y="114" width="44" height="15" rx="1.5" fill={GOLD} />
          <text
            x="60"
            y="124.6"
            textAnchor="middle"
            fill={NAVY}
            fontSize="7.5"
            fontWeight="700"
            letterSpacing="0.5"
          >
            {ribbon}
          </text>
        </g>
      </svg>

      {/* shield text overlay */}
      <div className="absolute inset-x-0 top-[30%] flex flex-col items-center px-2 text-center leading-tight">
        <span className="text-[0.82rem] font-bold text-white lg:text-[0.94rem]">
          {main}
        </span>
        {sub && (
          <span className="mt-0.5 text-[0.56rem] font-semibold tracking-wide text-[color:#e9d5a3] lg:text-[0.62rem]">
            {sub}
          </span>
        )}
      </div>
    </div>
  );
}
