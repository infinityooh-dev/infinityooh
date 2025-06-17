import FaqSection from "@/components/custom/shared/faqs/FaqSection";
import Hero from "./components/hero/Hero";
import IndustryFocus from "./components/industryFocus/IndustryFocus";
import Services from "../../components/custom/sections/services/ServicesContainer";
import WhyInfinity from "../../components/custom/sections/whyInfinity/WhyInfinity";
import CTASection from "@/components/custom/sections/cta/CTASection";
import HomeServiceCTA from "./components/services/HomeServiceCTA";

export default function Home() {
  return (
    <main className="flex flex-col items-center gap-[32px] sm:items-start">
      <Hero />
      <HomeServiceCTA />
      <Services leadsource="Home Page - Services" />
      <IndustryFocus />
      <WhyInfinity />
      <FaqSection />
      <CTASection leadsource="Home Page - Footer" />
    </main>
  );
}
