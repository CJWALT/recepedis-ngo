
import FounderImg from '../../assets/founder.png';

const Founder = () => {
  return (
        <>
            <div className='bg-white relative'>
                <div className='md:pt-0 flex flex-col h-[auto] lg:h-[32rem] sm:flex-wrap justify-between md:flex-row pt-[2rem] gap-[3rem] sm:gap-[5rem] w-[90%] max-w-[1280px] sm:w-[80%] md:w-[90%] mx-auto'>
                    <div className='md:w-[60%] md:self-center md:pb-[2rem] lg:pb-0'>
                        <h1 className='text-[1.5rem] font-bold mb-[1rem]'>About the Founder</h1>
                        <p className='text-[.8rem] font-light mb-[.8rem] leading-[1.2rem] sm:leading-[1.7rem] sm:text-[1rem] lg:text-[1.2rem]'>Patricia Ngum, Founder and CEO of the Redemption Center for Persons in Distress (Recepedis), is a mental health specialist, communication expert, and Human Resource Manager dedicated to supporting underserved communities in Cameroon. Her organization addresses mental health crises in the conflict-ridden North West region, providing hope and healing to those affected by societal challenges.</p>
                        <p className='text-[.8rem] font-light leading-[1.2rem] sm:leading-[1.7rem] sm:text-[1rem] lg:text-[1.2rem]'>Pursuing a Doctorate in Business Administration, Patricia blends strategic leadership with compassion to tackle complex mental health issues, including those heightened by the COVID-19 pandemic. Her visionary efforts continue to transform lives and inspire resilience in vulnerable communitie.</p>
                    </div>  
                
                    <div className='relative md:absolute md:bottom-0 md:right-0 flex self-center sm:flex md:justify-end sm:justify-center sm:w-[100%] md:self-end'>
                        <div className='relative w-full max-w-[245px] sm:max-w-[400px] md:max-w-[332px] lg:max-w-[422px] xl:max-w-[533px]'>
                            <span className='absolute rounded-full -top-[1rem] sm:-top-[2rem] md:-top-[1.8rem] z-10 left-[1.2rem] md:left-[1.9rem] lg:-top-[2.5rem] lg:left-[1.6rem] xl:left-[3.6rem] xl:-top-[2.2rem] sm:left-[1.7rem] bg-[#121A6B] lg:w-[22.3rem] lg:h-[22.3rem] xl:w-[25.3rem] xl:h-[25.3rem] w-[12.3rem] md:w-[16.3rem] md:h-[16.3rem] sm:w-[21.3rem] sm:h-[21.3rem] h-[12.3rem]'></span>
                            <img src={FounderImg} alt='founder Patricia' className='object-contain w-full h-full object-center relative z-20 '/>
                        </div>

                    </div>
                </div>
                
            </div>
        </>
)
}

export default Founder
