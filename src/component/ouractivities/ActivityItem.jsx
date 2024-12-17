

const ActivityItem = ({heading, paragraph, imgOne, imgTwo, className}) => {


  


  return (
    <>
    <section className={`${className}`}>
    <div className='w-[90%] sm:w-[80%] md:w-[90%] !mx-auto py-[6rem] md:flex md:flex-row items-center md:gap-[5%]'>
        <div className='flex flex-col gap-6 md:gap-[.7rem] mb-[2rem] md:mb-0 md:w-[45%] xl:w-[40%]  md:order-2 md:flex md:flex-row'>
          <div className="h-[11rem] sm:h-[17rem] overflow-hidden md:w-[50%]">
            <img src={imgOne} alt='activity one' className='filter h-full w-full brightness-90 rounded-[6px] md:h-full object-cover object-center' />
          </div>
          <div className="h-[11rem] sm:h-[17rem] overflow-hidden md:w-[50%]">
            <img src={imgTwo} alt='activity two' className='filter h-full w-full brightness-90 rounded-[6px] md:h-full object-cover object-center' />
          </div>
          
        </div>
        <div className='md:w-[50%] xl:w-[55%] md:order-1'>
          <h2 className='font-medium text-[1.4rem] sm:text-[1.7rem] mb-[1rem]'>{heading}</h2>
          <p className='font-light text-[.9rem] sm:text-[1rem] leading-[1.6rem]'>
            {paragraph}
          </p>
        </div>
      </div>
    </section>
    
    </>
  )
}

export default ActivityItem
