
import FounderImg from '../../assets/founder.png';

const Founder = () => {
  return (
        <>
            <div className='bg-white'>
                <div className='overflow-hidden relative md:pt-0 flex flex-col h-[45rem] md:h-[40rem] lg:h-[32rem] sm:flex-wrap sm:h-[50rem] justify-between md:flex-row pt-[2rem] gap-[2rem] w-[90%] max-w-[1280px] sm:w-[80%] md:w-[90%] mx-auto'>
                    <div className='md:w-[35%] lg:w-[45%] md:self-center'>
                        <h1 className='text-[1.5rem] font-bold mb-[1rem]'>About the Founder</h1>
                        <p className='text-[.8rem] font-light mb-[.8rem] leading-[1.2rem] sm:leading-[1.7rem] sm:text-[1.2rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, minima temporibus. Atque aliquam aut molestias corrupti provident quasi distinctio nam quaerat, praesentium, corporis suscipit animi?</p>
                        <p className='text-[.8rem] font-light leading-[1.2rem] sm:leading-[1.7rem] sm:text-[1.2rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, minima temporibus. Atque aliquam aut molestias corrupti provident quasi distinctio nam quaerat, praesentium, corporis suscipit animi?</p>
                    </div>  
                
                    <div className='relative md:absolute md:bottom-0 md:right-0 flex self-center sm:flex sm:justify-center sm:w-[100%] md:w-[62%] lg:w-[48%] md:self-end'>
                        <div className='relative w-[27rem] max-w-[28rem] h-[25rem]'>
                            <span className='absolute rounded-full -top-[1rem] sm:-top-[2rem] md:-top-[1.8rem] z-10 left-[4.4rem] md:left-[2.7rem] lg:-top-[2.5rem] lg:left-[1.8rem] sm:left-[2.6rem] bg-[#121A6B] lg:w-[22.3rem] lg:h-[22.3rem] w-[17.3rem] md:w-[20.3rem] md:h-[20.3rem] sm:w-[21.3rem] sm:h-[21.3rem] h-[17.3rem]'></span>
                            <img src={FounderImg} alt='founder Patricia' className='object-cover w-full h-full object-center relative z-20 '/>
                        </div>

                    </div>
                </div>
                
            </div>
        </>
)
}

export default Founder
