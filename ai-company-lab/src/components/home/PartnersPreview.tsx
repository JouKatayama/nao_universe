import Image from 'next/image'
import { Container } from '@/components/shared/Container'
import { Button } from '@/components/shared/Button'
import { ScrollReveal } from '@/components/shared/ScrollReveal'
import { Handshake, ExternalLink, ArrowRight } from 'lucide-react'
import type { Partner } from '@/lib/types'

export function PartnersPreview({ partners }: { partners: Partner[] }) {
  return (
    <section className="relative py-24 md:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-primary" />

      <Container className="relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-accent font-medium text-sm tracking-[0.25em] uppercase mb-4">Partners</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              協賛・パートナー
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          {partners.length > 0 ? (
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              {partners.map((p) => (
                <a
                  key={p.id}
                  href={p.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group card rounded-xl px-8 py-5 flex items-center gap-3"
                >
                  <span className="text-white text-sm font-medium group-hover:text-accent transition-colors duration-300">{p.name}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-text-muted opacity-0 group-hover:opacity-100 transition-opacity duration-300" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          ) : (
            <div className="max-w-2xl mx-auto">
              <div className="card rounded-2xl overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                  <div className="relative h-48 md:h-auto">
                    <Image
                      src="/images/collaboration.jpg"
                      alt="コラボレーション"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-primary/60 hidden md:block" />
                    <div className="absolute inset-0 bg-primary/30" />
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <Handshake className="w-8 h-8 text-accent/40 mb-4" strokeWidth={1.5} />
                    <h3 className="text-lg font-bold text-white mb-3">
                      パートナーを募集しています
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed mb-6">
                      協賛・共同研究・会場提供など、多様な形での参画を歓迎します。
                    </p>
                    <Button variant="primary" href="/contact/sponsor">
                      詳しく見る
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </ScrollReveal>
      </Container>
    </section>
  )
}
