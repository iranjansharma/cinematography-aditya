const About = () => {
  return (
    <>
      <p className='container mx-auto px-4 lg:py-6 my-6 text-black lg:text-5xl uppercase font-bold'>
        About
      </p>
      <div className='container mx-auto flex flex-wrap '>
        <div>
          <img
            src='/about.jpg'
            alt='About Img'
            className='w-[650px] lg:rounded-lg'
          />
        </div>
        <div className='flex-1 px-4 py-2 lg:px-16 '>
          <p className='text-[14px] text-gray-600 italic font-light leading-6 lg:text-[16px]'>
            Aditya Singh is a photographer and filmmaker.Based in Delhi,
            India. At the age of 20, He became interested in photography after
            seeing films. Aditya was able to understand the wider picture of a
            global company because to his upbringing during the social media and
            digital technology boom. He began working on projects as a
            freelancer after completing a diploma in photography, and he
            immediately felt the transfer to filmmaking. A few years later, He
            began routinely Working for publications and customers. Currently
            residing in Delhi and frequently traveling for business, working
            around the nation.
          </p>
          <h1 className='text-2xl font-extrabold mt-10'>Follow :</h1>
          <div className='flex mt-4 '>
            <a
              href='https://www.instagram.com/singhaditya_as'
              target='_blank'
              rel='noreferrer'
            >
              <img
                src='/insta.jpg'
                alt='Instagram'
                className='w-[40px] h-[40px] mr-2 hover:scale-125 transform transition duration-300 ease-in-out'
              />
            </a>
            <a
              href='https://youtube.com/@therollinfilms'
              target='_blank'
              rel='noreferrer'
            >
              <img
                src='/utube.png'
                alt='Youtube'
                className='w-[60px] h-[43px] mr-2 hover:scale-125 transform transition duration-300 ease-in-out'
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
