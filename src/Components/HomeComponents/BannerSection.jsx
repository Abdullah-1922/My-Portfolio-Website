import data from '../../assets/ProfileAmination.json';
import Lottie from 'lottie-react';
import Container from '../Utils/Container';

const BannerSection = () => {
  return (
    <Container>
      <div className='flex lg:min-h-screen  mt-10 lg:mt-1 lg:gap-14 lg:flex-row  lg:px-5 flex-col-reverse items-center'>
        <div className=' lg:w-3/5 px-4 text-center lg:text-justify space-y-6'>
          <div className='inline-block overflow-hidden w-full text-dark dark:text-light font-bold capitalize    text-center  lg:text-justify lg:text-6xl md:text-5xl text-3xl'>
            <span
              className='inline-block overflow-hidden'
              data-aos='fade-up'
              data-aos-duration='1000'
              data-aos-delay='200'>
              Transform&nbsp;
            </span>
            <span
              className='inline-block overflow-hidden'
              data-aos='fade-up'
              data-aos-duration='1000'
              data-aos-delay='300'>
              Your &nbsp;
            </span>
            <span
              className='inline-block overflow-hidden'
              data-aos='fade-up'
              data-aos-duration='1000'
              data-aos-delay='400'>
              Ideas &nbsp;
            </span>
         
            <span
              className='inline-block overflow-hidden'
              data-aos='fade-up'
              data-aos-duration='1000'
              data-aos-delay='600'>
              Into &nbsp;
            </span>
            <span
              className='inline-block overflow-hidden'
              data-aos='fade-up'
              data-aos-duration='1000'
              data-aos-delay='700'>
              Online &nbsp;
            </span>
            <span
              className='inline-block overflow-hidden'
              data-aos='fade-up'
              data-aos-duration='1000'
              data-aos-delay='800'>
              Platform &nbsp;
            </span>
          </div>
          <div className='text-justify  md:text-lg'>
            As a skilled full-stack developer, I specialize in creating advanced
            web applications. Explore my recent projects and articles
            highlighting my Next.js and web development expertise.
          </div>
          <div className='flex justify-center lg:justify-start gap-5'>
            <button className='btn dark:text-white font-bold text-lg btn-outline sm:px-8 md:px-10 lg:px-14 '>
              Contact Me
            </button>
            <button className='btn  font-bold text-lg  hover:bg-black bg-black text-white sm:px-8 md:px-10  lg:px-14'>
              Download CV
            </button>
          </div>
        </div>
        <div className='lg:w-2/5'>
          <Lottie animationData={data} className='w-full px-8 lg:px-1 mx-auto' loop={true} />
        </div>
      </div>
    </Container>
  );
};

export default BannerSection;
