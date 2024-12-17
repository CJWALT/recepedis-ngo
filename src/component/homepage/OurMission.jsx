import React, { useState } from 'react'
import Button from '../Button'


function OurMission( ) {


  const [showTabs, setShowTabs] = useState(1)

    const updateToggle = (id) =>{
        setShowTabs(id)
    }
  
    


  return (
        <section className='bg-[#EFEEEE]'>
          <div className='w-[90%] sm:w-[80%] md:w-[90%] max-w-[1280px] mx-auto flex py-[3rem] md:flex-row flex-col gap-[2rem] md:gap-[1rem] lg:gap-[3rem] xl:gap-[5.3rem] max-x-[1280px]'>
            <div className='set-overlay relative md:w-[19rem] lg:w-[24rem] xl:w-[26rem] xl:basis-[27rem] lg:basis-[25rem] md:basis-[20rem] md:flex-shrink-0 md:flex-grow-0 bg-hero-pattern md:pl-[1rem] md:pr-[1.7rem] pl-[2rem] pr-[3rem] flex flex-col justify-center h-[30rem] bg-no-repeat bg-cover bg-center'>
              <div className='z-10'>                  
                <h4 className='mb-[1.5rem] w-[16rem] text-white text-[1.3rem] sm:text-[1.5rem] font-semibold'>Become a proud volunteer now</h4>
                <p className='font-normal text-white mb-[4rem] text-[1.3rem] sm: sm:leading-[2.1rem] leading-[1.9rem]'>Join us as a proud volunteer and make a difference in the lives of those in need. Your support changes lives—donate today!</p>
              </div>
              
                <div className='absolute bottom-8'>
                  <Button 
                children='Donate Now'
                className='bg-[#121A6B] text-white rounded-[6px] hover:bg-white hover:text-black'/>
                </div>
            </div>
            
            <div className='self-center md:flex-grow md:basis-[55%]'>
              <div className=''>
              <h4 className='text-[#121A6B] font-semibold text-[1.3rem] sm:text-[1.5rem] mb-[.5rem]'>Our Mission</h4>
                <p className='font-semibold text-[.8rem] sm:text-[1.1rem]'>We are restoring hope to a dying world and giving life a meaning</p>
                
              </div>
                <div className='mt-[1.4rem] relative'>
                    <div className='border-[#ACACAC] relative flex flex-row gap-[2.5rem] lg:gap-[3rem] xl:gap-[4rem] md:gap-[1.4rem] mb-[.8rem] border-b-4'>
                      <div onClick={()=>updateToggle(1)} className={`${showTabs === 1 ? 'active-tabs' : 'border-0'} relative cursor-pointer font-regular text-[.9rem] sm:text-[1.3rem]`}>
                        Our Mission 
                        <span className={ `${showTabs === 1 ? 'active-tabs-border' : 'border-0'} absolute -bottom-[.21rem] left-0 w-[100%]`}></span>
                      </div>
                      <div onClick={()=>updateToggle(2)} className={` ${showTabs === 2 ? 'active-tabs' : 'border-0'} relative cursor-pointer font-regular text-[.9rem] sm:text-[1.3rem]`}>
                        Our Vision
                        <span className={ `${showTabs === 2 ? 'active-tabs-border' : 'border-0'} absolute -bottom-[.21rem] left-0 w-[100%]`}></span>
                      </div>
                      <div onClick={()=>updateToggle(3)} className={` ${showTabs === 3 ? 'active-tabs' : 'border-0'} relative cursor-pointer font-regular text-[.9rem] sm:text-[1.3rem]`}>
                        Our Goal 
                        <span className={ `${showTabs === 3 ? 'active-tabs-border' : 'border-0'} absolute -bottom-[.21rem] left-0 w-[100%]`}></span>
                      </div>
                    </div>
                    <div className={`${showTabs === 1 ? 'show-tabs' : 'hide-tabs'} font-regular text-[.7rem] sm:text-[1rem] sm:leading-[1.5rem] leading-[1rem]`}>
                    Restore hope among these vulnerable persons, and groups that have been affected by war, political and economic crises, poverty, abuse violence, disease and other natural calamities through rescue, psychosocial support, education and advocacy so that every individual feels seen, heard and valued.
                    </div>
                    <div className={`${showTabs === 2 ? 'show-tabs' : 'hide-tabs'} font-regular text-[.7rem] sm:text-[1rem] sm:leading-[1.5rem] leading-[1rem]`}>
                    A world where mental and emotional health Is prioritized, where compassion reigns supreme and no one suffers in solitude by eradicating evstigma and silence.
                    </div>
                    <div className={`${showTabs === 3 ? 'show-tabs' : 'hide-tabs'} font-regular text-[.7rem] sm:text-[1rem] sm:leading-[1.5rem] leading-[1rem]`}>
                    Provide a helistic transformation for the most vulnerable in society with rescue, counseling health care, psychosocial support, training. empowerment and exposure to life changing InnovatIons.
                    </div>
                </div>
            </div>
          </div>
        </section>
  )
}

export default OurMission
