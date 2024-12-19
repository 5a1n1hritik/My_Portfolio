import React from "react";

import profileImg from "../assets/img1.jpeg";

const About = () => {
  return (
    <section className="text-gray-900 font-sans px-4 md:px-8 py-16">
      <div className="max-w-6xl mx-auto bg-white">
        <h1 className="text-4xl font-bold text-center mb-4">About Me</h1>
        <p className="text-gray-600 text-center mb-12">My introduction</p>
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-shrink-0 w-full sm:w-[320px] md:w-[360px]">
            <img
              src={profileImg}
              alt="Hritik Saini"
              loading="lazy"
              className="rounded-3xl object-cover w-full"
            />
          </div>

          <div className="flex-grow w-full md:w-1/2 space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex flex-col items-center p-4 bg-gray-100 rounded-lg hover:scale-105 hover:bg-gray-200 transition-transform">
                <i className="bi bi-lightning-charge w-8 h-8 mb-2 text-blue-500 text-2xl"></i>
                <h3 className="font-semibold">Experience</h3>
                <p className="text-sm text-gray-600">8+ Years</p>
              </div>
              <div className="flex flex-col items-center p-4 bg-gray-100 rounded-lg hover:scale-105 hover:bg-gray-200 transition-transform">
                <i className="bi bi-briefcase w-8 h-8 mb-2 text-blue-500 text-2xl"></i>
                <h3 className="font-semibold">Completed</h3>
                <p className="text-sm text-gray-600">48+ Projects</p>
              </div>
              <div className="flex flex-col items-center p-4 bg-gray-100 rounded-lg hover:scale-105 hover:bg-gray-200 transition-transform">
                <i className="bi bi-headphones w-8 h-8 mb-2 text-blue-500 text-2xl"></i>
                <h3 className="font-semibold">Support</h3>
                <p className="text-sm text-gray-600">Online 24/7</p>
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed">
              I'm a frontend developer passionate about crafting intuitive and
              responsive web applications with a focus on user experience and
              modern design principles.
            </p>
            <div className="flex justify-center md:justify-start">
              <a
                href="/Resume.pdf"
                download="Hritik_Saini_Resume.pdf"
                className="inline-flex items-center gap-2 bg-gradient-to-l from-black to-blue-400 text-white px-6 py-3 rounded-lg hover:from-blue-400 hover:to-black transition-colors"
              >
                Download CV
                <i className="bi bi-file-earmark-text"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
