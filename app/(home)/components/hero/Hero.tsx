"use client";
import React from "react";
import CarouselContainer from "@/components/custom/shared/carousel/Carousel";
import { Swiper } from 'swiper';
import { SwiperSlide } from "swiper/react";
import Image from "next/image";
import useCarousel from "@/components/custom/shared/carousel/hooks/useCarousel";
import { heroImages } from "../../data";
import CarouselProgressArrows from "@/components/custom/shared/carousel/CarouselArrows";
import { Autoplay } from 'swiper/modules';
import { AutoplayOptions } from "swiper/types";

const Hero = () => {
    const [swiperController, setSwiperController] = React.useState<Swiper | undefined>(undefined);
    const { activeIndex, autoPlayProgress, onNextButtonClick, onPrevButtonClick } = useCarousel(swiperController);


    const autoPlayOptions: AutoplayOptions = {
        delay: 7000, 
        pauseOnMouseEnter: true
    }

     return ( 
         <div className="hero relative max-w-full max-h-screen">
            <CarouselContainer autoplay={autoPlayOptions}  modules={[Autoplay]} setSwiperController={setSwiperController}>
                {
                    heroImages.map((image, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <div className="image-slide w-screen h-screen relative flex justify-center items-center overflow-hidden">
                                    <Image src={image.src} alt={image.alt} fill sizes="100vw" className="object-cover" />
                                    <div className={`hero-content max-w-11/12 lg:max-w-[1312px] w-full z-20 relative max-h-[calc(100vh-380px)] h-full flex flex-col justify-center lg:justify-end items-center lg:items-start`}>
                                        <h1 className="bg-white/35 inner-cut backdrop-blur-2xl text-black p-1 lg:p-2.5 text-2xl lg:text-[64px] leading-10 lg:leading-24 max-w-fit rounded-[20px] rounded-br-none">
                                            {image.caption1}
                                        </h1>
                                        <h1 className="bg-white/35 inner-cut-2 backdrop-blur-2xl text-black p-1 lg:p-2.5 text-2xl lg:text-[64px] leading-10 lg:leading-24 ml-[20%] max-w-fit rounded-[20px] rounded-tl-none">
                                            {image.caption2}
                                        </h1>
                                    </div>
                                </div>
                            </SwiperSlide>
                        );
                    })
                }
            </CarouselContainer>
            <div className="hero-btns text-white absolute bottom-10 lg:bottom-16 z-30 w-full flex justify-start lg:justify-center items-center px-6">
                <div className="scroll-explore-btn flex flex-col items-center justify-center gap-1 rounded-[20px] px-1 pt-4 py-2 bg-white/35 backdrop-blur-lg absolute ">
                    <Image src={"/images/brand/scroll.svg"} alt="scroll to explore" width={32} height={32} className="animate-bounce" />
                    <p className="hidden lg:flex text-sm text-center text-white max-w-8/12 w-full">
                        Scroll to explore
                    </p>
                </div>
            </div>
            <div className="carousel-arrow absolute bottom-6 z-30 right-6 flex justify-center items-center gap-5">
                <CarouselProgressArrows autoPlayProgress={autoPlayProgress} activeIndex={activeIndex} collectionCount={heroImages.length} onNextButtonClick={onNextButtonClick} onPrevButtonClick={onPrevButtonClick} />
            </div>
         </div> 
    ) 
} 
export default Hero;