function About(){
  return(
    <div id="about" className="w-full bg-white">
        <div className="container mx-auto">
            <div className="py-40">
              <h1 className="xl:text-4xl text-3xl font-semibold px-8 flex gap-2">
                <span className="hover:underline">ABOUT ME.</span>
              </h1>
              <p className="px-4 sm:px-0 mt-8 text-md sm:text-lg text-justify">
                I'm a Computer Engineering student based in Indonesia, with strong interests in software development, particularly in web development, artificial intelligence, and data science. I view technology as more than just code—it’s a way to create meaningful, optimized solutions that make an impact. Alongside my technical focus, I’m also passionate about the arts, including graphic design, illustration, and animation, believing that creativity and logic together can produce powerful and engaging digital experiences. Skilled in Python, JavaScript, and C, and familiar with tools like Figma, React, Next.js, and the Adobe Creative Suite, I strive to merge technical precision with artistic expression. For me, every project is a chance to learn, innovate, and grow into a developer and designer who bridges creativity and technology.
              </p>
            </div>
        </div>
    </div>
  );
}

export default About;