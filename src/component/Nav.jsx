import React, { useState } from 'react'

import Logo from '../assets/logo.png'
import {Link} from 'react-router-dom'

import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseIcon from '@mui/icons-material/Close';


import Button from './Button'

const links = [
        {id:1, name:'Home', path:'/'},
        {id:2, name:'AboutUs', path:'/about-us'},
        {id:3, name:'Contact us', path:'/contact'},
        {id:4, name:'Our Activities', path:'/ouractivities'}
      ]

      
function Nav() {

  const [openMenu, setOpenMenu] = useState(false)

  const toggle = ()=>{ 
    setOpenMenu(!openMenu)
  }

  return (
    <div className='py-[1.3rem] flex flex-row justify-between w-[90%] max-w-[1280px] mx-auto'>
      <div className=''>
            <img src={Logo} alt='logo' className='object-contain w-[92px] h-[89px]'/>
      </div>
     <div className={` justify-between z-30  items-center transition-opacity duration-500 ease-in ${openMenu ? ' flex absolute left-0 transition-opacity opacity-100 duration-900 ease-in-out top-0 rounded-lg w-[13rem] bg-[#6EB6E9] py-6 flex-col' : 'opacity-0 hidden lg:opacity-100 lg:flex lg:w-[45rem] lg:max-w[41rem]'}`}>
         <ul className='w-[70%] lg:w-[72%]'>
          <div className='flex flex-col lg:flex-row items-center gap-4 lg:pb-0 pb-[2rem] justify-between'>
           
            {links.map((link) => ( 
              
              <li key={link.id} className='list-none'>
                  <Link to={link.path} className='z-50 hover:text-btnColor font-[montserrat] text-[1.25rem] font-bold text-navTextColor'>{link.name}</Link>
              </li>
            ))}
            </div>
          </ul>
        
        <div>
          <Button
            children='Donate'
            className='bg-btnColor'/>
        </div>
       
      </div>
     <div className='items-center flex lg:hidden'>
      {   openMenu ?
        <CloseIcon onClick={toggle} className='!w-[3rem] cursor-pointer !h-[3rem]'/>
          :
        <MenuRoundedIcon onClick={toggle} className='!w-[3rem] cursor-pointer !h-[3rem]'/>
      }
        </div>
    </div>
  )
}

export default Nav
