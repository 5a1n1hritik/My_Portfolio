import React, { useState } from "react";

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
      demoUrl: "*",
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
      <h1 className="text-4xl font-bold text-center mb-2">Portfolio</h1>
      <p className="text-gray-600 text-center mb-12">Most recent work</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-4">
        {portfolioItems.map((item) => (
          <ProjectCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
