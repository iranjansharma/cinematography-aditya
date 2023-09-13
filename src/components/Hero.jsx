import { useState } from 'react';
const Hero = () => {
  const [show, setShow] = useState(false);
  return (
    <div
      className='bg-gray-100 pb-12 overflow-y-hidden h-screen'
      style={{ minHeight: 700 }}
    >
      <dh-component>
        <nav className='w-full border-b'>
          <div className='py-5 md:py-0 container mx-auto px-6 flex items-center justify-between'>
            <div aria-label='Home. logo' role='img'>
              {/* <img
                className='w-[150px] md:w-[250px] mix-blend-multiply'
                src='/logo.jpg'
                alt='logo'
              /> */}
              <p className='text-xl capitalize'>
                The Rollin<span className='text-orange-500'> Films</span>
              </p>
            </div>
            <div>
              <button
                onClick={() => setShow(!show)}
                className={`${
                  show ? 'hidden' : ''
                } sm:block md:hidden text-gray-500 hover:text-gray-700 focus:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500`}
              >
                <svg
                  aria-haspopup='true'
                  aria-label='open Main Menu'
                  xmlns='http://www.w3.org/2000/svg'
                  className='md:hidden icon icon-tabler icon-tabler-menu'
                  width={24}
                  height={24}
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  stroke='#2c3e50'
                  fill='none'
                  strokeLinecap='round'
                >
                  <path stroke='none' d='M0 0h24v24H0z' />
                  <line x1={4} y1={8} x2={20} y2={8} />
                  <line x1={4} y1={16} x2={20} y2={16} />
                </svg>
              </button>
              <div
                id='menu'
                className={` ${show ? '' : 'hidden'} md:block lg:block `}
              >
                <button
                  onClick={() => setShow(!show)}
                  className={`block md:hidden lg:hidden text-gray-500 hover:text-gray-700 focus:text-gray-700 fixed focus:outline-none focus:ring-2 focus:ring-gray-500 z-30 top-0 mt-6`}
                >
                  <svg
                    aria-label='close main menu'
                    xmlns='http://www.w3.org/2000/svg'
                    width={24}
                    height={24}
                    viewBox='0 0 24 24'
                    strokeWidth='1.5'
                    stroke='#2c3e50'
                    fill='none'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  >
                    <path stroke='none' d='M0 0h24v24H0z' />
                    <line x1={18} y1={6} x2={6} y2={18} />
                    <line x1={6} y1={6} x2={18} y2={18} />
                  </svg>
                </button>
                <ul className='flex text-3xl md:text-base items-center py-10 md:flex flex-col md:flex-row justify-center fixed md:relative top-0 bottom-0 left-0 right-0 bg-white md:bg-transparent z-20'>
                  <li className='uppercase text-gray-700 font-medium cursor-pointer text-base lg:text-base pt-10 md:pt-0 hover:text-orange-500 ease-in duration-200'>
                    <a href='/'>Home</a>
                  </li>
                  <li className='uppercase text-gray-700 font-medium cursor-pointer text-base lg:text-base pt-10 md:pt-0 hover:text-orange-500 ease-in duration-200 md:ml-5 lg:ml-10'>
                    <a href='/'>Cinematography</a>
                  </li>
                  <li className='uppercase text-gray-700 font-medium cursor-pointer text-base lg:text-base pt-10 md:pt-0 hover:text-orange-500 ease-in duration-200 md:ml-5 lg:ml-10'>
                    <a href='/'>Photography</a>
                  </li>
                  <li className='uppercase text-gray-700 font-medium  cursor-pointer text-base lg:text-base pt-10 md:pt-0 hover:text-orange-500 ease-in duration-200 md:ml-5 lg:ml-10'>
                    <a href='/'>Quote</a>
                  </li>
                  <li className='uppercase text-gray-700 font-medium cursor-pointer text-base lg:text-base pt-10 md:pt-0 hover:text-orange-500 md:ml-5 lg:ml-10 ease-in duration-200'>
                    <a href='/'>About</a>
                  </li>
                  <li className='uppercase text-gray-700 font-medium cursor-pointer text-base lg:text-base pt-10 md:pt-0 hover:text-orange-500 ease-in duration-200 md:ml-5 lg:ml-10'>
                    <a href='/'>Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
        <div className='h-4/6 bg-hero lg:bg-cover lg:h-5/6 flex flex-col justify-center items-center'>
          <h1 className='text-4xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-white font-black leading-relaxed md:leading-10 capitalize'>
            I&apos;m Cinematographer
          </h1>
          <div className='py-12'>
            <a
              href='#'
              className='focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-700 bg-orange-600 transition duration-300 ease-in-out hover:bg-orange-700 lg:text-xl lg:font-bold  rounded text-white px-4 sm:px-10 border-white border-2 py-2 sm:py-4 text-sm uppercase'
            >
              Get a Quote
            </a>
            <a
              href=''
              className='ml-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-700 bg-transparent transition duration-300 ease-in-out hover:border-white lg:text-xl lg:font-bold  hover:text-orange-700 rounded border-white border-2 text-white px-4 sm:px-10 py-2 sm:py-4 text-sm'
            >
              Explore More
            </a>
          </div>
        </div>
      </dh-component>
    </div>
  );
};

export default Hero;
