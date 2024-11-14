import React from 'react'

function ImgBackdrop({img, className}) {
  return (
    <>
      <div className={`relative mb-[3rem] md:h-[18rem] xl:max-w-none xl:max-h-none before:xl:w-[inherit] xl:w-[29rem] xl:h-[21rem] md:max-h-[19rem] md:mb-[2rem] md:ml-[2rem] flex justify-center before:w-[inherit] before:h-[inherit] xl:before:-left-[3rem] xl:before:-bottom-[3rem] xl:ml-[3rem] before:-left-[1.8rem] md:before:w-[23rem] before:-bottom-[1.8rem] before:absolute before:rounded-[12px] w-[17rem] max-w-[20rem] max-h-[13.5rem] h-[12rem] sm:w-[25rem] sm:max-w-[26rem] sm:h-[16rem] sm:max-h-[16rem] mx-auto ${className}`}>
          <img src={img} alt="" className='object-cover object-center relative w-full h-full rounded-[12px]' />
              {/* <span className={`absolute -bottom-[20%] -left-[12%] rounded-[12px] w-full h-[10rem] block ${className}`}></span> */}
            </div>
    </>
  )
}

export default ImgBackdrop
