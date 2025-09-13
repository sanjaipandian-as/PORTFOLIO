import { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Explore TN",
    description: "A tourism web app for Tamil Nadu featuring hidden gems, guides, hotels, and AI-powered trip recommendations.",
    tech: "React, Node.js, MongoDB, TailwindCSS, OpenAI API",
    github: "https://github.com/sanjaipandian-as/Explore-TN",
    live: "https://sanjai-exploretn.netlify.app/",
    image: "https://www.tamilnadutourism.tn.gov.in/img/pages/thumb/ooty-1655457424_bca80f81e8391ebdaaca.webp"
  },
  {
    title: "ProctorX",
    description: "A secure online quiz platform with professional exam monitoring and token-based authentication for teachers and students.",
    tech: "React, Node.js, Express, MongoDB, JWT",
    github: "",
    live: "",
    image: "https://cdn.dribbble.com/users/108899/screenshots/3440123/media/597545b1f61a0700f66a0e42e1a53cbc.png?resize=400x0"
  },
  {
    title: "AI Chatbot Project",
    description: "An AI-powered chat interface integrated with OpenAI API for providing dynamic responses and recommendations.",
    tech: "React, Node.js, OpenAI API",
    github: "",
    live: "",
    image: "https://via.placeholder.com/400x250?text=AI+Chatbot"
  },
  {
    title: "Luxivia eCommerce",
    description: "A modern eCommerce platform with user-friendly UI, product management, and secure payment integration.",
    tech: "React, Node.js, MongoDB, TailwindCSS, Stripe",
    github: "",
    live: "",
    image: "https://via.placeholder.com/400x250?text=Luxivia"
  }
];

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
    <section id="portfolio" className="w-full bg-gray-50 py-24 px-6 flex flex-col items-center relative">
      <h2 className="text-4xl font-bold text-center mb-16 border-b-4 inline-block border-black pb-3">
        Portfolio
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-[1200px] w-full justify-center">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300 group"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
              <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-gray-200 mb-2">{project.description}</p>
              <p className="text-sm text-gray-300 mb-4">Tech: {project.tech}</p>
              <div className="flex gap-4">
                <button
                  onClick={() => handleLinkClick(project.github)}
                  className="text-white hover:text-gray-300 transition-colors"
                >
                  <FaGithub size={24} />
                </button>
                <button
                  onClick={() => handleLinkClick(project.live)}
                  className="text-white hover:text-blue-400 transition-colors"
                >
                  <FaExternalLinkAlt size={24} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Full-width popup */}
      {popupVisible && (
        <div className="fixed bottom-0 left-0 w-full bg-black text-white p-6 flex flex-col items-center z-50 animate-slide-up">
          <p className="mb-4 text-center text-lg">
            This link is not available. Please raise a ticket via the contact form.
          </p>
          <div className="flex gap-4">
            <button
              onClick={closePopup}
              className="bg-green-600 hover:bg-green-700 px-6 py-2 rounded-lg transition-colors"
            >
              OK
            </button>
            <button
              onClick={closePopup}
              className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded-lg transition-colors"
            >
              Decline
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes slide-up {
          0% { transform: translateY(100%); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        .animate-slide-up {
          animation: slide-up 0.3s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Portfolio;
