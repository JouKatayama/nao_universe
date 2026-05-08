import type { Metadata } from 'next'
import Image from 'next/image'
import { Container } from '@/components/shared/Container'
import { PageHero } from '@/components/shared/PageHero'
import { Button } from '@/components/shared/Button'
import { getMediaCoverages } from '@/lib/content'
import { formatDate } from '@/lib/utils'
import { Newspaper, ExternalLink, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'メディア掲載',
  description: '本プロジェクトのメディア掲載・取材記事一覧。',
}

export default async function MediaPage() {
  const coverages = await getMediaCoverages()

  return (
    <>
      <PageHero
        label="Media"
        title="メディア掲載"
        subtitle="本プロジェクトに関するメディア掲載・取材記事をまとめています。"
        imageSrc="/images/event.jpg"
        imageAlt="メディア"
      />

      <section className="py-16 md:py-24">
        <Container>
          {coverages.length > 0 ? (
            <div className="space-y-4 max-w-3xl mx-auto">
              {coverages.map((item) => (
                <a
                  key={item.id}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block card p-6 md:p-8"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Newspaper className="w-4 h-4 text-accent flex-shrink-0" />
                        <h3 className="text-lg font-semibold text-white group-hover:text-accent transition-colors">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-text-muted text-sm ml-7">
                        {item.publication} / {formatDate(item.date)}
                      </p>
                      <p className="text-text-secondary text-sm mt-3 ml-7 leading-relaxed">
                        {item.summary}
                      </p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-accent opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 ml-7 md:ml-0" />
                  </div>
                </a>
              ))}
            </div>
          ) : (
            <div className="max-w-3xl mx-auto">
              <div className="relative rounded-3xl overflow-hidden">
                <div className="absolute inset-0">
                  <Image
                    src="/images/event.jpg"
                    alt="イベント"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/85 to-primary/50" />
                </div>
                <div className="relative px-8 py-20 md:px-16 md:py-28 text-center">
                  <div className="w-16 h-16 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mx-auto mb-8">
                    <Newspaper className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    Coming Soon
                  </h3>
                  <p className="text-text-secondary text-lg leading-relaxed mb-4 max-w-md mx-auto">
                    メディア掲載情報は今後追加されます。
                  </p>
                  <p className="text-text-muted text-sm mb-8">
                    取材のお問い合わせはこちらから
                  </p>
                  <Button variant="primary" href="/contact/media">
                    取材のお問い合わせ
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
