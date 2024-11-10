import React from 'react'
import AboutBanner from '../../assets/counsel-img.jpg'
import ImgBackdrop from './ImgBackdrop'

function OurVision() {
  return (
    <>
        <section className='border-2 sm:border-blue-400 md:border-green-400 lg:border-pink-400 xl:border-purple-400'>
        <ImgBackdrop
          className='before:bg-[#03768F]'
          img={AboutBanner}/> 
            <div className='py-[1rem] flex flex-col gap-4'>
              <h4 className='font-medium text-[1.3rem] text-txtColor sm:text-[1.8rem]'>Our Vision</h4>
              <p className='font-light text-[.8rem] sm:text-[1rem] text-justify'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga voluptas voluptatum quam quis nobis incidunt, velit voluptate necessitatibus.
              </p>
            </div>
            </section> 
    </>
  )
}

export default OurVision
