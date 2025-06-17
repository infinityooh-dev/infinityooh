import GenericHero from "@/components/custom/sections/hero/GenericHero";
import WhyInfinity from "../../components/custom/sections/whyInfinity/WhyInfinity";
import FaqSection from "@/components/custom/shared/faqs/FaqSection";
import Services from "../../components/custom/sections/services/ServicesContainer";
import CTASection from "@/components/custom/sections/cta/CTASection";
import WhatSetsApart from "./components/WhatSetsApart";
import AboutServiceCTA from "./components/AboutServiceCTA";

const page = () => {
  return (
    <main className="flex flex-col items-center gap-[32px]">
      <GenericHero heroTitle="Infinity OOH's Mission" />
      <AboutServiceCTA />
      <WhyInfinity />
      <FaqSection />
      <Services leadsource="Home Page - Services" />
      <WhatSetsApart />
      <CTASection leadsource="About Page - Footer" />
    </main>
  );
};
export default page;
