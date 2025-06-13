"use client";
import CarouselContainer from "@/components/custom/shared/carousel/Carousel";
import CarouselProgressArrows from "@/components/custom/shared/carousel/CarouselArrows";
import useCarousel from "@/components/custom/shared/carousel/hooks/useCarousel";
import Image from "next/image";
import { useState } from "react";
import Swiper from "swiper";
import { SwiperSlide } from "swiper/react";
import { serviceCarouselData } from "./data";
import { homePageServiceCTATextContent } from "../../data";


type ServicesCTAProps = {
  ctaContent?: string[]
  children: React.ReactNode;
}

const ServicesCTA = ({ children, ctaContent = homePageServiceCTATextContent }: ServicesCTAProps) => {
  const [swiperController, setSwiperController] = useState<Swiper | undefined>(
    undefined
  );

  const { activeIndex, onNextButtonClick, onPrevButtonClick } =
    useCarousel(swiperController);

  return (
    <section className="flex max-w-11/12 mx-auto flex-col-reverse lg:flex-row w-full items-center justify-center py-32 gap-8 lg:gap-0">
      <div className="lhs flex w-full max-w-full lg:max-w-[596px] flex-col items-center justify-center gap-8 rounded-xl border border-black bg-secondary py-8 lg:-mr-6 z-20">
        <div className="flex flex-col gap-3 px-8 text-left">
          {ctaContent.map((content, index) => <div key={index} dangerouslySetInnerHTML={{ __html: content}}></div>)}
        </div>
        <div className="flex flex-col lg:flex-row w-full items-center justify-center gap-6 px-8">
          {
            children
          }
        </div>
      </div>
      <div className="services-carousel h-full max-h-[509px] w-full max-w-[509px] rounded-[20px] relative border border-black overflow-hidden drop-shadow-[0_4px_0px_rgba(0,0,0,1)]">
        <CarouselContainer setSwiperController={setSwiperController}>
          {serviceCarouselData.map((service) => (
            <SwiperSlide key={service.id}>
              <div className="slide-item relative inset-0 flex aspect-square items-center justify-center h-full max-h-[509px] w-full max-w-[509px]">
                <Image src={service.src} alt={service.alt} fill className="object-cover" />
              </div>
            </SwiperSlide>
          ))}
        </CarouselContainer>
        <div className="btns absolute bottom-6 z-30 flex w-full items-center justify-center">
          <CarouselProgressArrows
            activeIndex={activeIndex}
            onNextButtonClick={onNextButtonClick}
            onPrevButtonClick={onPrevButtonClick}
            collectionCount={serviceCarouselData.length}
          />
        </div>
      </div>
    </section>
  );
};
export default ServicesCTA;
