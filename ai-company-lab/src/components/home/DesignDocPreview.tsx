import Image from 'next/image'
import { Container } from '@/components/shared/Container'
import { Button } from '@/components/shared/Button'
import { ScrollReveal } from '@/components/shared/ScrollReveal'
import { formatDate } from '@/lib/utils'
import { FileText, Target, Eye, Heart, Brain, Shield, Scale, AlertTriangle, ArrowRight } from 'lucide-react'
import type { DesignDoc } from '@/lib/types'

const SECTIONS = [
  { label: 'ミッション', icon: Target },
  { label: 'ビジョン', icon: Eye },
  { label: 'バリュー', icon: Heart },
  { label: 'AIが担うべき仕事 / 人間が担うべき仕事', icon: Brain },
  { label: 'AI上司の設計', icon: Shield },
  { label: 'AIガバナンス憲章', icon: Scale },
  { label: '違和感ログ', icon: AlertTriangle },
]

export function DesignDocPreview({ designDoc }: { designDoc: DesignDoc }) {
  const { frontmatter } = designDoc
  return (
    <section className="relative py-24 md:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-primary-light" />
      <div className="divider-glow absolute top-0 left-0 right-0" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Visual + Info */}
          <ScrollReveal>
            <div className="sticky top-32">
              {/* Image with overlay */}
              <div className="relative rounded-2xl overflow-hidden mb-8">
                <Image
                  src="/images/ai-abstract.jpg"
                  alt="AIビジュアライゼーション"
                  width={600}
                  height={340}
                  className="object-cover w-full h-[300px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-light via-primary-light/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-black/30 backdrop-blur-sm border border-white/10 flex items-center justify-center">
                      <FileText className="w-5 h-5 text-accent" strokeWidth={1.5} />
                    </div>
                    <span className="inline-flex items-center px-3 py-1 rounded-lg bg-accent/20 backdrop-blur-sm text-accent text-xs font-bold">
                      ver.{frontmatter.version}
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-accent font-medium text-sm tracking-[0.25em] uppercase mb-3">Design Document</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
                理想のAI企業設計書
              </h2>
              <p className="text-text-secondary text-sm leading-[1.8] mb-4">
                参加者の議論から継続的に編纂される、AIと人が共存する会社の設計書。
                誰でも閲覧・引用できる公共財として公開しています。
              </p>
              <p className="text-text-muted text-xs mb-8">
                最終更新: {formatDate(frontmatter.lastUpdated)}
              </p>

              <Button variant="primary" href="/design-doc">
                設計書を読む
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </ScrollReveal>

          {/* Right: Sections list */}
          <div className="space-y-3">
            {SECTIONS.map((s, i) => {
              const Icon = s.icon
              return (
                <ScrollReveal key={s.label} delay={i * 80}>
                  <div className="group card rounded-xl px-6 py-5 flex items-center gap-4">
                    <span className="text-accent/25 text-sm font-mono w-6 text-right flex-shrink-0">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-accent/[0.06] flex items-center justify-center flex-shrink-0 group-hover:bg-accent/[0.12] transition-colors duration-300">
                      <Icon className="w-4 h-4 text-accent/50 group-hover:text-accent transition-colors duration-300" strokeWidth={1.5} />
                    </div>
                    <span className="text-text-secondary text-sm group-hover:text-white transition-colors duration-300 font-medium flex-1">
                      {s.label}
                    </span>
                    <ArrowRight className="w-4 h-4 text-accent/0 group-hover:text-accent/50 transition-all duration-300" />
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </Container>
    </section>
  )
}
