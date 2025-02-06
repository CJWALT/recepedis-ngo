import React, { useEffect } from 'react'

import { Helmet } from 'react-helmet'



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

  const ogData = {
    title: 'Recepedis Homepage',
    description: 'Restoring Hope Embracing Compassion',
    url: 'https://www.recepedis.org',
    siteName: 'Restoration for persons in distress ',
};

  const navigate = useNavigate();

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop:true });

  useEffect(() => {  
    if(!emblaApi) return; 

    let autoSlideInterval;

    const startAutoSlide=()=>{ 
      autoSlideInterval = setInterval(()=>{
        emblaApi.scrollNext(); 

      }, 3000);
    }

    startAutoSlide();

 return ()=>{ 
  clearInterval(autoSlideInterval)
 }

  }, [emblaApi])
  


  const goToActivitiesPage = () =>{ 
    navigate('/ouractivities')
  }

  return (
    <div className='bg-[#F3F3F3]'>
      <Helmet>
              <meta property="og:title" content={ogData.title} />
              <meta property="og:description" content={ogData.description} />
              <meta property="og:url" content={ogData.url} />
              <meta property="og:site_name" content={ogData.siteName} />

      </Helmet>

     <div className="embla overflow-hidden w-[100%] relative h-[800px] flex justify-center" ref={emblaRef}>
      <div className="embla__container flex self-center flex-row w-[100%] mx-auto">
        <div className="embla__slide w-[100%] h-[800px] flex-shrink-0"><img src={HeroImgOne} className='set-brightness object-cover h-[800px] object-center'alt='hero-slide'/></div>
        <div className="embla__slide w-[100%] h-[800px] flex-shrink-0"><img src={HeroImgTwo} className='set-brightness object-cover h-[800px] object-center'alt='hero-slide'/></div>
        <div className="embla__slide w-[100%] h-[800px] flex-shrink-0"><img src={HeroImgThree} className='set-brightness object-cover h-[800px] object-center'alt='hero-slide'/></div>
      </div>
      <div className='absolute overflow-hidden max-w-[1280px] w-[90%] sm:w-[80%] md:w-[90%] mx-auto left-0 right-0 justify-center flex flex-col inset-0'>
            <h2 className='leading-[2.7rem] sm:leading-[3.5rem] md:leading-[4rem] lg:leading-[5.8rem] font-[Poppins] text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.8rem] xl:text-[4rem] font-bold text-white'>Restoring Hope, <br/> Embracing Compassion </h2>
            <p className='text-white sm:w-[28rem] md:w-[34rem] lg:w-[43rem] font-[Poppins] text-[1.2rem] lg:text-[1.5rem] font-bold mt-[1.3rem]'>
            Join us in creating a world where mental and all round wellness thrive.
            </p>
            <div className='mt-[8rem] w-[22rem] max-w-[23rem] overflow-hidden flex flex-row gap-4'>
              <Button 
              children='View More'
              onClick={goToActivitiesPage}
              className='bg-[#121A6B] text-white hover:bg-white hover:text-black'/>
              <Button 
                children='Donate'
                className='bg-[#121A6B] hover:bg-btnColor text-white'/>
            </div>
          </div>
      </div>
    <AboutSection/>

    <section className='overflow-hidden w-[90%] sm:w-[80%] md:w-[90%] max-w-[1280px] mx-auto flex-wrap md:flex-nowrap justify-center md:gap-[1rem] md:p-[20px] lg:p-0 xl:gap-[2.8rem] flex flex-row md:pb-[3rem] lg:pb-[3rem] py-[3rem] items-center gap-[3rem]'>
      <div className='flex-none relative w-full md:w-[33.3%] lg:w-[30%] h-[13rem] md:h-[8rem] lg:h-[12rem] max-w-[415px] lg:max-w-[330px] md:max-w-[270px]'>
        <img src={BannerImgOne} alt='counseling with patricia' className='object-cover w-full h-full opacity-60 relative object-center rounded-[6px]'/>
        <small className='absolute bottom-[2.1rem] md:bottom-[.8rem] lg:bottom-[2.1rem] text-center w-full flex justify-center font-semibold text-[1.2rem] text-blueText left-0 right-0'>Counseling</small>
      </div>
      <div className='flex-none relative   w-full md:w-[33.3%] lg:w-[30%] h-[13rem] md:h-[8rem] max-w-[415px] lg:h-[12rem] lg:max-w-[330px] md:max-w-[270px]'>
        <img src={BannerImgTwo} alt='counseling with patricia' className='object-cover w-full h-full opacity-60 relative object-center rounded-[6px]'/>
        <small className='absolute bottom-[2.1rem] md:bottom-[.8rem] lg:bottom-[2.1rem] text-center w-full flex justify-center font-semibold text-[1.2rem] text-blueText left-0 right-0'>Vocational Training</small>
      </div>
      <div className='flex-none relative   w-full md:w-[33.3%] lg:w-[30%] h-[13rem] md:h-[8rem] max-w-[415px] md:max-w-[270px] lg:h-[12rem] lg:max-w-[330px]'>
        <img src={BannerImgThree} alt='counseling with patricia' className='object-cover w-full h-full opacity-60 relative object-center rounded-[6px]'/>
        <small className='absolute bottom-[2.1rem] md:bottom-[.8rem] lg:bottom-[2.1rem] text-center w-full flex justify-center font-semibold text-[1.2rem] text-blueText left-0 right-0'>Safe Lodging</small>
      </div>
      
      
      {/* <div className='flex-none relative'>
        <img src={BannerImgTwo} alt='vocational training'  className='object-cover w-[22rem] xl:w-[21.5rem] xl:h-[15.3rem] md:h-[13.3rem] md:w-[20rem] lg:w-[24rem] lg:h-[14.3rem] opacity-60 relative h-[13.3rem] object-center rounded-[6px]'/>
        <small className='absolute bottom-[2.1rem] text-center w-full flex justify-center font-semibold text-[1.2rem] text-blueText left-0 right-0'>Vocational Training</small>
        </div>
      <div className='flex-none relative'>
        <img src={BannerImgThree} alt='safe lodge activities'  className='object-cover w-[22rem] xl:w-[21.5rem] xl:h-[15.3rem] md:h-[13.3rem] md:w-[20rem] lg:w-[24rem] lg:h-[14.3rem] opacity-60 relative h-[13.3rem] object-center rounded-[6px]'/>
        <small className='absolute bottom-[2.1rem] text-center w-full flex justify-center font-semibold text-[1.2rem] text-blueText left-0 right-0'>Safe Lodging</small>
      </div> */}
    </section>
    <OurMission/>
    <OurActivities/>
    <Testimonial/>
    <TeamMember/>
    </div>
  )
}

export default Homepage
