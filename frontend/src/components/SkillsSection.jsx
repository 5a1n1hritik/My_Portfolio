import React, { useState } from "react";
import { motion } from "framer-motion";
import SkillCard from "./SkillCard";

const SkillsSection = () => {
  const frontendSkills = [
    { name: "HTML", Icon: "bi-filetype-html", level: "Intermediate" },
    { name: "CSS", Icon: "bi-filetype-css", level: "Intermediate" },
    { name: "JavaScript", Icon: "bi-filetype-js", level: "Intermediate" },
    { name: "Bootstrap", Icon: "bi-bootstrap", level: "Intermediate" },
    { name: "Git", Icon: "bi-github", level: "Intermediate" },
    { name: "React", Icon: "bi-filetype-jsx", level: "Intermediate" },
  ];

  const backendSkills = [
    { name: "PHP", Icon: "bi-filetype-php", level: "Intermediate" },
    { name: "Node.js", Icon: "bi-filetype-json", level: "Intermediate" },
    { name: "Python", Icon: "bi-filetype-py", level: "Intermediate" },
    { name: "MySQL", Icon: "bi-database", level: "Intermediate" },
    { name: "Firebase", Icon: "bi-bricks", level: "Basic" },
    { name: "SQL", Icon: "bi-database", level: "Intermediate" },
    { name: "PostgreSQL", Icon: "bi-database", level: "Intermediate" },
    { name: "MongoDB", Icon: "bi-database", level: "Intermediate" },
  ];

  return (
    <motion.section
      className="mt-10 text-gray-900 font-sans px-6 md:px-12"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto py-16 z-0">
        <h1 className="text-4xl font-bold text-center mb-2">Skills</h1>
        <p className="text-gray-600 text-center mb-12">My technical level</p>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
          }}
        >
          <SkillCard title="Frontend Developer" skills={frontendSkills} />
          <SkillCard title="Backend Developer" skills={backendSkills} />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default SkillsSection;
