import { Link } from 'react-router-dom';
const Hero = () => {
  return (
    <div
      className='bg-gray-100 pb-12 overflow-y-hidden h-screen'
      style={{ minHeight: 700 }}
    >
      <dh-component>
        <div className='h-4/6 bg-hero lg:bg-cover lg:h-5/6 flex flex-col justify-center items-center'>
          <h1 className='text-4xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-white font-black leading-relaxed md:leading-10 capitalize'>
            I&apos;m Cinematographer
          </h1>
          <div className='py-12'>
            <Link
              to='/quote'
              className='focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-700 bg-orange-600 transition duration-300 ease-in-out hover:bg-orange-700 lg:text-xl lg:font-bold  rounded text-white px-4 sm:px-10 border-white border-2 py-2 sm:py-4 text-sm uppercase'
            >
              Get a Quote
            </Link>
            <Link
              to='/contact'
              className='ml-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-700 bg-transparent transition duration-300 ease-in-out hover:border-white lg:text-xl lg:font-bold  hover:text-orange-700 rounded border-white border-2 text-white px-4 sm:px-10 py-2 sm:py-4 text-sm'
            >
              Contact
            </Link>
          </div>
        </div>
      </dh-component>
    </div>
  );
};

export default Hero;
