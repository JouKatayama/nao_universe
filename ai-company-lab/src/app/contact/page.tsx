import type { Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components/shared/Container'
import { PageHero } from '@/components/shared/PageHero'
import { Building2, GraduationCap, Newspaper, Mail, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'お問い合わせ',
  description: '企業協賛・大学連携・メディア取材・その他のお問い合わせ。',
}

const CONTACT_CATEGORIES = [
  {
    title: '企業協賛',
    description: '協賛・スポンサーに関するお問い合わせ',
    href: '/contact/sponsor',
    icon: Building2,
    gradient: 'from-amber-500/20 to-orange-500/20',
  },
  {
    title: '大学・自治体連携',
    description: 'PBL科目・人材育成プログラムに関するお問い合わせ',
    href: '/contact/partnership',
    icon: GraduationCap,
    gradient: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    title: 'メディア取材',
    description: '取材・記事掲載に関するお問い合わせ',
    href: '/contact/media',
    icon: Newspaper,
    gradient: 'from-purple-500/20 to-pink-500/20',
  },
  {
    title: 'その他',
    description: '上記に当てはまらないお問い合わせ',
    href: '/contact/general',
    icon: Mail,
    gradient: 'from-emerald-500/20 to-teal-500/20',
  },
]

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="Contact"
        title="お問い合わせ"
        subtitle="プロジェクトへの参画、取材、その他のご相談をお待ちしています。"
      />

      <section className="py-16 md:py-24">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {CONTACT_CATEGORIES.map((cat) => (
              <Link key={cat.href} href={cat.href} className="group">
                <div className="card p-8 h-full">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${cat.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <cat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-semibold text-white group-hover:text-accent transition-colors">
                      {cat.title}
                    </h3>
                    <ArrowRight className="w-4 h-4 text-text-muted opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </div>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {cat.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
