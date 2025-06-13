
const styleVariant = {
    default: {
        active: "bg-white",
        inActive: "bg-accent-100"
    },
    dark: {
        active: "bg-black",
        inActive: "bg-accent-100"
    }
}

type DotButtonsProps = {
    carouselItemsLength: number;
    activeIndex: number | undefined;
    variant?: keyof typeof styleVariant;
    onSelectDot: (slideindex: number) => void
}

const DotButtons = ({ carouselItemsLength, activeIndex, onSelectDot, variant="default" }: DotButtonsProps) => {
     return ( 
        <div className="carousel-controls flex justify-center items-center gap-4">
            {
                Array.from({ length: carouselItemsLength }, (_, i) => i).map((dot, index) => {
                    return <div key={index} onClick={() => onSelectDot(dot)} className={`w-2 h-2 rounded-[50%] ${dot === activeIndex ? styleVariant[variant].active : styleVariant[variant].inActive} `}></div>
                })
            }
        </div>
    ) 
} 
export default DotButtons;