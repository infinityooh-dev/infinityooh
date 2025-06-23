"use client";

import { useEffect, useRef, useState } from "react";

const ServiceBGLineIcon = () => {
  const pathRef = useRef<SVGPathElement>(null);
  const [dashOffset, setDashOffset] = useState(0);

  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;

    const pathLength = path.getTotalLength();
    setDashOffset(pathLength); // start hidden

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrollProgress = scrollTop / docHeight;

      // Animate from full offset to 0
      const newOffset = pathLength - scrollProgress * pathLength;
      setDashOffset(Math.max(0, Math.min(pathLength, newOffset)));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <svg
      className="service-bg-line max-w-full"
      width="879"
      height="1741"
      viewBox="0 0 879 1741"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        ref={pathRef}
        d="M199 300.001C283.5 32.5 554.2 -47.8999 671 32.5001C817 133 781.621 415.221 374.5 545.5C-0.500061 665.5 -60.684 897.643 55.5 1036C186.5 1192 455.349 1282.27 640.5 1233C819 1185.5 919.871 1382.5 858 1592C800.747 1785.86 283 1809.5 172 1524.5"
        stroke="#407B38"
        strokeWidth="4"
        strokeDasharray="16 16" // <== keep your dash style
        strokeDashoffset={dashOffset}
        style={{ transition: "stroke-dashoffset 0.1s linear" }}
      />
    </svg>
  );
};

export default ServiceBGLineIcon;
