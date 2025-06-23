"use client";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import useModals from "../useModal";
// import CTAForm from "../../sections/cta/CTAForm";
// import Image from "next/image";
import CTASection from "../../sections/cta/CTASection";

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
      <DialogContent className="modal-container flex h-full overflow-y-auto">
        <div>
          <DialogTitle className="sr-only"> Contact Modal</DialogTitle>
          <CTASection leadsource={contactForm.FormSource} />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;