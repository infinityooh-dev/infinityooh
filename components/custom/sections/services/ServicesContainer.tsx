import Image from "next/image";
import { serviceData } from "../../../../app/(home)/components/services/data";
import ServicesGetGoingCTA from "./ServicesGetGoingCTA";

const Services = ({ leadsource }: {leadsource: string}) => {
     return ( 
         <section id="services" className="max-w-11/12 2xl:max-w-[1376px] mx-auto px-4 py-8 lg:px-16 lg:py-8 bg-secondary w-full border border-black rounded-[20px] "> 
            <div className="section-header flex justify-start items-center">
                <h2 className="text-[64px] leading-24 text-black font-bold">
                    Services
                </h2>
            </div>
            <div className="services-items-container relative py-44">
                <div className="bg-line-vector absolute inset-0 w-full h-full flex justify-center items-center">
                    <div className="relative max-w-11/12 lg:max-w-[974px] min-h-[1735.45px] w-full h-full mx-auto">
                        <Image src={"/images/brand/lines/line-vector.svg"} alt="line vector" fill className="object-cover" />
                    </div>
                </div>
                <div className="service-grid flex flex-col gap-8 z-10">
                    {
                        serviceData.map(service => {
                            return(
                                <div key={service.id} className="service-item w-full flex justify-start items-center">
                                    <div style={{ backgroundColor: service.color }} className="flex w-full flex-col lg:flex-row lg:w-8/12 min-h-[290px] justify-center items-center gap-4.5 px-8 py-4 rounded-lg border border-black drop-shadow-effect-lg">
                                        <div className="image max-w-[258px] max-h-[258px] w-[258px] aspect-square h-full relative">
                                            <Image src={service.src} alt={service.alt} fill className="object-cover" />
                                        </div>
                                        <div className="text-content flex justify-start items-start flex-col gap-4">
                                            <h3 className="text-2xl font-semibold w-full">
                                                {service.title}
                                            </h3>
                                            <p className="w-full">
                                                {service.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <ServicesGetGoingCTA leadsource={leadsource} />
         </section> 
    ) 
} 
export default Services;