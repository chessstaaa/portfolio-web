import Navbar from "@/components/Navbar";
import Quotes from "@/components/Quotes";
import Main from "@/components/Main";
import About from "@/components/About-Me";
import Skills from "@/components/Skills";
import Portfolio from "@/components/Portfolio";
import Experience from "@/components/Experience";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";


function Home(){
  return(
    <div>
      < Navbar />
      < Main />
      < Quotes />
      < About />
      < Skills />
      < Portfolio />
      < Experience />
      < Testimonials />
      < Contact />
      < Footer />
    </div>
  );
}

export default Home;