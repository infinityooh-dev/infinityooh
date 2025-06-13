"use client";
import { useForm } from "react-hook-form";
import CustomInput from "./inputs/CustomInput";
import { CTAFormInputs } from "@/lib/types/ctaTypes";
import CustomButton from "../CustomButton";
import { TbTargetArrow } from "react-icons/tb";

type CTAFormProps = {
    leadsource: string;
}

const CTAForm = ({ leadsource }: CTAFormProps) => {

    const { register, formState: { errors }, watch, handleSubmit } = useForm<CTAFormInputs>()


    const formValues = watch()

    const handleSubmitForm = (data: CTAFormInputs) => {
        const payload = { ...data, leadsource }
        console.log(payload);   
    }
     return ( 
         <form className="py-14 px-4 lg:pl-20 lg:pr-16 rounded-xl bg-tertiary-500 w-full drop-shadow-effect-lg border border-black max-sm:max-w-11/12 mx-auto max-w-full" onSubmit={handleSubmit(handleSubmitForm)}> 
            <div className="form-inputs-container flex flex-col gap-8 justify-start items-start">
                <CustomInput 
                    error={errors.fullName} 
                    label="Name" 
                    name="fullName" 
                    register={register} 
                    options={{ 
                        required: "Full name is required",
                    }}
                />
                <CustomInput error={errors.email} label="Email" name="email" register={register} options={{ 
                    required: "Email is required"
                 }} />
                 <CustomInput inputType="mobile" error={errors.mobile} label="Phone" name="mobile" register={register} formValues={formValues} options={{ required: "Phone Number is Required" }} />
                 <CustomInput inputType="textarea" error={errors.message} label="Message" name="message" register={register} />
                 <CustomButton btnName="Send Message" Icon={TbTargetArrow} iconColor="white" className="bg-[#3E7BA9] text-white" />
            </div>
         </form> 
    ) 
} 
export default CTAForm;