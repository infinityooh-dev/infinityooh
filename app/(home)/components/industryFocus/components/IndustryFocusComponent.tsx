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
        <div style={{ backgroundColor: mainBg }} className="luxury-lifestyle border border-black rounded-lg flex flex-col-reverse p-4 justify-center items-center gap-5 bg-[#E3EFEA] drop-shadow-effect-lg max-w-11/12 lg:max-w-[1120px] w-full">
        <div className="w-full lg:max-w-[414px] flex flex-row-reverse justify-center items-center">
            <div className="lhs flex flex-col justify-start items-start gap-4 max-w-11/12 lg:max-w-[350px] w-full">
                <div style={{ backgroundColor: tagBG }} className="tags bg-[#C7DFD5] rounded-full">
                    <p className="px-4 py-1.5 text-sm font-semibold">
                        {tagName}
                    </p>
                </div>
                {
                    children
                }
            </div>
        </div>
        <div className="carousel max-w-[656px] w-full h-fit lg:h-[492px]  relative rounded-md">
            <CarouselContainer setSwiperController={setSwiperController}>
                {serviceCarouselData.map((service) => (
                    <SwiperSlide key={service.id}>
                    <div className="slide-item relative inset-0 flex aspect-square items-center justify-center h-full max-h-[492px] w-full max-w-[656px]">
                        <Image src={service.src} alt={service.alt} fill className="object-cover" />
                    </div>
                    </SwiperSlide>
                ))}
            </CarouselContainer>
            <div className="carousel-btns flex justify-center items-center absolute bottom-6 z-30 w-full">
                <CarouselProgressArrows activeIndex={activeIndex} collectionCount={serviceCarouselData.length} onNextButtonClick={onNextButtonClick} onPrevButtonClick={onPrevButtonClick} />
            </div>
        </div>
    </div>
    ) 
} 
export default IndustryFocusComponent;