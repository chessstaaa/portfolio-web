import { DiVisualstudio } from "react-icons/di";
import { RiComputerLine } from "react-icons/ri";
import { RiPenNibFill } from "react-icons/ri";
import { MdDesignServices } from "react-icons/md";
import Card from "./Card";

function Skills() {

  const skills = [
    {
      icon: <DiVisualstudio className="text-4xl" />,
      title: "Basic Programming",
      desc: "Proficient in the fundamentals of programming languages such as Python, JavaScript, and C. Experienced in writing clean, efficient, and maintainable code while applying logical problem-solving and algorithmic thinking to develop practical solutions.",
    },
    {
      icon: <RiPenNibFill className="text-4xl" />,
      title: "UI & UX Design",
      desc: "Skilled in the basics of User Interface (UI) and User Experience (UX) design using Figma and modern design principles. Able to create visually appealing and user-friendly interfaces focused on accessibility, consistency, and seamless user interaction.",
    },
    {
      icon: <RiComputerLine className="text-4xl" />,
      title: "Web Development",
      desc: "Knowledgeable in the core concepts of web development, including HTML, CSS, and popular frameworks like React and Next.js. Experienced in building responsive, dynamic, and high-performance websites that provide smooth user experiences across devices.",
    },
    {
      icon: <MdDesignServices className="text-4xl" />,
      title: "Graphic Design",
      desc: "Proficient in the fundamentals of graphic design using Adobe Photoshop, Illustrator, and Canva. Capable of producing creative visual content that aligns with branding goals, combining aesthetic design with effective communication.",
    },
  ];

  return (
    <div id="skills" className="w-full bg-[url('/bg2.jpg')] bg-size-[600px]">
      <div className="bg-white/96">
        <div className="container mx-auto">
          <div className="py-8 md:py-40">
            <h1 className="xl:text-4xl text-3xl font-semibold text-right px-8 gap-2">
              <span className="hover:underline">MY SKILLS.</span>
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 mt-8 px-8">
              {skills.map((skill, index) => {
                return <Card key={index} title={skill.title} description={skill.desc} icon={skill.icon} />;
              })}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Skills;