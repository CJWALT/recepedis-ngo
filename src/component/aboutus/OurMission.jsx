import React from 'react'
import AboutBanner from '../../assets/counsel-img.jpg'
import ImgBackdrop from './ImgBackdrop'

function OurMission() {
  return (
    <section>
        
       
            <div className='w-[90%] mx-auto'>
              <h4>Our Mission</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga voluptas voluptatum quam quis nobis incidunt, velit voluptate necessitatibus.
              </p>
            </div>
            <div>
              <ImgBackdrop
              img={AboutBanner}
              className='bg-[#E45959]'/>
            </div>
    </section>
  )
}

export default OurMission
