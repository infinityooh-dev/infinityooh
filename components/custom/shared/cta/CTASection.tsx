import Image from "next/image";
import Link from "next/link";
import CTAForm from "./CTAForm";
import CopyButton from "./CopyButton";


type CTASectionProps = {
    leadsource: string;
}

const CTASection = ({ leadsource }: CTASectionProps) => {
     return ( 
         <section className="max-w-11/12 2xl:max-w-[1376px] relative mx-auto px-4 py-8 lg:px-16 lg:py-8 bg-secondary w-full border border-black rounded-[20px] flex flex-col justify-center items-center lg:items-start"> 
              <div className="section-header">
                <h2 className="text-[64px] leading-24 text-black font-bold">
                    Ready? Let&apos;s go!
                </h2>
              </div>
              <div className="form-container flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-0">
                <div className="lhs border border-black p-4 lg:p-8 rounded-xl flex flex-col justify-center items-start bg-white lg:-mr-8 z-10 gap-8 max-sm:max-w-11/12">
                    <div className="text-content flex justify-start items-start flex-col gap-4">
                        <h3 className="text-xl lg:text-2xl font-semibold">
                            Let&apos;s Build Something Big
                        </h3>
                        <p className="text-base lg:text-xl">
                            Whether you&apos;re launching a product, growing your brand, or dominating the skyline — Infinity OOH is your trusted media partner.
                        </p>
                    </div>
                    <div className="contact-links flex flex-col justify-start items-start gap-4">
                        <div className="email flex justify-start items-center">
                            <div className="email-icon w-12 h-12 rounded-full p-4 border border-black drop-shadow-[2px_0px_0px_#96BCC1] bg-[#F7FEFF]">
                                <Image src={"/images/brand/email.svg"} alt="send email icon" width={32} height={32} className="object-cover" />
                            </div>
                            <div className="email-link rounded-r-full bg-[#F7FEFF] py-2 px-4">
                                <Link href={"mailto:admin@infinity00h.ae"} className="max-sm:text-sm text-xl underline underline-offset-1"> 
                                    admin@infinityooh.ae
                                </Link>
                            </div> 
                            <CopyButton bgColor="#F7FEFF" copyBtnColor="#96BCC1" textToCopy="admin@infinityooh.ae" />
                        </div>
                        <div className="phone flex justify-start items-center">
                            <div className="email-icon w-12 h-12 rounded-full p-4 border border-black drop-shadow-[2px_0px_0px_#B6B0DF] bg-[#F8F7FF]">
                                <Image src={"/images/brand/phone.svg"} alt="call number icon" width={32} height={32} className="object-cover" />
                            </div>
                            <div className="email-link rounded-r-full bg-[#F8F7FF] py-2 px-4">
                                <Link href={"tel:+971 52 790 2321"} className="max-sm:text-sm text-xl underline underline-offset-1"> 
                                    +971 52 790 2321
                                </Link>
                            </div> 
                            <CopyButton bgColor="#F8F7FF" copyBtnColor="#B6B0DF" textToCopy="+971 52 790 2321" />
                        </div>
                    </div>
                </div>
                <div className="rhs w-full max-w-full">
                    <CTAForm leadsource={leadsource} />
                </div>
              </div>
         </section> 
    ) 
} 
export default CTASection;