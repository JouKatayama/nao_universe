import type { Metadata } from 'next'
import { Container } from '@/components/shared/Container'
import { Button } from '@/components/shared/Button'
import { ContactForm } from '@/components/form/ContactForm'
import { ArrowLeft, GraduationCap } from 'lucide-react'

export const metadata: Metadata = {
  title: '大学・自治体連携のお問い合わせ',
  description: 'PBL科目・人材育成プログラムに関するお問い合わせフォーム。',
}

export default function ContactPartnershipPage() {
  return (
    <>
      <section className="relative pt-28 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute top-20 right-0 w-[400px] h-[400px] rounded-full bg-blue-500/[0.03] blur-[100px] pointer-events-none" />
        <Container size="narrow">
          <div className="relative">
            <Button variant="tertiary" href="/contact" className="mb-8">
              <ArrowLeft className="w-4 h-4" />
              お問い合わせトップ
            </Button>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-accent" />
              </div>
              <p className="text-accent font-medium text-sm tracking-[0.2em] uppercase">
                Partnership
              </p>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
              大学・自治体連携のお問い合わせ
            </h1>
            <p className="text-text-secondary leading-relaxed">
              PBL科目・人材育成プログラムに関するご相談はこちらからお送りください。
            </p>
          </div>
        </Container>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/15 to-transparent" />
      </section>

      <section className="py-12 md:py-16">
        <Container size="narrow">
          <ContactForm
            formType="partnership"
            fields={{
              organization: { label: '大学・自治体名', placeholder: '○○大学 / ○○市' },
            }}
          />
        </Container>
      </section>
    </>
  )
}
