import GenericHero from "@/components/custom/shared/hero/GenericHero";
import ServicesCTA from "../(home)/components/services/ServicesCTA";
import WhyInfinity from "../(home)/components/whyInfinity/WhyInfinity";
import FaqSection from "@/components/custom/shared/faqs/FaqSection";
import Services from "../(home)/components/services/ServicesContainer";
import CTASection from "@/components/custom/shared/cta/CTASection";
import { aboutPageCTAContent } from "./data";
import WhatSetsApart from "./components/WhatSetsApart";
import CustomButton from "@/components/custom/shared/CustomButton";

const page = () => {
     return ( 
         <main className="flex flex-col items-center gap-[32px]"> 
            <GenericHero heroTitle="Infinity OOH's Mission" />
            <ServicesCTA ctaContent={aboutPageCTAContent}>
                <div className="w-full flex justify-start items-start">
                    <CustomButton btnName="Start Your Campaign Today" iconColor="#407B38" />
                </div>
            </ServicesCTA>
            <WhyInfinity />
            <FaqSection />
            <Services />
            <WhatSetsApart />
            <CTASection leadsource="About Page - Footer" />
         </main> 
    ) 
} 
export default page;