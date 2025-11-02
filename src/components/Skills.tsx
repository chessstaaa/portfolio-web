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
      desc: "Menguasai dasar-dasar bahasa pemrograman seperti Python, Javascript, dan C.",
    },
    {
      icon: <RiPenNibFill className="text-4xl" />,
      title: "UI & UX Design",
      desc: "Menguasai dasar-dasar desain antarmuka dan pengalaman pengguna (UI/UX) menggunakan Figma dan prinsip desain modern.",
    },
    {
      icon: <RiComputerLine className="text-4xl" />,
      title: "Web Development",
      desc: "Menguasai dasar-dasar pengembangan web menggunakan HTML, CSS, dan framework seperti React dan Next.js.",
    },
    {
      icon: <MdDesignServices className="text-4xl" />,
      title: "Graphic Design",
      desc: "Menguasai dasar-dasar desain grafis menggunakan Adobe Photoshop, Illustrator, dan Canva.",
    },
  ];

  return (
    <div className="w-full bg-[url('/bg2.jpg')] bg-size-[600px]">
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