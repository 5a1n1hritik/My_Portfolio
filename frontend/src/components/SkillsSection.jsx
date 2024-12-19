import React, { useState } from "react";
import SkillCard from "./SkillCard";

const SkillsSection = () => {

    const frontendSkills = [
        { name: "HTML", Icon: "bi-filetype-html", level: "Expert" },
        { name: "CSS", Icon: "bi-filetype-css", level: "Expert" },
        { name: "JavaScript", Icon: "bi-filetype-js", level: "Advanced" },
        { name: "Bootstrap", Icon: "bi-bootstrap", level: "Intermediate" },
        { name: "Git", Icon: "bi-github", level: "Intermediate" },
        { name: "React", Icon: "bi-filetype-jsx", level: "Intermediate" },
      ];
    
      const backendSkills = [
        { name: "PHP", Icon: "bi-filetype-php", level: "Intermediate" },
        { name: "Node.js", Icon: "bi-filetype-json", level: "Basic" },
        { name: "Python", Icon: "bi-filetype-py", level: "Intermediate" },
        { name: "MySQL", Icon: "bi-database", level: "Intermediate" },
        { name: "Firebase", Icon: "bi-bricks", level: "Intermediate" },
        { name: "SQL", Icon: "bi-database", level: "Intermediate" },
        { name: "PostgreSQL", Icon: "bi-database", level: "Intermediate" },
        { name: "MongoDB", Icon: "bi-database", level: "Intermediate" },
      ];

  return (
    <section className="mt-10 text-gray-900 font-sans px-6 md:px-12">
      <div className="max-w-6xl mx-auto py-16 z-0">
        <h1 className="text-4xl font-bold text-center mb-2">Skills</h1>
        <p className="text-gray-600 text-center mb-12">My technical level</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <SkillCard
            title="Frontend Developer"
            skills={frontendSkills}
          />
          <SkillCard
            title="Backend Developer"
            skills={backendSkills}
          />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
