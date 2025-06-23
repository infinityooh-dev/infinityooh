import { cn } from "@/lib/utils";
import React from "react";
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";

type CarouselArrowsProps = {
  activeIndex: number;
  className?: string;
  collectionCount: number;
  autoPlayProgress?: number;
  onNextButtonClick: () => void;
  onPrevButtonClick: () => void;
};

const CarouselProgressArrows = ({
  activeIndex,
  onNextButtonClick,
  onPrevButtonClick,
  className,
  collectionCount,
  autoPlayProgress,
}: CarouselArrowsProps) => {
  return (
    <div className={cn("flex items-center justify-center gap-5", className)}>
      <button
        className="h-10 w-10 rounded-full bg-white/20 p-1 text-white backdrop-blur-xl"
        onClick={onPrevButtonClick}
      >
        <FiArrowLeftCircle width={26} height={26} className="w-full text-2xl" />
      </button>
      <div className="flex flex-col items-center justify-center gap-1 text-sm text-white">
        <p>
          <span className="font-black">{activeIndex + 1}</span> /{" "}
          {collectionCount}
        </p>
        <div className="relative h-[3px] w-16 bg-white/20 backdrop-blur-xl">
          <div
            className="absolute inset-0 bg-white"
            style={{
              width: `${
                autoPlayProgress
                  ? (1 - autoPlayProgress) * 100
                  : ((activeIndex + 1) / collectionCount) * 100
              }%`,
              height: "3px",
            }}
          ></div>
        </div>
      </div>
      <button
        className="h-10 w-10 rounded-full bg-white/20 p-1 text-white backdrop-blur-xl"
        onClick={onNextButtonClick}
      >
        <FiArrowRightCircle
          width={26}
          height={26}
          className="w-full text-2xl"
        />
      </button>
    </div>
  );
}; 
export default CarouselProgressArrows;