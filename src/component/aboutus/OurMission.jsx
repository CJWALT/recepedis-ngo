import React from 'react'
import AboutBanner from '../../assets/ouractivitiesslidetwo.jpeg'
import ImgBackdrop from './ImgBackdrop'

function OurMission() {
  return (
    <>
        <div className='w-[90%] py-[5rem] sm:py-[6.5rem] justify-center max-w-[1280px] sm:w-[80%] md:w-[90%] mx-auto flex flex-col md:flex-row md:mb-[2rem] gap-[2rem] sm:gap-[3rem] lg:gap-[4rem] xl:gap-[6rem]'>
          <div className=' md:flex-grow order-2 md:order-1 md:w-[40%] xl:w-[52%] lg:w-[40%] flex flex-col gap-2 md:self-center'>
              <h4 className='font-medium text-[1.3rem] text-txtColor sm:text-[1.8rem] md:text-[2rem] xl:text-[2.3rem] lg:text-[2.5rem]  '>Our Mission</h4>
              <p className='font-light text-[.8rem] sm:text-[1rem] lg:text-[1.3rem] xl:text-[1.5rem] text-justify'>
              Restore hope among these vulnerable persons, and groups that have been affected by war, political and economic crises, poverty, abuse violence, disease and other natural calamities through rescue, psychosocial support, education and advocacy so that every individual feels seen, heard and valued.
              </p>
            </div>

          <ImgBackdrop
            className='before:bg-[#E45959] order-1 md:order-2 md:!ml-auto md:!mr-0'
            img={AboutBanner}/>             
        </div> 
    </>
  )
}

export default OurMission
