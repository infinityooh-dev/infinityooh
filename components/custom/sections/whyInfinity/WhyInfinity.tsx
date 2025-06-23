import React from 'react'

import { whyInfinityData } from './data'
import WhyInfinityCard from './components/WhyInfinityCard'

const WhyInfinity = () => {
  return (
    <section className="max-w-11/12 mx-auto w-full 2xl:max-w-[1376px]">
      <div className="section-header">
        <h2 className="leading-24 text-[64px] font-semibold text-black">
          Why Infinity OOH?
        </h2>
      </div>
      <div className="why-infinity-card-container mx-auto w-full">
        {whyInfinityData.map((item) => (
          <WhyInfinityCard
            color={item.color}
            description={item.description}
            id={item.id}
            title={item.title}
            key={item.id}
          />
        ))}
      </div>
    </section>
  );
}

export default WhyInfinity