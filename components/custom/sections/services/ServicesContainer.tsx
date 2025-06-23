import Image from "next/image";
import { serviceData } from "../../../../app/(home)/components/services/data";
import ServicesGetGoingCTA from "./ServicesGetGoingCTA";
// import ServiceBGLineIcon from "./ServiceBGLineIcon";
import ServiceBGLineContainer from "./ServiceBGLineContainer";

const Services = ({ leadsource }: { leadsource: string }) => {
  return (
    <section
      id="services"
      className="max-w-11/12 bg-secondary mx-auto w-full rounded-[20px] border border-black px-4 py-8 lg:px-16 lg:py-8 2xl:max-w-[1376px]"
    >
      <div className="section-header flex items-center justify-start">
        <h2 className="leading-24 text-[64px] font-semibold text-black">
          Services
        </h2>
      </div>
      <div className="services-items-container relative py-44">
        <div className="bg-line-vector absolute inset-0 flex h-full w-full items-center justify-center">
          <div className="max-w-11/12 relative mx-auto h-full min-h-[1741px] w-full lg:max-w-[974px]">
            {/* <Image
                 src={"/images/brand/lines/line-vector.svg"}
                 alt="line vector"
                 fill
                 className="object-cover"
               /> */}
            {/* <div className="absolute inset-0">
              <ServiceBGLineIcon />
            </div> */}
            <div className="absolute inset-0">
              <ServiceBGLineContainer />
            </div>
          </div>
        </div>
        <div className="service-grid z-10 flex flex-col gap-8">
          {serviceData.map((service) => {
            return (
              <div
                key={service.id}
                className="service-item flex w-full items-center justify-start"
              >
                <div
                  style={{ backgroundColor: service.color }}
                  className="service-card gap-4.5 drop-shadow-effect-lg flex min-h-[290px] w-full flex-col items-center justify-center rounded-lg border border-black px-8 py-4 lg:w-8/12 lg:flex-row"
                >
                  <div className="image relative aspect-square h-full max-h-[258px] w-[258px] max-w-[258px]">
                    <Image
                      src={service.src}
                      alt={service.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="text-content flex flex-col items-start justify-start gap-4">
                    <h3 className="w-full text-2xl font-semibold">
                      {service.title}
                    </h3>
                    <p className="w-full">{service.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <ServicesGetGoingCTA leadsource={leadsource} />
    </section>
  );
}; 
export default Services;