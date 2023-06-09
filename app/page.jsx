'use client'
import Header from "@components/Header"
import DeliverSection from "@components/DeliverSection"
import PromiseSection from "@components/PromiseSection"
import AnimatedBanner from "@components/AnimatedBanner"
import TrustSection from "@components/TrustSection"
import Projects from "@components/Projects"

export default function page() {
  return (
    <section className="w-full flex flex-wrap">
      <Header />
      <DeliverSection />
      <PromiseSection />
      <AnimatedBanner 
        forward='UX _ Web development _ Brand identity'
        backwards='UX _ Mobile apps _ Video _ Film making'
      />
      <TrustSection
        h3='They'
        span='trust us'
      />
      <Projects />
      <TrustSection
        h3='Our'
        span='technologies'
      />
    </section>
  )
}
