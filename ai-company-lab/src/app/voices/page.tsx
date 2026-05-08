import type { Metadata } from 'next'
import Image from 'next/image'
import { Container } from '@/components/shared/Container'
import { PageHero } from '@/components/shared/PageHero'
import { Button } from '@/components/shared/Button'
import { VoiceCard } from '@/components/content/VoiceCard'
import { getVoices } from '@/lib/content'
import { MessageCircle, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: '参加者の声',
  description: 'ワークショップ参加者からの感想とフィードバック。',
}

export default async function VoicesPage() {
  const voices = await getVoices()

  return (
    <>
      <PageHero
        label="Voices"
        title="参加者の声"
        subtitle="ワークショップで得られた気づきと感想。実際に参加した人たちのリアルな声をお届けします。"
        imageSrc="/images/collaboration.jpg"
        imageAlt="チームでの対話の様子"
      />

      <section className="py-16 md:py-24">
        <Container>
          {voices.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {voices.map((voice) => (
                <VoiceCard key={voice.id} voice={voice} />
              ))}
            </div>
          ) : (
            <div className="max-w-3xl mx-auto">
              <div className="relative rounded-3xl overflow-hidden">
                <div className="absolute inset-0">
                  <Image
                    src="/images/students.jpg"
                    alt="ワークショップ参加者"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-primary/40" />
                </div>
                <div className="relative px-8 py-20 md:px-16 md:py-28 text-center">
                  <div className="w-16 h-16 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mx-auto mb-8">
                    <MessageCircle className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    Coming Soon
                  </h3>
                  <p className="text-text-secondary text-lg leading-relaxed mb-8 max-w-md mx-auto">
                    参加者の声は第0回ワークショップ開催後に公開されます。あなたの感想がここに載るかも？
                  </p>
                  <Button variant="primary" href="/join">
                    ワークショップに参加する
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
