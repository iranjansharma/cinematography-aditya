const About = () => {
  return (
    <>
      <p className='container mx-auto px-4 lg:py-6 my-6 text-black lg:text-5xl uppercase font-bold'>
        About Section
      </p>
      <div className='container mx-auto flex w-full flex-wrap'>
        <div className=''>
          <img
            src='/about.jpg'
            alt='About Img'
            className='w-[700px] lg:rounded-lg'
          />
        </div>
        <div className='w-[800px] px-8'>
          <p className='text-[14px] py-4 text-gray-600 italic font-light leading-6 lg:text-[16px]'>
            Aditya Singh is a photographer and filmmaker.Conceived in Delhi,
            India. At the age of 20, Aditya Singh became interested in
            photography after seeing films. Aditya was able to understand the
            wider picture of a global company because to his upbringing during
            the social media and digital tecshnology boom. He began working on
            projects as a freelancer after completing a diploma in photography,
            and he immediately felt the transfer to filmmaking. A few years
            later, He began routinely Working for publications and customers.
            Currently residing in Delhi and frequently traveling for business,
            working around the nation.
          </p>
          <h1 className='text-xl font-semibold'>Social Media</h1>
        </div>
      </div>
    </>
  );
};

export default About;
