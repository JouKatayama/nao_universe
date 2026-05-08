import { cn } from '@/lib/utils'

export function SectionHeading({
  title,
  subtitle,
  label,
  align = 'left',
  className,
}: {
  title: string
  subtitle?: string
  label?: string
  align?: 'left' | 'center'
  className?: string
}) {
  return (
    <div className={cn(align === 'center' && 'text-center', 'mb-16', className)}>
      {label && (
        <p className="text-accent font-medium text-sm tracking-[0.25em] uppercase mb-4">{label}</p>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-text-secondary text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  )
}
