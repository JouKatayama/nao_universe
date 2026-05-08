import Image from 'next/image'
import { Container } from '@/components/shared/Container'
import { Button } from '@/components/shared/Button'
import { ScrollReveal } from '@/components/shared/ScrollReveal'
import { ArrowRight } from 'lucide-react'

export function CtaFooter() {
  return (
    <section className="relative py-32 md:py-44 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src="/images/cta-bg.jpg"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary-dark/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/60 via-transparent to-primary-dark/60" />
      </div>

      <div className="divider-glow absolute top-0 left-0 right-0" />

      {/* Gradient mesh on top */}
      <div className="absolute inset-0 gradient-mesh opacity-50" aria-hidden="true" />

      <Container className="relative z-10 text-center">
        <ScrollReveal>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
            <span className="text-white">AIの会社を、</span>
            <br />
            <span className="text-gradient-bold">一緒に考えませんか。</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <p className="text-text-secondary mb-12 max-w-lg mx-auto text-lg leading-relaxed">
            ワークショップへの参加、または企業・大学からの
            お問い合わせをお待ちしています。
          </p>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg" href="/join">
              参加申込
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
            <Button variant="secondary" size="lg" href="/contact">
              企業・大学の方はこちら
            </Button>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  )
}
