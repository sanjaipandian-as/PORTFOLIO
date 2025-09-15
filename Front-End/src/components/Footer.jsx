import { FaFacebookF, FaLinkedinIn, FaInstagram, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 text-center">
      <div className="mb-4">
        <a href="#top" className="text-xs tracking-widest hover:underline">
          ↑ BACK TO TOP
        </a>
      </div>
      <div className="flex justify-center space-x-6 mb-4">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebookF />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="mailto:your-email@example.com">
          <FaEnvelope />
        </a>
      </div>
      <div className="text-xs text-gray-400">
        ©2025 Sanjai pandian Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
