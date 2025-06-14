"use client";

import React, { useEffect, useState } from "react";

import ConsentDialog from "./ConsentDialog";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import CustomButton from "../../shared/CustomButton";
import useModals from "../useModal";

const CookieConsentModal = () => {
  const { closeCookieConsent, handleConsentModal, consentModal } = useModals();
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);
  const [popupVisible, setPopupVisible] = useState(false);

  useEffect(() => {
    const consent = document.cookie
      .split("; ")
      .find((row) => row.startsWith("cookieConsent="));

    if (popupVisible) {
      if (document) {
        const body = document.querySelector("body") as HTMLBodyElement;
        body.classList.add("pointer-events-auto-force");
      }
    }

    if (consent) {
      const { analytics } = JSON.parse(
        decodeURIComponent(consent.split("=")[1])
      );
      setAnalyticsEnabled(analytics);
      setPopupVisible(false);
      if (document) {
        const body = document.querySelector("body") as HTMLBodyElement;
        body.classList.remove("pointer-events-auto-force");
      }

      const consentStatus = analytics ? "granted" : "denied";
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("consent", "update", {
          ad_storage: consentStatus,
          analytics_storage: consentStatus,
          ad_user_data: consentStatus,
          ad_personalization: consentStatus,
        });
      }
      if (window.dataLayer) {
        window.dataLayer.push({
          event: "consent_update",
          ad_storage: consentStatus,
          analytics_storage: consentStatus,
          ad_user_data: consentStatus,
          ad_personalization: consentStatus,
        });
      }
    } else {
      const timer = setTimeout(() => {
        setPopupVisible(true);
        localStorage.setItem("cookieConsentModalState", "open");
      }, 0);
      return () => clearTimeout(timer);
    }
  }, [popupVisible]);

  const handleSavePreferences = () => {
    document.cookie = `cookieConsent=${JSON.stringify({ analytics: analyticsEnabled })}; path=/; max-age=31536000; SameSite=Lax`;

    const consentStatus = analyticsEnabled ? "granted" : "denied";
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("consent", "update", {
        ad_storage: consentStatus,
        analytics_storage: consentStatus,
        ad_user_data: consentStatus,
        ad_personalization: consentStatus,
      });
    }
    if (window.dataLayer) {
      window.dataLayer.push({
        event: "consent_update",
        ad_storage: consentStatus,
        analytics_storage: consentStatus,
        ad_user_data: consentStatus,
        ad_personalization: consentStatus,
      });
    }

    closeCookieConsent();
    handleConsentModal(false);
    setPopupVisible(false);
    localStorage.setItem("cookieConsentModalState", "closed");
  };

  const handleAcceptAll = () => {
    document.cookie = `cookieConsent=${JSON.stringify({ analytics: true })}; path=/; max-age=31536000; SameSite=Lax`;

    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("consent", "update", {
        ad_storage: "granted",
        analytics_storage: "granted",
        ad_user_data: "granted",
        ad_personalization: "granted",
      });
    }
    if (window.dataLayer) {
      window.dataLayer.push({
        event: "consent_update",
        ad_storage: "granted",
        analytics_storage: "granted",
        ad_user_data: "granted",
        ad_personalization: "granted",
      });
    }

    setAnalyticsEnabled(true);
    closeCookieConsent();
    handleConsentModal(false);
    setPopupVisible(false);
    localStorage.setItem("cookieConsentModalState", "closed");
  };

  return (
    <>
      {popupVisible && (
        <Dialog open={true}>
          <DialogContent
            position="bottom-left"
            hideOverlay={true}
            aria-describedby="cookie-consent-modal"
            className="pointer-events-auto w-[95vw] max-w-[500px] rounded-lg border border-gray-300 bg-primary p-6 text-black shadow-xl"
          >
            <div>
              <DialogHeader className="space-y-3 text-left">
                <DialogTitle className="text-2xl font-semibold">
                  Manage your consent preferences
                </DialogTitle>
                <p className="text-sm">
                  {" "}
                  We use cookies to provide you with a great experience and to
                  help our website run effectively.
                </p>
              </DialogHeader>
              <div className="mt-4 flex items-center justify-between gap-3">
                <p
                  className="mt-2 cursor-pointer text-sm underline"
                  onClick={() => handleConsentModal(true)}
                >
                  Manage Preferences
                </p>
                <CustomButton
                  onClick={handleAcceptAll}
                  btnName="Accept All"
                  className="text-sm"
                  variant="primary"
                />
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}

      <ConsentDialog
        open={consentModal.isOpen}
        setOpen={handleConsentModal}
        analyticsEnabled={analyticsEnabled}
        setAnalyticsEnabled={setAnalyticsEnabled}
        handleSavePreferences={handleSavePreferences}
        handleAcceptAll={handleAcceptAll}
      />
    </>
  );
};

export default CookieConsentModal;
