import CTASection from "@/components/custom/sections/cta/CTASection";
import FaqSection from "@/components/custom/shared/faqs/FaqSection";
import GenericHero from "@/components/custom/sections/hero/GenericHero";

const page = () => {
  return (
    <main className="flex flex-col items-center gap-[32px]">
      <GenericHero heroTitle="Contact" />
      <div className="mt-16">
        <CTASection leadsource="Contact Page" />
      </div>
      <FaqSection />
    </main>
  );
};
export default page;
