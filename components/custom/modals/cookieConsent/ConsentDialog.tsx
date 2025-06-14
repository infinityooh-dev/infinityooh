import React from "react";
import CustomButton from "../../shared/CustomButton";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@radix-ui/react-accordion";
import { FaCheck } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import * as Switch from "@radix-ui/react-switch";

const pushToDataLayer = (event: string, consent: boolean) => {
  if (typeof window !== "undefined" && window.dataLayer) {
    window.dataLayer.push({
      event,
      analyticsConsent: consent,
    });
  }
};

interface ConsentDialogProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  analyticsEnabled: boolean;
  setAnalyticsEnabled: (enabled: boolean) => void;
  handleSavePreferences: () => void;
  handleAcceptAll: () => void;
}

const ConsentDialog: React.FC<ConsentDialogProps> = ({
  open,
  setOpen,
  analyticsEnabled,
  setAnalyticsEnabled,
  handleSavePreferences,
  handleAcceptAll,
}) => {
  const onSavePreferences = () => {
    const consentStatus = analyticsEnabled ? true : false;
    pushToDataLayer("consent_update", consentStatus);
    handleSavePreferences();
  };

  const onAcceptAll = () => {
    pushToDataLayer("accept_all", true);
    handleAcceptAll();
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(isOpen) => {
        if (!isOpen) {
          handleAcceptAll();
        }
        setOpen(isOpen);
      }}
    >
      <DialogContent className="min-h-[75vh] w-[95vw] justify-start rounded-xl bg-primary sm:max-w-[650px]">
        <div className="">
          <DialogHeader className="p-6 pb-0">
            <DialogTitle className="text-left text-xl sm:text-3xl">
              {" "}
              Consent Preferences Center
            </DialogTitle>
            <p className="pt-3 text-left text-sm sm:text-base">
              {" "}
              We use cookies to provide you with a great experience and to help
              our website run effectively. You can choose to accept our optional
              analytics cookies below.{" "}
            </p>
          </DialogHeader>

          <Accordion
            type="single"
            collapsible
            className="space-y-4 overflow-auto px-6 py-10"
          >
            <AccordionItem value="necessary">
              <AccordionTrigger className="flex w-full cursor-pointer items-center justify-between rounded-lg border bg-white/40 p-4 transition-colors hover:bg-white/50">
                <div className="flex w-full flex-row items-center justify-between">
                  <span className="text-sm sm:text-base">
                    Strictly Necessary Cookies
                  </span>
                  <span className="text-xs text-gray-400">Always Enabled</span>
                </div>
              </AccordionTrigger>

              <AccordionContent className="p-4">
                <p className="text-sm">
                  {" "}
                  The below cookies ensure the smooth operation of our
                  website.{" "}
                </p>
                <h4 className="mt-4 text-sm font-semibold">
                  Necessary Services
                </h4>
                <table className="mt-2 w-full table-auto">
                  <tbody>
                    <tr>
                      <td className="text-xs font-semibold">Name</td>
                      <td className="text-xs font-semibold">Description</td>
                      <td className="text-xs font-semibold">Duration</td>
                    </tr>
                    <tr>
                      <td className="text-xs">Google reCaptcha</td>
                      <td className="text-xs">
                        {" "}
                        Google reCAPTCHA token to prevent bot attacks and
                        submissions.{" "}
                      </td>
                      <td className="text-xs">session</td>
                    </tr>
                  </tbody>
                </table>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="analytics">
              <div className="flex w-full cursor-pointer items-center justify-between rounded-lg border bg-white/40 p-4 transition-colors hover:bg-white/50">
                <AccordionTrigger className="w-full text-left">
                  <span className="text-sm sm:text-base">
                    Analytics Cookies
                  </span>
                </AccordionTrigger>
                <Switch.Root
                  checked={analyticsEnabled}
                  onCheckedChange={setAnalyticsEnabled}
                  className={`ml-4 flex h-6 w-10 cursor-pointer items-center justify-between rounded-full border-2 px-1 transition-colors ${analyticsEnabled ? "border-green-500 bg-green-500" : "border-red-500 bg-red-500"} `}
                >
                  <span
                    className={`flex h-4 w-4 transform items-center justify-center rounded-full bg-white transition-transform ${analyticsEnabled ? "translate-x-4" : "translate-x-0"} `}
                  >
                    {analyticsEnabled ? (
                      <FaCheck className="h-3 w-3 text-green-500" />
                    ) : (
                      <RxCross1 className="h-3 w-3 text-red-500" />
                    )}
                  </span>
                </Switch.Root>
              </div>

              <AccordionContent className="p-4">
                <p className="text-sm">
                  {" "}
                  We use analytics measurements to improve the experience you
                  receive on our website.
                </p>
                <h4 className="mt-4 font-semibold">Analytics Services</h4>
                <table className="mt-2 w-full">
                  <tbody>
                    <tr>
                      <td className="text-xs font-semibold">Name</td>
                      <td className="text-xs font-semibold">Description</td>
                      <td className="text-xs font-semibold">Duration</td>
                    </tr>
                    <tr>
                      <td className="text-xs">Google Analytics</td>
                      <td className="text-xs">
                        Google Analytics supplies us data about our users, such
                        as the location and time spent on our website.
                      </td>
                      <td className="text-xs">1Y</td>
                    </tr>
                    <tr>
                      <td className="text-xs">Microsoft Clarity</td>
                      <td className="text-xs">
                        Microsoft Clarity allows us to view data about how our
                        users browse our website and shows us ways to improve
                        the user experience for our customers.
                      </td>
                      <td className="text-xs">1Y</td>
                    </tr>
                  </tbody>
                </table>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="absolute bottom-0 flex w-full flex-row justify-between space-x-4 border-t border-black bg-primary px-10 pt-4 pb-6">
            <CustomButton
              onClick={onSavePreferences}
              className="text-base"
              btnName="Save preferences"
              variant="secondary"
              showIcon={false}
            />
            <CustomButton
              onClick={onAcceptAll}
              btnName="Accept all"
              variant="primary"
              className="text-base"
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ConsentDialog;
