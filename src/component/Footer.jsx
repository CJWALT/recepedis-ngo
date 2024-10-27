import React from 'react'




import Logo from '../assets/footer__logo.png'

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneIcon from '@mui/icons-material/Phone';



import { Link } from 'react-router-dom';


const Footer = () => {
  return (
        <section className='bg-[#121A6B] text-white'>
            <div className='w-[90%] sm:w-[80%] md:w-[90%] py-[3.5rem] mx-auto max-w-[1280px] flex flex-col sm:flex-row sm:flex-wrap sm:justify-between gap-8'>
                <div className='py-2 flex flex-col gap-[2rem] sm:basis-[18rem] lg:basis-[25rem] overflow-hidden flex-grow-0 flex-shrink-0'>
                    <img src={Logo} alt='recepedis logo' className='w-[8rem] h-[8rem] sm:w-[10rem] sm:h-[10rem]'/>
                    <p className='text-[.9rem] font-light leading-6'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore placeat aperiam fugit explicabo error.</p>
                    <span className='flex flex-row items-center gap-6'>
                        <a href="https://www.facebook.com/profile.php?id=100079275348605&_rdc=1&_rdr" target="_blank" rel="noopener noreferrer"><FacebookIcon className='!w-[3rem] !h-[3rem] px-[.5rem] py-[.5rem] bg-[#E9E9E9] rounded-full text-[#121A6B]'/></a>
                        <a href="URL`" target="_blank" rel="noopener noreferrer"><InstagramIcon className='!w-[3rem] !h-[3rem] px-[.5rem] py-[.5rem] bg-[#E9E9E9] rounded-full text-[#121A6B]'/></a>
                        <a href="URL`" target="_blank" rel="noopener noreferrer"><XIcon className='!w-[3rem] !h-[3rem] px-[.5rem] py-[.5rem] bg-[#E9E9E9] rounded-full text-[#121A6B]'/></a>
                        <a href="URL`" target="_blank" rel="noopener noreferrer"><LinkedInIcon className='!w-[3rem] !h-[3rem] px-[.5rem] py-[.5rem] bg-[#E9E9E9] rounded-full text-[#121A6B]'/></a>
                    </span>
                </div>
                <div className=''>
                    <h4 className='capitalize text-[#121A6B] font-semibold bg-[#E9E9E9] w-[10rem] py-[10px] pl-[5px] rounded-[6px]'>
                    quick links
                        </h4>
                        <ul className='pl-[5px] mt-4 flex flex-col gap-6'>
                            <li>Home</li>
                            <li>About us</li>
                            <li>Our Activities</li>
                            <li>Contact us</li>
                        </ul>
                </div>
                <div>
                    <h4 className='capitalize text-[#121A6B] font-semibold bg-[#E9E9E9] w-[10rem] py-[10px] pl-[5px] rounded-[6px]'>Care Lines</h4>
                    <ul className='pl-[5px] flex flex-col gap-6 mt-4'>
                        <li><PhoneIcon/> <a href="tel:+237677087801">+237 677 0 8780</a></li>
                        
                    </ul>
                </div>
            </div>

            <div className='font-light text-[.6rem] gap-[10px] flex-wrap justify-center pb-[1rem] flex flex-row'>
                <span className='mb-[1rem] block'>
                Copyright 2022 <a href='www.github.com/cjwalt' target='_blank'>cjwalt 2024</a> All Rights Reserved.
                </span>
                <div className='flex flex-row justify-between gap-8'>
                    <span>
                        <Link to='/'>
                            Terms & Conditions
                        </Link>
                    </span>
                    <span>
                        <Link to='/'>
                            Privacy & Policy    
                        </Link>
                    </span>
                </div>
            </div>
        </section>
  )
}

export default Footer
