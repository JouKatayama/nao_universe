import { Container } from '@/components/shared/Container'
import { ScrollReveal } from '@/components/shared/ScrollReveal'

export function CoreQuestion() {
  return (
    <section className="relative py-32 md:py-44 overflow-hidden">
      {/* Rich gradient background */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary-light to-primary" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-accent/[0.06] blur-[150px]" />
      </div>

      <div className="divider-glow absolute top-0 left-0 right-0" />
      <div className="divider-glow absolute bottom-0 left-0 right-0" />

      <Container size="narrow" className="relative z-10">
        <ScrollReveal>
          <p className="text-accent font-medium text-sm tracking-[0.25em] uppercase text-center mb-10">
            Central Question
          </p>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <blockquote className="text-center">
            <p className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white leading-[1.4]">
              AIにできるかどうかではなく、
              <br />
              AIにできたとしても、
              <br />
              <span className="text-gradient-accent">人が担うべき仕事は何か。</span>
            </p>
          </blockquote>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="mt-14 flex justify-center">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
          </div>
          <p className="text-text-secondary text-center mt-8 text-base md:text-lg leading-relaxed max-w-md mx-auto">
            これは能力比較ではなく、<strong className="text-white font-medium">価値判断</strong>の問いです。
            「できる/できない」から「任せたい/任せたくない」への軸転換。
          </p>
        </ScrollReveal>
      </Container>
    </section>
  )
}
