// import the hook and options type
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import { PropsWithChildren, useEffect, useState} from "react";
import React from "react";
import CarouselControls from "./CarouselControls";


// Define the props
type Props = PropsWithChildren & EmblaOptionsType;

const Carousel = ({ children, ...options }: Props) => {
  const [emblaRef,  emblaApi] = useEmblaCarousel(options);
  const [selectedIndex, setSelectedIndex] = useState(0);
   
 
  const canScrollNext = !!emblaApi?.canScrollNext();
  const canScrollPrev = !!emblaApi?.canScrollPrev();

  // useEffect(() => {
  //   function selectHandler() {
  //     // selectedScrollSnap gives us the current selected index.
  //     const index = emblaApi?.selectedScrollSnap();
  //     setSelectedIndex(index || 0);
  //   }

  //   emblaApi?.on("select", selectHandler);
  //   // cleanup
  //   return () => {
  //     emblaApi?.off("select", selectHandler);
  //   };
  // }, [emblaApi]);


  return (
    <>
      <div className="overflow-hidden relative" ref={emblaRef}>
        <div className="flex">{children}</div>
      </div>
      
      <CarouselControls
        canScrollNext={canScrollNext}
        canScrollPrev={canScrollPrev}
        onNext={() => emblaApi?.scrollNext()}
        onPrev={() => emblaApi?.scrollPrev()}
      />

    </>
    
  );
};
export default Carousel;
