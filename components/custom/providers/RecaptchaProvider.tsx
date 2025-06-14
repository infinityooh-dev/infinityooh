import React from "react";

import { ReCaptchaProvider as GoogleReCaptchaProvider } from "next-recaptcha-v3";
import { siteConfig } from "@/lib/config";

interface ReCaptchaProviderWrapperProps {
  children: React.ReactNode;
}

const ReCaptchaProviderWrapper: React.FC<ReCaptchaProviderWrapperProps> = ({
  children,
}) => {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={siteConfig.google.reCaptcha.siteKey}
      useEnterprise
    >
      {children}
    </GoogleReCaptchaProvider>
  );
};

export default ReCaptchaProviderWrapper;
