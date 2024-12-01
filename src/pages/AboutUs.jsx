import React from 'react'
  import OurVision from '../component/aboutus/OurVision'
import OurMission from '../component/aboutus/OurMission';
import OurValues from '../component/aboutus/OurValues';
import OurGoals from '../component/aboutus/OurGoals';
  
function AboutUs() {
  return (
    <>
        <section className='bg-[#E5E5E5]' >
          <div className='w-[90%] max-w-[1280px] sm:w-[80%] md:w-[90%] mx-auto'>
          <div className='pt-[3rem]'>
              <h3 className='text-[1.3rem] mb-2 leading-[25px] sm:text-[1.4rem] md:text-[1.8rem] xl:text-[2rem] font-medium text-center text-txtColor'>More Than $100 Million Donated since 2015</h3>
              <p className='font-light xl:w-[45rem] lg:w-[55%] justify-center flex sm:w-[32rem] md:w-[70%] text-center mx-auto text-[.7rem] sm:text-[.8rem] md:text-[1rem] xl:text-[1.2rem]'>
              With generous support, we empower communities, creating lasting, transformative change that uplifts lives globally.
              </p>
            </div>
          
            <OurVision/>
          </div>

          <div className=' bg-white'>
          <OurMission/>
          </div>
          
          <div className=''>
          <OurValues/>
          </div>

          <div className=' bg-white '>
          <OurGoals/> 
          </div>
      </section>
    </>
    
  )
}

export default AboutUs;
