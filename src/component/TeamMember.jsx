import React from 'react'


import TeamOne from '../assets/team one.png'
import TeamTwo from '../assets/team two.png'
import TeamThree from '../assets/teamThree.jpg'

export default function TeamMember() {
  return (
    <section className='w-[90%] sm:w-[80%] md:w-[90%] max-w-[1280px] mx-auto'>
        <div>
            <h2 className='font-semibold text-[#121A6B] text-[1.3rem] sm:text-[1.5rem] text-center mb-[2.4rem]'>Team Members</h2>
            <div className='border-red-400 border-2 sm:border-blue-400 md:border-green-400 lg:border-yellow-400 xl:border-pink-400 flex flex-wrap flex-row py-8 gap-4 justify-center'>
                <div className='flex-grow-1 items-center sm:basis-[30%] flex-shrink-0 md:basis-[22%] lg:basis-[18%]  basis-[42%] flex flex-col'>
                    <div className='mb-4 h-[10rem] w-full flex justify-center rounded-[6px] '>
                    <img src={TeamThree} alt="team one" className='shadow-lg object-fit object-contain'/>
                    </div>
                    
                    <span className='block'>
                        <h4 className='font-semibold text-[1rem] sm:text-[1.2rem] text-[#121A6B]'>Patricia Ngum</h4>
                        <small className='font-normal text-[.8rem] sm:text-[1rem]'>CEO / Founder</small>
                    </span>
                </div >
                <div className='flex-grow-1 items-center sm:basis-[30%] flex-shrink-0 md:basis-[22%] lg:basis-[18%] basis-[42%] flex flex-col'>
                    <div className='mb-4 h-[10rem] 00 w-full flex justify-center rounded-[6px] '>
                    <img src={TeamTwo} alt="team one" className=' shadow-lg object-fit object-contain'/>
                    </div>
                    
                    <span className='block'>
                        <h4 className='font-semibold text-[1rem] sm:text-[1.2rem] text-[#121A6B]'>Job Silver</h4>
                        <small className='font-normal text-[.8rem] sm:text-[1rem]'>Lorem ipsum.</small>
                    </span>
                </div >
                <div className='flex-grow-1 items-center sm:basis-[30%] flex-shrink-0 md:basis-[22%] lg:basis-[18%] basis-[42%] flex flex-col'>
                    <div className='mb-4 h-[10rem] 00 w-full flex justify-center rounded-[6px] '>
                    <img src={TeamOne} alt="team one" className=' shadow-lg object-fit object-contain'/>
                    </div>
                    
                    <span className='block'>
                        <h4 className='font-semibold text-[1rem] sm:text-[1.2rem] text-[#121A6B]'>Job Silver</h4>
                        <small className='font-normal text-[.8rem] sm:text-[1rem]'>Lorem ipsum.</small>
                    </span>
                </div >
                <div className='flex-grow-1 items-center sm:basis-[30%] flex-shrink-0 md:basis-[22%] lg:basis-[18%] basis-[42%] flex flex-col'>
                    <div className='mb-4 h-[10rem] 00 w-full flex justify-center rounded-[6px] '>
                    <img src={TeamThree} alt="team one" className=' shadow-lg object-fit object-contain'/>
                    </div>
                    
                    <span className='block'>
                        <h4 className='font-semibold text-[1rem] sm:text-[1.2rem] text-[#121A6B]'>Job Silver</h4>
                        <small className='font-normal text-[.8rem] sm:text-[1rem]'>Lorem ipsum.</small>
                    </span>
                </div >
                <div className='flex-grow-1 items-center sm:basis-[30%] flex-shrink-0 md:basis-[22%] lg:basis-[18%] basis-[42%] flex flex-col'>
                    <div className='mb-4 h-[10rem] 00 w-full flex justify-center rounded-[6px] '>
                    <img src={TeamTwo} alt="team one" className=' shadow-lg object-fit object-contain'/>
                    </div>
                    
                    <span className='block'>
                        <h4 className='font-semibold text-[1rem] sm:text-[1.2rem] text-[#121A6B]'>Job Silver</h4>
                        <small className='font-normal text-[.8rem] sm:text-[1rem]'>Lorem ipsum.</small>
                    </span>
                </div >
                <div className='flex-grow-1 items-center sm:basis-[30%] flex-shrink-0 md:basis-[22%] lg:basis-[18%] basis-[42%] flex flex-col'>
                    <div className='mb-4 h-[10rem] 00 w-full flex justify-center rounded-[6px] '>
                    <img src={TeamOne} alt="team one" className=' shadow-lg object-fit object-contain'/>
                    </div>
                    
                    <span className='block'>
                        <h4 className='font-semibold text-[1rem] sm:text-[1.2rem] text-[#121A6B]'>Job Silver</h4>
                        <small className='font-normal text-[.8rem] sm:text-[1rem]'>Lorem ipsum.</small>
                    </span>
                </div >
                <div className='flex-grow-1 items-center sm:basis-[30%] flex-shrink-0 md:basis-[22%] lg:basis-[18%] basis-[42%] flex flex-col'>
                    <div className='mb-4 h-[10rem] 00 w-full flex justify-center rounded-[6px] '>
                    <img src={TeamThree} alt="team one" className=' shadow-lg object-fit object-contain'/>
                    </div>
                    
                    <span className='block'>
                        <h4 className='font-semibold text-[1rem] sm:text-[1.2rem] text-[#121A6B]'>Job Silver</h4>
                        <small className='font-normal text-[.8rem] sm:text-[1rem]'>Lorem ipsum.</small>
                    </span>
                </div >
                
                
            </div>
        </div>
    </section>
  )
}
