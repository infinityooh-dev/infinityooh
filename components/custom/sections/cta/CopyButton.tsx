"use client";
import { cn, tryCatch } from "@/lib/utils";
import { useState } from "react";
import { IconType } from "react-icons";
import { PiCopyFill } from "react-icons/pi";


type CopyButtonProps = {
    bgColor: string;
    copyBtnColor: string;
    textToCopy: string;
    className?: string;
    Icon?: IconType;
}

const CopyButton = ({ bgColor, copyBtnColor, textToCopy, className, Icon = PiCopyFill }: CopyButtonProps) => {

    const [copyStatus, setCopyStatus] = useState<string | null>(null)

    const handleCopyText = async () => {
        if (navigator.clipboard){
            const { error: copyTextErr } = await tryCatch(navigator.clipboard.writeText(textToCopy), DOMException)

            if(copyTextErr){
                setCopyStatus("Could not copy to clipboard")
                setTimeout(() => setCopyStatus(null), 2000);
                return;
            }
            
            setCopyStatus("Copied!")
            setTimeout(() => setCopyStatus(null), 2000);
        } else {
            console.log("Clipboard not defined");
        }
    }

     return ( 
        <div onClick={handleCopyText} style={{ backgroundColor: bgColor }} className={cn("copy-btn relative inline-block cursor-pointer p-3 rounded-full", className)}>
                  {/* Tooltip message */}
            {copyStatus && (
                <div style={{ backgroundColor: bgColor, color: copyBtnColor }} className="absolute -top-2 left-1/2 -translate-x-1/2 -translate-y-full text-xs px-2 py-1 rounded shadow-md z-10">
                {copyStatus}
                </div>
            )}

            <Icon style={{ color: copyBtnColor }} />
        </div>
    ) 
} 
export default CopyButton;