import Image from 'next/image'
import { Container } from './Container'

interface PageHeroProps {
  label: string
  title: string
  subtitle: string
  imageSrc?: string
  imageAlt?: string
  children?: React.ReactNode
}

export function PageHero({ label, title, subtitle, imageSrc, imageAlt, children }: PageHeroProps) {
  return (
    <section className="relative pt-28 pb-16 md:pb-24 overflow-hidden">
      {imageSrc && (
        <div className="absolute inset-0">
          <Image
            src={imageSrc}
            alt={imageAlt || ''}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/90 to-primary" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/60 to-transparent" />
        </div>
      )}
      {!imageSrc && (
        <div className="absolute inset-0 bg-grid opacity-40" />
      )}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] rounded-full bg-accent/[0.04] blur-[120px] pointer-events-none" />
      <Container>
        <div className="relative">
          <p className="text-accent font-medium text-sm tracking-[0.2em] uppercase mb-4 animate-fade-up">
            {label}
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6 animate-fade-up delay-100">
            {title}
          </h1>
          <p className="text-text-secondary text-lg md:text-xl leading-relaxed max-w-2xl animate-fade-up delay-200">
            {subtitle}
          </p>
          {children && (
            <div className="mt-8 animate-fade-up delay-300">
              {children}
            </div>
          )}
        </div>
      </Container>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
    </section>
  )
}
