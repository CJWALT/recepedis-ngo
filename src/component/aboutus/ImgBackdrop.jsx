import React from 'react'

function ImgBackdrop({img, className}) {
  return (
    <div>
      <div className='relative mb-[3rem] flex justify-center w-[80%] mx-auto'>
              <img src={img} alt="" className='object-cover object-center relative mx-auto z-10 w-[14rem] h-[10rem] rounded-[12px]' />
              <span className={`absolute -bottom-[20%] -left-[12%] rounded-[12px] w-full h-[10rem] block ${className}`}></span>
            </div>
    </div>
  )
}

export default ImgBackdrop
