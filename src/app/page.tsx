import Navbar from "@/components/Navbar";
import Main from "@/components/Main";
import About from "@/components/About-Me";
import Skills from "@/components/Skills";
import Portfolio from "@/components/Portfolio";
import Experience from "@/components/Experience";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Services from "@/components/Services";


function Home(){
  return(
    <div className="scroll-smooth">
      < Navbar />
      <div id="main">< Main /></div>
      <div id="about">< About /></div>
      <div id="services">< Services /></div>
      {/* <div id="skills">< Skills /></div> */}
      <div id="portfolio">< Portfolio /></div>
      < Experience />
      < Testimonials />
      <div id="contact">< Contact /></div>
      < Footer />
    </div>
  );
}

export default Home;