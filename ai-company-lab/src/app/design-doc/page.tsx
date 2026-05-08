import type { Metadata } from 'next'
import Image from 'next/image'
import { Container } from '@/components/shared/Container'
import { Badge } from '@/components/shared/Badge'
import { Button } from '@/components/shared/Button'
import { MdxRenderer } from '@/components/content/MdxRenderer'
import { TableOfContents } from '@/components/content/TableOfContents'
import { getDesignDoc, extractToc } from '@/lib/content'
import { formatDate } from '@/lib/utils'
import { BookOpen, Clock, ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: '理想のAI企業設計書',
  description: 'AI時代の理想の会社のミッション・ビジョン・バリュー・ガバナンス憲章を定義する、継続的に更新される設計書。',
}

export default async function DesignDocPage() {
  const doc = await getDesignDoc()
  const toc = extractToc(doc.content)

  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-16 md:pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/ai-abstract.jpg"
            alt=""
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/75 via-primary/90 to-primary" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/70 to-transparent" />
        </div>
        <div className="absolute top-20 right-0 w-[500px] h-[500px] rounded-full bg-accent/[0.04] blur-[120px] pointer-events-none" />
        <Container>
          <div className="relative">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-accent" />
              </div>
              <p className="text-accent font-medium text-sm tracking-[0.2em] uppercase">
                Design Document
              </p>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6">
              {doc.frontmatter.title}
            </h1>
            <div className="flex items-center gap-4 flex-wrap">
              <Badge variant="accent">ver.{doc.frontmatter.version}</Badge>
              <span className="flex items-center gap-2 text-text-muted text-sm">
                <Clock className="w-3.5 h-3.5" />
                最終更新: {formatDate(doc.frontmatter.lastUpdated)}
              </span>
            </div>
          </div>
        </Container>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <Container>
          {/* Mobile TOC */}
          <div className="lg:hidden mb-8">
            <details className="card p-5">
              <summary className="text-white font-medium cursor-pointer text-sm flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-accent" />
                目次を表示
              </summary>
              <div className="mt-4 pt-4 border-t border-white/[0.06]">
                <TableOfContents items={toc} />
              </div>
            </details>
          </div>

          {/* Body + Sidebar */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_240px] gap-16">
            <MdxRenderer source={doc.content} />
            <aside className="hidden lg:block">
              <TableOfContents items={toc} />
            </aside>
          </div>

          {/* Footer */}
          <div className="mt-20 pt-8 border-t border-white/[0.06]">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <Button variant="tertiary" href="/design-doc/archive">
                <ArrowLeft className="w-4 h-4" />
                過去バージョンを見る
              </Button>
              <p className="text-text-muted text-xs">
                本設計書は CC BY-SA 4.0 ライセンスで公開されています。
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
