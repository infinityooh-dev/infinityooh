
type WhyInfinityCardProps = {
    id: number;
    title: string;
    description: string;
    color: string;
}

const WhyInfinityCard = ({ id, title, description, color }: WhyInfinityCardProps) => {
     return ( 
         <div style={{ backgroundColor: color }} className="why-infinity-card flex justify-start items-center gap-3 px-8 py-4 rounded-xl drop-shadow-effect-lg border border-black max-w-11/12 lg:max-w-[437px] min-h-[198px] w-full h-full"> 
              <div className="number-style">
                <span className="text-9xl text-black/5 font-black">
                    {id}
                </span>
              </div>
                <div className="text-content flex justify-start items-start flex-col gap-4">
                    <h3 className="text-2xl font-semibold w-full">
                        {title}
                    </h3>
                    <p className="w-full">
                        {description}
                    </p>
                </div>
         </div> 
    ) 
} 
export default WhyInfinityCard;