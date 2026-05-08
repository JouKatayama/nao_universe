import type { Metadata } from 'next'
import Image from 'next/image'
import { Container } from '@/components/shared/Container'
import { PageHero } from '@/components/shared/PageHero'
import { Button } from '@/components/shared/Button'
import { ReportCard } from '@/components/content/ReportCard'
import { getReports } from '@/lib/content'
import { FileText, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: '開催レポート',
  description: 'ワークショップの開催レポート一覧。各回の議論内容と参加者の気づきを記録。',
}

export default async function ReportsPage() {
  const reports = await getReports()

  return (
    <>
      <PageHero
        label="Reports"
        title="開催レポート"
        subtitle="ワークショップの議論と気づきの記録。毎回の議論をオープンに公開しています。"
        imageSrc="/images/planning.jpg"
        imageAlt="プランニングの様子"
      />

      <section className="py-16 md:py-24">
        <Container>
          {reports.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {reports.map((report) => (
                <ReportCard key={report.slug} report={report} />
              ))}
            </div>
          ) : (
            <div className="max-w-3xl mx-auto">
              <div className="relative rounded-3xl overflow-hidden">
                <div className="absolute inset-0">
                  <Image
                    src="/images/event.jpg"
                    alt="イベント会場"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-primary/40" />
                </div>
                <div className="relative px-8 py-20 md:px-16 md:py-28 text-center">
                  <div className="w-16 h-16 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mx-auto mb-8">
                    <FileText className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    Coming Soon
                  </h3>
                  <p className="text-text-secondary text-lg leading-relaxed mb-8 max-w-md mx-auto">
                    レポートは第0回ワークショップ開催後に公開されます。どんな議論が生まれるか、お楽しみに。
                  </p>
                  <Button variant="primary" href="/join">
                    ワークショップに参加する
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          )}
        </Container>
      </section>
    </>
  )
}
