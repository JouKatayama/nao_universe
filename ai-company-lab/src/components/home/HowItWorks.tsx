import Image from 'next/image'
import { Container } from '@/components/shared/Container'
import { ScrollReveal } from '@/components/shared/ScrollReveal'
import { MessageCircleQuestion, Bot, BookOpen } from 'lucide-react'

const STEPS = [
  {
    number: '01',
    title: '問いを立てる',
    desc: 'AIにできたとしても、人が担うべき仕事を問う。能力比較ではなく価値判断の議論を始める。',
    icon: MessageCircleQuestion,
    image: '/images/planning.jpg',
    imageAlt: '企画・計画の様子',
  },
  {
    number: '02',
    title: 'AIと対話する',
    desc: 'ワークショップでChatGPTやClaudeを使いながら、多様な視点で議論し、自分の考えを深める。',
    icon: Bot,
    image: '/images/collaboration.jpg',
    imageAlt: 'チーム協働の様子',
  },
  {
    number: '03',
    title: '公共財として残す',
    desc: '議論の成果を設計書・白書として継続的に編纂。誰でも引用・参照できる公共財にする。',
    icon: BookOpen,
    image: '/images/students.jpg',
    imageAlt: '学生たちの学びの場',
  },
]

export function HowItWorks() {
  return (
    <section className="relative py-24 md:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-primary" />

      <Container className="relative z-10">
        <ScrollReveal>
          <div className="text-center mb-20">
            <p className="text-accent font-medium text-sm tracking-[0.25em] uppercase mb-4">How it works</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              プロジェクトの仕組み
            </h2>
          </div>
        </ScrollReveal>

        <div className="space-y-6">
          {STEPS.map((step, i) => {
            const Icon = step.icon
            const isReversed = i % 2 === 1
            return (
              <ScrollReveal key={step.number} delay={i * 100}>
                <div className={`group card rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-0`}>
                  {/* Image side */}
                  <div className={`relative h-64 md:h-auto md:min-h-[280px] ${isReversed ? 'md:order-2' : ''}`}>
                    <Image
                      src={step.image}
                      alt={step.imageAlt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/40 to-primary/20" />
                    <div className={`absolute inset-0 ${isReversed ? 'bg-gradient-to-l' : 'bg-gradient-to-r'} from-transparent to-primary/60 hidden md:block`} />

                    {/* Number overlay */}
                    <div className="absolute top-6 left-6">
                      <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-black/40 backdrop-blur-sm border border-white/10 text-accent text-sm font-bold font-mono">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Content side */}
                  <div className={`p-8 md:p-12 flex flex-col justify-center ${isReversed ? 'md:order-1' : ''}`}>
                    <div className="w-12 h-12 rounded-2xl bg-accent/[0.08] flex items-center justify-center mb-6 group-hover:bg-accent/[0.15] transition-colors duration-500">
                      <Icon className="w-5 h-5 text-accent" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                    <p className="text-text-secondary leading-[1.8]">{step.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
