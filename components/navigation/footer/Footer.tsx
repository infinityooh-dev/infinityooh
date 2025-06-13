import EmailIcon from "@/components/custom/icons/email";
import PhoneIcon from "@/components/custom/icons/PhoneIcon";
import Image from "next/image";
import Link from "next/link";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
     return ( 
         <footer className="rounded-[20px] my-8 border border-black p-8 bg-white flex flex-col gap-8 lg:flex-row justify-between items-center max-w-11/12 2xl:max-w-[1376px] w-full mx-auto"> 
            <div className="logo">
                <Image src={"/images/brand/logos/infinity-ooh-landscape.svg"} alt="infinity ooh logo" width={122} height={157} />    
            </div> 
            <div className="contact-links flexx flex-col justify-start items-start gap-3">
                <div className="email flex justify-start items-start gap-4">
                    <span className="text-[#A5A5A5] text-[32px] w-8 h-8">
                        <EmailIcon />
                    </span>
                    <Link className="text-xl py-[3px]" href="mailto:admin@infinityooh.ae">
                        admin@infinityooh.ae
                    </Link> 
                </div>
                <div className="email flex justify-start items-start gap-4">
                    <span className="text-[#A5A5A5] text-[32px] w-8 h-8">
                        <PhoneIcon />
                    </span>
                    <Link className="text-xl py-[3px]" href="tel:+971 52 790 2321">
                        +971 52 790 2321
                    </Link>
                </div>
                <div className="email flex justify-start items-start gap-4">
                    <span className="text-[#A5A5A5] text-[32px] w-8 h-8">
                        <AiFillInstagram />
                    </span>
                    <Link className="text-xl py-[3px]" href="/">
                        @infinityooh
                    </Link>
                </div>
            </div>
            <div className="footer-links flex flex-col lg:flex-row justify-center lg:justify-between items-end w-full gap-8">
                <div className="page-links flex flex-col gap-4 justify-center items-center lg:justify-start lg:items-start w-full">
                    <span className="font-semibold text-xl">
                        <Link href={"/about"}>
                            About Infinity OOH
                        </Link>
                    </span>
                    <span className="font-semibold text-xl">
                        <Link href={"/faqs"}>
                            Frequently Asked Questions
                        </Link>
                    </span>
                    <span className="font-semibold text-xl">
                        <Link href={"/contact"}>
                            Contact
                        </Link>
                    </span>
                </div>

                <div className="footer-legal flex flex-col justify-center items-center lg:justify-start lg:items-start w-full">
                    <p className="underline">
                        Manage Cookies
                    </p>
                    <Link href={"/privacy-policy"} className="underline">
                        Privacy Policy
                    </Link>
                    <Link href={"/privacy-policy"} className="underline">
                        Terms & Conditions
                    </Link>
                </div>

                <div className="copy w-full flex justify-center items-center">
                    © 2025 Infinity OOH
                </div>
            </div>
         </footer> 
    ) 
} 
export default Footer;