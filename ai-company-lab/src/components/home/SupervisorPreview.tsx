import { Container } from '@/components/shared/Container'
import { Button } from '@/components/shared/Button'
import { ScrollReveal } from '@/components/shared/ScrollReveal'
import { GraduationCap, Building2, Cpu, Users, ArrowRight } from 'lucide-react'

const CAREER = [
  { icon: GraduationCap, label: '福井大学大学院修了', sub: '工学研究科' },
  { icon: Cpu, label: 'SCREENグループ', sub: 'ソフトウェア開発' },
  { icon: Users, label: '2,000人以上の学生を支援', sub: 'NPO活動' },
  { icon: Building2, label: 'アクセンチュア', sub: 'AIエージェント開発' },
]

export function SupervisorPreview() {
  return (
    <section className="relative py-24 md:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-primary-light" />
      <div className="divider-glow absolute top-0 left-0 right-0" />

      <Container className="relative z-10">
        <ScrollReveal>
          <p className="text-accent font-medium text-sm tracking-[0.25em] uppercase mb-3">Supervisor</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-16">監修者</h2>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Profile card */}
            <div className="card-highlight rounded-2xl p-8 text-center lg:text-left">
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-accent/30 via-accent/10 to-transparent border border-accent/20 flex items-center justify-center mx-auto lg:mx-0 mb-6 shadow-lg shadow-accent/10">
                <span className="text-4xl font-bold text-accent">高</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-1">高橋 直也</h3>
              <p className="text-accent text-sm font-medium mb-6">
                NPO法人キャリアキャンパス代表理事
              </p>
              <Button variant="tertiary" href="/supervisor">
                詳細プロフィール →
              </Button>
            </div>

            {/* Bio + Career */}
            <div className="lg:col-span-2 space-y-6">
              <p className="text-text-secondary text-sm leading-[1.9]">
                福井大学大学院工学研究科修了後、SCREENグループにてソフトウェア開発に従事。メガベンチャーで人事・採用・研修を担当。2023年にNPO法人キャリアキャンパスを設立し、2,000人以上の学生を支援。現在はアクセンチュアにてAIエージェント開発に取り組む。
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {CAREER.map(({ icon: Icon, label, sub }) => (
                  <div key={label} className="card rounded-xl px-5 py-4 flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-accent/[0.08] flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 text-accent/60" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-sm text-white font-medium">{label}</p>
                      <p className="text-xs text-text-muted">{sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  )
}
