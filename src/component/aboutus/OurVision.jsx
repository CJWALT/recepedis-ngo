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
            <div>
              <h4>Our Vision</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga voluptas voluptatum quam quis nobis incidunt, velit voluptate necessitatibus.
              </p>
            </div>
            </section> 
    </>
  )
}

export default OurVision
