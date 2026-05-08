import { cn } from '@/lib/utils'
import type { ContainerSize } from '@/lib/types'

const sizeClasses: Record<ContainerSize, string> = {
  default: 'max-w-content',
  narrow: 'max-w-prose',
  wide: 'max-w-full',
}

export function Container({
  size = 'default',
  children,
  className,
}: {
  size?: ContainerSize
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={cn('mx-auto px-4 md:px-6 lg:px-8', sizeClasses[size], className)}>
      {children}
    </div>
  )
}
