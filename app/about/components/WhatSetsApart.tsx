"use client";
import CarouselContainer from "@/components/custom/shared/carousel/Carousel";
import Image from "next/image";
import { useState } from "react";
import Swiper from "swiper";
import { SwiperSlide } from "swiper/react";
import { whatSetsUsApartData } from "./data";
import useCarousel from "@/components/custom/shared/carousel/hooks/useCarousel";
import React from "react";
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";

const WhatSetsApart = () => {
  const [swiperController, setSwiperController] = useState<
    Swiper | undefined
  >();

  const { activeIndex, onNextButtonClick, onPrevButtonClick } =
    useCarousel(swiperController);

  return (
    <section className="max-w-11/12 my-32 h-full 2xl:max-w-[1376px]">
      <div className="section-header">
        <h2 className="leading-24 font-semibold">What sets us apart</h2>
      </div>
      <div className="carousel-section relative mt-9 h-full max-w-full">
        <CarouselContainer setSwiperController={setSwiperController}>
          {whatSetsUsApartData.map((service) => (
            <SwiperSlide key={service.id}>
              <div className="flex flex-col-reverse items-center justify-center gap-8 lg:flex-row lg:gap-0">
                <div className="lhs max-w-11/12 bg-tertiary-100 z-10 flex flex-col gap-4 rounded-xl border border-black p-8 lg:-mr-8 lg:max-w-[414px]">
                  <h3 className="text-2xl font-semibold">
                    Full-Service, In-House Team
                  </h3>
                  <p>
                    From strategy and creative to media buying and reporting —
                    everything is done under one roof for speed, control, and
                    quality.
                  </p>
                </div>
                <div className="img relative h-full max-h-[509px] w-full max-w-[509px] overflow-hidden rounded-[20px]">
                  <div className="slide-item relative flex aspect-square h-full max-h-[509px] w-full max-w-[509px] items-center justify-center">
                    <Image
                      src={service.src}
                      alt={service.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </CarouselContainer>
        <div className="prev-btn absolute left-4 top-0 z-20 flex h-full items-center justify-center">
          <button
            className="h-10 w-10 rounded-full bg-[#CBCBCB33]/50 p-1 text-[#B7B7B7] backdrop-blur-xl"
            onClick={onPrevButtonClick}
          >
            <FiArrowLeftCircle
              width={26}
              height={26}
              className="w-full text-2xl"
            />
          </button>
        </div>
        <div className="next-btn absolute right-4 top-0 z-20 flex h-full items-center justify-center">
          <button
            className="h-10 w-10 rounded-full bg-[#CBCBCB33]/50 p-1 text-[#B7B7B7] backdrop-blur-xl"
            onClick={onNextButtonClick}
          >
            <FiArrowRightCircle
              width={26}
              height={26}
              className="w-full text-2xl"
            />
          </button>
        </div>
        <div className="slide-progress mt-9">
          <div className="flex flex-col items-center justify-center gap-1 text-black">
            <p>
              {activeIndex + 1} / {whatSetsUsApartData.length}
            </p>
            <div className="relative h-[3px] w-16 bg-[#CBCBCB33]/50 backdrop-blur-xl">
              <div
                className="absolute inset-0 bg-[#707070]"
                style={{
                  width: `${((activeIndex + 1) / whatSetsUsApartData.length) * 100}%`,
                  height: "3px",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default WhatSetsApart;
