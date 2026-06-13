import Drag from "@/component/sections/Motion";
import WindowContext from "@/context/WindowContext";
import dynamic from "next/dynamic";

const Hero = dynamic(()=>import("@/component/sections/Hero"));
const StatsSection = dynamic(()=>import("@/component/sections/StatsSections"));
const FeaturesSection = dynamic(()=>import("@/component/sections/FeaturesSection"));
const PricingSections = dynamic(()=>import("@/component/sections/PricingSections"));
const JobDiscoverySection = dynamic(()=>import("@/component/sections/JobDiscovery"));
const CTASection = dynamic(()=>import("@/component/sections/CTASection"));


export default function Home() {
  return(
    <>
    <Hero/>
    <WindowContext/>
    <StatsSection/>
    <JobDiscoverySection/>
    <FeaturesSection/>
    <PricingSections/>
    <CTASection/>
    </>
  )
}
