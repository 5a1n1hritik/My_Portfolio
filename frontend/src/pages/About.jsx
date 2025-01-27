import React from "react";
import { motion } from "framer-motion";
import profileImg from "../assets/img4.jpeg";

const About = () => {
  return (
    <section className="text-gray-900 font-sans px-4 md:px-8 py-16">
      <div className="max-w-6xl mx-auto bg-white">
        <motion.h1
          className="text-4xl font-bold text-center mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Me
        </motion.h1>
        <motion.p
          className="text-gray-600 text-center mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          My introduction
        </motion.p>
        <motion.div
          className="flex flex-col md:flex-row gap-12 items-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="flex-shrink-0 w-full sm:w-[320px] md:w-[360px]"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src={profileImg}
              alt="Hritik Saini"
              loading="lazy"
              className="rounded-3xl object-cover w-full"
            />
          </motion.div>

          <div className="flex-grow w-full md:w-1/2 space-y-8">
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-3 gap-4"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { staggerChildren: 0.2 },
                },
              }}
            >
              {[
                {
                  icon: "bi bi-lightning-charge",
                  title: "Experience",
                  detail: "1+ Years",
                },
                {
                  icon: "bi bi-briefcase",
                  title: "Completed",
                  detail: "4+ Projects",
                },
                {
                  icon: "bi bi-headphones",
                  title: "Support",
                  detail: "Online 24/7",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center p-4 bg-gray-100 rounded-lg hover:scale-105 hover:bg-gray-200 transition-transform"
                  variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <i
                    className={`${item.icon} w-8 h-8 mb-2 text-blue-500 text-2xl`}
                  ></i>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.detail}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.p
              className="text-gray-600 leading-relaxed"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              I’m Hritik Saini, a Bachelor of Technology student specializing in Computer Science and Engineering, with a passion for solving real-world problems through innovative solutions. Whether it’s building scalable web applications, analyzing complex datasets, or exploring new technologies, I specialize in transforming ideas into impactful projects. Explore my work, and let’s collaborate to create something extraordinary.
            </motion.p>
            <motion.div
              className="flex justify-center md:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.a
                href="/Hritik-Saini_resume.pdf"
                download="Hritik_Saini_Resume.pdf"
                className="inline-flex items-center gap-2 bg-gradient-to-l from-black to-blue-400 text-white px-6 py-3 rounded-lg hover:from-blue-400 hover:to-black transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Download CV
                <i className="bi bi-file-earmark-text"></i>
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
