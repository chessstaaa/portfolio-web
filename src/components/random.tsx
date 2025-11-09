'use client';
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  name: string;
  text: string;
  image: string;
}

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const testimonials: Testimonial[] = [
    {
      name: 'Max Verstappen',
      text: 'I had an amazing experience working with this team. Their expertise and dedication helped me achieve my goals efficiently and effectively.',
      image: '/max.jpg'
    },
    {
      name: 'Lewis Hamilton',
      text: 'Excellent service and professional team. They exceeded all my expectations and delivered outstanding results that transformed my business.',
      image: '/lewis.jpg'
    },
    {
      name: 'PADUKA KING Charles Leclerc',
      text: 'Working with this team was an absolute pleasure. Their attention to detail and commitment to excellence is truly remarkable.',
      image: '/leclerc.jpg'
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="py-32 px-8 flex items-center justify-center">
      <div className="max-w-4xl w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-semibold text-gray-900 hover:underline">TESTIMONIALS.</h1>
        </div>

        {/* Testimonial Card */}
        <div className="">
          <div className="bg-white border rounded-2xl p-12 shadow-md">
            <div className="flex flex-col md:flex-row items-center gap-12">
              
              {/* Image Section */}
              <div className="w-72 h-72 rounded-2xl border overflow-hidden">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content Section */}
              <div className="flex-1 space-y-4">
                <h3 className="text-3xl font-semibold text-gray-900">
                  {testimonials[currentIndex].name}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed text-justify">
                  {testimonials[currentIndex].text}
                </p>
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="flex justify-between items-center mt-12 border rounded-full">
              <button
                onClick={prevTestimonial}
                className="p-3 rounded-full hover:bg-gray-100 transition-colors duration-200"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-8 h-8 text-gray-700" />
              </button>

              {/* Dots Indicator */}
              <div className="flex gap-1">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? 'bg-gray-800 w-8'
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="p-3 rounded-full hover:bg-gray-100 transition-colors duration-200"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-8 h-8 text-gray-700" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;