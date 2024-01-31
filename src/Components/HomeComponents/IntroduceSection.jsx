
import { useSpring, animated } from "react-spring";
import Container from "../Utils/Container";

const IntroduceSection = () => {
  const textAnimation = useSpring({
    opacity: 1,
    transform: "translateY(0)",
    from: { opacity: 0, transform: "translateY(100%)" },
    delay: 500, // Delay the animation by 500 milliseconds
  });

  return (
    <Container>
      <div className="py-10 pt-20 lg:py-1">
        <div>
          <h1 className="text-5xl lg:text-7xl font-bold text-gray-300">
            Introduce
          </h1>
        </div>
        <div className="flex flex-col items-center lg:flex-row">
          <div className="w-full rounded-2xl p-5 md:p-24 lg:p-20 lg:w-2/5">
            <img
              className="w-full rounded-2xl h-full object-cover"
              src="https://i.ibb.co/sbFvwVD/Whats-App-Image-2024-01-31-at-19-20-32-76269aad.jpg"
              alt=""
            />
          </div>

          <div className="w-full text-center lg:text-start space-y-4 lg:-mt-24 lg:w-3/5">
            <h4 className="text-3xl text-slate-600 font-bold">
              Hello, I'm Abdullah Al Kafi
            </h4>
            <animated.p
              className="text-4xl md:text-6xl font-bold"
              style={textAnimation}
            >
              <span className="transition translate-y-2">Full-Stack</span>{" "}
              <span>Web</span> <span>Developer.</span>
            </animated.p>
            <p>
              Iʼm a dedicated full-stack developer with a passion for crafting
              engaging web experiences. With a focus on creating innovative
              solutions, Iʼm here to bring your digital ideas to life.
            </p>
            <button className="btn bg-black hover:bg-black hover:scale-105 text-white">
              About More
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default IntroduceSection;