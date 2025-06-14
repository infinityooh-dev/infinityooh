import { cn } from "@/lib/utils";
import Link from "next/link";
import { IconType } from "react-icons";
import { TbTargetArrow } from "react-icons/tb";

type CustomButtonProps = {
  btnName: string;
  onClick?: () => void;
  Icon?: IconType;
  iconColor?: string;
  className?: string;
  variant?: "primary" | "secondary";
  isLink?: boolean;
  href?: string;
  showIcon?: boolean;
};

const CustomButton = ({
  btnName,
  onClick,
  className,
  iconColor = "#407B38",
  Icon = TbTargetArrow,
  variant = "primary",
  isLink = false,
  href = "/",
  showIcon = true,
}: CustomButtonProps) => {
  const styleVariant = {
    primary:
      "border border-black drop-shadow-black bg-secondary-200 rounded-xl drop-shadow-effect cursor-pointer",
    secondary: "secondary-btn cursor-pointer",
  };
  return isLink ? (
    <Link
      href={href}
      className={cn(
        `flex items-center justify-center gap-2.5 px-2.5 py-3 text-xl font-semibold ${styleVariant[variant]}`,
        className
      )}
    >
      <span>{btnName}</span>
      <Icon color={iconColor} className="text-3xl" />
    </Link>
  ) : (
    <button
      onClick={onClick}
      className={cn(
        `flex items-center justify-center gap-2.5 px-2.5 py-3 text-xl font-semibold ${styleVariant[variant]}`,
        className
      )}
    >
      <span>{btnName}</span>
      {showIcon && <Icon color={iconColor} className="text-3xl" />}
    </button>
  );
};
export default CustomButton;
