import React from 'react'
import AboutBanner from '../../assets/our_goals.jpeg'
import ImgBackdrop from './ImgBackdrop'

function OurGoals() {
  return (
    <>
        <div className='py-[5rem] sm:py-[6.5rem] mx-auto w-[90%] justify-center sm:w-[80%] md:w-[90%] max-w-[1280px] flex flex-col md:flex-row md:mb-[2rem] gap-[2rem] sm:gap-[3rem] lg:gap-[4rem] xl:gap-[6rem]'>
        <div className='md:flex-grow order-2 md:order-1 md:w-[40%] xl:w-[52%] lg:w-[40%] flex flex-col gap-2 md:self-center'>
                <h4 className='font-medium text-[1.3rem] text-txtColor sm:text-[1.8rem] md:text-[2rem] xl:text-[2.3rem] lg:text-[2.5rem]  '>Our Goals</h4>
                <p className='font-light text-[.8rem] sm:text-[1rem] lg:text-[1.3rem] xl:text-[1.5rem]'>
                Provide a helistic transformation for the most vulnerable in society with rescue, counseling health care, psychosocial support, training. empowerment and exposure to life changing InnovatIons.
                </p>
              </div>  
              <ImgBackdrop
                className='before:bg-[#E45959] order-1 md:order-2 md:!ml-auto md:!mr-0'
                img={AboutBanner}/>            
            </div> 
    </>
  )
}

export default OurGoals
