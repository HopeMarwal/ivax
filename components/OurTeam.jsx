import Image from 'next/image'
import { team } from '@utils/data'
// import the hook and options type
import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState} from "react";
import React from "react";
import CarouselControls from "./CarouselControls";

export default function OurTeam() {

  const [emblaReff,  emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const canScrollNext = !!emblaApi?.canScrollNext();
  const canScrollPrev = !!emblaApi?.canScrollPrev();

  useEffect(() => {
    function selectHandler() {
      // selectedScrollSnap gives us the current selected index.
      const index = emblaApi?.selectedScrollSnap();
      setSelectedIndex(index || 0);
    }

    emblaApi?.on("select", selectHandler);
    // cleanup
    return () => {
      emblaApi?.off("select", selectHandler);
    };
  }, [emblaApi]);


  return (
    <div className='w-full py-20'>
      <h3 className='w-full text-center text-5xl mb-14'>
        Team <span>that Builds Ideas Driven by the Future</span>
      </h3>

      <div className='w-full relative mt-10'>
      
      <div className=" relative" ref={emblaReff}>
        <div className="flex">
          
        {
          team.map((item, index) => (
            <div className={`${ selectedIndex === index && 'selected'} relative flex-[0_0_50%] flex justify-center items-center opacity-75`} key={index}>
              
              <div className='h-110 m-auto relative'>
                <Image
                  className='w-full h-full object-cover'
                  src={item.img}
                  alt={item.name}
                />
                <span className='text-white absolute bottom-16 left-12 text-3xl font-bold'>
                  {item.name}
                </span>
                <span className='text-primary-yellow absolute bottom-9 left-12 text-xl'>
                  {item.role}
                </span>
              </div>
            </div>
          ))
        }
          
          
        </div>
      </div>
      
      <CarouselControls
        canScrollNext={canScrollNext}
        canScrollPrev={canScrollPrev}
        onNext={() => emblaApi?.scrollNext()}
        onPrev={() => emblaApi?.scrollPrev()}
      />
      </div>
    </div>
  )
}

