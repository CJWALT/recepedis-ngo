import React, { useCallback } from 'react'


import CarouselBtnRight from '../component/CarouselBtnRight'
import CarouselBtnLeft from '../component/CarouselBtnLeft'

import HeroImgOne from '../assets/hero-img-one.jpeg'
import HeroImgTwo from '../assets/hero-img-two.jpeg'
import HeroImgThree from '../assets/hero-img-three.jpeg'

import BannerImgOne from '../assets/counsel-img.jpg'
import BannerImgTwo from '../assets/vocational-img.jpg'
import BannerImgThree from '../assets/saf-lodge.jpeg'


import useEmblaCarousel from 'embla-carousel-react';
import Button from '../component/Button'
import Testimonial from '../component/homepage/Testimonial'
import OurMission from '../component/homepage/OurMission'
import AboutSection from '../component/homepage/AboutSection'
import OurActivities from '../component/homepage/OurActivities'
import TeamMember from '../component/homepage/TeamMember'

import { useNavigate } from 'react-router-dom'

function Homepage() {

  const navigate = useNavigate();

  const [emblaRef, emblaApi] = useEmblaCarousel();

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);


  const goToActivitiesPage = () =>{ 
    navigate('/ouractivities')
  }

  return (
    <>
     <div className="embla overflow-hidden w-[100%] relative h-[800px] flex justify-center" ref={emblaRef}>
      <div className="embla__container flex self-center flex-row w-[100%] mx-auto">
        <div className="embla__slide w-[100%] h-[800px] flex-shrink-0"><img src={HeroImgOne} className='set-brightness object-cover h-[800px] object-center'alt='hero-slide'/></div>
        <div className="embla__slide w-[100%] h-[800px] flex-shrink-0"><img src={HeroImgTwo} className='set-brightness object-cover h-[800px] object-center'alt='hero-slide'/></div>
        <div className="embla__slide w-[100%] h-[800px] flex-shrink-0"><img src={HeroImgThree} className='set-brightness object-cover h-[800px] object-center'alt='hero-slide'/></div>
      </div>
      <div className='absolute max-w-[1280px] w-[90%] sm:w-[80%] md:w-[90%] mx-auto left-0 right-0 justify-center flex flex-col inset-0'>
            <h2 className='leading-[2.7rem] sm:leading-[3.5rem] md:leading-[4rem] lg:leading-[5.8rem] font-[Poppins] text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.8rem] xl:text-[4rem] font-bold text-white'>Restoring Hope, <br/> Embracing <span className='text-[#6EB5E7]'>Compassion</span> </h2>
            <p className='text-white sm:w-[28rem] md:w-[34rem] lg:w-[43rem] font-[Poppins] text-[1.2rem] lg:text-[1.5rem] font-bold mt-[1.3rem]'>
            Join us in creating a world where mental and all round wellness thrive
            </p>
            <div className='mt-[13rem] w-[22rem] max-w-[23rem] overflow-hidden flex flex-row gap-4'>
              <Button 
              children='View More'
              onClick={goToActivitiesPage}
              className='bg-btnColor text-white hover:bg-white hover:text-black'/>
              <Button 
                children='Donate Now'
                className='bg-white text-black hover:bg-btnColor hover:text-white'/>
            </div>
          </div>
      <div className="flex absolute max-w-[1440px] w-[95%] bottom-[18rem] left-0 right-0 mx-auto justify-between">
        <CarouselBtnLeft onClick={scrollPrev} />
        <CarouselBtnRight onClick={scrollNext} />
      </div>

    </div>
    <AboutSection/>

    <section className='w-[90%] sm:w-[80%] md:w-[90%] max-w-[1280px] mx-auto flex-wrap justify-center md:gap-[2.1rem] flex flex-row md:pb-[3rem] md:pt-0 py-[3rem] items-center gap-[3rem]'>
      <div className='flex-none relative'><img src={BannerImgOne} alt='counselling with patricia' style={{filter:'sepia(8)'}} className='object-cover w-[18.5rem] xl:w-[21.5rem] xl:h-[15.3rem] md:h-[13.3rem] md:w-[20rem] lg:w-[19rem] lg:h-[14.3rem] filter sepia opacity-60 relative h-[13.3rem] object-center rounded-[6px]'/>
      <small className='absolute bottom-[2.1rem] text-center w-full flex justify-center font-semibold text-[1.2rem] text-blueText left-0 right-0'>Counselling</small></div>
      <div className='flex-none relative'><img src={BannerImgTwo} alt='vocational training' style={{filter:'sepia(8)'}} className='object-cover w-[18.5rem] xl:w-[21.5rem] xl:h-[15.3rem] md:h-[13.3rem] md:w-[20rem] lg:w-[19rem] lg:h-[14.3rem] filter sepia opacity-60 relative h-[13.3rem] object-center rounded-[6px]'/>
      <small className='absolute bottom-[2.1rem] text-center w-full flex justify-center font-semibold text-[1.2rem] text-blueText left-0 right-0'>Vocational Training</small></div>
      <div className='flex-none relative'><img src={BannerImgThree} alt='safe lodge activities' style={{filter:'sepia(8)'}} className='object-cover w-[18.5rem] xl:w-[21.5rem] xl:h-[15.3rem] md:h-[13.3rem] md:w-[20rem] lg:w-[19rem] lg:h-[14.3rem] filter sepia opacity-60 relative h-[13.3rem] object-center rounded-[6px]'/>
      <small className='absolute bottom-[2.1rem] text-center w-full flex justify-center font-semibold text-[1.2rem] text-blueText left-0 right-0'>Safe Lodging</small></div>
    </section>
    <OurMission/>
    <OurActivities/>
    <Testimonial/>
    <TeamMember/>
    </>
  )
}

export default Homepage
