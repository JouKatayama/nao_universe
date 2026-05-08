import type { Metadata } from 'next'
import { Container } from '@/components/shared/Container'
import { Button } from '@/components/shared/Button'
import { ContactForm } from '@/components/form/ContactForm'
import { ArrowLeft, Building2 } from 'lucide-react'

export const metadata: Metadata = {
  title: '企業協賛のお問い合わせ',
  description: '企業協賛・スポンサーに関するお問い合わせフォーム。',
}

export default function ContactSponsorPage() {
  return (
    <>
      <section className="relative pt-28 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute top-20 right-0 w-[400px] h-[400px] rounded-full bg-amber-500/[0.03] blur-[100px] pointer-events-none" />
        <Container size="narrow">
          <div className="relative">
            <Button variant="tertiary" href="/contact" className="mb-8">
              <ArrowLeft className="w-4 h-4" />
              お問い合わせトップ
            </Button>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 flex items-center justify-center">
                <Building2 className="w-5 h-5 text-accent" />
              </div>
              <p className="text-accent font-medium text-sm tracking-[0.2em] uppercase">
                Sponsorship
              </p>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
              企業協賛のお問い合わせ
            </h1>
            <p className="text-text-secondary leading-relaxed">
              協賛・スポンサーに関するご相談はこちらからお送りください。
            </p>
          </div>
        </Container>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/15 to-transparent" />
      </section>

      <section className="py-12 md:py-16">
        <Container size="narrow">
          <ContactForm
            formType="sponsor"
            fields={{
              organization: { label: '会社名', placeholder: '株式会社○○' },
              phone: true,
            }}
          />
        </Container>
      </section>
    </>
  )
}
