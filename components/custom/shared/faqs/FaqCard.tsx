import { FaqCardProps } from "@/lib/types/common"
import { FiChevronDown } from "react-icons/fi"



const FaqCard = ({ question, answer }: FaqCardProps) => {
  return (
    <details className="group bg-white drop-shadow-effect-lg border border-black rounded-lg px-8 py-4 flex flex-col justify-start items-start w-full max-w-[784px]">
        <summary className="list-none cursor-pointer w-full flex justify-between items-center">
            <h3 className="text-2xl font-bold text-black">{question}</h3>
        <FiChevronDown className="ml-4 text-gray-500 transition-transform group-open:rotate-180" />

        </summary>
        <p className="mt-4">{answer}</p>
    </details>
  )
}

export default FaqCard