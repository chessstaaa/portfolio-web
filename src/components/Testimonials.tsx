import React from 'react'
import TestimonialsCard from './Testimonials-Card';

const Testimonials = () => {

  const testimonialsItem: { name: string; desc: string; image?: string; }[] = [
    {
      name: "Max Verstappen",
      desc: "This website is faster than my Red Bull on a straight line! Clean design, smooth performance — truly a world champion of web design!",
      image: "/max.jpg",
    },
    {
      name: "Lewis Hamilton",
      desc: "I've seen a lot of cool websites, but this one's got that elegant Ferrari vibe. Stylish, fast, and perfectly executed. Big respect to the developer!",
      image: "/lewis.jpg",
    },
    {
      name: "Charles Leclerc",
      desc: "Looks amazing, super responsive, and easy to use. If our SF-25 car was as smooth as this website, I'd be winning every weekend!",
      image: "/leclerc.jpg",
    }
  ]

  return (
    <div className='bg-white'>
      <div className='container mx-auto py-30'>
        <h1 className="xl:text-4xl text-3xl font-semibold px-8 flex gap-2">
          <span className="hover:underline">TESTIMONIALS.</span>
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8 px-8">
          {testimonialsItem.map((testimonialsItem, index) => {
            return (
              <TestimonialsCard
                key={index}
                name={testimonialsItem.name}
                description={testimonialsItem.desc}
                image={testimonialsItem.image}
              />
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default Testimonials