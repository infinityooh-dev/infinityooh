import { cn } from "@/lib/utils";
import React from "react";
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";

type CarouselArrowsProps = {
    activeIndex: number;
    className?: string;
    collectionCount: number;
    onNextButtonClick: () => void;
    onPrevButtonClick: () => void;
}

const CarouselProgressArrows = ({ activeIndex, onNextButtonClick, onPrevButtonClick, className, collectionCount }: CarouselArrowsProps) => {
     return ( 
         <div className={cn("flex justify-center items-center gap-5", className)}> 
             <button className="bg-white/20 backdrop-blur-xl rounded-full p-1 w-10 h-10 text-white" onClick={onPrevButtonClick}>
                    <FiArrowLeftCircle width={26} height={26} className="w-full text-2xl" />
                </button>
                <div className="flex flex-col justify-center items-center text-white gap-1">
                    <p>
                        {activeIndex + 1} / {collectionCount}
                    </p>
                    <div className="w-16 h-[3px] bg-white/20 backdrop-blur-xl relative">
                        <div className="absolute inset-0 bg-white" style={{
                            width: `${(activeIndex + 1) / collectionCount * 100}%`,
                            height: '3px'
                        }}></div>
                    </div>
                </div>
                <button className="bg-white/20 backdrop-blur-xl rounded-full p-1 w-10 h-10 text-white" onClick={onNextButtonClick}>
                    <FiArrowRightCircle width={26} height={26} className="w-full text-2xl" />
                </button>
         </div> 
    ) 
} 
export default CarouselProgressArrows;