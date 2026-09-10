function About() {
  return (
    <div id="about" className="bg-[#f7f7f9] border-b">
      <div className="container mx-auto px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-10">

          {/* LEFT SIDE: MY IMAGE */}
          <img src="foto-hero.jpg" alt="foto-hero" className="w-full max-w-sm" />

          {/* RIGHT SIDE: ABOUT ME */}
          <div className="flex flex-col">
            <h1 className="xl:text-4xl text-3xl font-bold mb-8">
              ABOUT ME:
            </h1>
            <p className="text-md sm:text-lg text-justify mb-6">
              I am a Computer Engineering graduate from Telkom University, Bandung, currently based in Bogor. I have a foundational background in web development, with a focus on front-end design using Next.js and Tailwind CSS. In addition, I possess basic knowledge of programming languages such as Python, C, and Java, and have a strong interest in cloud computing, machine learning/deep learning, and data science.
            </p>
            <p className="text-md sm:text-lg text-justify">
              I am a highly motivated individual who is eager to continuously learn, improve my skills, and adapt to the rapidly evolving technology landscape. I am committed to growing as a professional and contributing meaningfully in the field of technology.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;