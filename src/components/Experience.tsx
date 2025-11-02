import React from 'react'
import ExperienceCard from "./Experience-Card";

const Experience = () => {

  const experienceItems: { company: string; year: string; city: string; title: string; desc: string }[] = [
    {
      company: "PT. Art Indonesia",
      city: "North Jakarta",
      year: "2022-2023",
      title: "Graphic Designer",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, sed explicabo, voluptates nemo fuga repellat, beatae mollitia iusto nostrum minima error. Doloribus vitae laboriosam deleniti ratione possimus officiis facilis ipsam?"
    },
    {
      company: "Purwadhika",
      city: "South Jakarta",
      year: "2024-2025",
      title: "UI/UX Designer",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, sed explicabo, voluptates nemo fuga repellat, beatae mollitia iusto nostrum minima error. Doloribus vitae laboriosam deleniti ratione possimus officiis facilis ipsam?"
    },
    {
      company: "Purwadhika",
      city: "South Jakarta",
      year: "2024-2025",
      title: "Frontend Developer",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, sed explicabo, voluptates nemo fuga repellat, beatae mollitia iusto nostrum minima error. Doloribus vitae laboriosam deleniti ratione possimus officiis facilis ipsam?"
    },
    {
      company: "Purwadhika",
      city: "South Jakarta",
      year: "2024-2025",
      title: "Backend Developer",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, sed explicabo, voluptates nemo fuga repellat, beatae mollitia iusto nostrum minima error. Doloribus vitae laboriosam deleniti ratione possimus officiis facilis ipsam?"
    },
  ];

  return (
    <div className="w-full bg-[url('https://img.freepik.com/premium-vector/white-wave-lines-background-texture_601200-3040.jpg')] bg-size-[400px]">
      <div className="">
        <div className="container mx-auto">
          <div className="py-8 md:py-40">
            <h1 className="xl:text-4xl text-3xl font-semibold text-right px-8 gap-2">
              <span className="hover:underline">MY EXPERIENCE.</span>
            </h1>

            {/* Card Experience */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mt-8 px-8">
              {experienceItems.map((experienceItem, index) => {
                return (
                  <ExperienceCard
                    key={index}
                    company={experienceItem.company}
                    year={experienceItem.year}
                    city={experienceItem.city}
                    title={experienceItem.title}
                    description={experienceItem.desc}
                  />
                );
              })}
            </div>


          </div>
        </div>
      </div>

    </div>
  )
}

export default Experience

