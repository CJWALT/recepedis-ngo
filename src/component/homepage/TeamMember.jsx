import React from 'react'


import TeamOne from '../../assets/teamOne.jpeg'
import TeamTwo from '../../assets/teamTwo.jpeg'
import TeamThree from '../../assets/teamThree.jpg'
import TeamFour from '../../assets/teamFour.jpeg'
import TeamFive from '../../assets/teamFive.jpeg'
import TeamSix from '../../assets/teamsix.jpg'
import TeamSeven from '../../assets/teamSeven.jpg'
import TeamEight from '../../assets/teamEight.jpg'

export default function TeamMember() {
  return (
    <section className='w-[90%] sm:w-[80%] md:w-[90%] max-w-[1280px] mx-auto'>
        <div>
            <h2 className='font-semibold text-[#121A6B] text-[1.3rem] sm:text-[1.5rem] text-center mb-[2.4rem]'>Team Members</h2>
            <div className='flex flex-wrap flex-row py-8 gap-4 md:gap-y-[3rem] justify-center'>
                <div className='flex-grow-1 items-center sm:basis-[30%] flex-shrink-0 md:basis-[22%] lg:basis-[18%]  basis-[42%] flex flex-col'>
                    <div className='mb-4 h-[10rem] w-full flex justify-center rounded-[6px] '>
                    <img src={TeamThree} alt="team one" className='shadow-lg w-[8rem] object-contain'/>
                    </div>
                    
                    <span className='block'>
                        <h4 className='font-semibold text-[1rem] sm:text-[1.2rem] text-[#121A6B]'>Patricia Ngum</h4>
                        <small className='font-normal text-[.8rem] sm:text-[1rem]'>CEO / Founder</small>
                    </span>
                </div >
                <div className='flex-grow-1 items-center sm:basis-[30%] flex-shrink-0 md:basis-[22%] lg:basis-[18%] basis-[42%] flex flex-col'>
                    <div className='mb-4 h-[10rem] w-full flex justify-center rounded-[6px] '>
                    <img src={TeamSix} alt="team one" className='shadow-lg w-[8rem] object-contain'/>
                    </div>
                    
                    <span className='block'>
                        <h4 className='font-semibold text-[1rem] sm:text-[1.2rem] text-[#121A6B]'>Princess Wuloko</h4>
                        <small className='font-normal text-[.8rem] sm:text-[1rem]'>P.A to the CEO</small>
                    </span>
                </div >

                <div className='flex-grow-1 items-center sm:basis-[30%] flex-shrink-0 md:basis-[22%] lg:basis-[18%] basis-[42%] flex flex-col'>
                    <div className='mb-4 h-[10rem] w-full flex justify-center rounded-[6px] '>
                    <img src={TeamFour} alt="team one" className='shadow-lg w-[8rem] object-contain'/>
                    </div>
                    
                    <span className='block'>
                        <h4 className='font-semibold text-[1rem] sm:text-[1.2rem] text-[#121A6B]'>Fobogho Clifford</h4>
                        <small className='font-normal text-[.8rem] sm:text-[1rem]'>Executive Assistant</small>
                    </span>
                </div >

                <div className='flex-grow-1 items-center sm:basis-[30%] flex-shrink-0 md:basis-[22%] lg:basis-[18%] basis-[42%] flex flex-col'>
                    <div className='mb-4 h-[10rem] w-full flex justify-center rounded-[6px] '>
                    <img src={TeamFive} alt="team one" className='shadow-lg w-[8rem] object-contain'/>
                    </div>
                    
                    <span className='block'>
                        <h4 className='font-semibold text-[1rem] sm:text-[1.2rem] text-[#121A6B]'>Bindong Comfort</h4>
                        <small className='font-normal text-[.8rem] sm:text-[1rem]'>Fin. Secretary</small>
                    </span>
                </div >
                <div className='flex-grow-1 items-center sm:basis-[30%] flex-shrink-0 md:basis-[22%] lg:basis-[18%] basis-[42%] flex flex-col'>
                    <div className='mb-4 h-[10rem] w-full flex justify-center rounded-[6px] '>
                    <img src={TeamEight} alt="team one" className='shadow-lg w-[8rem] object-contain'/>
                    </div>
                    
                    <span className='block'>
                        <h4 className='font-semibold text-[1rem] sm:text-[1.2rem] text-[#121A6B]'>Zitem Francisca</h4>
                        <small className='font-normal text-[.8rem] sm:text-[1rem]'>General Secretary</small>
                    </span>
                </div >
                
                <div className='flex-grow-1 items-center sm:basis-[30%] flex-shrink-0 md:basis-[22%] lg:basis-[18%] basis-[42%] flex flex-col'>
                    <div className='mb-4 h-[10rem] w-full flex justify-center rounded-[6px] '>
                        <img src={TeamTwo} alt="team one" className='shadow-lg w-[8rem] object-contain'/>
                    </div>
                    
                    <span className='block'>
                        <h4 className='font-semibold text-[1rem] sm:text-[1.2rem] text-[#121A6B]'>FONGUH Julius </h4>
                        <small className='font-normal text-[.8rem] sm:text-[1rem]'>Treasurer</small>
                    </span>
                </div >

                <div className='flex-grow-1 items-center sm:basis-[30%] flex-shrink-0 md:basis-[22%] lg:basis-[18%] basis-[42%] flex flex-col'>
                    <div className='mb-4 h-[10rem] w-full flex justify-center rounded-[6px] '>
                    <img src={TeamSeven} alt="team one" className='shadow-lg w-[8rem] object-contain'/>
                    </div>
                    
                    <span className='block'>
                        <h4 className='font-semibold text-[1rem] sm:text-[1.2rem] text-[#121A6B]'>Ngwa Damaris</h4>
                        <small className='font-normal text-[.8rem] sm:text-[1rem]'>Adviser</small>
                    </span>
                </div >
                
                
                <div className='flex-grow-1 items-center sm:basis-[30%] flex-shrink-0 md:basis-[22%] lg:basis-[18%] basis-[42%] flex flex-col'>
                    <div className='mb-4 h-[10rem] w-full flex justify-center rounded-[6px] '>
                    <img src={TeamOne} alt="team one" className='shadow-lg w-[8rem] object-contain'/>
                    </div>
                    
                    <span className='block'>
                        <h4 className='font-semibold text-[1rem] sm:text-[1.2rem] text-[#121A6B]'>NJI Atanga</h4>
                        <small className='font-normal text-[.8rem] sm:text-[1rem]'>Adviser</small>
                    </span>
                </div >
            </div>
        </div>
    </section>
  )
}
