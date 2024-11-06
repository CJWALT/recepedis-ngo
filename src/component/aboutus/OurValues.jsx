import React from 'react'
import AboutBanner from '../../assets/counsel-img.jpg'
import ImgBackdrop from './ImgBackdrop'

function OurValues() {
  return (
    <>
        <section className='w-[90%] md:w-[90%] mx-auto sm:w-[80%]'>
        <ImgBackdrop
          className='bg-[#03768F]'
          img={AboutBanner}/>
            <div className='py-[1rem] flex flex-col gap-4'>
              <h4 className='font-medium text-[1.3rem] text-txtColor sm:text-[1.8rem]'>Our Values</h4>
              <p className='font-light text-[.8rem] sm:text-[1rem] text-justify'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga voluptas voluptatum quam quis nobis incidunt, velit voluptate necessitatibus.
              </p>
            </div>
            </section> 
    </>
  )
}

export default OurValues
