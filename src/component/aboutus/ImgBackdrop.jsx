import React from 'react'

function ImgBackdrop({img, className}) {
  return (
    <>
      <div className={`md:ml-[1.3rem] relative md:h-[13rem] xl:max-w-none xl:max-h-none before:xl:w-[inherit] xl:w-[29rem] xl:h-[16rem] md:max-h-[13rem] md:m-0 flex justify-center before:w-[16rem] md:self-center before:h-[9rem] sm:before:w-[24rem] sm:before:h-[13rem] md:before:-bottom-[1.3rem] md:before:-left-[1.3rem] xl:before:-left-[2rem] xl:before:-bottom-[2rem] xl:ml-[3rem] before:-left-[1rem] md:w-[22rem] md:max-w-[23rem] md:before:w-[21.5rem] before:-bottom-[1rem] md:before:h-[12.4rem] lg:before:w-[27.5rem] xl:before:h-[16rem] lg:before:h-[14.4rem] before:absolute before:rounded-[12px] w-[17rem] max-w-[20rem] lg:w-[28rem] lg:max-w-[29rem] lg:h-[15rem] lg:max-h-[16rem] max-h-[13.5rem] h-[10rem] sm:w-[25rem] sm:max-w-[26rem] sm:h-[14rem] sm:max-h-[15rem] mx-auto ${className}`}>
          <img src={img} alt="" className='object-cover filter brightness-75 object-center relative w-full h-full rounded-[6px]' />
              {/* <span className={`absolute -bottom-[20%] -left-[12%] rounded-[12px] w-full h-[10rem] block ${className}`}></span> */}
            </div>
    </>
  )
}

export default ImgBackdrop
