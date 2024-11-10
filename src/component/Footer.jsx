import React from 'react'




import Logo from '../assets/footer__logo.png'

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import YouTubeIcon from '@mui/icons-material/YouTube';



import { Link } from 'react-router-dom';


const Footer = () => {
  return (
        <section className='bg-[#121A6B] text-white'>
            <div className='w-[90%] sm:w-[80%] md:w-[90%] py-[3.5rem] mx-auto max-w-[1280px] flex flex-col sm:flex-row sm:flex-wrap sm:justify-between gap-8'>
                <div className='py-2 flex flex-col gap-[2rem] sm:basis-[18rem] lg:basis-[25rem] overflow-hidden flex-grow-0 flex-shrink-0'>
                    <img src={Logo} alt='recepedis logo' className='w-[8rem] h-[8rem] sm:w-[10rem] sm:h-[10rem]'/>
                    <p className='text-[.9rem] sm:text-[1rem] font-light leading-6'>Building a world where mental health is valued, compassion thrives, and no one faces their struggles alone.</p>
                    <span className='flex flex-row items-center gap-2'>
                        <a href="https://www.facebook.com/profile.php?id=100079275348605&_rdc=1&_rdr" target="_blank" rel="noopener noreferrer"><FacebookIcon className='!w-[2rem] !h-[2rem] px-[.3rem] py-[.3rem] bg-[#E9E9E9] rounded-full text-[#121A6B]'/></a>
                        <a href="https://instagram.com/recepedis237?igshid=MzNlNGNkZWQ4Mg==" target="_blank" rel="noopener noreferrer"><InstagramIcon className='!w-[2rem] !h-[2rem] px-[.3rem] py-[.3rem] bg-[#E9E9E9] rounded-full text-[#121A6B]'/></a>
                        <a href="https://youtube.com/@redemptioncenterforpersons597" target="_blank" rel="noopener noreferrer"><YouTubeIcon className='!w-[2rem] !h-[2rem] px-[.3rem] py-[.3rem] bg-[#E9E9E9] rounded-full text-[#121A6B]'/></a>
                        <a href="URL`" target="_blank" rel="noopener noreferrer"><LinkedInIcon className='!w-[2rem] !h-[2rem] px-[.3rem] py-[.3rem] bg-[#E9E9E9] rounded-full text-[#121A6B]'/></a>
                        <a href="https://wa.me/+237677087801" target="_blank" rel="noopener noreferrer"><WhatsAppIcon className='!w-[2rem] !h-[2rem] px-[.3rem] py-[.3rem] bg-[#E9E9E9] rounded-full text-[#121A6B]'/></a>
                    </span>
                </div>
                <div className=''>
                    <h4 className='capitalize text-[#121A6B] font-semibold bg-[#E9E9E9] w-[10rem] py-[10px] pl-[5px] rounded-[6px]'>
                    quick links
                        </h4>
                        <ul className='pl-[5px] mt-4 flex flex-col gap-6'>
                            <li><Link to ='/'>Home</Link></li>
                            <li><Link to ='/about-us'>About us</Link></li>
                            <li><Link to ='/'>Our Activities</Link></li>
                            <li><Link to ='/'>Contact us</Link></li>
                        </ul>
                </div>
                <div>
                    <h4 className='capitalize text-[#121A6B] font-semibold bg-[#E9E9E9] w-[10rem] py-[10px] pl-[5px] rounded-[6px]'>Care Lines</h4>
                    <ul className='pl-[5px] flex flex-col gap-6 mt-4'>
                        <li><PhoneIcon/> <a href="tel:+237677087801">+237 677 0 87801</a></li>
                        
                    </ul>
                </div>
            </div>

            <div className='font-light text-[.6rem] sm:text-[.8rem] gap-[10px] flex-wrap justify-center pb-[1rem] flex flex-row'>
                <span className='mb-[1rem] block'>
                    Copyright <a href='https://www.github.com/cjwalt' target='_blank' className='text-btnColor font-bold'>cjwalt 2024</a> All Rights Reserved.
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
