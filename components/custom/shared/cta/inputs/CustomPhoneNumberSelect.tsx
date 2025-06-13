"use client";
import { CTAFormInputs } from "@/lib/types/ctaTypes";
import { E164Number } from "libphonenumber-js/core";
import parsePhoneNumber from "libphonenumber-js/min";
import { useEffect, useState } from "react";
import { UseFormRegister, UseFormSetValue } from "react-hook-form";
import PhoneInputWithCountrySelect from "react-phone-number-input";
import 'react-phone-number-input/style.css'


type CustomPhoneNumberSelectProps = {
    inputStyles: string;
    label: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setValue?: UseFormSetValue<any>
    formValues?: CTAFormInputs
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    register: UseFormRegister<any>
} 

const CustomPhoneNumberSelect = ({ inputStyles, label, formValues, setValue, register }: CustomPhoneNumberSelectProps) => {
    const [phoneVal, setPhoneVal] = useState<string | E164Number | undefined>()

        const handlePhoneInputChange = (val: E164Number | undefined) => {
            if(val && setValue){
                const parsedPhoneNumber = parsePhoneNumber(val);
                const countryCallingCode = parsedPhoneNumber?.countryCallingCode.toString()
                setValue("dialCode", countryCallingCode, { shouldValidate: true });
                const formattedMobileNumber = parsedPhoneNumber?.formatNational()
                setValue("mobile", formattedMobileNumber, { shouldValidate: true });
            } else if (!val && setValue){
                setValue("mobile", val)
            }
            setPhoneVal(val)
        }

    useEffect(() => {
        if (!formValues || Object.keys(formValues).length === 0){
            setPhoneVal("")
        }
    }, [formValues])
    
     return ( 
        <PhoneInputWithCountrySelect
        className={`${inputStyles} outline-none`}
        placeholder={label}
        value={phoneVal}
        defaultCountry="GB"
        {...register("mobile")}
        onChange={handlePhoneInputChange}
      /> 
     )
} 
export default CustomPhoneNumberSelect;