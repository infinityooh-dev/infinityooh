"use client";
import React, { useEffect } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import useModals from "../useModal";

const BookingCalendarModal = () => {
  const {
    bookingModalPopup,
    setBookingPopupModalOpen,
    modalId,
    setModalFormDetails,
  } = useModals();

  useEffect(() => {
    const modalState = sessionStorage.getItem("bookingCalendarState");
    if (modalState === "open") {
      setBookingPopupModalOpen();
      setModalFormDetails({
        leadSource: "booking form",
        modalId: "booking-form",
      });
    }
  }, [setBookingPopupModalOpen, setModalFormDetails]);

  useEffect(() => {
    sessionStorage.setItem(
      "bookingCalendarState",
      bookingModalPopup.isOpen ? "open" : "closed"
    );
  }, [bookingModalPopup.isOpen]);

  const bookingUrl = process.env.NEXT_PUBLIC_BOOKING_CALENDAR_URL || "";

  return (
    <Dialog
      open={bookingModalPopup.isOpen}
      onOpenChange={(isOpen) => {
        sessionStorage.setItem(
          "bookingCalendarState",
          isOpen ? "open" : "closed"
        );
        setBookingPopupModalOpen();
      }}
    >
      <DialogContent
        className="booking-form h-full min-h-[calc(100vh-27px)] w-full max-w-[95%] overflow-y-scroll rounded-t-sm p-0 lg:max-w-[90%]"
        isBookingForm
        data-lenis-prevent
      >
        <DialogTitle className="sr-only">Booking Calendar</DialogTitle>
        <DialogDescription className="min-h-full" id={modalId}>
          <iframe
            src={bookingUrl}
            width="100%"
            className="-mt-6 h-full lg:-mt-0"
          ></iframe>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
};

export default BookingCalendarModal;
