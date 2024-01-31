import data from "../../assets/ProfileAmination.json";
import Lottie from "lottie-react";
import Container from "../Utils/Container";

const BannerSection = () => {
  return (
    <Container>
      {/* <div className="">
        <div className="flex lg:min-h-screen  mt-10 lg:mt-1 lg:gap-14 lg:flex-row px-10 lg:px-5 flex-col-reverse items-center">
          <div className="lg:w-3/5 space-y-6">
            
            <p className="text-4xl   overflow-y-hidden flex-wrap  gap-3 flex md:text-5xl lg:text-6xl font-bold
            lg:font-black">
              <span
                className="overflow-hidden"
                data-aos="fade-up"     
                data-aos-duration="1000"
                data-aos-delay="100" // Delay for the first word
              >
                Transform
              </span>
              <span
                className="overflow-hidden"
                data-aos="fade-up"     
                data-aos-duration="1000"
                data-aos-delay="200" // Delay for the second word
              >
                Your
              </span>
              <span
                className="overflow-hidden"
                data-aos="fade-up"     
                data-aos-duration="1000"
                data-aos-delay="300" // Delay for the third word
              >
                Ideas
              </span>
              <span
                className="overflow-hidden"
                data-aos="fade-up"     
                data-aos-duration="1000"
                data-aos-delay="400" // Delay for the fourth word
              >
                Into
              </span>
              <span
                className="overflow-hidden"
                data-aos="fade-up"     
                data-aos-duration="1000"
                data-aos-delay="500" // Delay for the fifth word
              >
                Online
              </span>
              <span
                className="overflow-hidden"
                data-aos="fade-up"     
                data-aos-duration="1000"
                data-aos-delay="600" // Delay for the sixth word
              >
                Platform
              </span>
            </p>
            <div className="text-lg">
              As a skilled full-stack developer, I specialize in creating
              advanced web applications. Explore my recent projects and articles
              highlighting my Next.js and web development expertise.
            </div>
            <div className="flex  gap-5">
            <button className="btn dark:text-white font-bold text-lg btn-outline px-10 lg:px-14 ">Contact Me</button>
            <button className="btn  font-bold text-lg  hover:bg-black bg-black text-white px-10 lg:px-14">Download CV</button>
            </div>
          </div>
          <div className="lg:w-2/5">

            <Lottie
              animationData={data}
              className="w-full mx-auto"
              loop={true}
            />
          </div>
        </div>
      </div> */}
    </Container>
  );
};

export default BannerSection;