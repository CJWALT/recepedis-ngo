import React, { useCallback } from 'react'

import UserOne from '../../assets/testOne.jpg'
import UserTwo from '../../assets/testTwo.jpg'
import UserThree from '../../assets/testThree.jpg'
import CarouselBtnLeft from '../CarouselBtnLeft'
import CarouselBtnRight from '../CarouselBtnRight'
import useEmblaCarousel from 'embla-carousel-react'

function Testimonial() {

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
    
        <div className='relative embla w-full ' ref={emblaRef}>
                <div className="embla__container w-full flex flex-row gap-8">
                        <div className='embla__slide w-full gap-[1.5rem] flex flex-col items-center'>
                            <p className='text-[.8rem] font-[inter] w-[16rem] sm:w-[17rem] font-normal leading-[1.5rem]'>I’m Mbah Siberline, 20. After years of isolation and unkept promises, Recepedis rescued me, provided education, and became my family. Now, my sister also thrives here. I’m forever grateful for their love and support.</p>
                            <div className='flex flex-col gap-2 items-center'>
                                <img src={UserOne} alt="testimonial" className='w-[3rem] h-auto object-cover object-center rounded-full' />
                                <small className='text-[.7rem] font-[inter] opacity-75 font-normal'>Fola, 25</small>
                            </div>
                        </div>
                        <div className='embla__slide w-full gap-[1.5rem] flex flex-col items-center'>

                            <p className='text-[.8rem] w-[16rem] font-[inter] font-normal sm:w-[17rem] leading-[1.5rem]'>After surviving gender-based violence and rejection, Recepedis gave me hope, care, and strength to heal. With their support, I’ve rebuilt my life and regained my future.</p>
                            <div className='flex flex-col gap-2 items-center'>
                                <img src={UserTwo} alt="testimonial 2" className='w-[3rem] h-auto object-cover object-center rounded-full' />
                                <small className='text-[.7rem] font-[inter] opacity-75 font-normal'>Kudi Baoline '22</small>
                            </div>
                        </div>
                        <div className='embla__slide w-full gap-[1.5rem] flex flex-col items-center'>
                            <p className='text-[.8rem] w-[16rem] font-[inter] font-normal sm:w-[17rem] leading-[1.5rem]'>After losing my parents and facing hardship, Recepedis gave me shelter, care, and hope. With their support, I’ve regained my strength and rebuilt my life with my children.</p>
                            <div className='flex flex-col gap-2 items-center'>
                                <img src={UserThree} alt="testimonial 2" className='w-[3rem] h-auto object-cover object-center rounded-full' />
                                <small className='text-[.7rem] font-[inter] opacity-75 font-normal'>Amougou Joy, 24</small>
                            </div>
                        </div>
                        
                </div>
                
            <div className='absolute top-[3rem] w-full flex justify-between '>
                <CarouselBtnLeft onClick={scrollPrev}/>
                <CarouselBtnRight onClick={scrollNext}/>
            </div>
        </div>
      
    </div>
  )
}

export default Testimonial
