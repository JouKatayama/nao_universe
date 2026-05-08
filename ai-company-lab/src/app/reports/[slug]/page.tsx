import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Container } from '@/components/shared/Container'
import { Badge } from '@/components/shared/Badge'
import { Button } from '@/components/shared/Button'
import { MdxRenderer } from '@/components/content/MdxRenderer'
import { getReport, getReports } from '@/lib/content'
import { formatDate } from '@/lib/utils'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const reports = await getReports()
  return reports.map((r) => ({ slug: r.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const report = await getReport(slug)
  if (!report) return {}
  return {
    title: report.frontmatter.title,
    description: report.frontmatter.excerpt,
  }
}

export default async function ReportPage({ params }: Props) {
  const { slug } = await params
  const report = await getReport(slug)
  if (!report) notFound()

  const { frontmatter, content } = report

  return (
    <div className="pt-28 pb-20">
      <Container size="narrow">
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-5">
            <Badge variant="accent">第{frontmatter.workshopNumber}回</Badge>
            <Badge variant="subtle">{frontmatter.format}</Badge>
            <Badge variant="subtle">{frontmatter.participantCount}名参加</Badge>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-3">
            {frontmatter.title}
          </h1>
          <p className="text-text-muted text-sm">{formatDate(frontmatter.date)}</p>
          <div className="flex flex-wrap gap-2 mt-5">
            {frontmatter.mainThemes.map((theme) => (
              <Badge key={theme} variant="subtle">{theme}</Badge>
            ))}
          </div>
        </div>
        <MdxRenderer source={content} />
        <div className="mt-16 pt-8 border-t border-white/[0.06]">
          <Button variant="tertiary" href="/reports">
            ← レポート一覧に戻る
          </Button>
        </div>
      </Container>
    </div>
  )
}
