import Link from "next/link";
import CTAForm from "./CTAForm";
import CopyButton from "./CopyButton";
import EmailIcon from "../../icons/email";
import PhoneIcon from "../../icons/PhoneIcon";

type CTASectionProps = {
  leadsource: string;
};

const CTASection = ({ leadsource }: CTASectionProps) => {
  return (
    <section className="cta-section max-w-11/12 bg-secondary relative mx-auto flex w-full flex-col items-center justify-center rounded-[20px] border border-black px-4 py-8 lg:items-start lg:px-16 lg:py-8 2xl:max-w-[1376px]">
      <div className="section-header">
        <h2 className="leading-24 text-[64px] font-bold text-black">
          Ready? Let&apos;s go!
        </h2>
      </div>
      <div className="form-container flex flex-col items-center justify-center gap-8 lg:flex-row lg:gap-0">
        <div className="lhs z-10 flex flex-col items-start justify-center gap-8 rounded-xl border border-black bg-white p-4 lg:-mr-8 lg:p-8">
          <div className="text-content flex flex-col items-start justify-start gap-4">
            <h3 className="text-xl font-semibold lg:text-2xl">
              Let&apos;s Build Something Big
            </h3>
            <p className="text-base lg:text-xl">
              Whether you&apos;re launching a product, growing your brand, or
              dominating the skyline — Infinity OOH is your trusted media
              partner.
            </p>
          </div>
          <div className="contact-links flex flex-col items-start justify-start gap-4">
            <div className="email flex items-center justify-start">
              <div className="email-icon flex h-12 w-12 items-center justify-center rounded-full border border-black bg-[#F7FEFF] text-[#96BCC1] drop-shadow-[2px_0px_0px_#96BCC1]">
                <EmailIcon />
              </div>
              <div className="email-link rounded-r-full bg-[#F7FEFF] px-4 py-2">
                <Link
                  href={"mailto:admin@infinity00h.ae"}
                  className="text-xl underline underline-offset-1 max-sm:text-sm"
                >
                  admin@infinityooh.ae
                </Link>
              </div>
              <CopyButton
                bgColor="#F7FEFF"
                copyBtnColor="#96BCC1"
                textToCopy="admin@infinityooh.ae"
              />
            </div>
            <div className="phone flex items-center justify-start">
              <div className="email-icon flex h-12 w-12 items-center justify-center rounded-full border border-black bg-[#F8F7FF] text-[#B6B0DF] drop-shadow-[2px_0px_0px_#B6B0DF]">
                <PhoneIcon />
              </div>
              <div className="email-link rounded-r-full bg-[#F8F7FF] px-4 py-2">
                <Link
                  href={"tel:+971 52 790 2321"}
                  className="text-xl underline underline-offset-1 max-sm:text-sm"
                >
                  +971 52 790 2321
                </Link>
              </div>
              <CopyButton
                bgColor="#F8F7FF"
                copyBtnColor="#B6B0DF"
                textToCopy="+971 52 790 2321"
              />
            </div>
          </div>
        </div>
        <div className="rhs w-full max-w-full">
          <CTAForm leadsource={leadsource} />
        </div>
      </div>
    </section>
  );
};
export default CTASection;
