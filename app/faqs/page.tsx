import CTASection from "@/components/custom/sections/cta/CTASection";
import FaqSection from "@/components/custom/shared/faqs/FaqSection";
import GenericHero from "@/components/custom/sections/hero/GenericHero";

const page = () => {
  return (
    <main className="flex flex-col items-center gap-[32px]">
      <GenericHero heroTitle="Frequently Asked Questions" />
      <FaqSection faqToShow="all" />
      <CTASection leadsource="FAQ Page- Footer" />
    </main>
  );
};
export default page;
