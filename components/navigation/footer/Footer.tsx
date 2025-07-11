"use client";
import EmailIcon from "@/components/custom/icons/email";
import PhoneIcon from "@/components/custom/icons/PhoneIcon";
import useModals from "@/components/custom/modals/useModal";
import Image from "next/image";
import Link from "next/link";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  const { handleConsentModal } = useModals();
  return (
    <footer className="mx-auto my-8 flex w-full max-w-11/12 flex-col items-center justify-between gap-8 rounded-[20px] border border-black bg-white p-8 2xl:max-w-[1376px]">
      <div className="flex flex-col lg:flex-row gap-8 justify-evenly items-center w-full">
        <div className="logo">
          <Link href={"/"}>
            <Image
              src={"/images/brand/logos/infinity-ooh-landscape.svg"}
              alt="infinity ooh logo"
              width={122}
              height={157}
            />
          </Link>
        </div>
        <div className="contact-links flex flex-col items-center lg:items-start justify-start gap-3">
          <div className="email flex items-start justify-start gap-4">
            <span className="h-8 w-8 text-[32px] text-[#A5A5A5]">
              <EmailIcon />
            </span>
            <Link
              className="py-[3px] text-xl hover:underline"
              href="mailto:admin@infinityooh.ae"
            >
              admin@infinityooh.ae
            </Link>
          </div>
          <div className="email flex items-start justify-start gap-4">
            <span className="h-8 w-8 text-[32px] text-[#A5A5A5]">
              <PhoneIcon />
            </span>
            <Link
              className="py-[3px] text-xl hover:underline"
              href="tel:+971 52 790 2321"
            >
              +971 52 790 2321
            </Link>
          </div>
          <div className="email flex items-start justify-start gap-4">
            <span className="h-8 w-8 text-[32px] text-[#A5A5A5]">
              <AiFillInstagram />
            </span>
            <Link className="py-[3px] text-xl hover:underline" href="/">
              @infinityooh
            </Link>
          </div>
        </div>
        <div className="footer-links flex  flex-col items-end justify-center gap-8 lg:flex-row lg:justify-between">
          <div className="page-links flex flex-col items-center justify-center gap-4 lg:items-start lg:justify-start">
            <span className="text-xl font-semibold">
              <Link href={"/about"}>About Infinity OOH</Link>
            </span>
            <span className="text-xl font-semibold">
              <Link href={"/faqs"}>Frequently Asked Questions</Link>
            </span>
            <span className="text-xl font-semibold">
              <Link href={"/contact"}>Contact</Link>
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center w-full pt-6 border-t border-black gap-8">
        <div className="footer-legal flex flex-col lg:flex-row w-full gap-3 items-center justify-center lg:items-start lg:justify-start">
          <p
            className="cursor-pointer underline"
            onClick={() => handleConsentModal(true)}
          >
            Manage Cookies
          </p>
          <Link href={"/privacy-policy"} className="underline">
            Privacy Policy
          </Link>
          <Link href={"/terms-and-conditions"} className="underline">
            Terms & Conditions
          </Link>
        </div>
        <div className="copy flex w-full items-center justify-center lg:justify-end">
          © 2025 Infinity OOH
        </div>
      </div>
    </footer>
  );
};
export default Footer;
