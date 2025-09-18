import { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import ProctorXImage from "../assets/ProctorX1.png";
import prodevai from "../assets/prodevai.png";
import finallogo from "../assets/final_logo.png";
import luxvia from "../assets/luxvia.png";

const projects = [
  {
    title: "Explore TN",
    description: "A tourism web app for Tamil Nadu featuring hidden gems, guides, hotels, and AI-powered trip recommendations.",
    tech: "React, Node.js, MongoDB, TailwindCSS, OpenAI API",
    github: "https://github.com/sanjaipandian-as/Explore-TN",
    live: "https://explore-tnoffcial.netlify.app/",
    image: finallogo,
  },
  {
    title: "ProctorX",
    description: "A secure online quiz platform with professional exam monitoring and token-based authentication for teachers and students.",
    tech: "React, Node.js, Express, MongoDB, JWT",
    github: "https://github.com/sanjaipandian-as/ProctorX.git",
    live: "",
    image: ProctorXImage,
  },
  {
    title: "ProDev-AI",
    description: "An AI-powered chat interface integrated with OpenAI API for providing dynamic responses and recommendations with backend frontend code with clear file structure.",
    tech: "React, Node.js, OpenAI API",
    github: "https://github.com/sanjaipandian-as/PRO-DEV_AI.git",
    live: "https://prodev-ai.netlify.app/",
    image: prodevai,
  },
  {
    title: "Luxivia eCommerce",
    description: "A modern eCommerce platform with user-friendly UI, product management, RBAC used with Admin Dashboard with Seller profile with User friendly interface.",
    tech: "React, Node.js, MongoDB, TailwindCSS, Stripe",
    github: "https://github.com/sanjaipandian-as/E-Commerse_IN.git",
    live: "",
    image: luxvia,
  },
];

const ProjectCard = ({ project, handleLinkClick }) => {
  return (
    <div className="card">
      <div className="border"></div>
      <div className="content">
        <img src={project.image} alt={project.title} className="project-image" />
        <h3 className="project-title">{project.title}</h3>
        <div className="hover-content">
          <p className="project-description">{project.description}</p>
          <p className="project-tech">Tech: {project.tech}</p>
          <div className="project-links">
            <button onClick={() => handleLinkClick(project.github)}>
              <FaGithub size={24} />
            </button>
            <button onClick={() => handleLinkClick(project.live)}>
              <FaExternalLinkAlt size={24} />
            </button>
          </div>
        </div>
      </div>
      <span className="bottom-text">{project.title}</span>
    </div>
  );
};

const Portfolio = () => {
  const [popupVisible, setPopupVisible] = useState(false);

  const handleLinkClick = (link) => {
    if (!link) {
      setPopupVisible(true);
      return;
    }
    window.open(link, "_blank");
  };

  const closePopup = () => setPopupVisible(false);

  return (
    <section id="portfolio" className="w-full bg-gray-50 py-20 px-6 flex flex-col items-center relative">
      <h2 className="inline-block border-4 border-black px-6 py-3 text-xl font-bold tracking-widest uppercase mb-12">
        Portfolio
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-[1200px] w-full justify-center">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} handleLinkClick={handleLinkClick} />
        ))}
      </div>

      {popupVisible && (
        <div className="fixed bottom-0 left-0 w-full bg-black text-white p-6 flex flex-col items-center z-50 animate-slide-up">
          <p className="mb-4 text-center text-lg">
            This link is not available. Please raise a ticket via the contact form.
          </p>
          <div className="flex gap-4">
            <button onClick={closePopup} className="bg-green-600 hover:bg-green-700 px-6 py-2 rounded-lg transition-colors">
              OK
            </button>
            <button onClick={closePopup} className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded-lg transition-colors">
              Decline
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        .card {
          width: 300px;
          height: 250px;
          background: #243137;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 10px;
          overflow: hidden;
          transition: all 0.5s ease-in-out;
          color: #bd9f67;
        }
        .border {
          position: absolute;
          inset: 0px;
          border: 2px solid #bd9f67;
          opacity: 0;
          transform: rotate(10deg);
          transition: all 0.5s ease-in-out;
        }
        .content {
          text-align: center;
          transition: all 0.5s ease-in-out;
        }
        .project-image {
          width: 100px;
          height: 100px;
          object-fit: cover; /* Changed from contain to cover */
          /* border-radius: 50%; Removed this */
          clip-path: circle(50%); /* Added clip-path for circular visual */
          border: 2px solid #bd9f67;
          margin-bottom: 1rem;
          transition: all 0.5s ease-in-out;
        }
        .project-title {
          font-size: 1.5rem;
          font-weight: bold;
          transition: all 0.5s ease-in-out;
        }
        .hover-content {
          position: absolute;
          inset: 0;
          padding: 20px;
          background: rgba(36, 49, 55, 0.95);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          opacity: 0;
          transition: opacity 0.5s ease-in-out;
        }
        .project-description {
          font-size: 0.9rem;
          color: #e0e0e0;
          margin-bottom: 1rem;
        }
        .project-tech {
          font-size: 0.8rem;
          color: #bd9f67;
          margin-bottom: 1.5rem;
          font-family: monospace;
        }
        .project-links {
          display: flex;
          gap: 1.5rem;
          color: white;
        }
        .project-links button:hover {
          color: #bd9f67;
          transform: scale(1.1);
        }
        .bottom-text {
          position: absolute;
          left: 50%;
          bottom: 13px;
          transform: translateX(-50%);
          font-size: 8px;
          text-transform: uppercase;
          color: #bd9f67;
          opacity: 0;
          letter-spacing: 7px;
          transition: all 0.5s ease-in-out;
        }
        .card:hover {
          transform: scale(1.1);
          color: white;
        }
        .card:hover .border {
          inset: 15px;
          opacity: 1;
          transform: rotate(0);
        }
        .card:hover .content .project-image,
        .card:hover .content .project-title {
          opacity: 0;
        }
        .card:hover .hover-content {
          opacity: 1;
        }
        .card:hover .bottom-text {
          letter-spacing: 3px;
          opacity: 1;
        }
        @keyframes slide-up {
          0% {
            transform: translateY(100%);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-slide-up {
          animation: slide-up 0.3s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Portfolio;