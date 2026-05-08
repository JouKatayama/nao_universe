import type { Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components/shared/Container'
import { PageHero } from '@/components/shared/PageHero'
import { Badge } from '@/components/shared/Badge'
import { Button } from '@/components/shared/Button'
import { getDesignDocArchive } from '@/lib/content'
import { formatDate } from '@/lib/utils'
import { Archive, ArrowLeft, FileText, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: '設計書アーカイブ',
  description: '理想のAI企業設計書の過去バージョン一覧。',
}

export default async function DesignDocArchivePage() {
  const archives = await getDesignDocArchive()

  return (
    <>
      <PageHero
        label="Archive"
        title="設計書アーカイブ"
        subtitle="過去バージョンの設計書一覧。設計書の進化の過程を辿ることができます。"
      >
        <Button variant="secondary" href="/design-doc">
          <ArrowLeft className="w-4 h-4" />
          最新版に戻る
        </Button>
      </PageHero>

      <section className="py-16 md:py-24">
        <Container>
          {archives.length > 0 ? (
            <div className="space-y-4 max-w-3xl mx-auto">
              {archives.map((doc) => (
                <Link
                  key={doc.slug}
                  href={`/design-doc/archive/${doc.slug}`}
                  className="group block card p-6 md:p-8"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <FileText className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white group-hover:text-accent transition-colors">
                          {doc.frontmatter.title}
                        </h3>
                        <p className="text-text-muted text-sm mt-1">
                          {formatDate(doc.frontmatter.lastUpdated)}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge variant="subtle">ver.{doc.frontmatter.version}</Badge>
                      <ArrowRight className="w-4 h-4 text-text-muted opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="max-w-2xl mx-auto text-center">
              <div className="card p-16">
                <div className="w-16 h-16 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mx-auto mb-6">
                  <Archive className="w-8 h-8 text-accent" />
                </div>
                <p className="text-text-secondary text-lg mb-2">
                  アーカイブはまだありません
                </p>
                <p className="text-text-muted text-sm">
                  設計書が更新されると、過去バージョンがここに表示されます。
                </p>
              </div>
            </div>
          )}
        </Container>
      </section>
    </>
  )
}
