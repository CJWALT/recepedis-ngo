import React from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

function CarouselBtnLeft({onClick}) {
  return (
    <div className='bg-btnColor hover:bg-white rounded-full h-[2rem] w-[2rem] flex justify-center items-center'>
      <ArrowBackIosIcon onClick={onClick} className=' bg-btnColor p-[8px] hover:bg-white  hover:text-btnColor !w-[2rem] !h-[2rem] rounded-full bg cursor-pointer text-white'/>
    </div>
  )
}

export default CarouselBtnLeft
