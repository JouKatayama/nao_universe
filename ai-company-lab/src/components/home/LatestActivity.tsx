import Image from 'next/image'
import { Container } from '@/components/shared/Container'
import { Button } from '@/components/shared/Button'
import { ReportCard } from '@/components/content/ReportCard'
import { ScrollReveal } from '@/components/shared/ScrollReveal'
import { Mail, FileBarChart, ArrowRight, Bell } from 'lucide-react'
import type { Report } from '@/lib/types'

export function LatestActivity({ reports }: { reports: Report[] }) {
  return (
    <section className="relative py-24 md:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-primary" />

      <Container className="relative z-10">
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center">
              <FileBarChart className="w-5 h-5 text-accent" strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-accent font-medium text-sm tracking-[0.25em] uppercase">Activity</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">最新の活動</h2>
            </div>
          </div>
          <div className="mb-16" />
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          <div className="lg:col-span-3 space-y-5">
            {reports.length > 0 ? (
              reports.slice(0, 2).map((r, i) => (
                <ScrollReveal key={r.slug} delay={i * 100}>
                  <ReportCard report={r} />
                </ScrollReveal>
              ))
            ) : (
              <ScrollReveal>
                <div className="card rounded-2xl overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src="/images/event.jpg"
                      alt="イベントの様子"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-primary/20" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <FileBarChart className="w-6 h-6 text-accent/40 mb-2" strokeWidth={1.5} />
                      <p className="text-white font-semibold mb-1">レポートは第0回開催後に公開されます</p>
                      <p className="text-text-muted text-sm">開催レポート・議論サマリーを掲載予定</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            )}
          </div>

          <div className="lg:col-span-2">
            <ScrollReveal delay={200}>
              <div className="card-highlight rounded-2xl p-8 h-full flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center mb-6">
                    <Mail className="w-5 h-5 text-accent" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    最新情報を受け取る
                  </h3>
                  <p className="text-text-secondary text-sm leading-[1.8] mb-2">
                    ワークショップの開催レポート、設計書の更新情報、白書のプレビューなどを配信します。
                  </p>
                  <div className="flex items-center gap-2 text-text-muted text-xs mb-8">
                    <Bell className="w-3.5 h-3.5" strokeWidth={1.5} />
                    月1〜2回配信・いつでも解除可能
                  </div>
                </div>
                <Button variant="primary" href="#" className="w-full">
                  メルマガを購読
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </Container>
    </section>
  )
}
