import FaqSection from "@/components/custom/shared/faqs/FaqSection";
import Hero from "./components/hero/Hero";
import IndustryFocus from "./components/industryFocus/IndustryFocus";
import Services from "./components/services/ServicesContainer";
import ServicesCta from "./components/services/ServicesCTA";
import WhyInfinity from "./components/whyInfinity/WhyInfinity";
import CTASection from "@/components/custom/shared/cta/CTASection";
import CustomButton from "@/components/custom/shared/CustomButton";
import { FaArrowTurnDown } from "react-icons/fa6";

export default function Home() {
  return (
    <main className="flex flex-col items-center gap-[32px] sm:items-start">
      <Hero />
      <ServicesCta>
        <CustomButton btnName="Start Your Campaign" iconColor="#407B38" />
        <CustomButton
          btnName="Explore Our Services"
          variant="secondary"
          Icon={FaArrowTurnDown}
          iconColor="black"
          isLink
          href="#services"
        />
      </ServicesCta>
      <Services />
      <IndustryFocus />
      <WhyInfinity />
      <FaqSection />
      <CTASection leadsource="Home Page - Footer" />
    </main>
  );
}
