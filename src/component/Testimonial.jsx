import React, { useCallback } from 'react'

import UserOne from '../assets/test-one.jpeg'
import CarouselBtnLeft from './CarouselBtnLeft'
import CarouselBtnRight from './CarouselBtnRight'
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
    <div className='w-[90%] mx-auto max-w-[1280px] py-[2rem]'>
      <h4 className='text-[1.2rem] text-center sm:text-[1.5rem] font-semibold text-blueText mb-[2.6rem]'>Testimonial</h4>
    
        <div className='relative embla w-full ' ref={emblaRef}>
                <div className="embla__container w-full flex flex-row gap-8">
                        <div className='embla__slide w-full gap-[1.5rem] flex flex-col items-center'>
                            <p className='text-[.8rem] font-[inter] w-[16rem] sm:w-[17rem] font-normal leading-[1.5rem]'>The Redemption Center gave me the support I needed when I felt completely lost. Their kindness and resources helped me regain my confidence and find hope again. I’m forever grateful.</p>
                            <div className='flex flex-col gap-2 items-center'>
                                <img src={UserOne} alt="testimonial" className='w-[3rem] h-auto object-cover object-center rounded-full' />
                                <small className='text-[.7rem] font-[inter] opacity-75 font-normal'>Fola, 25</small>
                            </div>
                        </div>
                        <div className='embla__slide w-full gap-[1.5rem] flex flex-col items-center'>
                            <p className='text-[.8rem] w-[16rem] font-[inter] font-normal sm:w-[17rem] leading-[1.5rem]'>When I had nowhere else to turn, this place became my lifeline. The staff treated me with respect and provided the help I needed to get back on my feet. They truly changed my life.</p>
                            <div className='flex flex-col gap-2 items-center'>
                                <img src={UserOne} alt="testimonial 2" className='w-[3rem] h-auto object-cover object-center rounded-full' />
                                <small className='text-[.7rem] font-[inter] opacity-75 font-normal'>Samuel, 45</small>
                            </div>
                        </div>
                        <div className='embla__slide w-full gap-[1.5rem] flex flex-col items-center'>
                            <p className='text-[.8rem] w-[16rem] font-[inter] font-normal sm:w-[17rem] leading-[1.5rem]'>When I had nowhere else to turn, this place became my lifeline. The staff treated me with respect and provided the help I needed to get back on my feet. They truly changed my life.</p>
                            <div className='flex flex-col gap-2 items-center'>
                                <img src={UserOne} alt="testimonial 2" className='w-[3rem] h-auto object-cover object-center rounded-full' />
                                <small className='text-[.7rem] font-[inter] opacity-75 font-normal'>Samuel, 45</small>
                            </div>
                        </div>
                        <div className='embla__slide w-full gap-[1.5rem] flex flex-col items-center'>
                            <p className='text-[.8rem] w-[16rem] font-[inter] font-normal sm:w-[17rem] leading-[1.5rem]'>When I had nowhere else to turn, this place became my lifeline. The staff treated me with respect and provided the help I needed to get back on my feet. They truly changed my life.</p>
                            <div className='flex flex-col gap-2 items-center'>
                                <img src={UserOne} alt="testimonial 2" className='w-[3rem] h-auto object-cover object-center rounded-full' />
                                <small className='text-[.7rem] font-[inter] opacity-75 font-normal'>Samuel, 45</small>
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
