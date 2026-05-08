'use client'

export function NetworkConstellation({ className }: { className?: string }) {
  const nodes = [
    { cx: 120, cy: 80, r: 4, delay: 0 },
    { cx: 280, cy: 50, r: 3, delay: 0.5 },
    { cx: 350, cy: 180, r: 5, delay: 1 },
    { cx: 200, cy: 200, r: 3.5, delay: 1.5 },
    { cx: 420, cy: 100, r: 4, delay: 0.8 },
    { cx: 150, cy: 320, r: 3, delay: 2 },
    { cx: 320, cy: 300, r: 4.5, delay: 0.3 },
    { cx: 450, cy: 260, r: 3, delay: 1.2 },
    { cx: 80, cy: 200, r: 3.5, delay: 1.8 },
    { cx: 500, cy: 180, r: 4, delay: 0.6 },
    { cx: 250, cy: 130, r: 6, delay: 0.2 },
    { cx: 380, cy: 350, r: 3, delay: 1.4 },
    { cx: 180, cy: 400, r: 4, delay: 0.9 },
    { cx: 420, cy: 400, r: 3.5, delay: 1.6 },
    { cx: 300, cy: 420, r: 5, delay: 0.4 },
  ]

  const connections = [
    [0, 1], [0, 3], [1, 4], [1, 10], [2, 4], [2, 7],
    [3, 5], [3, 8], [3, 10], [5, 6], [6, 7], [6, 11],
    [7, 9], [8, 5], [9, 2], [10, 2], [11, 13], [12, 5],
    [12, 14], [13, 14], [6, 14],
  ]

  return (
    <svg
      viewBox="0 0 560 480"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="nc-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#d4a574" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#d4a574" stopOpacity="0" />
        </radialGradient>
        <filter id="nc-blur">
          <feGaussianBlur stdDeviation="2" />
        </filter>
      </defs>

      {connections.map(([a, b], i) => (
        <line
          key={`conn-${i}`}
          x1={nodes[a].cx}
          y1={nodes[a].cy}
          x2={nodes[b].cx}
          y2={nodes[b].cy}
          stroke="#d4a574"
          strokeOpacity="0.12"
          strokeWidth="0.8"
        >
          <animate
            attributeName="stroke-opacity"
            values="0.06;0.18;0.06"
            dur={`${3 + (i % 4)}s`}
            repeatCount="indefinite"
            begin={`${(i * 0.3) % 2}s`}
          />
        </line>
      ))}

      {nodes.map((node, i) => (
        <g key={`node-${i}`}>
          <circle
            cx={node.cx}
            cy={node.cy}
            r={node.r * 6}
            fill="url(#nc-glow)"
            filter="url(#nc-blur)"
            opacity="0.5"
          >
            <animate
              attributeName="opacity"
              values="0.3;0.6;0.3"
              dur={`${4 + (i % 3)}s`}
              repeatCount="indefinite"
              begin={`${node.delay}s`}
            />
          </circle>
          <circle
            cx={node.cx}
            cy={node.cy}
            r={node.r}
            fill="#d4a574"
          >
            <animate
              attributeName="opacity"
              values="0.4;0.9;0.4"
              dur={`${4 + (i % 3)}s`}
              repeatCount="indefinite"
              begin={`${node.delay}s`}
            />
            <animate
              attributeName="r"
              values={`${node.r};${node.r * 1.3};${node.r}`}
              dur={`${4 + (i % 3)}s`}
              repeatCount="indefinite"
              begin={`${node.delay}s`}
            />
          </circle>
        </g>
      ))}

      <circle cx="250" cy="130" r="40" fill="none" stroke="#d4a574" strokeWidth="0.5" strokeOpacity="0.15" strokeDasharray="3 6">
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 250 130"
          to="360 250 130"
          dur="30s"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="250" cy="130" r="60" fill="none" stroke="#d4a574" strokeWidth="0.3" strokeOpacity="0.08" strokeDasharray="2 8">
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="360 250 130"
          to="0 250 130"
          dur="40s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  )
}
