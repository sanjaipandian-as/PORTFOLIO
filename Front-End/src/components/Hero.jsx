import { useState } from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Hero = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative w-full h-screen font-sans bg-white overflow-hidden">
        {/* Navigation */}
        <nav className="absolute top-6 right-16 flex items-center gap-10 text-black font-medium font-bold z-30">
          <a href="#about" className="hover:underline">About me</a>
          <a href="#skills" className="hover:underline">Skills</a>
          <a href="#portfolio" className="hover:underline">Portfolio</a>
          <a
            href="#contact"
            className="px-6 py-2 bg-white text-black rounded-full font-semibold shadow hover:bg-gray-200 transition"
          >
            CONTACT ME
          </a>
        </nav>

        {/* Logo / Branding */}
        <div className="absolute top-8 left-8 text-xl font-extrabold z-30">
          <span className="tracking-widest">SANJAI</span>
        </div>

        {/* Content */}
        <div className="flex h-full">
          {/* Left Side */}
          <div className="relative w-1/2 bg-[#f5f6f8] flex flex-col justify-center px-20 clip-left z-20">
            <h2 className="text-lg font-light mb-3">Hi, I am</h2>
            <h1 className="text-5xl font-extrabold mb-3">Sanjai Pandian</h1>
            <h3 className="text-lg text-gray-600 mb-10">
              Full-Stack Developer & AI Enthusiast
            </h3>
            <div className="flex gap-6 text-gray-700">
              <a
                href="mailto:example@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-white shadow-md hover:shadow-lg rounded-md"
              >
                <FaEnvelope size={22} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-white shadow-md hover:shadow-lg rounded-md"
              >
                <FaGithub size={22} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-white shadow-md hover:shadow-lg rounded-md"
              >
                <FaLinkedin size={22} />
              </a>
            </div>
          </div>

          {/* Right Side */}
          <div className="relative w-1/2 bg-black flex items-end justify-center clip-right">
            <img
              src="/profile.png"
              alt="profile"
              className="h-[90%] object-contain relative z-20"
            />
          </div>
        </div>

        {/* Clip Styles */}
        <style jsx>{`
          .clip-left {
            clip-path: polygon(0 0, 100% 0, 80% 100%, 0% 100%);
          }
          .clip-right {
            clip-path: polygon(20% 0, 100% 0, 100% 100%, 0% 100%);
          }
        `}</style>
      </section>

      {/* Personal Statement */}
      <div className="w-full text-white">
        <div className="bg-black py-10 px-20">
          <h2 className="text-lg font-bold tracking-widest mb-4">
            Personal Statement
          </h2>
          <p className="text-sm max-w-4xl mb-6 leading-relaxed">
            Full-stack web developer specializing in the MERN stack, with
            practical experience in designing and deploying AI-powered
            applications and scalable web solutions. Adept at solving complex
            problems, having completed over 80 data structures and algorithms
            challenges. Committed to writing clean, secure, and efficient code
            while continuously learning and applying best practices to build
            user-friendly, high-performance applications
            {expanded && (
              <>
                {" "}and solved 80+ leetcode problems. Always exploring new
                technologies and frameworks to stay ahead in the fast-paced
                world of software development. Excited to contribute to
                innovative projects and collaborate with dynamic teams.
              </>
            )}
          </p>
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-sm font-semibold border-b border-white pb-1 hover:text-gray-300 transition"
          >
            {expanded ? "READ LESS" : "READ MORE"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
