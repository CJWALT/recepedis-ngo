import React from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function CarouselBtnRight({onClick}) {
  return (
    <div className='flex justify-center items-center'>
      <ArrowForwardIosIcon onClick={onClick} className=' p-[8px] hover:bg-white  hover:text-btnColor !w-[2rem] !h-[2rem] rounded-full bg cursor-pointer text-black'/>
    </div>
  )
}

export default CarouselBtnRight
