import type { Metadata } from 'next'
import Image from 'next/image'
import { Container } from '@/components/shared/Container'
import { PageHero } from '@/components/shared/PageHero'
import { Button } from '@/components/shared/Button'
import { NetworkConstellation } from '@/components/illustrations/NetworkConstellation'
import { Lightbulb, BookOpen, Users, Globe, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'プロジェクトについて',
  description: '「AIの会社を、AIで考える。」プロジェクトの思想と全体像。',
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="About"
        title="プロジェクトについて"
        subtitle="AI時代の会社のあり方を、若者と共創するシンクタンク。研修でもコミュニティでもない、まったく新しい場です。"
        imageSrc="/images/students.jpg"
        imageAlt="学生たちが議論する様子"
      />

      <section className="py-20 md:py-28">
        <Container>
          {/* Mission Statement */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
            <div>
              <p className="text-accent text-sm font-medium tracking-[0.15em] uppercase mb-3">Mission</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-6">
                本質
              </h2>
              <p className="text-text-secondary leading-[1.9] text-base mb-4">
                「AIの会社を、AIで考える。」は、<strong className="text-white">AI時代の会社のあり方を、若者中心に、AIを使って共創し、設計書として継続編纂し続ける、新しい型のシンクタンク</strong>です。
              </p>
              <p className="text-text-secondary leading-[1.9] text-base">
                AI研修ではありません。AIコミュニティでもありません。AI時代の会社の構想を、若者の声を取り込んで、オープンに編纂する場です。
              </p>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                <Image
                  src="/images/collaboration.jpg"
                  alt="チームでのコラボレーション"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-2xl bg-accent/10 border border-accent/20 backdrop-blur-sm flex items-center justify-center">
                <div className="text-center">
                  <p className="stat-number text-3xl">New</p>
                  <p className="text-accent text-xs font-medium mt-1">型のシンクタンク</p>
                </div>
              </div>
            </div>
          </div>

          {/* Core Question */}
          <div className="relative rounded-3xl overflow-hidden mb-24">
            <div className="absolute inset-0">
              <Image
                src="/images/ai-abstract.jpg"
                alt=""
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-primary/85" />
              <div className="absolute inset-0 gradient-mesh opacity-40" />
            </div>
            <div className="relative px-8 py-16 md:px-16 md:py-20 text-center">
              <p className="text-accent text-sm font-medium tracking-[0.15em] uppercase mb-6">Core Question</p>
              <blockquote className="text-2xl md:text-3xl lg:text-4xl font-serif text-white leading-relaxed max-w-3xl mx-auto mb-8">
                <span className="text-accent">&ldquo;</span>
                AIにできるかどうかではなく、AIにできたとしても、
                <span className="text-gradient-accent">人が担うべき仕事</span>は何か。
                <span className="text-accent">&rdquo;</span>
              </blockquote>
              <p className="text-text-secondary leading-relaxed max-w-xl mx-auto">
                これは能力比較ではなく価値判断の問いです。「できる/できない」から「任せたい/任せたくない」への軸転換が、本プロジェクトの最も重要なオリジナリティです。
              </p>
            </div>
          </div>

          {/* Deliverables */}
          <div className="mb-24">
            <div className="text-center mb-12">
              <p className="text-accent text-sm font-medium tracking-[0.15em] uppercase mb-3">Deliverables</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                中核成果物
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: BookOpen,
                  title: '設計書',
                  desc: '理想のAI企業のミッション・ビジョン・バリュー・ガバナンス憲章。月次更新。',
                  accent: 'from-amber-500/20 to-orange-500/20',
                },
                {
                  icon: Globe,
                  title: '白書',
                  desc: '年1回、その年の議論を集約した分析レポート。',
                  accent: 'from-blue-500/20 to-cyan-500/20',
                },
                {
                  icon: Users,
                  title: 'コミュニティ',
                  desc: '過去参加者・継続参加者・運営者からなるネットワーク。',
                  accent: 'from-purple-500/20 to-pink-500/20',
                },
              ].map((item) => (
                <div key={item.title} className="card p-8 group">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.accent} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-text-secondary mt-8">
              全ての成果物は<strong className="text-white">公共財として無償公開</strong>されます。
            </p>
          </div>

          {/* Concept Diagram */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
            <div className="relative aspect-square max-w-md mx-auto lg:mx-0">
              <NetworkConstellation className="w-full h-full opacity-60" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center backdrop-blur-sm">
                  <Lightbulb className="w-10 h-10 text-accent" />
                </div>
              </div>
            </div>
            <div>
              <p className="text-accent text-sm font-medium tracking-[0.15em] uppercase mb-3">Organization</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-6">
                運営
              </h2>
              <p className="text-text-secondary leading-[1.9] text-base mb-6">
                特定非営利活動法人キャリアキャンパスが運営。監修者 高橋直也がエンジニアリング・人事・AI・キャリア支援を横断した知見をもとにプロジェクトを統括しています。
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="primary" href="/supervisor">
                  監修者について
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="relative rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-accent/5 border border-accent/10 rounded-2xl" />
            <div className="relative px-8 py-12 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">興味を持ったら</h3>
                <p className="text-text-secondary">設計書を読むか、ワークショップに参加してみませんか？</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="primary" href="/design-doc">設計書を読む</Button>
                <Button variant="secondary" href="/join">参加申込</Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
