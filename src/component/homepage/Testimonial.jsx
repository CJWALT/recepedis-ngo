import React, { useCallback } from 'react'

import UserOne from '../../assets/testOne.jpg'

import CarouselBtnLeft from '../CarouselBtnLeft'
import CarouselBtnRight from '../CarouselBtnRight'
import useEmblaCarousel from 'embla-carousel-react'

import testimonialOne from '../../assets/testOne.jpg'
import testimonialTwo from '../../assets/testTwo.jpg'
import testimonialThree from '../../assets/testThree.jpg'

function Testimonial() {


    const testimonials = [
        {
            'para': 'After years of isolation and unkept promises, Recepedis rescued me, provided education, and became my family. Now, my sister also thrives here. I’m forever grateful for their love and support.',
            'img':testimonialOne, 
            'name':'Mbar Siberline', 
            'age':'20'
    },
        {
            'para': 'After surviving gender-based violence and rejection, Recepedis gave me hope, care, and strength to heal. With their support, I’ve rebuilt my life and regained my future.',
            'img':testimonialTwo, 
            'name':'Kudi Baoline', 
            'age':'22'
    },
        {
            'para': 'After losing my parents and facing hardship, Recepedis gave me shelter, care, and hope. With their support, I’ve regained my strength and rebuilt my life with my children.',
            'img':testimonialThree, 
            'name':'Amougou Joy', 
            'age':'24'
    },
]


    const [emblaRef, emblaApi] = useEmblaCarousel()

    const scrollPrev = useCallback(() => { 
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => { 
        if(emblaApi) emblaApi.scrollNext();
    }, [emblaApi])






  return (
    <div className='w-[90%] sm:w-[80%] md:w-[90%] mx-auto max-w-[1280px] py-[2rem]'>
      <h4 className='text-[1.2rem] text-center sm:text-[1.5rem] font-semibold text-blueText mb-[2.6rem]'>Testimonial</h4>
    
        <div className='relative embla w-full' ref={emblaRef}>
                <div className="embla__container w-full flex flex-row gap-8">
                        {testimonials.map((testimonial)=>(
                            <div className='embla__slide w-full gap-[1.5rem] flex flex-col items-center'>
                            <p className='text-[.8rem] font-[inter] w-[16rem] sm:w-[24rem] md:w-[35rem] lg:w-[42rem] md:text-[1rem] font-normal leading-[1.5rem]'>{testimonial.para}</p>
                            <div className='flex flex-col gap-2 items-center'>
                                <img src={UserOne} alt="testimonial" className='w-[4rem] h-[4.5rem] md:w-[5rem] md:h-[5.5rem] object-cover object-center rounded-[100%]' />
                                <small className='text-[.7rem] font-[inter] opacity-75 font-normal'>{testimonial.name}, {testimonial.age} </small>
                            </div>
                        </div>
                        ))}
                </div>
                
            <div className='absolute top-[4.5rem] w-full flex justify-between '>
                <CarouselBtnLeft onClick={scrollPrev}/>
                <CarouselBtnRight onClick={scrollNext}/>
            </div>
        </div>
      
    </div>
  )
}

export default Testimonial
