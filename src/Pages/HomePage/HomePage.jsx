
import BannerSection from "../../Components/HomeComponents/BannerSection";
import IntroduceSection from "../../Components/HomeComponents/IntroduceSection";
import ScrollToTop from "react-scroll-to-top";
import SkillSection from "../../Components/HomeComponents/SkillSection";
import ProjectSection from "../../Components/HomeComponents/ProjectSection";
import ContactSection from "../../Components/HomeComponents/ContactSection";
import FooterSection from "../../Components/HomeComponents/FooterSection";

const HomePage = () => {
  return (
  <div>
  <ScrollToTop smooth color="#6f00ff" />
      <BannerSection/>
      <IntroduceSection></IntroduceSection>
      <SkillSection></SkillSection>
      <ProjectSection></ProjectSection>
      <ContactSection></ContactSection>
      <FooterSection></FooterSection>
  </div> 
  
 
  )



};

export default HomePage;
