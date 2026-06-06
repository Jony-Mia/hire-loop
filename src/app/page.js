import Hero from "@/component/sections/Hero";
import JobDiscoverySection from "@/component/sections/JobDiscovery";
import StatsSection from "@/component/sections/StatsSections";
import FeaturesSection from "@/component/sections/FeaturesSection";
import PricingSections from "@/component/sections/PricingSections";
import CTASection from "@/component/sections/CTASection";

export default function Home() {
  return(
    <>
    <Hero/>
    <StatsSection/>
    <JobDiscoverySection/>
    <FeaturesSection/>
    <PricingSections/>
    <CTASection/>
    </>
  )
}
