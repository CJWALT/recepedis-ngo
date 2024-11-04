import React from 'react'
  import OurVision from '../component/aboutus/OurVision'
import OurMission from '../component/aboutus/OurMission';
import OurValues from '../component/aboutus/OurValues';
import OurGoals from '../component/aboutus/OurGoals';
  
function AboutUs() {
  return (
    <>
        <section >
          <div className='bg-[#E5E5E5] w-[90%] sm:w-[80%] md:w-[90%] mx-auto border-2 border-red-400'>
          <div className='py-[3rem]'>
              <h3 className='text-[1.3rem] sm:text-[1.7rem] font-medium text-center text-txtColor'>More Than $100 Million Donateds since 2015</h3>
              <p className='font-light text-center text-[.8rem] sm:text-[1rem]'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure atque reprehenderit, non illo ea optio labore.
              </p>
            </div>
          <div>
            <OurVision/>
          </div>
          </div>
          
          <OurMission/>
          <OurValues/>
          <OurGoals/>


      </section>
    </>
    
  )
}

export default AboutUs;
