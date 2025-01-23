import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-50 to-gray-200 text-gray-900 font-sans px-4 md:px-8 py-12 animate-fade-in">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <Link
            to="/"
            className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-600 bg-clip-text text-transparent hover:text-opacity-80 transition-opacity"
            aria-label="Go to homepage"
          >
            Saini<span className="h-8 w-auto text-blue-500">.</span>
          </Link>
        </div>

        <nav className="flex flex-wrap justify-center space-x-6 mb-8 text-sm">
          {["about", "projects", "skills"].map((item) => (
            <Link
              key={item}
              to={`/${item}`}
              className="hover:text-blue-600 transition-colors transform hover:scale-110"
              title={`Learn more about ${item}`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          ))}
        </nav>

        <div className="flex justify-center space-x-6 mb-8">
          {[
            { href: "*", label: "Facebook", icon: "bi-facebook", color: "text-blue-600" },
            { href: "*", label: "Instagram", icon: "bi-instagram", color: "text-pink-600" },
            { href: "*", label: "Twitter", icon: "bi-twitter", color: "text-blue-400" },
          ].map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className={`${social.color} hover:text-opacity-80 transition-transform transform hover:rotate-12 hover:scale-110`}
            >
              <i className={`bi ${social.icon} text-xl`} aria-hidden="true"></i>
            </a>
          ))}
        </div>

        <div className="text-center text-sm text-gray-500">
          <small>© {new Date().getFullYear()} Saini. All rights reserved.</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
