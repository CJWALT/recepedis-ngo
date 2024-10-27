import React from 'react'




import Logo from '../assets/footer__logo.png'

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
        <section className='bg-[#121A6B]'>
            <div className='w-[90%] text-white py-[3.5rem] mx-auto max-w-[1280px] flex flex-col gap-8'>
                <div className='border-2 py-2 border-red-400 flex flex-col gap-[2rem]'>
                    <img src={Logo} alt='recepedis logo' className='w-[8rem] h-[8rem] sm:w-[10rem] sm:h-[10rem]'/>
                    <p className='text-[.9rem] font-normal leading-6'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore placeat aperiam fugit explicabo error.</p>
                    <span className='flex border-2 border-red-400 flex-row gap-6'>
                        <FacebookIcon/>
                        <InstagramIcon/>
                        <XIcon/>
                        <LinkedInIcon/>
                    </span>
                </div>
                <div>
                    <h4>
                    quick links
                        </h4>
                        <ul>
                            <li>Home</li>
                            <li>About us</li>
                            <li>Our Activities</li>
                            <li>Contact us</li>
                        </ul>
                </div>
                <div>
                    <h4>Care Lines</h4>
                    <ul>
                        <li><tel>+234800000000</tel></li>
                        <li><tel>+234800000000</tel></li>
                    </ul>
                </div>
            </div>

            <div>
                <span>
                Copyright 2022 opat.com. All Rights Reserved.
                </span>
                <div>
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
