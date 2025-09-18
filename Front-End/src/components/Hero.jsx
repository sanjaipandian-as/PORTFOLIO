import { useState } from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import "./style.css";
import logotb from "../assets/logoITB.png";
import Portfolio from "../assets/Sanjaiport.png";

const Hero = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <section
        id="hero"
        className="relative w-full h-screen font-sans bg-black overflow-hidden"
      >
        <div className="absolute top-0 left-0 h-full w-[50%] bg-gray-200 diagonal-clip z-10">
          <div className="absolute top-8 left-8 text-3xl font-bold text-black tracking-[0.2em] z-30">
            SP
          </div>
        </div>

        <div className="absolute top-0 left-0 h-full w-[50%] z-20 flex flex-col justify-center pl-20 pr-10">
          <div>
            <h2 className="text-xl font-normal mb-3 text-gray-800">Hi, I am</h2>
            <h1 className="text-7xl font-extrabold mb-3 text-black">
              Sanjai Pandian
            </h1>
            <h3 className="text-xl text-gray-600 mb-10">
              Front-end Developer / AI Enthusiast
            </h3>
          </div>

          <div className="flex gap-4">
            <a
              href="mailto:sanjaipandian.as@gmail.com"
              aria-label="Email"
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-[#C4C4C4] text-black hover:bg-neutral-400 rounded-md transition-colors"
            >
              <FaEnvelope size={24} />
            </a>

            <a
              href="https://github.com/sanjaipandian-as"
              aria-label="GitHub"
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-[#C4C4C4] text-black hover:bg-neutral-400 rounded-md transition-colors"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/sanjai-pandian-682629308/"
              aria-label="LinkedIn"
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-[#C4C4C4] text-black hover:bg-neutral-400 rounded-md transition-colors"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>

        <div className="absolute top-0 right-0 h-full w-[50%]">
          <nav className="absolute top-8 right-19 flex items-center gap-18 text-white font-medium z-30">
            <a href="#about" className="hover:underline">
              About me
            </a>
            <a href="#skills" className="hover:underline">
              Skills
            </a>
            <a href="#portfolio" className="hover:underline">
              Portfolio
            </a>
            <a
              href="#contact"
              className="px-6 py-2 bg-white text-black rounded-full font-semibold shadow hover:bg-gray-200 transition-colors"
            >
              CONTACT ME
            </a>
          </nav>

          <div className="absolute bottom-0 left-0 h-[90%] w-full flex justify-center items-end">
            <img
              src={Portfolio}
              alt="Sanjai Pandian"
              className="h-full w-auto font-white object-contain"
            />
          </div>
        </div>
      </section>

      <div className="w-full text-white">
        <div className="bg-[#1D1D1D] py-10 px-20 flex items-center overflow-hidden">
          <div className="w-1/2 pr-8">
            <h2 className="text-lg font-bold tracking-widest mb-4">
              Personal Statement
            </h2>
            <p className="text-sm mb-6 leading-relaxed">
              Full-stack web developer specializing in the MERN stack, with
              practical experience in designing and deploying AI-powered
              applications and scalable web solutions. Adept at solving complex
              problems, having completed over 80 data structures and algorithms
              challenges. Committed to writing clean, secure, and efficient code
              while continuously learning and applying best practices to build
              user-friendly, high-performance applications
              {expanded && (
                <>
                  {" "}
                  and solved 80+ leetcode problems. Always exploring new
                  technologies and frameworks to stay ahead in the fast-paced
                  world of software development. Excited to contribute to
                  innovative projects and collaborate with dynamic teams.
                </>
              )}
            </p>
            <button
              onClick={() => setExpanded(!expanded)}
              className="relative px-6 py-3 text-sm font-semibold text-white border-0 bg-transparent cursor-pointer after:absolute after:right-0 after:top-1/2 after:h-6 after:w-1 after:bg-white before:absolute before:left-0 before:top-1/2 before:h-6 before:w-1 before:bg-white transform after:-translate-y-1/2 before:-translate-y-1/2"
            >
              {expanded ? "LESS" : "MORE"}
            </button>
          </div>

          <div className="w-1/2 h-48 relative pr-50px">
            <img
              src={logotb}
              alt="Background Logo"
              className="absolute top-10 left-1/4 h-[250%] w-auto -translate-y-1/2 opacity-50 pointer-events-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
