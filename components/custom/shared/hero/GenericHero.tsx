import Image from "next/image";


type GenericHeroProps = {
    heroTitle: string;
    heroImg?: string;
    heroAlt?: string;
}

const GenericHero = ({ heroTitle, heroImg = "/images/hero-imgs/home-hero.webp", heroAlt= "Infinity OOH billboard on display in Dubai"  }: GenericHeroProps) => {
     return ( 
         <header className="relative max-w-full max-h-[620px] w-full h-[620px] flex justify-center items-end"> 
            <div className="bg-image w-full h-full absolute">
                <Image src={heroImg} alt={heroAlt} fill sizes="100vw" className="object-cover" />
            </div>
            <div className="hero-title max-w-11/12 -mb-14 border border-black bg-white rounded-[20px] px-8 py-3 z-30">
                <h1 className="text-4xl lg:text-[64px] lg:leading-24 text-black font-bold text-center">
                    {
                        heroTitle
                    }
                </h1>
            </div>
         </header> 
    ) 
} 
export default GenericHero;