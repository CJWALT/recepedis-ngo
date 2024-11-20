import React from 'react'

function ImgBackdrop({img, className}) {
  return (
    <>
      <div className={`border-2 sm:border-red-400 md:border-blue-400 lg:border-green-400 xl:border-pink-400 relative mb-[3rem] md:h-[12rem] xl:max-w-none xl:max-h-none before:xl:w-[inherit] xl:w-[29rem] xl:h-[16rem] md:max-h-[13rem] md:mb-[2rem] md:ml-[2rem] flex justify-center before:w-[16rem] before:h-[9rem] sm:before:w-[24rem] sm:before:h-[13rem] md:before:-bottom-[1.3rem] md:before:-left-[1.3rem] xl:before:-left-[2rem] xl:before:-bottom-[2rem] xl:ml-[3rem] before:-left-[1rem] md:before:w-[21rem] before:-bottom-[1rem] md:before:h-[11rem] before:absolute before:rounded-[12px] w-[17rem] max-w-[20rem] max-h-[13.5rem] h-[10rem] sm:w-[25rem] sm:max-w-[26rem] sm:h-[14rem] sm:max-h-[15rem] mx-auto ${className}`}>
          <img src={img} alt="" className='object-cover object-center relative w-full h-full rounded-[6px]' />
              {/* <span className={`absolute -bottom-[20%] -left-[12%] rounded-[12px] w-full h-[10rem] block ${className}`}></span> */}
            </div>
    </>
  )
}

export default ImgBackdrop
