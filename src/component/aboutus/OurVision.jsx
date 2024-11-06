import React from 'react'
import AboutBanner from '../../assets/counsel-img.jpg'
import ImgBackdrop from './ImgBackdrop'

function OurVision() {
  return (
    <>
        <section>
        <ImgBackdrop
          className='bg-[#03768F]'
          img={AboutBanner}/>
            <div className='py-[1rem]'>
              <h4 className='font-medium text-[1.3rem] text-txtColor sm:text-[1.5rem]'>Our Vision</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga voluptas voluptatum quam quis nobis incidunt, velit voluptate necessitatibus.
              </p>
            </div>
            </section> 
    </>
  )
}

export default OurVision
