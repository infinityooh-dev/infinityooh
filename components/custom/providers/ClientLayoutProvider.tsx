"use client";
import { Provider } from "react-redux";
import { store } from "@/lib/redux/store";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import ReCaptchaProviderWrapper from "./RecaptchaProvider";
import { getUserIPonPageLoad } from "@/lib/utils";
import CookieConsentModal from "../modals/cookieConsent/CookieConsentModal";
import BookingCalendarModal from "../modals/bookingModal/BookingCalendarModal";
import Header from "@/components/navigation/header/Header";
import Footer from "@/components/navigation/footer/Footer";

interface QueryContextType {
  queryParams: string;
  currentURL: string;
}

const QueryContext = createContext<QueryContextType | undefined>(undefined);

export default function ClientProvider({ children }: { children: ReactNode }) {
  const [queryParams, setQueryParams] = useState("");
  const [currentURL, setCurrentURL] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      setQueryParams(url.search ? url.search : "");
      setCurrentURL(url.href);
      getUserIPonPageLoad();
    }
  }, []);

  return (
    <>
      <QueryContext.Provider value={{ queryParams, currentURL }}>
        <ReCaptchaProviderWrapper>
          <Provider store={store}>
            <BookingCalendarModal />
            <CookieConsentModal />
            <Header />
            {children}
            <Footer />
          </Provider>
        </ReCaptchaProviderWrapper>
      </QueryContext.Provider>
    </>
  );
}

export const useQueryParams = () => {
  const context = useContext(QueryContext);
  if (!context) {
    throw new Error("useQueryParams must be used within GlobalProvider");
  }
  return context;
};
