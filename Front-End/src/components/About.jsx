const About = () => {
  return (
    <section className="w-full bg-gradient-to-b from-gray-100 to-white py-20 text-center font-sans">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="inline-block border-4 border-black px-8 py-3 text-xl font-bold tracking-widest uppercase mb-6">
          About Me
        </h2>
        <p className="text-gray-700 max-w-4xl mx-auto mb-8">
          I’m a tech enthusiast and full-stack developer who loves turning ideas into interactive, real-world applications. I thrive on challenges—whether it’s building AI-driven tools, solving algorithm puzzles, or optimizing code for performance. My goal is to create software that’s not just functional, but intuitive, secure, and scalable. Beyond coding, I’m always exploring new technologies and finding creative ways to make the web smarter and more engaging.
        </p>
        <div className="flex justify-center items-center gap-2 mb-12">
          <span className="h-px w-10 bg-black"></span>
          <a href="#explore" className="uppercase text-sm font-semibold tracking-widest">
            Explore
          </a>
          <span className="h-px w-10 bg-black"></span>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-12">
          <div className="flex-1">
            <h3 className="text-lg font-bold uppercase mb-2">Design</h3>
            <p className="text-gray-600 text-sm max-w-xs mx-auto">
              I can design the site based on your needs and suggestions. I can also design the site 
              from scratch and consult you during the job.
            </p>
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-bold uppercase mb-2">Development</h3>
            <p className="text-gray-600 text-sm max-w-xs mx-auto">
              I can develop the site with clean, efficient code based on your requirements, ensuring 
              performance, scalability, and maintainability.
            </p>
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-bold uppercase mb-2">Maintenance</h3>
            <p className="text-gray-600 text-sm max-w-xs mx-auto">
              I provide ongoing support and maintenance to keep your website updated, secure, 
              and running smoothly over time.
            </p>
          </div>
        </div>

        <div className="flex justify-center items-center mt-16 gap-2">
          <span className="h-px w-12 bg-black"></span>
          <span className="h-[2px] w-8 bg-black"></span>
          <span className="h-px w-12 bg-black"></span>
        </div>
      </div>
    </section>
  );
};

export default About;
