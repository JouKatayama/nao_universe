export function AbstractWave({ className, flip }: { className?: string; flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 1440 120"
      fill="none"
      preserveAspectRatio="none"
      className={className}
      style={flip ? { transform: 'scaleY(-1)' } : undefined}
      aria-hidden="true"
    >
      <path
        d="M0 60 C360 10, 540 110, 720 60 S1080 10, 1440 60 V120 H0Z"
        fill="url(#wave-grad)"
        opacity="0.5"
      />
      <path
        d="M0 70 C300 30, 600 100, 900 50 S1200 30, 1440 70 V120 H0Z"
        fill="url(#wave-grad2)"
        opacity="0.3"
      />
      <defs>
        <linearGradient id="wave-grad" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#d4a574" stopOpacity="0.05" />
          <stop offset="50%" stopColor="#d4a574" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#d4a574" stopOpacity="0.03" />
        </linearGradient>
        <linearGradient id="wave-grad2" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#d4a574" stopOpacity="0.03" />
          <stop offset="50%" stopColor="#d4a574" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#d4a574" stopOpacity="0.05" />
        </linearGradient>
      </defs>
    </svg>
  )
}
