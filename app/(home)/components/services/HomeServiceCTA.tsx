"use client";
import CustomButton from "@/components/custom/shared/CustomButton";
import ServicesCTA from "../../../../components/custom/sections/services/ServicesCTA";
import { FaArrowTurnDown } from "react-icons/fa6";
import useModals from "@/components/custom/modals/useModal";

const HomeServiceCTA = () => {

    const { setContactModal } = useModals()

     return ( 
        <ServicesCTA>
            <CustomButton btnName="Start Your Campaign" iconColor="#407B38" onClick={() => setContactModal(true, "Home Page - Service CTA")} />
            <CustomButton
            btnName="Explore Our Services"
            variant="secondary"
            Icon={FaArrowTurnDown}
            iconColor="black"
            isLink
            href="#services"
            />
      </ServicesCTA>
    ) 
} 
export default HomeServiceCTA;