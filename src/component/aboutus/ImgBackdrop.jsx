import React from 'react'

function ImgBackdrop({img, className}) {
  return (
    <>
      <div className={`relative mb-[3rem] flex justify-center before:w-[95%] before:h-[10.7rem] before:-left-[1.8rem] before:-bottom-[1.8rem] before:absolute before:rounded-[12px] w-[80%] mx-auto ${className}`}>
              <img src={img} alt="" className='object-cover object-center relative mx-auto z-10 rounded-[12px]' />
              {/* <span className={`absolute -bottom-[20%] -left-[12%] rounded-[12px] w-full h-[10rem] block ${className}`}></span> */}
            </div>
    </>
  )
}

export default ImgBackdrop
