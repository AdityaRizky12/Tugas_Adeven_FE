import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-10">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Left */}
        <div className="text-center md:text-left">
          <h1 className="text-lg font-semibold text-white">
            CRUD App
          </h1>
          <p className="text-sm">
            Dibuat oleh Aditya Rizky Ramadhan menggunakan React + Tailwind
          </p>
        </div>

        {/* Right */}
        <div className="flex items-center gap-4 text-xl">
          <a
            href="https://github.com/AdityaRizky12"
            target="_blank"
            className="hover:text-white"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            className="hover:text-white"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 text-center py-3 text-sm">
        © {new Date().getFullYear()} Aditya Rizky Ramadhan
      </div>
    </footer>
  );
};

export default Footer;
