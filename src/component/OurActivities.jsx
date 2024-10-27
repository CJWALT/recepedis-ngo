import React, { useCallback, useEffect } from 'react'

import SlideImage from '../assets/ouractivitiesslidetwo.jpeg'
import SlideImageTwo from '../assets/ouractivitiesslide.jpeg'

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import CarouselBtnLeft from '../component/CarouselBtnLeft'
import CarouselBtnRight from '../component/CarouselBtnRight'
import { Link } from 'react-router-dom';

import useEmblaCarousel from 'embla-carousel-react';



function OurActivities() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: 'center' });

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);
    
    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);


    useEffect(() => {
        if (!emblaApi) return;
    
        const handleSelect = () => {
            console.log('Current Slide (index):', emblaApi.selectedScrollSnap());
            console.log('Slide Count:', emblaApi.scrollSnapList().length);
        };
    
        emblaApi.on('select', handleSelect);
    
        return () => {
            emblaApi.off('select', handleSelect);
        };
    }, [emblaApi]);

    
  return (
    <>
        <section className='relative w-[90%] sm:w-[80%] md:w-[90%] py-[3rem] pb-[3.7rem] mx-auto max-w-[1280px] sm:border-2 sm:border-red-400 md:border-blue-400 lg:border-green-400 xl:border-yellow-400'>
            <h4 className='text-center text-[1.3rem] sm:text-[1.5rem] mb-[3.8rem] font-semibold text-[#121A6B]'>Our Activities</h4>
                {/* <div className='px-[2.5rem] border-2 border-red-200 relative'> */}
                <div className='embla relative px-[2.5rem] w-full overflow-hidden' ref={emblaRef}>
                    <div className='embla__container w-[95%] flex flex-row'>
                        <div className='embla__slide flex-0 flex-grow'>
                            Slide 1
                        </div>
                        <div className='embla__slide flex-0 flex-grow'>
                            Slide 2
                        </div>
                        <div className='embla__slide flex-0 flex-grow'>
                            Slide 3
                        </div>
                    </div>
                    <div className='absolute w-full left-0 flex justify-between'>
                        <button onClick={scrollPrev}>Prev</button>
                        <button onClick={scrollNext}>Next</button>
                    </div>
                </div>
                    
                {/* </div> */}

            {/* <div className='embla__slide md:overflow-hidden md:flex-[0_0_60%] flex flex-col items-center'>
                            <img src={SlideImage} alt="activities slide" className='mb-[1.2rem] md:h-[18.2rem] md:w-[21.5rem] h-[18rem] w-[19rem] rounded-[6px] object-center object-cover' />
                            <div className='bg-[#EFEEEE] w-full max-w-[20rem] border-2 border-red-400 sm:w-[23rem] sm:max-w-[24rem] pb-[2.2rem] pt-[.8rem] pl-[.75rem] pr-[1.3rem]'>
                                <h4 className='font-semibold text-center mb-[1.7rem] text-[1rem] sm:text-[1.1rem] text-[#121A6b]'>
                                    Health
                                </h4>
                                <h5 className='font-semibold mb-[1.5rem] text-[1rem] sm:text-[1.37rem] leading-[2rem]'>
                                    Mental and Emotional Health <br/> Programmes
                                </h5>
                                <p className='font-normal text-justify mb-[1.5rem] leading-[1.7rem] text-[.8rem] sm:text-[1rem]'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quidem, quia eligendi voluptate porro amet tempora culpa aliquid, incidunt facere exercitationem necessitatibus dolorem modi laborum alias dolores similique corrupti quas sapiente, earum repudiandae aperiam voluptas? Quod ipsa incidunt possimus earum iure voluptatibus fugit tenetur illum, architecto quia veniam fugiat laudantium?

                                </p>
                                <Link to='/' className='text-[.9rem] sm:text-[1.1rem] font-semibold text-[#121A6b]'>Read more <ArrowForwardIosIcon className='w-[1.1rem] h-[1.06rem]'/> </Link>
                            </div>
                        </div> */}
            
            
        </section>

    </>
  )
}

export default OurActivities
