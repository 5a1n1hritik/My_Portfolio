import React, { useState } from "react";

import About from "./About";
import SocialIcons from "../components/SocialIcons";
import SkillsSection from "../components/SkillsSection";
import Qualification from "../components/Qualification";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

import profileImg from "../assets/img5.jpeg";

export default function HomePage() {
  return (
    <>
      <main className="flex flex-col-reverse md:flex-row items-center justify-between w-full min-h-[80vh] gap-12 md:gap-20 py-12">
        <div className="flex-1 flex flex-col gap-9  items-center md:items-center grid grid-cols-[0.5fr_3fr] md:grid-cols-[1fr_2fr] pt-10 md:pt-0 ">
          <SocialIcons />

          <div className="text-center md:text-left ">
            <h3 className="text-4xl md:text-4xl font-extrabold mb-2 leading-tight bg-gradient-to-b from-blue-100 to-black bg-clip-text text-transparent">
              Hi, I’m
            </h3>
            <h1 className="text-6xl md:text-6xl font-extrabold mb-6 leading-tight">
              <span className="text-blue-500 shadow-lg md:shadow-none">
                Hritik Saini 
              </span>
              👋
            </h1>
            <p className="mb-2 text-lg text-blue-600">________ Frontend Developer</p>
            <p className="text-lg font-medium text-gray-500 mb-8">
              A passionate full-stack developer and AI enthusiast based in
              India. I specialize in creating innovative solutions for modern
              web and AI-driven applications.
            </p>

            <div className="flex justify-center md:justify-start gap-4">
              <a
                href="/contact"
                className="px-6 py-3 text-sm font-medium rounded-lg shadow-lg bg-gradient-to-l from-black to-blue-400 text-white hover:from-blue-400 hover:to-black transition-colors"
              >
                Let's Connect
              </a>
              <a
                href="/projects"
                className="px-6 py-3 text-sm font-medium text-blue-500 border border-blue-500 rounded-lg hover:text-white bg-gradient-to-l rounded-lg hover:from-blue-400 hover:to-black transition-colors"
              >
                View Projects
              </a>
            </div>
          </div>
        </div>

        <div className="flex-1 flex justify-center items-center">
          <div className=" w-[300px] md:w-[460px] h-[400px] md:h-[560px] rounded-l-full rounded-t-full overflow-hidden border-4 border-blue-300 shadow-lg">
            <img
              src={profileImg}
              alt="Hritik Saini Profile"
              className="  w-full h-full object-cover rounded-l-full rounded-t-full"
              loading="lazy"
            />
          </div>
        </div>
        
      </main>

      {/* =========== About_page =========== */}
      <About />

      {/* =========== Skill_page =========== */}
      <SkillsSection />

      {/* =========== Qualification section =========== */}
      <Qualification />

      {/* =========== Projects section =========== */}
      <Projects />

      {/* =========== Contact section =========== */}
      <Contact />
    </>
  );
}
