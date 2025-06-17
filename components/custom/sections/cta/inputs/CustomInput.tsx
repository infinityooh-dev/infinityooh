
import { FieldError, RegisterOptions, UseFormRegister, UseFormSetValue } from "react-hook-form";
import { CTAFormInputs } from "@/lib/types/ctaTypes";
import CustomPhoneNumberSelect from "./CustomPhoneNumberSelect";

type CustomInputProps = {
    name: keyof CTAFormInputs;
    label: string;
    inputType?: "text" | "textarea" | "mobile";
    register: UseFormRegister<CTAFormInputs>
    error: FieldError | undefined
    options?: RegisterOptions<CTAFormInputs>
    setValue?: UseFormSetValue<CTAFormInputs>
    formValues?: CTAFormInputs;
};

const CustomInput = ({
    name,
    label,
    register,
    error,
    options,
    inputType = "text",
    setValue,
    formValues
}: CustomInputProps) => {
    const inputStyles =
      "bg-white min-h-11 p-2 w-full outline-none border border-black rounded-xl";

    const errorStyles = 'bg-transparent min-h-11 p-2 w-full outline-none border rounded border-error';


    const handleInputType = () => {
        const commonProps = {
            placeholder: label,
            className: `${error ? errorStyles : inputStyles}`,
            ...register(name, options)
        };

        switch (inputType) {
            case "textarea":
                return <textarea {...commonProps} rows={5} />;
            case "mobile":
                return <CustomPhoneNumberSelect register={register} inputStyles={ error ? errorStyles : inputStyles} label={label} formValues={formValues} setValue={setValue}/>
            default:
                return <input {...commonProps} type={inputType} />;
        }
    };

    return (
        <div
            className={`input-field w-full max-w-[720px] "flex justify-between items-center"`}
        >
            <label className={"text-black"}>{label}</label>
            {handleInputType()}
  
                { error && (
                    <span className="text-error text-sm">
                        {error.message}
                    </span>
                )}
    
        </div>
    );
};

export default CustomInput;
