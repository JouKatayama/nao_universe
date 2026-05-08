import { cn } from '@/lib/utils'
import type { CardVariant } from '@/lib/types'

const variantClasses: Record<CardVariant, string> = {
  default: 'glass',
  bordered: 'glass border border-white/[0.06]',
  'accent-border': 'glass gradient-border',
}

export function Card({
  variant = 'default',
  hoverable = false,
  children,
  className,
}: {
  variant?: CardVariant
  hoverable?: boolean
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        'rounded-2xl p-6 md:p-8 transition-all duration-300',
        variantClasses[variant],
        hoverable && 'glass-hover hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/20',
        className
      )}
    >
      {children}
    </div>
  )
}
