import Image from 'next/image'
import { Container } from '@/components/shared/Container'
import { Button } from '@/components/shared/Button'
import { VoiceCard } from '@/components/content/VoiceCard'
import { ScrollReveal } from '@/components/shared/ScrollReveal'
import { MessageSquareQuote, ArrowRight } from 'lucide-react'
import type { Voice } from '@/lib/types'

export function VoicesPreview({ voices }: { voices: Voice[] }) {
  return (
    <section className="relative py-24 md:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-primary" />

      <Container className="relative z-10">
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center">
              <MessageSquareQuote className="w-5 h-5 text-accent" strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-accent font-medium text-sm tracking-[0.25em] uppercase">Voices</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">参加者の声</h2>
            </div>
          </div>
          <p className="text-text-muted text-sm ml-16 mb-16">ワークショップで得られた気づきと感想</p>
        </ScrollReveal>

        {voices.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            {voices.slice(0, 3).map((v, i) => (
              <ScrollReveal key={v.id} delay={i * 100}>
                <VoiceCard voice={v} />
              </ScrollReveal>
            ))}
          </div>
        ) : (
          <ScrollReveal>
            <div className="card rounded-2xl overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-0">
                <div className="relative h-56 md:h-auto md:col-span-2">
                  <Image
                    src="/images/students.jpg"
                    alt="学生たちの議論"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-primary/50 hidden md:block" />
                  <div className="absolute inset-0 bg-primary/20" />
                </div>
                <div className="p-8 md:p-10 md:col-span-3 flex flex-col justify-center">
                  <MessageSquareQuote className="w-8 h-8 text-accent/30 mb-4" strokeWidth={1.5} />
                  <h3 className="text-xl font-bold text-white mb-3">
                    参加者の声は第0回ワークショップ後に公開されます
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed mb-6">
                    ワークショップに参加して、AI時代の働き方についてあなたの声を届けませんか？
                    多様な視点からの気づきをお待ちしています。
                  </p>
                  <div>
                    <Button variant="primary" href="/join">
                      ワークショップに参加する
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        )}

        {voices.length > 3 && (
          <ScrollReveal delay={300}>
            <div className="text-center">
              <Button variant="tertiary" href="/voices">すべての声を見る →</Button>
            </div>
          </ScrollReveal>
        )}
      </Container>
    </section>
  )
}
