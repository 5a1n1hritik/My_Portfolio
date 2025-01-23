import React from "react";
import { motion } from "framer-motion";

import About from "./About";
import SocialIcons from "../components/SocialIcons";
import SkillsSection from "../components/SkillsSection";
import Qualification from "../components/Qualification";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

import profileImg from "../assets/img4.jpeg";
import TypingAnimation from "../components/TypingAnimation";

export default function HomePage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const imageVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
  };

  return (
    <>
      <main className="flex flex-col-reverse md:flex-row items-center justify-between w-full min-h-[80vh] gap-12 md:gap-20 py-12">
        <motion.div
          className="flex-1 flex-col gap-9 items-center md:items-center grid grid-cols-[0.5fr_3fr] md:grid-cols-[1fr_2fr] pt-10 md:pt-0"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <SocialIcons />

          <div className="text-center md:text-left">
            <h3 className="text-4xl md:text-4xl font-extrabold mb-2 leading-tight bg-gradient-to-b from-blue-100 to-black bg-clip-text text-transparent">
              Hi, I’m
            </h3>
            <h1 className="text-6xl md:text-6xl font-extrabold mb-6 leading-tight">
              <span className="text-blue-500 shadow-lg md:shadow-none">
                Hritik Saini
              </span>
              👋
            </h1>
            <TypingAnimation />
            <p className="text-lg font-medium text-gray-500 mb-8">
            I’m Hritik Saini, a Bachelor of Technology student specializing in Computer Science and Engineering.
            </p>

            <div className="flex justify-center md:justify-start gap-4">
              <motion.a
                href="/contact"
                className="px-6 py-3 text-sm font-medium rounded-lg shadow-lg bg-gradient-to-l from-black to-blue-400 text-white hover:from-blue-400 hover:to-black transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Let's Connect
              </motion.a>
              <motion.a
                href="/projects"
                className="px-6 py-3 text-sm font-medium text-blue-500 border border-blue-500 rounded-lg hover:text-white bg-gradient-to-l hover:from-blue-400 hover:to-black transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                View Projects
              </motion.a>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="flex-1 flex justify-center items-center"
          initial="hidden"
          animate="visible"
          variants={imageVariant}
        >
          <div className="w-[300px] md:w-[460px] h-[400px] md:h-[560px] rounded-l-full rounded-t-full overflow-hidden border-4 border-blue-300 shadow-lg">
            <img
              src={profileImg}
              alt="Hritik Saini Profile"
              className="w-full h-full object-cover rounded-l-full rounded-t-full"
              loading="lazy"
            />
          </div>
        </motion.div>
      </main>

      <About />

      <SkillsSection />

      <Qualification />

      <Projects />

      <Contact />
    </>
  );
}
