'use client'

export function FloatingShapes({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 400" fill="none" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="fs-grad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#d4a574" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#d4a574" stopOpacity="0.02" />
        </linearGradient>
        <linearGradient id="fs-grad2" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#d4a574" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#d4a574" stopOpacity="0.01" />
        </linearGradient>
      </defs>

      {/* Hexagon */}
      <polygon
        points="200,40 260,80 260,160 200,200 140,160 140,80"
        fill="none"
        stroke="url(#fs-grad1)"
        strokeWidth="0.8"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 200 120"
          to="360 200 120"
          dur="60s"
          repeatCount="indefinite"
        />
      </polygon>

      {/* Diamond */}
      <rect
        x="170"
        y="220"
        width="60"
        height="60"
        fill="url(#fs-grad2)"
        rx="4"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 200 250"
          to="360 200 250"
          dur="20s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="0.4;0.8;0.4"
          dur="6s"
          repeatCount="indefinite"
        />
      </rect>

      {/* Orbit rings */}
      <ellipse cx="200" cy="200" rx="150" ry="60" fill="none" stroke="#d4a574" strokeWidth="0.4" strokeOpacity="0.1" strokeDasharray="4 8">
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 200 200"
          to="360 200 200"
          dur="40s"
          repeatCount="indefinite"
        />
      </ellipse>
      <ellipse cx="200" cy="200" rx="120" ry="80" fill="none" stroke="#d4a574" strokeWidth="0.3" strokeOpacity="0.08" strokeDasharray="2 6">
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="360 200 200"
          to="0 200 200"
          dur="35s"
          repeatCount="indefinite"
        />
      </ellipse>

      {/* Small decorative circles */}
      <circle cx="80" cy="100" r="2" fill="#d4a574" opacity="0.3">
        <animate attributeName="opacity" values="0.2;0.5;0.2" dur="3s" repeatCount="indefinite" />
      </circle>
      <circle cx="320" cy="300" r="1.5" fill="#d4a574" opacity="0.25">
        <animate attributeName="opacity" values="0.15;0.4;0.15" dur="4s" repeatCount="indefinite" begin="1s" />
      </circle>
      <circle cx="340" cy="80" r="2.5" fill="#d4a574" opacity="0.2">
        <animate attributeName="opacity" values="0.1;0.35;0.1" dur="5s" repeatCount="indefinite" begin="0.5s" />
      </circle>
      <circle cx="60" cy="300" r="1.8" fill="#d4a574" opacity="0.3">
        <animate attributeName="opacity" values="0.2;0.45;0.2" dur="3.5s" repeatCount="indefinite" begin="1.5s" />
      </circle>
    </svg>
  )
}
