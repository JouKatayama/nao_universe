import { cn } from '@/lib/utils'
import type { BadgeVariant } from '@/lib/types'

const variantClasses: Record<BadgeVariant, string> = {
  accent:
    'bg-accent/10 border border-accent/20 text-accent',
  subtle:
    'bg-white/[0.04] border border-white/[0.08] text-text-secondary',
}

export function Badge({
  variant = 'accent',
  children,
  className,
}: {
  variant?: BadgeVariant
  children: React.ReactNode
  className?: string
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 rounded-full text-xs font-medium tracking-wide',
        variantClasses[variant],
        className
      )}
    >
      {children}
    </span>
  )
}
