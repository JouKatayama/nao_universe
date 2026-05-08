import Link from 'next/link'
import { formatDate } from '@/lib/utils'
import { Calendar, Users, ArrowUpRight } from 'lucide-react'
import type { Report } from '@/lib/types'

export function ReportCard({ report }: { report: Report }) {
  const { frontmatter, slug } = report
  const href = frontmatter.externalUrl || `/reports/${slug}`
  const isExternal = !!frontmatter.externalUrl

  return (
    <Link
      href={href}
      {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className="group block card rounded-2xl p-7"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center px-3 py-1 rounded-lg bg-accent/[0.08] border border-accent/15 text-accent text-xs font-medium">
            第{frontmatter.workshopNumber}回
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-lg bg-white/[0.03] border border-white/[0.06] text-text-muted text-xs">
            {frontmatter.format}
          </span>
        </div>
        <ArrowUpRight className="w-4 h-4 text-text-muted opacity-0 group-hover:opacity-100 group-hover:text-accent transition-all duration-300" strokeWidth={2} />
      </div>

      <h3 className="text-lg font-bold text-white mb-3 group-hover:text-accent transition-colors duration-300 leading-snug">
        {frontmatter.title}
      </h3>

      <div className="flex items-center gap-4 mb-4">
        <span className="inline-flex items-center gap-1.5 text-xs text-text-muted">
          <Calendar className="w-3.5 h-3.5" strokeWidth={1.5} />
          {formatDate(frontmatter.date)}
        </span>
        <span className="inline-flex items-center gap-1.5 text-xs text-text-muted">
          <Users className="w-3.5 h-3.5" strokeWidth={1.5} />
          {frontmatter.participantCount}名参加
        </span>
      </div>

      <p className="text-text-secondary text-sm line-clamp-2 leading-relaxed">
        {frontmatter.excerpt}
      </p>
    </Link>
  )
}
