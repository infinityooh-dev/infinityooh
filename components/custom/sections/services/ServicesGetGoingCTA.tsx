"use client";
import Link from "next/link";
import CustomButton from "../../shared/CustomButton";
import { FiArrowUpRight } from "react-icons/fi";
import useModals from "../../modals/useModal";
import { useMemo } from "react";
import { usePathname } from "next/navigation";

const ServicesGetGoingCTA = ( {leadsource, } :{ leadsource: string }) => {

    const { setContactModal } = useModals();

    const pathname = usePathname()

    const showLink = useMemo(() => {
        const showLinkRoutes = ["/"]
        return showLinkRoutes.includes(pathname)
    }, [pathname])


     return ( 
        <div className="flex w-full justify-center items-center">
        <div className="cta bg-white max-w-[678px] flex justify-center items-center flex-col gap-8 p-8 border border-black rounded-xl mt-16 mb-5">
            <h3 className="text-4xl font-semibold text-center text-black">
                Ready to get going?
            </h3>
            <CustomButton btnName="Get in touch" onClick={() => setContactModal(true, leadsource)} />
            { showLink && <p>
                <Link href="/about" className="text-black underline flex items-center gap-1 font-semibold text-xl">
                    Learn more about how we set ourselves apart from the crowd <span><FiArrowUpRight className="font-semibold" /></span>
                </Link>
            </p>}
        </div>
    </div>
    ) 
} 
export default ServicesGetGoingCTA;