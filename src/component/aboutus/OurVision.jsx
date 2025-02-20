import React from 'react'
import AboutBanner from '../../assets/our_vision.jpeg'
import ImgBackdrop from './ImgBackdrop'

function OurVision() {
  return (
    <>
        <div className='pb-[5rem] pt-[2.5rem] sm:pb-[6.5rem] justify-center flex flex-col md:flex-row md:mb-[2rem] gap-[2rem] sm:gap-[3rem] xl:gap-[4rem] md:gap-[1.4rem] lg:gap-[2.5rem]'>
        <ImgBackdrop
          className='before:bg-[#03768F]'
          img={AboutBanner}/> 
            <div className='md:w-[40%] md:flex-grow md:ml-auto xl:w-[52%] lg:w-[40%] flex flex-col gap-2 md:self-center'>
              <h4 className='font-medium text-[1.3rem] text-txtColor sm:text-[1.8rem] md:text-[2rem] xl:text-[2.3rem] lg:text-[2.5rem]  '>Our Vision</h4>
              <p className='font-light text-[.8rem] sm:text-[1rem] lg:text-[1.3rem] xl:text-[1.5rem]'>
              A world where mental and emotional health Is prioritized, where compassion reigns supreme and no one suffers in solitude by eradicating evstigma and silence.
              </p>
            </div>
            </div> 
    </>
  )
}

export default OurVision
