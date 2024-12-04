import React, { useCallback } from 'react'

import SlideImage from '../../assets/ouractivitiesslidetwo.jpeg'
// import SlideImageTwo from '../assets/ouractivitiesslide.jpeg'

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import CarouselBtnLeft from '../../component/CarouselBtnLeft'
import CarouselBtnRight from '../../component/CarouselBtnRight'
import { Link } from 'react-router-dom';

import activities from '../../ActivityData.json'

import useEmblaCarousel from 'embla-carousel-react';



function OurActivities() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: 'center' });

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);
    
    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);


   

    
  return (
    <>
        <section className='relative w-[90%] sm:w-[80%] md:w-[90%] py-[3rem] pb-[3.7rem] mx-auto max-w-[1280px]'>
            <h4 className='text-center text-[1.3rem] sm:text-[1.5rem] mb-[3.8rem] font-semibold text-[#121A6B]'>Our Activities</h4>
                <div className='relative'>
                <div className='w-[95%] mx-auto'>
                    <div className='embla w-full' ref={emblaRef}>
                        <div className='embla__container spread__embla mx-auto flex flex-row'>
                            {activities.slice(0, 5).map((activity, index )=>(
                                <div key={index} className='embla__slide md:overflow-hidden md:flex-[0_0_50%] lg:flex-[0_0_33.3%] flex flex-col items-center'>
                                <img src={activity.imgOne} alt="activities slide" className='mb-[1.2rem] md:h-[12rem] md:w-[19rem] h-[9rem] w-[18rem] sm:w-[19rem] sm:h-[10rem] rounded-[6px] object-center object-cover' />
                            <div className='bg-[#EFEEEE] w-[18rem] sm:w-[19rem] pb-[2.2rem] pt-[.8rem] pl-[.75rem] pr-[1.3rem]'>
                                <h4 className='font-semibold text-center mb-[1.7rem] text-[1rem] sm:text-[1.1rem] text-[#121A6b]'>
                                    {activity.heading}
                                </h4>
                                <h5 className='font-semibold mb-[1.2rem] text-[.8rem] sm:text-[1rem] leading-[1.4rem]'>
                                    {activity.heading}
                                </h5>
                                <p className='font-normal text-justify mb-[1.5rem] leading-[1.7rem] text-[.8rem] sm:text-[1rem]'>
                                    {activity.para.slice(0, 260) + "..."}
                                </p>
                                <Link to='/ouractivities' className='text-[.9rem] sm:text-[1.1rem] font-semibold text-[#121A6b]'>Read more <ArrowForwardIosIcon className='w-[1.1rem] h-[1.06rem]'/> </Link>
                            </div>
                    </div> 
                            ))}
                        </div>
                        <div className='absolute w-full left-0 bottom-[15rem] flex justify-between'>
                            <CarouselBtnLeft onClick={scrollPrev}/>
                            <CarouselBtnRight onClick={scrollNext}/>
                            
                        </div>
                    </div>
                </div>
                </div>
                
                
        </section>

    </>
  )
}

export default OurActivities
