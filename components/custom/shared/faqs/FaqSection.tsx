import Link from "next/link";
import { faqs } from "./data";
import FaqContainer from "./FaqContainer";
import { FiArrowUpRight } from "react-icons/fi";
import { useCallback } from "react";

type FaqSectionProps = {
    faqToShow?: keyof typeof faqs | "all";
}

const FaqSection = ({ faqToShow = "General Questions" }: FaqSectionProps) => {

    const handleFaqs = useCallback(() => {
        const faq = []
        if (faqToShow && faqToShow !== "all") {
            const retrunValue = {
                header: undefined,
                faqs: faqs[faqToShow] || []
            };
            faq.push(retrunValue);
        } else {
            for (const [key, value] of Object.entries(faqs)) {
                faq.push({
                    header: key,
                    faqs: value
                });
            }
        };

        return faq;
    }, [faqToShow]);

     return (
       <section className="max-w-11/12 2xl:max-w-[1376px] w-fit relative mx-auto pt-20 pb-32">
         {faqToShow !== "all" && (
           <div className="section-sub-header">
             <h3 className="text-4xl lg:text-left mb-8 font-semibold">
               Frequently Asked Questions
             </h3>
           </div>
         )}
         <div className="sticky-container relative w-full flex flex-col lg:flex-row justify-center items-start gap-16">
           <div className="faqs max-w-[784px] xl:min-w-[784px] w-full flex flex-col gap-8 justify-center items-center">
             {handleFaqs().map((faq, index) => (
               <FaqContainer
                 key={index}
                 faqHeader={faq.header}
                 faqs={faq.faqs}
               />
             ))}
           </div>
           <div className="sticky-cta sticky top-4 z-20 w-full xl:min-w-[400px] lg:w-5/12 flex justify-center">
             <div className="bg-tertiary-100 border border-black p-8 rounded-xl flex flex-col justify-center items-center gap-8 lg:max-w-[400px] w-full min-h-[210px]">
               <h4 className="text-2xl font-semibold">
                 Want to know more about how we operate?
               </h4>
               <p className="flex justify-center items-center gap-2.5 text-lg">
                 <Link
                   href="/about"
                   className="text-xl underline font-semibold"
                 >
                   Explore our mission to transform advertising across the UAE
                 </Link>
                 <span className="text-2xl">
                   <FiArrowUpRight />
                 </span>
               </p>
             </div>
           </div>
         </div>
         {faqToShow !== "all" && (
           <div className="browse-all flex justify-center items-center mt-8 p-2.5">
             <Link
               href="/faqs"
               className="text-xl font-semibold underline flex items-center justify-center gap-2 underline-offset-4"
             >
               Browse all our FAQs
               <span className="text-2xl">
                 <FiArrowUpRight />
               </span>
             </Link>
           </div>
         )}
       </section>
     ); 
} 
export default FaqSection;