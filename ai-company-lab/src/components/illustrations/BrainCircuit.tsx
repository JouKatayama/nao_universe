'use client'

export function BrainCircuit({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" className={className} aria-hidden="true">
      <defs>
        <radialGradient id="bc-center" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#d4a574" stopOpacity="0.25" />
          <stop offset="70%" stopColor="#d4a574" stopOpacity="0.05" />
          <stop offset="100%" stopColor="#d4a574" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx="100" cy="100" r="60" fill="url(#bc-center)" />

      {/* Neural pathways */}
      <path d="M100 40 Q80 70 100 100 Q120 130 100 160" stroke="#d4a574" strokeWidth="0.6" strokeOpacity="0.2" fill="none">
        <animate attributeName="stroke-opacity" values="0.1;0.3;0.1" dur="4s" repeatCount="indefinite" />
      </path>
      <path d="M40 100 Q70 80 100 100 Q130 120 160 100" stroke="#d4a574" strokeWidth="0.6" strokeOpacity="0.2" fill="none">
        <animate attributeName="stroke-opacity" values="0.1;0.3;0.1" dur="5s" repeatCount="indefinite" begin="1s" />
      </path>
      <path d="M55 55 Q80 80 100 100 Q120 120 145 145" stroke="#d4a574" strokeWidth="0.5" strokeOpacity="0.15" fill="none">
        <animate attributeName="stroke-opacity" values="0.08;0.25;0.08" dur="4.5s" repeatCount="indefinite" begin="0.5s" />
      </path>
      <path d="M145 55 Q120 80 100 100 Q80 120 55 145" stroke="#d4a574" strokeWidth="0.5" strokeOpacity="0.15" fill="none">
        <animate attributeName="stroke-opacity" values="0.08;0.25;0.08" dur="3.5s" repeatCount="indefinite" begin="1.5s" />
      </path>

      {/* Center node */}
      <circle cx="100" cy="100" r="4" fill="#d4a574" opacity="0.6">
        <animate attributeName="r" values="3;5;3" dur="3s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.4;0.8;0.4" dur="3s" repeatCount="indefinite" />
      </circle>

      {/* Outer nodes */}
      {[
        { cx: 100, cy: 40 }, { cx: 100, cy: 160 },
        { cx: 40, cy: 100 }, { cx: 160, cy: 100 },
        { cx: 55, cy: 55 }, { cx: 145, cy: 145 },
        { cx: 145, cy: 55 }, { cx: 55, cy: 145 },
      ].map((n, i) => (
        <circle key={i} cx={n.cx} cy={n.cy} r="2.5" fill="#d4a574" opacity="0.3">
          <animate attributeName="opacity" values="0.2;0.5;0.2" dur={`${3 + i * 0.3}s`} repeatCount="indefinite" begin={`${i * 0.4}s`} />
        </circle>
      ))}

      {/* Concentric rings */}
      <circle cx="100" cy="100" r="30" fill="none" stroke="#d4a574" strokeWidth="0.3" strokeOpacity="0.1" strokeDasharray="2 4">
        <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="20s" repeatCount="indefinite" />
      </circle>
      <circle cx="100" cy="100" r="50" fill="none" stroke="#d4a574" strokeWidth="0.3" strokeOpacity="0.08" strokeDasharray="3 6">
        <animateTransform attributeName="transform" type="rotate" from="360 100 100" to="0 100 100" dur="25s" repeatCount="indefinite" />
      </circle>
    </svg>
  )
}
