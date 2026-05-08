import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Container } from '@/components/shared/Container'
import { Badge } from '@/components/shared/Badge'
import { Button } from '@/components/shared/Button'
import { MdxRenderer } from '@/components/content/MdxRenderer'
import { TableOfContents } from '@/components/content/TableOfContents'
import { getDesignDocArchive, extractToc } from '@/lib/content'
import { formatDate } from '@/lib/utils'

interface Props {
  params: Promise<{ version: string }>
}

export async function generateStaticParams() {
  const archives = await getDesignDocArchive()
  return archives.map((doc) => ({ version: doc.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { version } = await params
  const archives = await getDesignDocArchive()
  const doc = archives.find((d) => d.slug === version)
  if (!doc) return {}
  return {
    title: `${doc.frontmatter.title} (ver.${doc.frontmatter.version})`,
    description: `設計書 ver.${doc.frontmatter.version} のアーカイブ。`,
  }
}

export default async function DesignDocArchiveVersionPage({ params }: Props) {
  const { version } = await params
  const archives = await getDesignDocArchive()
  const doc = archives.find((d) => d.slug === version)
  if (!doc) notFound()

  const toc = extractToc(doc.content)

  return (
    <div className="pt-24 pb-16">
      <Container>
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <Badge variant="subtle">アーカイブ</Badge>
            <Badge variant="accent">ver.{doc.frontmatter.version}</Badge>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {doc.frontmatter.title}
          </h1>
          <p className="text-text-muted">
            最終更新: {formatDate(doc.frontmatter.lastUpdated)}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_250px] gap-12">
          <MdxRenderer source={doc.content} />
          <aside className="hidden lg:block">
            <TableOfContents items={toc} />
          </aside>
        </div>

        <div className="mt-16 pt-8 border-t border-border-subtle">
          <div className="flex gap-4">
            <Button variant="secondary" href="/design-doc">
              最新版を読む →
            </Button>
            <Button variant="tertiary" href="/design-doc/archive">
              アーカイブ一覧 →
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}
