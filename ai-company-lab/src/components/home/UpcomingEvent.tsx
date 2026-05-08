import Image from 'next/image'
import { Container } from '@/components/shared/Container'
import { Button } from '@/components/shared/Button'
import { ScrollReveal } from '@/components/shared/ScrollReveal'
import { formatDateShort } from '@/lib/utils'
import { CalendarDays, Clock, Video, Users, ArrowRight } from 'lucide-react'
import type { UpcomingEvent as EventType } from '@/lib/types'

export function UpcomingEvent({ event }: { event: EventType | null }) {
  return (
    <section className="relative py-24 md:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-primary-light" />
      <div className="divider-glow absolute top-0 left-0 right-0" />

      <Container className="relative z-10">
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center">
              <CalendarDays className="w-5 h-5 text-accent" strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-accent font-medium text-sm tracking-[0.25em] uppercase">Schedule</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">開催日程</h2>
            </div>
          </div>
          <p className="text-text-muted text-sm ml-16 mb-16">各回同内容・オンライン開催</p>
        </ScrollReveal>

        {event ? (
          <ScrollReveal delay={100}>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
              {/* Image card */}
              <div className="lg:col-span-2 relative rounded-2xl overflow-hidden min-h-[280px]">
                <Image
                  src="/images/event.jpg"
                  alt="イベント会場の様子"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-primary/20" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white font-semibold text-lg mb-1">{event.title}</p>
                  <div className="flex items-center gap-4">
                    <span className="inline-flex items-center gap-1.5 text-sm text-white/70">
                      <Video className="w-3.5 h-3.5 text-accent" strokeWidth={1.5} />
                      {event.platform}
                    </span>
                    <span className="text-sm text-accent font-medium">{event.fee}</span>
                  </div>
                </div>
              </div>

              {/* Date cards */}
              <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {event.dates.map((d) => (
                  <div
                    key={d.date}
                    className="group card rounded-2xl text-center p-8 flex flex-col justify-center"
                  >
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-accent/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <p className="relative stat-number !text-4xl md:!text-5xl mb-2">
                      {formatDateShort(d.date)}
                    </p>
                    <p className="relative text-accent text-sm font-semibold mb-3">
                      {d.dayOfWeek}
                    </p>
                    <div className="relative flex items-center justify-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-text-muted" strokeWidth={1.5} />
                      <p className="text-text-muted text-sm">{d.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom bar */}
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 p-6 card rounded-2xl">
              <div className="flex items-center gap-6">
                <span className="inline-flex items-center gap-2 text-sm text-text-secondary">
                  <Users className="w-4 h-4 text-accent" strokeWidth={1.5} />
                  定員{event.capacity}名
                </span>
                <span className="text-text-muted text-sm">先着順・各回同内容</span>
              </div>
              <Button variant="primary" href="/join">
                参加申込
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </ScrollReveal>
        ) : (
          <ScrollReveal delay={100}>
            <div className="card rounded-2xl text-center py-20">
              <CalendarDays className="w-10 h-10 text-accent/20 mx-auto mb-4" strokeWidth={1.5} />
              <p className="text-text-secondary text-lg">次回の開催日程は近日公開予定です。</p>
            </div>
          </ScrollReveal>
        )}
      </Container>
    </section>
  )
}
