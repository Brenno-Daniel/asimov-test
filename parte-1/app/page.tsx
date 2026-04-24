import Hero from '@/components/hero'
import { Services } from '@/components/services'
import { CTASection } from '@/components/cta-section'
import { CaseStudies } from '@/components/case-studies'

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <CTASection />
      <CaseStudies />
    </main>
  )
}
