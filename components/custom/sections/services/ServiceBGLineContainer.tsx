"use client";

import { useEffect, useRef, useState } from "react";
import ServiceBGLineIcon from "./ServiceBGLineIcon";

const ServiceBGLineContainer = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [revealHeight, setRevealHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const revealProgress = (1 - ((rect.top) / windowHeight)) - 0.65;

      console.log(`Reveal Progress: ${revealProgress}, Rect Top: ${rect.top}`);
      

      const maxHeight = containerRef.current.scrollHeight;

      const clampedHeight = Math.min(
        maxHeight,
        Math.max(0, (maxHeight * revealProgress))
      );

      setRevealHeight(clampedHeight);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // initialize on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-line-vector absolute inset-0 flex h-full w-full items-center justify-center max-w-full">
      <div
        className="max-w-11/12 relative mx-auto min-h-[1741px] w-full lg:max-w-[974px]"
        ref={containerRef}
      >
        <div
          className="absolute left-0 w-full overflow-hidden max-w-full"
          style={{ height: revealHeight }}
        >
          <ServiceBGLineIcon />
        </div>
      </div>
    </div>
  );
};

export default ServiceBGLineContainer;
