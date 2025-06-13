"use client";
import React from "react";
import CarouselContainer from "@/components/custom/shared/carousel/Carousel";
import { Swiper } from 'swiper';
import { SwiperSlide } from "swiper/react";
import Image from "next/image";
import useCarousel from "@/components/custom/shared/carousel/hooks/useCarousel";
import { heroImages } from "../../data";
import { FiArrowLeftCircle } from "react-icons/fi";
import { FiArrowRightCircle } from "react-icons/fi";

const Hero = () => {
    const [swiperController, setSwiperController] = React.useState<Swiper | undefined>(undefined);
    const { activeIndex, onNextButtonClick, onPrevButtonClick } = useCarousel(swiperController);

     return ( 
         <div className="hero relative max-w-full max-h-screen">
            <CarouselContainer setSwiperController={setSwiperController}>
                {
                    heroImages.map((image, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <div className="image-slide w-screen h-screen relative flex justify-center items-center overflow-hidden">
                                    <Image src={image.src} alt={image.alt} fill sizes="100vw" className="object-cover" />
                                    <div className={` ${activeIndex == index ? "hero-content" : ""}  max-w-11/12 lg:max-w-[1312px] w-full z-20 relative max-h-[calc(100vh-380px)] h-full flex flex-col justify-center lg:justify-end items-center lg:items-start`}>
                                        <h1 className="bg-white/35 backdrop-blur-2xl text-black p-1 lg:p-2.5 text-2xl lg:text-[64px] leading-10 lg:leading-24 max-w-fit rounded-[20px] rounded-br-none">
                                            {image.caption1}
                                        </h1>
                                        <h1 className="bg-white/35 backdrop-blur-2xl text-black p-1 lg:p-2.5 text-2xl lg:text-[64px] leading-10 lg:leading-24 ml-[20%] max-w-fit rounded-[20px] rounded-tl-none">
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
                <button className="bg-white/20 backdrop-blur-xl rounded-full p-1 w-10 h-10 text-white" onClick={onPrevButtonClick}>
                    <FiArrowLeftCircle width={26} height={26} className="w-full text-2xl" />
                </button>
                <div className="flex flex-col justify-center items-center text-white gap-1">
                    <p>
                        {activeIndex + 1} / {heroImages.length}
                    </p>
                    <div className="w-16 h-[3px] bg-white/20 backdrop-blur-xl relative">
                        <div className="absolute inset-0 bg-white" style={{
                            width: `${(activeIndex + 1) / heroImages.length * 100}%`,
                            height: '3px'
                        }}></div>
                    </div>
                </div>
                <button className="bg-white/20 backdrop-blur-xl rounded-full p-1 w-10 h-10 text-white" onClick={onNextButtonClick}>
                    <FiArrowRightCircle width={26} height={26} className="w-full text-2xl" />
                </button>
            </div>
         </div> 
    ) 
} 
export default Hero;