import React from 'react'

function ImgBackdrop({img, className}) {
  return (
    <div>
      <div className='relative flex justify-center w-[80%] mx-auto'>
              <img src={img} alt="" className='object-cover object-center relative mx-auto z-10 w-[14rem] h-[10rem] rounded-md' />
              <span className={`absolute -bottom-[2.3rem] -left-[1.6rem] rounded-md w-[13rem] h-[10rem] block ${className}`}></span>
            </div>
    </div>
  )
}

export default ImgBackdrop
