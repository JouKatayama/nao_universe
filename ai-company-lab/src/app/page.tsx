import { HeroSection } from '@/components/home/HeroSection'
import { CoreQuestion } from '@/components/home/CoreQuestion'
import { UpcomingEvent } from '@/components/home/UpcomingEvent'
import { HowItWorks } from '@/components/home/HowItWorks'
import { VoicesPreview } from '@/components/home/VoicesPreview'
import { DesignDocPreview } from '@/components/home/DesignDocPreview'
import { LatestActivity } from '@/components/home/LatestActivity'
import { SupervisorPreview } from '@/components/home/SupervisorPreview'
import { PartnersPreview } from '@/components/home/PartnersPreview'
import { CtaFooter } from '@/components/home/CtaFooter'
import { getVoices, getUpcomingEvent, getReports, getPartners, getDesignDoc } from '@/lib/content'

export default async function HomePage() {
  const [voices, event, reports, partners, designDoc] = await Promise.all([
    getVoices(),
    getUpcomingEvent(),
    getReports(),
    getPartners(),
    getDesignDoc(),
  ])

  return (
    <>
      <HeroSection />
      <CoreQuestion />
      <HowItWorks />
      <UpcomingEvent event={event} />
      <DesignDocPreview designDoc={designDoc} />
      <VoicesPreview voices={voices} />
      <LatestActivity reports={reports} />
      <SupervisorPreview />
      <PartnersPreview partners={partners} />
      <CtaFooter />
    </>
  )
}
