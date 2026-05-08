import Link from 'next/link'
import { cn } from '@/lib/utils'
import type { ButtonVariant, ButtonSize } from '@/lib/types'

interface ButtonProps {
  variant?: ButtonVariant
  size?: ButtonSize
  href?: string
  external?: boolean
  children: React.ReactNode
  className?: string
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-gradient-to-r from-accent to-accent-light text-primary-dark font-semibold shadow-lg shadow-accent/20 hover:shadow-accent/30 hover:brightness-110',
  secondary:
    'border border-accent/40 text-accent hover:bg-accent/10 hover:border-accent/60 font-semibold backdrop-blur-sm',
  tertiary:
    'text-accent hover:text-accent-light group',
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-3.5 text-base',
}

export function Button({
  variant = 'primary',
  size = 'md',
  href,
  external = false,
  children,
  className,
}: ButtonProps) {
  const base = cn(
    'inline-flex items-center justify-center gap-2 rounded-lg transition-all duration-300',
    variantClasses[variant],
    variant !== 'tertiary' && sizeClasses[size],
    className
  )

  const inner = variant === 'tertiary' ? (
    <span className="inline-flex items-center gap-1 text-sm">
      {children}
    </span>
  ) : children

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={base}>
          {inner}
        </a>
      )
    }
    return (
      <Link href={href} className={base}>
        {inner}
      </Link>
    )
  }
  return <button className={base}>{inner}</button>
}
