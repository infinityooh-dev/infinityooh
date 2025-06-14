// @/lib/reduc/slices/ContactModalSlices.tsx
import { ModalIDTypes } from "@/lib/types/ctaTypes";
import { createSlice } from "@reduxjs/toolkit";

interface ContactModalsType {
  consentModal: ConsentModal;
  bookingModalPopup: BookingModalPopupType;
  modalLeadSource: string;
  modalFormHeading: string;
  modalId: ModalIDTypes;
}

type ConsentModal = {
  isOpen: boolean;
};

type BookingModalPopupType = {
  isOpen: boolean;
};

const initialState: ContactModalsType = {
  consentModal: {
    isOpen: false,
  },
  bookingModalPopup: {
    isOpen: false,
  },
  modalLeadSource: "Contact Popup Modal",
  modalFormHeading:
    "We don’t just create partnerships—<strong>we ignite movements.</strong> Partner with us to <strong>harness the power of sport</strong> and achieve extraordinary results.",
  modalId: "contact-form",
};

const ContactModals = createSlice({
  name: "ContactModals",
  initialState,
  reducers: {
    setConsentModal: (state, action) => {
      state.consentModal.isOpen = action.payload;
    },
    toggleBookingPopupModalOpen: (state) => {
      state.bookingModalPopup.isOpen = !state.bookingModalPopup.isOpen;
    },
    setModalFormLeadSource: (state, action) => {
      state.modalLeadSource = action.payload;
    },
    setModalFormHeading: (state, action) => {
      state.modalFormHeading = action.payload;
    },
    setModalId: (state, action) => {
      state.modalId = action.payload;
    },
  },
});

export const {
  setConsentModal,
  toggleBookingPopupModalOpen,
  setModalId,
  setModalFormHeading,
  setModalFormLeadSource,
} = ContactModals.actions;

const ContactModalsReducer = ContactModals.reducer;
export default ContactModalsReducer;
