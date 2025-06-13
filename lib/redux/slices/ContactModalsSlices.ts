// @/lib/reduc/slices/ContactModalSlices.tsx
import { createSlice } from '@reduxjs/toolkit';

interface ContactModalsType {
  consentModal: ConsentModal;
}

type ConsentModal = {
  isOpen: boolean;
}

const initialState: ContactModalsType = {
  consentModal: {
    isOpen: false
  },
};

const ContactModals = createSlice({
  name: 'ContactModals',
  initialState,
  reducers: {
    setConsentModal: (state, action) => {
      state.consentModal.isOpen = action.payload
    }
  },
});

export const {
  setConsentModal
} = ContactModals.actions;

const ContactModalsReducer = ContactModals.reducer;
export default ContactModalsReducer;
