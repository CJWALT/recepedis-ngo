import React from 'react'
import Button from './Button'

import AboutUsBanner from '../assets/about-us.jpeg'

function AboutSection() {
  return (
        <>
        <div className='py-[6rem] w-[90%] max-w-[1280px] flex flex-col md:flex-row gap-[2.6rem] lg:gap-[4rem] xl:gap-[6rem] sm:w-[80%] md:w-[90%] mx-auto'>
            <div className='rounded-[6px] w-auto md:w-[17rem] lg:w-[23rem] xl:pr-[4.7rem] xl:pl-[1.9rem] lg:max-w-[24rem] lg:pr-[3.7rem] md:flex-none md:max-w-[18rem] md:pl-[.9rem] md:pr-[1.7rem] py-[1.5rem] bg-white pl-[.7rem] pr-[2rem] sm:pr-[4rem] sm:pl-[2rem]'>
                <h4 className='font-[Poppins] font-bold text-blueText sm:text-[1.5rem] text-[1.2rem] mb-[1rem]'>About Us</h4>
                <p className='font-semibold text-[1rem] mb-[1.5rem]'>   
                    Restoring hope to a dying world, giving life a meaning
                </p>
                <p className='font-light mb-[2.3rem] text-justify text-[.8rem]'>
                At our Redemption Center, we are dedicated to providing a safe and welcoming space for individuals in distress. Our mission is to offer compassionate support, resources, and guidance to those in need, helping them rebuild their lives and regain a sense of hope and stability. With a team of caring professionals, we strive to create an environment where healing, personal growth, and positive change are possible. We believe in the power of community and are here to walk alongside each person on their journey to recovery.
                </p>
                <Button
                    children='View More'
                    className='bg-btnColor hover:text-black hover:bg-white'/>
            </div>
            <div className='md:flex md:flex-col md:flex-auto'>
                <div className='h-[13rem] overflow-hidden justify-center mb-[.8rem] flex flex-col items-end'>
                    <h6 className='text-blueText sm:text-[1.5rem] text-[1.2rem] mb-[.7rem] font-bold'>In a mission</h6>
                    <small className='text-[1rem] block font-semibold w-[17rem] sm:w-[21rem]'>To Restore hope to a dying world giving life a meaning</small>
                </div>

                <div className='md:flex-none md:mt-auto'>
                    <img src={AboutUsBanner} alt="about us banner" className='set-filter rounded-[8px] w-full md:h-[18rem] xl:h-[20rem] h-[13rem] object-center object-cover' />
                </div>

            </div>
        </div>
        </>
  )
}

export default AboutSection
