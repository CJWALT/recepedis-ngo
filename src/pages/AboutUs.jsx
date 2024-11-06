import React from 'react'
  import OurVision from '../component/aboutus/OurVision'
import OurMission from '../component/aboutus/OurMission';
import OurValues from '../component/aboutus/OurValues';
import OurGoals from '../component/aboutus/OurGoals';
  
function AboutUs() {
  return (
    <>
        <section className='bg-[#E5E5E5]' >
          <div className='w-[90%] sm:w-[80%] md:w-[90%] mx-auto'>
          <div className='py-[3rem]'>
              <h3 className='text-[1.3rem] sm:text-[1.7rem] font-medium text-center text-txtColor'>More Than $100 Million Donateds since 2015</h3>
              <p className='font-light text-center text-[.8rem] sm:text-[1rem]'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure atque reprehenderit, non illo ea optio labore.
              </p>
            </div>
          
            <OurVision/>
          </div>

          <div className=' bg-white py-6'>
          <OurMission/>
          </div>
          
          <div className='py-6'>
          <OurValues/>
          </div>

          <div className=' bg-white py-6'>
          <OurGoals/> 
          </div>
          
         


      </section>
    </>
    
  )
}

export default AboutUs;
