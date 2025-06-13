import { ComponentProps, Dispatch, SetStateAction } from 'react';
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper as SwiperComponent } from 'swiper/react';

type SwiperComponentDefaultProps = ComponentProps<typeof SwiperComponent>

interface CarouselContainerProps extends SwiperComponentDefaultProps {
    setSwiperController: Dispatch<SetStateAction<Swiper | undefined>>
}

const CarouselContainer = ( { setSwiperController, ...restProps }: CarouselContainerProps) => {
     return ( 
        <SwiperComponent {...restProps} onSwiper={setSwiperController}>
            { restProps.children }
        </SwiperComponent>
    ) 
} 
export default CarouselContainer;