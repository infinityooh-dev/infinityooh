"use client";
import ServicesCTA from '@/components/custom/sections/services/ServicesCTA'
import React from 'react'
import { aboutPageCTAContent } from '../data'
import CustomButton from '@/components/custom/shared/CustomButton'
import useModals from '@/components/custom/modals/useModal'

const AboutServiceCTA = () => {

const { setContactModal } = useModals()


  return (
    <ServicesCTA ctaContent={aboutPageCTAContent}>
        <div className="w-full flex justify-start items-start">
            <CustomButton onClick={() => setContactModal(true, "About Page - Services CTA")} btnName="Start Your Campaign Today" iconColor="#407B38" />
        </div>
    </ServicesCTA>
  )
}

export default AboutServiceCTA

