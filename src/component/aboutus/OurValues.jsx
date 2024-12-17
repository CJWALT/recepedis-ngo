import React from 'react'
import AboutBanner from '../../assets/our_values.jpeg'
import ImgBackdrop from './ImgBackdrop'

function OurValues() {
  return (
    <>
        <div className='w-[90%] py-[5rem] sm:py-[6.5rem] justify-center max-w-[1280px] sm:w-[80%] md:w-[90%] mx-auto flex flex-col md:flex-row md:mb-[2rem] gap-[2rem] sm:gap-[3rem] md:gap-[1.4rem] lg:gap-[2.5rem] xl:gap-[4rem]'>
        <ImgBackdrop
          className='before:bg-[#03768F]'
          img={AboutBanner}/> 
            <div className='md:flex-grow order-2 md:order-1 md:w-[40%] xl:w-[52%] lg:w-[40%] flex flex-col gap-2 md:self-center'>
              <h4 className='font-medium text-[1.3rem] text-txtColor sm:text-[1.8rem] md:text-[2rem] xl:text-[2.3rem] lg:text-[2.5rem]  '>Our Values</h4>
              <p className='font-light text-[.8rem] sm:text-[1rem] lg:text-[1.3rem] xl:text-[1.5rem]'>
              A world where mental and emotional health Is prioritized, where compassion reigns supreme and no one suffers in solitude by eradicating evstigma and silence.
              </p>
            </div>
            </div> 
    </>
  )
}

export default OurValues
