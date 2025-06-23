"use client";

import { useEffect, useRef, useState } from "react";

const ServiceBGLineIcon = () => {
  const pathRef = useRef<SVGPathElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [pathLength, setPathLength] = useState(0);
  const [dashOffset, setDashOffset] = useState(0);

  useEffect(() => {
    const path = pathRef.current;
    const container = containerRef.current;
    if (!path || !container) return;

    const totalLength = path.getTotalLength();
    setPathLength(totalLength);
    setDashOffset(totalLength);

    // Set up observer
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          window.addEventListener("scroll", updateOffset, { passive: true });
          updateOffset(); // initial update
        } else {
          window.removeEventListener("scroll", updateOffset);
        }
      },
      {
        root: null,
        threshold: 0,
      }
    );

    observer.observe(container);

    // Scroll logic to update offset
    const updateOffset = () => {
      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const containerTop = rect.top;
      const containerBottom = rect.bottom;

      const scrollPosition = windowHeight - containerTop;
      const progress = scrollPosition / containerBottom;
      
      
      const clampedProgress = Math.min(Math.max(progress, 0), 1);
      const newOffset = totalLength * (1 - clampedProgress);
      setDashOffset(newOffset*1.4);
    };

    return () => {
      window.removeEventListener("scroll", updateOffset);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="absolute inset-0 border border-red" ref={containerRef}>
      <svg
        className="service-bg-line max-w-full"
        width="879"
        height="1741"
        viewBox="0 0 879 1741"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <mask id="lineMask" maskUnits="userSpaceOnUse">
            <path
              ref={pathRef}
              id="lineMaskPath"
              d="M199 300.001C283.5 32.5 554.2 -47.8999 671 32.5001C817 133 781.621 415.221 374.5 545.5C-0.500061 665.5 -60.684 897.643 55.5 1036C186.5 1192 455.349 1282.27 640.5 1233C819 1185.5 919.871 1382.5 858 1592C800.747 1785.86 283 1809.5 172 1524.5"
              stroke="#fff"
              strokeWidth={4}
              strokeDasharray={pathLength}
              strokeDashoffset={dashOffset}
              />
          </mask>
        </defs>
        <g id="maskReveal" mask="url(#lineMask)">
        <path
          d="M199 300.001C283.5 32.5 554.2 -47.8999 671 32.5001C817 133 781.621 415.221 374.5 545.5C-0.500061 665.5 -60.684 897.643 55.5 1036C186.5 1192 455.349 1282.27 640.5 1233C819 1185.5 919.871 1382.5 858 1592C800.747 1785.86 283 1809.5 172 1524.5"
          stroke="#407B38"
          strokeWidth="4"
          strokeDasharray="16 16"
        />
        </g>
      </svg>
    </div>
  );
};

export default ServiceBGLineIcon;
