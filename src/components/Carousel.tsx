import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '../utils';

interface CarouselProps {
  children: React.ReactNode[];
  className?: string;
  slideClassName?: string;
  options?: any;
}

export const Carousel: React.FC<CarouselProps> = ({ children, className, slideClassName, options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    align: 'start',
    slidesToScroll: 1,
    ...options 
  });

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className={cn("relative group", className)}>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {children.map((child, index) => (
            <div key={index} className={cn("flex-[0_0_100%] min-w-0 pl-4 first:pl-0", slideClassName)}>
              {child}
            </div>
          ))}
        </div>
      </div>
      
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/80 backdrop-blur-md shadow-lg flex items-center justify-center text-brand-olive opacity-0 group-hover:opacity-100 transition-opacity disabled:opacity-0 z-10"
        onClick={scrollPrev}
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/80 backdrop-blur-md shadow-lg flex items-center justify-center text-brand-olive opacity-0 group-hover:opacity-100 transition-opacity disabled:opacity-0 z-10"
        onClick={scrollNext}
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
};
