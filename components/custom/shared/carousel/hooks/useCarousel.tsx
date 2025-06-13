"use client";
import { useCallback, useEffect, useState } from "react";
import Swiper from "swiper";

const useCarousel = (swiperController: Swiper | undefined) => {
    

    const [activeIndex, setActiveIndex] = useState<number>(0);

    useEffect(() => {
        if (swiperController) {
            const updateIndex = () => {;
                setActiveIndex(swiperController.activeIndex)};
            
            swiperController.on("slideChange", updateIndex);
            
            return () => {
                swiperController.off("slideChange", updateIndex); // Cleanup listener
            };
        }
    }, [swiperController]);

    const onSelectDot = useCallback((slideindex: number) => {
        if(swiperController){
            swiperController.slideTo(slideindex)
        }
    }, [swiperController])

    const onNextButtonClick = useCallback(() => {
        if(swiperController){
            swiperController.slideNext()
        } else {
            return
        }
    }, [swiperController])

    const onPrevButtonClick = useCallback(() => {
        if(swiperController){
            swiperController.slidePrev()
        } else {
            return
        }
    }, [swiperController])

    return {
        activeIndex, 
        onNextButtonClick,
        onPrevButtonClick,
        onSelectDot
    }
} 
export default useCarousel;