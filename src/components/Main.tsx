import { Button } from "@/components/ui/button"
import { BiSolidContact } from "react-icons/bi";
import { FaArrowDown } from "react-icons/fa";


function Main(){
  return(
    <div id="home" className="lg:mt-16 mt-24">
      <div className="container mx-auto px-8 py-4 ">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 ">
          {/* LEFT SIDE */}
          <div className="flex flex-col justify-center xl:space-y-6 space-y-5 ">
            <p className="xl:text-2xl text-xl">
              HI THERE,
            </p>
            <h1 className="xl:text-4xl text-3xl font-semibold">
              I'M <span className="text-5xl px-4 border rounded-full shadow-md hover:bg-black hover:text-white">Chesta</span>
            </h1>
            <p className="xl:text-xl text-md">
              alias, <span className="font-semibold italic hover:underline">kai</span>. Software Developer & Designer.
            </p>
            <p className="xl:text-lg text-md text-justify">
              A computer engineering student based in Indonesia with strong interests and skills in software development, particularly in web development, artificial intelligence, and data science. In addition, I have a passion for the arts, including graphic design, illustration, and animation.
            </p>
            <div className="flex flex-col lg:flex-row justify-center lg:justify-start gap-2">
              <a href="#contact">
                <Button size="lg" variant="outline" className="text-lg font-semibold rounded-3xl shadow-md w-full hover:bg-black hover:text-white">Contact Me<BiSolidContact /></Button>
              </a>
              <a href="#portfolio" >
                <Button size="lg" variant="outline" className="text-lg font-semibold rounded-3xl shadow-md w-full hover:bg-black hover:text-white">Portfolio<FaArrowDown /></Button>
              </a>
            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="">
            <img src="foto-hero.jpg" alt="foto-hero" className="scale-75 rounded-full lg:rounded-none"/>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default Main;