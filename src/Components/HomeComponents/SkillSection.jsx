import Container from '../Utils/Container';

const SkillSection = () => {
  return (
    <Container >
      <div id='skill' className='py-10'>
          <h1 className='text-5xl lg:text-7xl font-bold text-gray-300'>
           MY SKILLS
          </h1>
        </div>
      <div  data-aos="zoom-in"   
     data-aos-duration='800'
              data-aos-delay='500' data-aos- className='py-20  overflow-hidden lg:py-[160px]'>
    
        <div className='grid grid-cols-3 gap-4 items-center justify-center lg:grid-cols-9'>
  <img src='https://i.ibb.co/dtqLR7P/icons8-html-5-144.png' alt='' className='mx-auto' />
  <img src='https://i.ibb.co/61szNJk/icons8-css3-144.png' alt='' className='mx-auto' />
  <img src='https://i.ibb.co/0h8J8ZB/icons8-javascript-144.png' alt='' className='mx-auto' />
  <img src='https://i.ibb.co/6s46TzN/icons8-tailwind-css-144.png' alt='' className='mx-auto' />

  <img
    className='animate-spin mx-auto'
    src='https://i.ibb.co/Jq2Ygqn/icons8-react-144.png'
    alt=''
  />

  <img src='https://i.ibb.co/4mzVqrD/icons8-firebase-144.png' alt='' className='mx-auto' />
  <img src='https://i.ibb.co/dLr9RBY/icons8-node-js-144.png' alt='' className='mx-auto' />
  <img
    className='dark:bg-white rounded-2xl mx-auto'
    src='https://i.ibb.co/r3HLtXr/icons8-express-js-150.png'
    alt=''
  />
  <img
    className='w-[140px] mx-auto'
    src='https://i.ibb.co/kX7cM1S/icons8-mongo-db-96.png'
    alt=''
  />
</div>
        <div className='pt-10'>
          <p className='text-xl text-center font-medium'>
            
            I can make a website using HTML, CSS, JavaScript, React, Tailwind
            CSS, Firebase, Node.js, Express.js, MongoDB.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default SkillSection;
