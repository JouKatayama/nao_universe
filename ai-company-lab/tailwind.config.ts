import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0a0a0a',
          light: '#111111',
          dark: '#050505',
        },
        accent: {
          DEFAULT: '#d4a574',
          light: '#e8c39a',
          dark: '#a8804f',
          muted: 'rgba(212, 165, 116, 0.12)',
        },
        'text-primary': '#ffffff',
        'text-secondary': '#a1a1aa',
        'text-muted': '#71717a',
        'border-accent': 'rgba(212, 165, 116, 0.25)',
        'border-subtle': 'rgba(255, 255, 255, 0.08)',
        surface: {
          DEFAULT: 'rgba(255, 255, 255, 0.03)',
          hover: 'rgba(255, 255, 255, 0.06)',
        },
      },
      fontFamily: {
        sans: [
          'var(--font-noto-sans-jp)',
          '"Hiragino Sans"',
          '"Hiragino Kaku Gothic ProN"',
          '-apple-system',
          'BlinkMacSystemFont',
          'sans-serif',
        ],
        serif: ['var(--font-noto-serif-jp)', 'serif'],
      },
      maxWidth: {
        content: '1200px',
        prose: '800px',
      },
      animation: {
        'fade-up': 'fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) both',
        'fade-in': 'fade-in 0.6s ease both',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
        'gradient-rotate': 'gradient-rotate 8s linear infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'beam': 'beam 8s ease-in-out infinite',
      },
      typography: {
        DEFAULT: {
          css: {
            '--tw-prose-body': '#a1a1aa',
            '--tw-prose-headings': '#ffffff',
            '--tw-prose-links': '#d4a574',
            '--tw-prose-bold': '#ffffff',
            '--tw-prose-quotes': '#e8c39a',
            '--tw-prose-quote-borders': '#d4a574',
            '--tw-prose-counters': '#71717a',
            '--tw-prose-bullets': '#71717a',
            '--tw-prose-hr': 'rgba(255, 255, 255, 0.1)',
            '--tw-prose-th-borders': 'rgba(255, 255, 255, 0.1)',
            '--tw-prose-td-borders': 'rgba(255, 255, 255, 0.1)',
            '--tw-prose-code': '#d4a574',
            '--tw-prose-pre-bg': '#050505',
            '--tw-prose-pre-code': '#a1a1aa',
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

export default config
