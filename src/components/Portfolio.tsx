import React from 'react'
import PortoCard from "./Portfolio-Card";

const Portfolio = () => {

  const portfolioItems: { title: string; desc: string; image?: string; projectLink?: string }[] = [

    {
      title: "Web Design: Personal Website",
      desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet.",
      image: "/coming-soon.jpg",
      projectLink: "https://example.com/personal-website",
    },
    {
      title: "Web Design: Smartech",
      desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet.",
      image: "/coming-soon.jpg",
    },
    {
      title: "Web Design: RYBTravel",
      desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet.",
      image: "/coming-soon.jpg",
    },
    {
      title: "Platformer Pygame",
      desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet.",
      image: "/SS1.png",
      projectLink: "https://github.com/chessstaaa/Platformer-Pygame",
    },
    {
      title: "Web Design: Company Website",
      desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet.",
      image: "/coming-soon.jpg",
      projectLink: "https://github.com/chessstaaa",
    },
  ]

  return (
    <div id='portfolio' className="w-full bg-white">
        <div className="container mx-auto">
            <div className="py-40">
              <h1 className="font-semibold px-8 flex items-end gap-2">
                <span className="xl:text-4xl text-3xl hover:underline">MY PORTFOLIO.</span>
                - Below is a list of projects I have worked on.
              </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 mt-8 px-8">
              {portfolioItems.map((portfolioItem, index) => {
                return (
                  <PortoCard
                    key={index}
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