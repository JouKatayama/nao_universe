import type { Metadata } from 'next'
import Image from 'next/image'
import { Container } from '@/components/shared/Container'
import { PageHero } from '@/components/shared/PageHero'
import { Button } from '@/components/shared/Button'
import { getPartners } from '@/lib/content'
import { Handshake, ExternalLink, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: '協賛・パートナー',
  description: '本プロジェクトの協賛企業・パートナー大学一覧。',
}

export default async function PartnersPage() {
  const partners = await getPartners()

  return (
    <>
      <PageHero
        label="Partners"
        title="協賛・パートナー"
        subtitle="本プロジェクトを支援してくださる企業・大学。一緒にAI時代の未来を描きましょう。"
        imageSrc="/images/collaboration.jpg"
        imageAlt="パートナーシップ"
      />

      <section className="py-16 md:py-24">
        <Container>
          {partners.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {partners.map((partner) => (
                <a
                  key={partner.id}
                  href={partner.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <div className="card p-8 h-full">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-lg font-semibold text-white group-hover:text-accent transition-colors">
                        {partner.name}
                      </h3>
                      <ExternalLink className="w-4 h-4 text-text-muted opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {partner.description}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          ) : (
            <div className="max-w-3xl mx-auto">
              <div className="relative rounded-3xl overflow-hidden">
                <div className="absolute inset-0">
                  <Image
                    src="/images/collaboration.jpg"
                    alt="コラボレーション"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/85 to-primary/50" />
                </div>
                <div className="relative px-8 py-20 md:px-16 md:py-28 text-center">
                  <div className="w-16 h-16 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mx-auto mb-8">
                    <Handshake className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    パートナー募集中
                  </h3>
                  <p className="text-text-secondary text-lg leading-relaxed mb-4 max-w-md mx-auto">
                    本プロジェクトの趣旨にご賛同いただける組織様からのお問い合わせをお待ちしております。
                  </p>
                  <p className="text-text-muted text-sm mb-8">
                    企業協賛 / 大学連携 / 自治体パートナーシップ
                  </p>
                  <Button variant="primary" href="/contact/sponsor">
                    協賛について問い合わせる
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
