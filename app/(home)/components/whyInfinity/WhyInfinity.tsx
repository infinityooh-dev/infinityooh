import React from 'react'
import { whyInfinityData } from './data'
import WhyInfinityCard from './components/WhyInfinityCard'

const WhyInfinity = () => {
  return (
    <section className='w-full max-w-11/12 2xl:max-w-[1376px] mx-auto'>
        <div className="section-header">
            <h2 className="text-[64px] leading-24 text-black font-bold">
                Why Infinity OOH?
            </h2>
        </div>
        <div className="why-infinity-card-container w-full  mx-auto">
            {
                whyInfinityData.map(item => <WhyInfinityCard color={item.color} description={item.description} id={item.id} title={item.title} key={item.id} />)
            }
        </div>
    </section>
  )
}

export default WhyInfinity