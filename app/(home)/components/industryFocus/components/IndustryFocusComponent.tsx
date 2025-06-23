"use client";
import CarouselContainer from "@/components/custom/shared/carousel/Carousel";
import useCarousel from "@/components/custom/shared/carousel/hooks/useCarousel";
import { useState } from "react";
import Swiper from "swiper";
import { serviceCarouselData } from "../../services/data";
import { SwiperSlide } from "swiper/react";
import Image from "next/image";
import CarouselProgressArrows from "@/components/custom/shared/carousel/CarouselArrows";


type IndustryFocusComponentProps = {
    mainBg: string;
    tagBG: string;
    tagName: string;
    children: React.ReactNode
}

const IndustryFocusComponent = ({ mainBg, tagBG, tagName, children }: IndustryFocusComponentProps) => {
    const [swiperController, setSwiperController] = useState<Swiper | undefined>(undefined);
    const { activeIndex, onNextButtonClick, onPrevButtonClick } = useCarousel(swiperController);
     return (
       <div
         style={{ backgroundColor: mainBg }}
         className="luxury-lifestyle drop-shadow-effect-lg max-w-11/12 flex h-full w-full flex-col-reverse items-center justify-center gap-5 rounded-lg border border-black bg-[#E3EFEA] p-4 lg:max-w-[1120px]"
       >
         <div className="flex h-full max-h-full w-full flex-row-reverse items-center justify-center lg:max-h-[405px] lg:max-w-[414px]">
           <div className="lhs max-w-11/12 flex h-full w-full flex-col items-start justify-center gap-4 lg:max-w-[350px] py-8">
             <div
               style={{ backgroundColor: tagBG }}
               className="tags rounded-full bg-[#C7DFD5]"
             >
               <p className="px-4 py-1.5 text-sm font-semibold">{tagName}</p>
             </div>
             <div className="content flex justify-center gap-16 flex-col items-start justify-between">
              {children}
             </div>
           </div>
         </div>
         <div className="carousel relative h-fit w-full max-w-[656px] rounded-md lg:h-[492px]">
           <CarouselContainer setSwiperController={setSwiperController}>
             {serviceCarouselData.map((service) => (
               <SwiperSlide key={service.id}>
                 <div className="slide-item relative inset-0 flex aspect-square h-full max-h-[492px] w-full max-w-[656px] items-center justify-center">
                   <Image
                     src={service.src}
                     alt={service.alt}
                     fill
                     className="object-cover"
                   />
                 </div>
               </SwiperSlide>
             ))}
           </CarouselContainer>
           <div className="carousel-btns absolute bottom-2 z-30 flex w-full items-center justify-end pr-[14px]">
             <CarouselProgressArrows
               activeIndex={activeIndex}
               collectionCount={serviceCarouselData.length}
               onNextButtonClick={onNextButtonClick}
               onPrevButtonClick={onPrevButtonClick}
             />
           </div>
         </div>
       </div>
     ); 
} 
export default IndustryFocusComponent;