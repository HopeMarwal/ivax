'use client'
import Header from "@components/Header"
import DeliverSection from "@components/DeliverSection"
import PromiseSection from "@components/PromiseSection"
import AnimatedBanner from "@components/AnimatedBanner"

export default function page() {
  return (
    <section className="w-full flex flex-wrap">
      <Header />
      <DeliverSection />
      <PromiseSection />
      <AnimatedBanner />
    </section>
  )
}
