import { useState } from "react";
import { FaGithub, FaExternalLinkAlt, FaStar } from "react-icons/fa";
import finallogo from "../assets/final_logo.png";
import ProctorX from "../assets/ProctorX1.png";
import prodevai from "../assets/Prodevai.png";
import Luxvia from "../assets/Luxvia.png";
const projects = [
  {
    title: "Explore TN",
    description: "A tourism web app for Tamil Nadu featuring hidden gems, guides, hotels, and AI-powered trip recommendations.",
    tech: "React, Node.js, MongoDB, TailwindCSS, OpenAI API",
    github: "https://github.com/sanjaipandian-as/Explore-TN",
    live: "https://explore-tnoffcial.netlify.app/",
    image: finallogo, 
    category: "Web App",
    level: "Advanced"
  },
  {
    title: "ProctorX",
    description: "A secure online quiz platform with professional exam monitoring and token-based authentication for teachers and students.",
    tech: "React, Node.js, Express, MongoDB, JWT",
    github: "https://github.com/sanjaipandian-as/ProctorX.git",
    live: "",
    image: ProctorX, 
    category: "Education",
    level: "Advanced"
  },
  {
    title: "ProDev-AI",
    description: "An AI-powered chat interface integrated with OpenAI API for providing dynamic responses and recommendations with backend frontend code with clear file structure.",
    tech: "React, Node.js, OpenAI API",
    github: "https://github.com/sanjaipandian-as/PRO-DEV_AI.git",
    live: "https://prodev-ai.netlify.app/",
    image: prodevai,
    category: "AI",
    level: "Intermediate"
  },
  {
    title: "Luxivia eCommerce",
    description: "A modern eCommerce platform with user-friendly UI, product management, RBAC used with Admin Dashboard with Seller profile with User friendly interface.",
    tech: "React, Node.js, MongoDB, TailwindCSS, Stripe",
    github: "https://github.com/sanjaipandian-as/E-Commerse_IN.git",
    live: "",
    image: Luxvia,
    category: "E-Commerce",
    level: "Advanced"
  },
];

const ProjectCard = ({ project, handleLinkClick }) => {
  return (
    <div className="relative w-80 h-[280px] rounded-2xl overflow-hidden cursor-pointer transition-transform duration-300 bg-gradient-to-br from-gray-50 to-gray-200 shadow-lg hover:-translate-y-2 hover:shadow-2xl group">
      
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-white transition-opacity duration-300 p-8 text-center group-hover:opacity-0">
        <div className="w-30 h-30 rounded-full overflow-hidden mb-6 border-4 border-yellow-400 flex items-center justify-center bg-gray-50">
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
        </div>
        <h3 className="text-2xl font-semibold text-gray-700 m-0">{project.title}</h3>
      </div>

      
      <div className="absolute inset-0 flex flex-col p-6 bg-gradient-to-br from-amber-50 to-orange-100 text-gray-800 opacity-0 transition-opacity duration-300 group-hover:opacity-100 overflow-y-auto scrollbar-hide">
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2 text-gray-800">{project.title}</h3>
          <div className="flex gap-2">
            <span className="bg-orange-200 text-orange-800 px-3 py-1 rounded-xl text-xs font-medium">
              {project.category}
            </span>
          </div>
        </div>
        
        <div className="flex flex-col gap-2 mb-4">
          <div className="flex items-center gap-2 text-sm text-gray-700">
            <FaStar className="w-3.5 h-3.5 text-orange-600" />
            <span>{project.level}</span>
          </div>
        </div>

        <p className="text-sm leading-relaxed mb-3 text-gray-700">{project.description}</p>
        <p className="text-xs font-mono text-orange-700 mb-4 font-medium">{project.tech}</p>

        <div className="flex gap-3 mt-auto">
          <button 
            className="flex-1 flex items-center justify-center gap-2 py-3 bg-gray-800 text-white rounded-lg text-sm font-medium transition-all duration-200 hover:bg-gray-600 hover:-translate-y-0.5"
            onClick={() => handleLinkClick(project.github)}
          >
            <FaGithub /> GitHub
          </button>
          <button 
            className="flex-1 flex items-center justify-center gap-2 py-3 bg-orange-600 text-white rounded-lg text-sm font-medium transition-all duration-200 hover:bg-orange-500 hover:-translate-y-0.5"
            onClick={() => handleLinkClick(project.live)}
          >
            <FaExternalLinkAlt /> Live Demo
          </button>
        </div>
      </div>
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
    <section className="w-full bg-gray-50 py-20 px-6 min-h-screen">
      <div className="max-w-6xl text-center mx-auto">
        <h2 className="inline-block border-4 border-gray-800 px-8 py-4 text-2xl font-bold tracking-widest uppercase mb-12 bg-white text-gray-800">
    Portfolio
  </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index} 
              project={project} 
              handleLinkClick={handleLinkClick} 
            />
          ))}
        </div>
      </div>

      {popupVisible && (
        <div className="fixed bottom-0 left-0 w-full bg-gray-800 text-white p-6 z-50 animate-slide-up">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-lg mb-4">
              This link is not available. Please raise a ticket via the contact form.
            </p>
            <div className="flex gap-4 justify-center flex-col sm:flex-row">
              <button 
                onClick={closePopup} 
                className="px-6 py-3 bg-green-600 hover:bg-green-500 rounded-lg font-semibold transition-colors duration-200"
              >
                OK
              </button>
              <button 
                onClick={closePopup} 
                className="px-6 py-3 bg-red-600 hover:bg-red-500 rounded-lg font-semibold transition-colors duration-200"
              >
                Decline
              </button>
            </div>
          </div>
        </div>
      )}
      
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        @keyframes slide-up {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
      `}</style>
    </section>
  );
};


export default Portfolio;