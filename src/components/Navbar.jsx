import { useState } from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <dh-component>
      <nav className='w-full border-b'>
        <div className='px-4 py-4 md:py-0 container mx-auto flex items-center justify-between'>
          <div aria-label='Home. logo' role='img'>
            {/* <img
                className='w-[150px] md:w-[250px] mix-blend-multiply'
                src='/logo.jpg'
                alt='logo'
              /> */}
            <p className='text-xl capitalize'>
              <Link to='/'>
                The Rollin<span className='text-orange-500'> Films</span>
              </Link>
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
                  <Link to='/'>Home</Link>
                </li>
                <li className='uppercase text-gray-700 font-medium cursor-pointer text-base lg:text-base pt-10 md:pt-0 hover:text-orange-500 ease-in duration-200 md:ml-5 lg:ml-10'>
                  <Link to='/Cinematography'>Cinematography</Link>
                </li>
                <li className='uppercase text-gray-700 font-medium cursor-pointer text-base lg:text-base pt-10 md:pt-0 hover:text-orange-500 ease-in duration-200 md:ml-5 lg:ml-10'>
                  <Link to='/Photography'>Photography</Link>
                </li>
                <li className='uppercase text-gray-700 font-medium  cursor-pointer text-base lg:text-base pt-10 md:pt-0 hover:text-orange-500 ease-in duration-200 md:ml-5 lg:ml-10'>
                  <Link to='/Quote'>Quote</Link>
                </li>
                <li className='uppercase text-gray-700 font-medium cursor-pointer text-base lg:text-base pt-10 md:pt-0 hover:text-orange-500 md:ml-5 lg:ml-10 ease-in duration-200'>
                  <Link to='/about'>About</Link>
                </li>
                <li className='uppercase text-gray-700 font-medium cursor-pointer text-base lg:text-base pt-10 md:pt-0 hover:text-orange-500 ease-in duration-200 md:ml-5 lg:ml-10'>
                  <Link to='/contact'>Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </dh-component>
  );
};

export default Navbar;
