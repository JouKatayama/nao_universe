import type { Metadata } from 'next'
import Image from 'next/image'
import { Container } from '@/components/shared/Container'
import { PageHero } from '@/components/shared/PageHero'
import { Badge } from '@/components/shared/Badge'
import { JoinForm } from '@/components/form/JoinForm'
import { getUpcomingEvent } from '@/lib/content'
import { formatDateShort } from '@/lib/utils'
import { ClipboardCheck, Mail, Video, MessageSquare, CalendarDays, Clock, MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: '参加申込',
  description: 'ワークショップへの参加申込ページ。',
}

export default async function JoinPage() {
  const event = await getUpcomingEvent()

  const dateOptions = event?.dates.map((d) => ({
    value: `${d.date}(${d.dayOfWeek})`,
    label: `${formatDateShort(d.date)}（${d.dayOfWeek}）${d.time}`,
  }))

  const steps = [
    { icon: ClipboardCheck, label: '申込', desc: '下記フォームから申込' },
    { icon: Mail, label: '確認', desc: '確認メールを受信' },
    { icon: Video, label: '参加', desc: 'Zoomリンクからワークショップに参加' },
    { icon: MessageSquare, label: '議論', desc: 'AI（ChatGPT/Claude等）を使いながら議論' },
  ]

  return (
    <>
      <PageHero
        label="Join"
        title="参加申込"
        subtitle="ワークショップに参加して、AI時代の会社を一緒に考えましょう。知識や経験は不問。あなたの視点が大切です。"
        imageSrc="/images/workshop.jpg"
        imageAlt="ワークショップの様子"
      />

      <section className="py-16 md:py-24">
        <Container size="narrow">
          {/* Steps */}
          <div className="mb-16">
            <p className="text-accent text-sm font-medium tracking-[0.15em] uppercase mb-3">How to Join</p>
            <h2 className="text-2xl font-bold text-white mb-8">参加の流れ</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {steps.map((step, i) => (
                <div key={i} className="card p-6 text-center group">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                    <step.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-accent text-xs font-bold">STEP {i + 1}</span>
                  </div>
                  <p className="text-text-secondary text-xs leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Next Event */}
          {event && (
            <div className="relative rounded-2xl overflow-hidden mb-16">
              <div className="absolute inset-0">
                <Image
                  src="/images/event.jpg"
                  alt=""
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-primary/90" />
              </div>
              <div className="relative p-8 md:p-10">
                <div className="flex items-center gap-3 mb-6">
                  <CalendarDays className="w-5 h-5 text-accent" />
                  <h3 className="text-lg font-semibold text-white">{event.title}</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                  {event.dates.map((d) => (
                    <div key={d.date} className="text-center p-5 rounded-xl bg-white/[0.05] border border-white/[0.08] hover:border-accent/20 transition-colors">
                      <p className="text-2xl font-bold text-white mb-1">
                        {formatDateShort(d.date)}
                      </p>
                      <p className="text-accent text-sm font-medium">{d.dayOfWeek}</p>
                      <div className="flex items-center justify-center gap-1 mt-2">
                        <Clock className="w-3 h-3 text-text-muted" />
                        <p className="text-text-muted text-xs">{d.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Badge variant="accent">
                    <MapPin className="w-3 h-3 mr-1" />
                    {event.platform}開催
                  </Badge>
                  <Badge variant="accent">{event.fee}</Badge>
                </div>
              </div>
            </div>
          )}

          {/* Form */}
          <div>
            <p className="text-accent text-sm font-medium tracking-[0.15em] uppercase mb-3">Application Form</p>
            <h2 className="text-2xl font-bold text-white mb-8">申込フォーム</h2>
            <JoinForm dates={dateOptions} />
          </div>
        </Container>
      </section>
    </>
  )
}
