import React from 'react'
import PortoCard from "./Portfolio-Card";

const Portfolio = () => {

  const portfolioItems: { type:string; title: string; desc: string; image?: string; projectLink?: string }[] = [

    {
      type: "Web Design",
      title: "Personal Website",
      desc: "This is my personal portfolio website showcasing my background, projects, and tech skills. It's designed with a clean and responsive layout for easy navigation.",
      image: "/personal-porto-web.png",
      projectLink: "https://github.com/chessstaaa/portfolio-web",
    },
    {
      type: "Web Design",
      title: "RYBTravel",
      desc: "RYBTravel is an interactive map website showing travel and bus agencies around Greater Bandung. It’s built with React.js, Tailwind CSS, and Leaflet, using Google Maps–scraped data stored in a MySQL database.",
      image: "/coming-soon.jpg",
    },
    {
      type: "Game Project",
      title: "Platformer Game",
      desc: "A simple 2D platformer inspired by Super Mario, developed with Python and Pygame. Players run, jump, and overcome obstacles to reach the end of each stage.",
      image: "/SS1.png",
      projectLink: "https://github.com/chessstaaa/Platformer-Pygame",
    },
    {
      type: "Web Design",
      title: "Company Website",
      desc: "A frontend website inspired by the official Red Bull Racing F1 Team design, featuring a modern look, smooth animations, and a professional feel focused on aesthetics and user experience.",
      image: "/company-web-porto.png",
      projectLink: "https://github.com/chessstaaa",
    },
  ]

  return (
    <div id='portfolio' className="w-full bg-white">
        <div className="container mx-auto">
            <div className="py-40">
              <div className="px-8 space-y-2">
                <h1 className="font-semibold xl:text-4xl text-3xl hover:underline">
                  MY PORTFOLIO.
                </h1>
                <p className="text-sm md:text-base md:ml-auto md:mt-0 font-semibold">
                  Below is a list of projects I have worked on.
                </p>
              </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 mt-8 px-8">
              {portfolioItems.map((portfolioItem, index) => {
                return (
                  <PortoCard
                    key={index}
                    type={portfolioItem.type}
                    title={portfolioItem.title}
                    description={portfolioItem.desc}
                    image={portfolioItem.image}
                    projectLink={portfolioItem.projectLink}
                  />
                );
              })}
            </div>
          </div>



        </div>
    </div>
  )
}

export default Portfolio