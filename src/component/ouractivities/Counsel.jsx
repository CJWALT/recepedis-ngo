import teamOne from '../../assets/hero-img.jpeg'


const Health = () => {
  return (
    <>
      <section className='w-[90%] mx-auto sm:w-[80%] md:w-[90%] border-2 border-red-400 sm:border-blue-400 py-[5rem]'>
        <div className='border-2 border-red-400 flex flex-col gap-6 mb-[2rem]'>
          <div>
            <img src={teamOne} alt='' className='rounded-[6px]' />
          </div>
          <div>
            <img src={teamOne} alt='' className='rounded-[6px]' />
          </div>
        </div>
        <div className='border-2 border-red-400'>
          <h2 className='font-medium text-[1.4rem] sm:text-[1.7rem] mb-[1rem]'>Health</h2>
          <p className='font-light text-[1rem] text-justify leading-[1.6rem]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate velit nihil, recusandae voluptas nesciunt accusantium blanditiis ducimus tenetur molestias quam. Eveniet, atque! Tenetur ut magni provident sunt suscipit excepturi reprehenderit minima ratione nulla officiis, voluptate pariatur neque omnis blanditiis dolore similique? Ducimus provident enim nobis aspernatur, qui veritatis, cum iste, esse aperiam libero reprehenderit atque quisquam labore perferendis architecto. Quasi.
          </p>
        </div>
      </section>
    </>
  )
}

export default Health
