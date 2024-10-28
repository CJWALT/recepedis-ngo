import React from 'react'


import TeamOne from '../assets/team one.png'
import TeamTwo from '../assets/team two.png'

export default function TeamMember() {
  return (
    <section className='w-[90%] sm:w-[80%] md:w-[90%] max-w-[1280px] mx-auto'>
        <div>
            <h2 className='font-semibold text-[#121A6B] text-[1.3rem] sm:text-[1.5rem] text-center mb-[4rem]'>Team Members</h2>
            <div className='border-2 border-red-400 flex flex-row py-8 gap-4 justify-center'>
                <div className='border-2 flex-gorw-0 flex-shrink-0 border-blue-400 w-[8rem] flex flex-col items-center'>
                    <div className='border-2 mb-4 h-[10rem] border-green-400 w-full flex justify-center rounded-[6px] '>
                    <img src={TeamTwo} alt="team one" className='border-2 border-red-400 shadow-lg object-fit object-contain'/>
                    </div>
                    
                    <span className='block'>
                        <h4>Job Silver</h4>
                        <small>Lorem ipsum.</small>
                    </span>
                </div >
                <div className='border-2 flex-gorw-0 flex-shrink-0 border-blue-400 w-[8rem] flex flex-col items-center'>
                    <div className='border-2 mb-4 h-[10rem] border-green-400 w-full flex justify-center rounded-[6px] '>
                    <img src={TeamOne} alt="team one" className='border-2 border-red-400 shadow-lg object-fit object-contain'/>
                    </div>
                    
                    <span className='block'>
                        <h4>Job Silver</h4>
                        <small>Lorem ipsum.</small>
                    </span>
                </div >
                <div className='border-2 flex-gorw-0 flex-shrink-0 border-blue-400 w-[8rem] flex flex-col items-center'>
                    <div className='border-2 mb-4 h-[10rem] border-green-400 w-full flex justify-center rounded-[6px] '>
                    <img src={TeamOne} alt="team one" className='border-2 border-red-400 shadow-lg object-fit object-contain'/>
                    </div>
                    
                    <span className='block'>
                        <h4>Job Silver</h4>
                        <small>Lorem ipsum.</small>
                    </span>
                </div >
                <div className='border-2 flex-gorw-0 flex-shrink-0 border-blue-400 w-[8rem] flex flex-col items-center'>
                    <div className='border-2 mb-4 h-[10rem] border-green-400 w-full flex justify-center rounded-[6px] '>
                    <img src={TeamTwo} alt="team one" className='border-2 border-red-400 shadow-lg object-fit object-contain'/>
                    </div>
                    
                    <span className='block'>
                        <h4>Job Silver</h4>
                        <small>Lorem ipsum.</small>
                    </span>
                </div >
                <div className='border-2 flex-gorw-0 flex-shrink-0 border-blue-400 w-[8rem] flex flex-col items-center'>
                    <div className='border-2 mb-4 h-[10rem] border-green-400 w-full flex justify-center rounded-[6px] '>
                    <img src={TeamOne} alt="team one" className='border-2 border-red-400 shadow-lg object-fit object-contain'/>
                    </div>
                    
                    <span className='block'>
                        <h4>Job Silver</h4>
                        <small>Lorem ipsum.</small>
                    </span>
                </div >
                <div className='border-2 flex-gorw-0 flex-shrink-0 border-blue-400 w-[8rem] flex flex-col items-center'>
                    <div className='border-2 mb-4 h-[10rem] border-green-400 w-full flex justify-center rounded-[6px] '>
                    <img src={TeamOne} alt="team one" className='border-2 border-red-400 shadow-lg object-fit object-contain'/>
                    </div>
                    
                    <span className='block'>
                        <h4>Job Silver</h4>
                        <small>Lorem ipsum.</small>
                    </span>
                </div >
                <div className='border-2 flex-gorw-0 flex-shrink-0 border-blue-400 w-[8rem] flex flex-col items-center'>
                    <div className='border-2 mb-4 h-[10rem] border-green-400 w-full flex justify-center rounded-[6px] '>
                    <img src={TeamTwo} alt="team one" className='border-2 border-red-400 shadow-lg object-fit object-contain'/>
                    </div>
                    
                    <span className='block'>
                        <h4>Job Silver</h4>
                        <small>Lorem ipsum.</small>
                    </span>
                </div >
            </div>
        </div>
    </section>
  )
}
