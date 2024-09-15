import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from '@/components/ui/carousel';
import { ErrorCard } from '../ErrorCard';
import { ErrorType } from '@/types';

interface CarouselErrorpProps {
    errors: ErrorType[];
}

export const CarouselError = ({ errors }: CarouselErrorpProps) => {
    return (
        <Carousel className='-mx-5'>
            <CarouselContent>
                {errors.map((error, index) => (
                    <CarouselItem key={index} className='basis-[70%] pl-8'>
                        <ErrorCard error={error} />
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    );
};
