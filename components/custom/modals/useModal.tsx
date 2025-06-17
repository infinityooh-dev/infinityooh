// @/components/custom/modals/useModals.tsx
import { useState } from "react";
import { RootState } from "@/lib/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import {
  setConsentModal,
  setContactModalLeadsource,
  setContactModalOpen,
  setModalFormHeading,
  setModalFormLeadSource,
  setModalId,
  toggleBookingPopupModalOpen,
} from "@/lib/redux/slices/ContactModalsSlices";
import { ModalIDTypes } from "@/lib/types/ctaTypes";

const useModals = () => {
  const dispatch = useDispatch();
  const {
    consentModal,
    bookingModalPopup,
    modalId,
    modalLeadSource,
    modalFormHeading,
    contactModal,
  } = useSelector((state: RootState) => state.contactModals);

  const [isCookieConsentOpen, setIsCookieConsentOpen] = useState(false);
  const setAllModalsClosed = useCallback(() => {
    setIsCookieConsentOpen(false);
  }, []);

  const closeCookieConsent = useCallback(() => {
    setIsCookieConsentOpen(false);
  }, []);

  const openCookieConsent = useCallback(() => {
    setIsCookieConsentOpen(true);
  }, []);

  const handleConsentModal = useCallback(
    (open: boolean) => {
      setAllModalsClosed();
      dispatch(setConsentModal(open));
    },
    [dispatch, setAllModalsClosed]
  );

  const setBookingPopupModalOpen = useCallback(() => {
    setAllModalsClosed();
    dispatch(toggleBookingPopupModalOpen());
  }, [dispatch, setAllModalsClosed]);

  const setModalFormDetails = useCallback(
    (data: {
      leadSource: string;
      formHeading?: string;
      modalId?: ModalIDTypes;
    }) => {
      dispatch(setModalFormLeadSource(data.leadSource));

      if (data.formHeading) {
        dispatch(setModalFormHeading(data.formHeading));
      } else {
        dispatch(
          setModalFormHeading(
            "We don’t just create partnerships—<strong>we ignite movements.</strong> Partner with us to <strong>harness the power of sport</strong> and achieve extraordinary results."
          )
        );
      }

      if (data.modalId) {
        dispatch(setModalId(data.modalId));
      } else {
        dispatch(setModalId("contact-form"));
      }
    },
    [dispatch]
  );

  const setContactModal = useCallback(
    (open: boolean, leadsource?: string) => {
      dispatch(setContactModalOpen(open));
      if (leadsource) {
        dispatch(setContactModalLeadsource(leadsource));
      }
    },
    [dispatch]
  );

  return {
    closeCookieConsent,
    openCookieConsent,
    handleConsentModal,
    isCookieConsentOpen,
    consentModal,
    setBookingPopupModalOpen,
    bookingModalPopup,
    modalId,
    setModalFormDetails,
    modalLeadSource,
    modalFormHeading,
    setContactModal,
    contactModal,
  };
};

export default useModals;
