"use client";
import { CTAFormInputs } from "@/lib/types/ctaTypes";
import { E164Number } from "libphonenumber-js/core";
import parsePhoneNumber, { getCountryCallingCode } from "libphonenumber-js/min";
import { forwardRef, useEffect, useMemo, useRef, useState } from "react";
import { UseFormRegister, UseFormSetValue } from "react-hook-form";
import PhoneInputWithCountrySelect, { Country } from "react-phone-number-input";
import "react-phone-number-input/style.css";

type InputProps = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus: () => void;
  onBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
  type?: string;
  autoComplete?: string;
  className?: string;
  dialCodeRef: React.RefObject<string>;
};

export const InputWithDialCode = forwardRef<HTMLInputElement, InputProps>(
  (
    { value, onChange, onFocus, onBlur, type, autoComplete, className, dialCodeRef },
    ref
  ) => {
    return (
      <div className="flex items-center w-full rounded-md overflow-hidden px-2 py-1">
        <span className="text-gray-600 pr-2">
          {dialCodeRef.current}
        </span>
        <input
          ref={ref}
          value={value}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          type={type || "tel"}
          autoComplete={autoComplete || "tel"}
          className={`flex-1 outline-none ${className}`}
        />
      </div>
    );
  }
);

InputWithDialCode.displayName = "InputWithDialCode";

function createInputComponent(dialCodeRef: React.RefObject<string>) {
  // eslint-disable-next-line react/display-name
  return forwardRef<HTMLInputElement, Omit<InputProps, "dialCodeRef">>((props, ref) => (
    <InputWithDialCode {...props} ref={ref} dialCodeRef={dialCodeRef} />
  ));
}



type CustomPhoneNumberSelectProps = {
  inputStyles: string;
  label: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setValue?: UseFormSetValue<any>;
  formValues?: CTAFormInputs;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
};

const CustomPhoneNumberSelect = ({
  inputStyles,
  formValues,
  setValue,
  register,
}: CustomPhoneNumberSelectProps) => {
  const [phoneVal, setPhoneVal] = useState<string | E164Number | undefined>();
  const dialCodeRef = useRef("+971");

  const handlePhoneInputChange = (val: E164Number | undefined) => {
    if (val && setValue) {
      const parsedPhoneNumber = parsePhoneNumber(val);
      if (parsedPhoneNumber) {
        const countryCallingCode =
          parsedPhoneNumber?.countryCallingCode.toString();
        setValue("dialCode", countryCallingCode, { shouldValidate: true });
        const formattedMobileNumber = parsedPhoneNumber?.formatNational();
        setValue("mobile", formattedMobileNumber, { shouldValidate: true });
        if (countryCallingCode) dialCodeRef.current = "+" + countryCallingCode;
      }
    } else if (setValue) {
      setValue("mobile", "");
    }
    setPhoneVal(val);
  };

  const handleCountryChange = (country?: Country) => {
    if (country) {
      const dialCode = getCountryCallingCode(country);
      dialCodeRef.current = "+" + dialCode;
    }
  };

  useEffect(() => {
    if (!formValues || Object.keys(formValues).length === 0) {
      setPhoneVal("");
    }
  }, [formValues]);

  const inputComponent = useMemo(() => createInputComponent(dialCodeRef), []);

  return (
      <PhoneInputWithCountrySelect
        className={`${inputStyles}`}
        value={phoneVal}
        defaultCountry="AE"
        {...register("mobile")}
        onChange={handlePhoneInputChange}
        onCountryChange={handleCountryChange}
        inputComponent={inputComponent}
      />
  );
}; 
export default CustomPhoneNumberSelect;