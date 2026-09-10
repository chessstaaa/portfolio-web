import { FaArrowDown, FaDownload } from "react-icons/fa";


function Main() {
  return (
    <div id="home" className="lg:mt-14 mt-24 border-b bg-[#f7f8fa]">
      <div className="container mx-auto px-8 py-4 ">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 ">

          {/* LEFT SIDE */}
          <div className="flex flex-col justify-center ">

            {/* INTRODUCTION */}
            <div className="flex flex-col space-y-2 mb-8">
              <p className="xl:text-xl text-lg text-[#191d20]">
                Welcome! My name is
              </p>
              <h1 className="xl:text-5xl text-3xl font-bold text-[#191d20]">
                DARRELL CHESTA ADABI
              </h1>
              <p className="xl:text-xl text-md mb-8 text-[#191d20]">
                I'm a Software Engineer & Designer.
              </p>
              <p className="xl:text-lg text-md text-justify text-[#191d20]">
                Computer Engineering graduate passionate about software engineering, with a focus on web development and a growing interest in Cloud engineering, Artificial Intelligence, and Data Science. Continuously learning and building to create impactful digital solutions.
              </p>
            </div>

            {/* BUTTONS */}
            <div className="flex flex-col lg:flex-row justify-center lg:justify-start gap-2">
              <a href="#">
                <button className="text-lg text-[#191d20] font-semibold px-4 py-2 border rounded-full w-full bg-white hover:bg-[#191d20] hover:text-[#f7f7f9] flex items-center justify-center gap-2 transition duration-200">
                  Download CV<FaDownload />
                </button>
              </a>
              <a href="#portfolio" >
                <button className="text-lg text-[#191d20] font-semibold px-4 py-2 border rounded-full w-full bg-white hover:bg-[#191d20] hover:text-[#f7f7f9] flex items-center justify-center gap-2 transition duration-200">
                  Portfolio<FaArrowDown />
                </button>
              </a>
            </div>
          </div>

          {/* RIGHT SIDE: MY IMAGE */}
          <div className="">
            <img src="foto-hero.jpg" alt="foto-hero" className="scale-75 rounded-full lg:rounded-none" />
          </div>
        </div>
      </div>
    </div>

  );
}

export default Main;