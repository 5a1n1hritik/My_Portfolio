import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-50 to-gray-200 text-gray-900 font-sans px-4 md:px-8 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <Link
            to="/"
            className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-600 bg-clip-text text-transparent"
            aria-label="Go to homepage"
          >
            Saini<span className="h-8 w-auto text-blue-500">.</span>
          </Link>
        </div>

        <nav className="flex flex-wrap justify-center space-x-6 mb-8 text-sm">
          <Link to="/about" className="hover:text-blue-600 transition-colors" title="Learn more about us">
            About
          </Link>
          <Link to="/projects" className="hover:text-blue-600 transition-colors" title="Explore our projects">
            Projects
          </Link>
          <Link to="/skills" className="hover:text-blue-600 transition-colors" title="View our skills">
            Skills
          </Link>
        </nav>

        <div className="flex justify-center space-x-6 mb-8">
          <a
            href="*"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-blue-600 hover:text-blue-800 transition-transform transform hover:scale-110"
          >
            <i className="bi bi-facebook text-xl" aria-hidden="true"></i>
          </a>
          <a
            href="*"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-pink-600 hover:text-pink-800 transition-transform transform hover:scale-110"
          >
            <i className="bi bi-instagram text-xl" aria-hidden="true"></i>
          </a>
          <a
            href="*"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="text-blue-400 hover:text-blue-600 transition-transform transform hover:scale-110"
          >
            <i className="bi bi-twitter text-xl" aria-hidden="true"></i>
          </a>
        </div>

        <div className="text-center text-sm text-gray-500">
          <small>© {new Date().getFullYear()} Saini. All rights reserved.</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
