import teamOne from '../../assets/hero-img.jpeg'


const ActivityItem = ({heading, paragraph}) => {
  return (
    <>
      <section className='py-[6rem] md:flex md:flex-row md:gap-[5%] '>
        <div className='flex flex-col gap-6 md:gap-[.7rem] mb-[2rem] md:mb-0 md:w-[45%] xl:w-[40%]  md:order-2 md:flex md:flex-row'>
          <div>
            <img src={teamOne} alt='' className='rounded-[6px] md:h-full object-cover object-center' />
          </div>
          <div>
            <img src={teamOne} alt='' className='rounded-[6px] md:h-full object-cover object-center' />
          </div>
          
        </div>
        <div className='md:w-[50%] xl:w-[55%] md:order-1'>
          <h2 className='font-medium text-[1.4rem] sm:text-[1.7rem] mb-[1rem]'>{heading}</h2>
          <p className='font-light text-[1rem] text-justify leading-[1.6rem]'>
            {paragraph}
          </p>
        </div>
      </section>
    </>
  )
}

export default ActivityItem
