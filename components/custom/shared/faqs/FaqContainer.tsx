import { FaqCardProps } from "@/lib/types/common";
import FaqCard from "./FaqCard";

type FaqContainerProps = {
    faqHeader?: string;
    faqs: FaqCardProps[]
}

const FaqContainer = ({ faqHeader, faqs }: FaqContainerProps) => {
     return (
       <div className="w-full max-w-[784px]">
         {faqHeader && <h2 className="text-2xl text-left mb-8">{faqHeader}</h2>}
         <div className="flex flex-col gap-8 w-full max-w-[784px]">
           {faqs.map((faq, index) => (
             <FaqCard key={index} question={faq.question} answer={faq.answer} />
           ))}
         </div>
       </div>
     ); 
} 
export default FaqContainer;