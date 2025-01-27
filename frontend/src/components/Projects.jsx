import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import blog from "../assets/blog.jpeg";
import wetherApp from "../assets/coldWether.png";
import profile_bg from "../assets/portfolio-bg.jpeg";
import Ecommerce from "../assets/e-commerce.jpeg";
import OnlineEducation from "../assets/online-education.jpg";
import MovieApp from "../assets/movieApp.jpg";

const Projects = () => {
  const portfolioItems = [
    {
      id: 1,
      title: "Weather App",
      category: "Web Application",
      img: wetherApp,
      demoUrl: "https://weather-app-blond-ten-28.vercel.app/",
      repoUrl: "https://github.com/5a1n1hritik/Weather-App",
    },
    {
      id: 2,
      title: "Portfolio Website",
      category: "Website",
      img: profile_bg,
      demoUrl: "*",
      repoUrl: "https://github.com/5a1n1hritik/My_Portfolio",
    },
    {
      id: 3,
      title: "E-commerce Store",
      category: "Web Application",
      img: Ecommerce,
      demoUrl: "*",
      repoUrl: "https://github.com/5a1n1hritik/ecommerce",
    },
    {
      id: 4,
      title: "Blog-App",
      category: "Web Application",
      img: blog,
      demoUrl: "*",
      repoUrl: "https://github.com/5a1n1hritik/blog-App",
    },
    {
      id: 5,
      title: "Online Learning Platform",
      category: "Web Application",
      img: OnlineEducation,
      demoUrl: "*",
      repoUrl: "*",
    },
    {
      id: 6,
      title: "Movie App",
      category: "Web Application",
      img: MovieApp,
      demoUrl: "*",
      repoUrl: "*",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto py-16">
      <motion.h1
        className="text-4xl font-bold text-center mb-2"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Portfolio
      </motion.h1>
      <motion.p
        className="text-gray-600 text-center mb-12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Most recent work
      </motion.p>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-4"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, scale: 0.8 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: { staggerChildren: 0.2 },
          },
        }}
      >
        {portfolioItems.map((item) => (
          <motion.div
            key={item.id}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <ProjectCard item={item} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;
