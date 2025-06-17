"use client";
import CustomButton from "@/components/custom/shared/CustomButton";
import { FiArrowUpRight } from "react-icons/fi";
import IndustryFocusComponent from "./components/IndustryFocusComponent";
import useModals from "@/components/custom/modals/useModal";


const IndustryFocus = () => {

    const { setContactModal } = useModals();

     return (
       <section className="mx-auto w-full max-w-11/12 pb-32 2xl:max-w-[1376px]">
         <div className="section-header flex w-full items-center justify-start py-9">
           <h2 className="text-[64px] leading-24 font-bold">Industry Focus</h2>
         </div>
         <div className="flex w-full flex-col items-center justify-center gap-16">
           <IndustryFocusComponent
             mainBg="#F5FBFF"
             tagBG="#DEF1FF"
             tagName="Luxury & Lifestyle"
           >
             <h3 className="text-2xl font-semibold">
               Where Luxury Meets Visibility
             </h3>
             <div className="flex flex-col items-start justify-start gap-3">
               <p>
                 At Infinity OOH,{" "}
                 <span className="font-bold">
                   we craft elevated out-of-home campaigns
                 </span>{" "}
                 for high-end brands seeking{" "}
                 <span className="font-bold">prestige and presence.</span>
               </p>
               <p>
                 From Dubai&apos;s{" "}
                 <span className="font-bold">elite spaces</span> to{" "}
                 <span className="font-bold">
                   global lifestyle destinations,
                 </span>{" "}
                 our independent agency brings{" "}
                 <span className="font-bold">boutique service</span> with{" "}
                 <span>international scale.</span>
               </p>
             </div>
             <CustomButton
               onClick={() =>
                 setContactModal(true, "Industry Focus - Luxury Lifestyle")
               }
               btnName="Showcase Your Brand"
               Icon={FiArrowUpRight}
               className={`bg-btn-blue text-white`}
               iconColor="white"
             />
           </IndustryFocusComponent>
           <IndustryFocusComponent
             mainBg="#E3EFEA"
             tagBG="#C7DFD5"
             tagName="Tech & E-Commerce"
           >
             <h3 className="text-2xl font-semibold">
               Smarter OOH for the Digital World
             </h3>
             <div className="flex flex-col items-start justify-start gap-3">
               <p>
                 Infinity OOH combines{" "}
                 <span className="font-bold">audience-based targeting</span>{" "}
                 with{" "}
                 <span className="font-bold">
                   global media buying expertise.
                 </span>
               </p>
               <p>
                 As a fast, flexible, independent agency in Dubai,{" "}
                 <span className="font-bold">we help digital-first brands</span>{" "}
                 create{" "}
                 <span className="font-bold">
                   high-impact, measurable campaigns
                 </span>{" "}
                 in the real world.
               </p>
             </div>
             <CustomButton
               onClick={() =>
                 setContactModal(true, "Industry Focus - Tech & E-Commerce")
               }
               btnName="Launch a Smart Campaign"
               Icon={FiArrowUpRight}
               className={`bg-btn-green text-white`}
               iconColor="white"
             />
           </IndustryFocusComponent>
         </div>
       </section>
     ); 
} 
export default IndustryFocus;