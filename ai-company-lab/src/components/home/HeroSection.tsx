import Image from 'next/image'
import { Container } from '@/components/shared/Container'
import { Button } from '@/components/shared/Button'
import { ArrowRight, Sparkles } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image with overlays */}
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src="/images/hero-bg.jpg"
          alt=""
          fill
          className="object-cover object-center"
          priority
          quality={85}
        />
        <div className="absolute inset-0 bg-primary/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-primary/40" />
      </div>

      {/* Gradient mesh on top */}
      <div className="absolute inset-0 gradient-mesh opacity-60" aria-hidden="true" />
      <div className="absolute inset-0 bg-grid opacity-30" aria-hidden="true" />

      {/* Spotlight beams */}
      <div className="absolute top-0 left-1/4 spotlight opacity-40 -rotate-12" aria-hidden="true" />

      <Container className="relative z-10 pt-32 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Copy */}
          <div>
            <div className="animate-fade-up">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/[0.08] border border-accent/20 text-accent text-sm font-medium mb-8 backdrop-blur-sm">
                <Sparkles className="w-3.5 h-3.5" />
                AI時代を考える全ての人へ
              </span>
            </div>

            <h1 className="animate-fade-up delay-100 text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-8">
              <span className="text-white">AIの会社を、</span>
              <br />
              <span className="text-gradient-bold">AIで考える。</span>
            </h1>

            <p className="animate-fade-up delay-200 text-lg md:text-xl text-text-secondary leading-relaxed mb-10 max-w-lg">
              「AIにできたとしても、人が担うべき仕事は何か。」
              この問いを若者と一緒にAIで考え、公共財として編纂し続ける。
            </p>

            <div className="animate-fade-up delay-300 flex flex-col sm:flex-row gap-4 mb-12">
              <Button variant="primary" size="lg" href="/join">
                参加申込はこちら
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
              <Button variant="secondary" size="lg" href="/design-doc">
                設計書を読む
              </Button>
            </div>

            {/* Stats row */}
            <div className="animate-fade-up delay-400 flex items-center gap-8">
              <div>
                <p className="text-2xl font-bold text-white">無料〜¥1,000</p>
                <p className="text-xs text-text-muted mt-0.5">参加費</p>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div>
                <p className="text-2xl font-bold text-white">オンライン</p>
                <p className="text-xs text-text-muted mt-0.5">開催形式</p>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div>
                <p className="text-2xl font-bold text-white">学生歓迎</p>
                <p className="text-xs text-text-muted mt-0.5">対象</p>
              </div>
            </div>
          </div>

          {/* Right: Image card composition */}
          <div className="hidden lg:block animate-fade-up delay-300">
            <div className="relative">
              {/* Main image */}
              <div className="relative rounded-2xl overflow-hidden border border-white/[0.08] shadow-2xl shadow-black/40">
                <Image
                  src="/images/workshop.jpg"
                  alt="ワークショップの様子"
                  width={600}
                  height={400}
                  className="object-cover w-full h-[380px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent" />

                {/* Overlay text */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-sm text-white/80 font-medium">ワークショップ開催中</span>
                  </div>
                </div>
              </div>

              {/* Floating accent card */}
              <div className="absolute -bottom-6 -left-6 card-highlight rounded-xl p-4 backdrop-blur-md animate-float shadow-2xl shadow-black/30 border border-accent/15">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-accent-dark flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-primary-dark" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">AI × 若者 × 公共財</p>
                    <p className="text-xs text-text-muted">新しい組織のカタチ</p>
                  </div>
                </div>
              </div>

              {/* Small floating image */}
              <div className="absolute -top-4 -right-4 w-28 h-28 rounded-xl overflow-hidden border border-white/10 shadow-xl shadow-black/30 animate-float" style={{ animationDelay: '1.5s' }}>
                <Image
                  src="/images/ai-abstract.jpg"
                  alt=""
                  width={112}
                  height={112}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-accent/10" />
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-primary to-transparent pointer-events-none" />
    </section>
  )
}
