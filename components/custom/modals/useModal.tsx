// @/components/custom/modals/useModals.tsx
import { useState } from 'react';
import { RootState } from '@/lib/redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import { setConsentModal } from '@/lib/redux/slices/ContactModalsSlices';

const useModals = () => {
  const dispatch = useDispatch();
  const { consentModal } = useSelector((state: RootState) => state.contactModals);

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

  const handleConsentModal = useCallback((open: boolean) => {
    setAllModalsClosed();
    dispatch(setConsentModal(open))
  }, [dispatch, setAllModalsClosed])

  return {
    closeCookieConsent,
    openCookieConsent,
    handleConsentModal,
    isCookieConsentOpen,
    consentModal
  };
};

export default useModals;
