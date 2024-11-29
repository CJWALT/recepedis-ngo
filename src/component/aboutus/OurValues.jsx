import React from 'react'
import AboutBanner from '../../assets/counsel-img.jpg'
import ImgBackdrop from './ImgBackdrop'

function OurValues() {
  return (
    <>
        <div className='w-[90%] h-[32rem] sm:h-[40rem] md:h-[32rem] justify-center border-2 sm:border-green-400 md:border-yellow-400 lg:border-blue-400 xl:border-red-400 max-w-[1280px] sm:w-[80%] md:w-[90%] mx-auto flex flex-col md:flex-row md:mb-[2rem] gap-[2rem] md:gap-[3rem] lg:gap-[4rem] xl:gap-[6rem]'>
        <ImgBackdrop
          className='before:bg-[#03768F]'
          img={AboutBanner}/> 
            <div className='md:flex-grow order-2 md:order-1 md:w-[40%] xl:w-[52%] lg:w-[40%] flex flex-col gap-2 md:self-center'>
              <h4 className='font-medium text-[1.3rem] text-txtColor sm:text-[1.8rem] md:text-[2rem] xl:text-[2.3rem] lg:text-[2.5rem]  '>Our Values</h4>
              <p className='font-light text-[.8rem] sm:text-[1rem] lg:text-[1.3rem] xl:text-[1.5rem] text-justify'>
              A world where mental and emotional health Is prioritized, where compassion reigns supreme and no one suffers in solitude by eradicating evstigma and silence.
              </p>
            </div>
            </div> 
    </>
  )
}

export default OurValues
