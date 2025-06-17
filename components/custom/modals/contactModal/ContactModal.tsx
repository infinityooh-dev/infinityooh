"use client";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import useModals from "../useModal";
import CTAForm from "../../sections/cta/CTAForm";
import Image from "next/image";

const ContactModal = () => {
  const { contactModal, setContactModal, } =
    useModals();

  const contactForm = {
    FormHeading: "Explore opportunities with Infinty OOH",
    FormColor: "hsl(358, 84%, 52%)",
    FormSource: contactModal.leadsource,
  };

  return (
    <Dialog open={contactModal.isOpen} onOpenChange={setContactModal}>
      <DialogContent className="flex justify-center max-sm:justify-end items-center max-sm:max-h-[90vh] max-lg:max-h-[82svh] h-full overflow-y-auto">
        <div className="modal-test flex justify-center items-center flex-col-reverse lg:flex-row">
            <DialogTitle className="sr-only">Contact</DialogTitle>
            <div className="relative w-full lg:max-w-[500px] z-10 ">
                <div className="relative flex h-full overflow-y-auto">
                  <CTAForm leadsource={contactForm.FormSource} />
                </div>
            </div>
            <div className="relative w-full lg:-ml-8 px-4 pt-4 max-w-11/12 max-lg:-mb-14 lg:max-w-[300px] lg:w-[400px] lg:py-10 rounded-t-2xl lg:rounded-r-2xl overflow-hidden">
                <div className="rhs w-full aspect-[3/6] rounded-2xl overflow-hidden">
                    <Image src={"/images/sections/services/carousel/services-1.webp"} alt="Contact Form Image" fill className="object-cover" sizes="80vw" />
                </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;


/*<div className="flex h-full w-full flex-col-reverse lg:flex-row">

          <div className="flex flex-1 overflow-auto px-4 pb-4">
            <DialogHeader className="w-full">
              <DialogTitle className="sr-only">Contact</DialogTitle>
              <DialogDescription className="sr-only">
                Form Dialog
              </DialogDescription>
              <div className="relative">
                <div className="relative z-[60] flex h-full overflow-y-auto">
                  <CTAForm leadsource={contactForm.FormSource} />
                </div>
              </div>
            </DialogHeader>
          </div>

          <div className="relative w-full px-4 pt-4 lg:w-[400px] lg:py-10">
            <div className="relative -z-1 flex h-full w-full items-center justify-center">
              <div className="relative -mb-14 flex h-full min-h-[200px] w-full items-center justify-center lg:mb-0 lg:w-[400px] lg:px-4 lg:py-10">
                <div className="image-container h-full px-8 pb-8">
                  <div className="left-0 z-2 flex flex-col items-center lg:absolute lg:bottom-[40%]">
                    <p
                      className="z-10 text-lg lg:max-w-[300px] lg:text-xl"
                      dangerouslySetInnerHTML={{ __html: modalFormHeading }}
                    ></p>
                  </div>
                  <Image
                    src="/images/sections/modals/ContactModal.webp"
                    alt="Popup Image"
                    fill
                    className="rounded-2xl object-cover brightness-50 lg:ml-[-40px]"
                    priority
                    sizes="(max-width: 1024px) 100vw, 400px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        */