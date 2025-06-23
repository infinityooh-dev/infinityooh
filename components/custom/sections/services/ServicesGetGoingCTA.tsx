"use client";
import Link from "next/link";
import CustomButton from "../../shared/CustomButton";
import useModals from "../../modals/useModal";
import { useMemo } from "react";
import { usePathname } from "next/navigation";
import { Icon } from "@iconify/react/dist/iconify.js";

const ServicesGetGoingCTA = ({ leadsource }: { leadsource: string }) => {
  const { setContactModal } = useModals();

  const pathname = usePathname();

  const showLink = useMemo(() => {
    const showLinkRoutes = ["/"];
    return showLinkRoutes.includes(pathname);
  }, [pathname]);

  return (
    <div className="flex w-full items-center justify-center">
      <div className="cta mb-5 mt-16 flex max-w-[678px] flex-col items-center justify-center gap-8 rounded-xl border border-black bg-white p-8">
        <h3 className="text-center text-4xl font-semibold text-black">
          Ready to get going?
        </h3>
        <CustomButton
          btnName="Get in touch"
          onClick={() => setContactModal(true, leadsource)}
        />
        {showLink && (
          <p>
            <Link
              href="/about"
              className="flex items-center gap-1 text-xl font-semibold text-black underline"
            >
              Learn more about how we set ourselves apart from the crowd{" "}
              <span>
                {" "}
                <Icon
                  icon={"mingcute:arrow-right-up-fill"}
                  className="text-2xl"
                />{" "}
              </span>
            </Link>
          </p>
        )}
      </div>
    </div>
  );
}; 
export default ServicesGetGoingCTA;