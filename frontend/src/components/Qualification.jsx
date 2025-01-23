import React, { useState } from "react";
import { motion } from "framer-motion";

const Qualification = () => {
  const qualifications = {
    education: [
      {
        title: "B.Tech - Computer Science and Engineering",
        institution: "Alwer, Rajasthan - MITRC College",
        year: "2021 - 2025 - Present",
      },
      {
        title: "School - 12th",
        institution: "Rajgarh, Alwar - Apoorva Public Sr. Sec. School",
        year: "2020 - 2021",
      },
    ],
    experience: [
      // Add experience items if available
    ],
  };

  const [activeTab, setActiveTab] = useState("education");

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="max-w-4xl mx-auto py-16 px-4">
      <motion.h1
        className="text-4xl font-bold text-center mb-2"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Qualification
      </motion.h1>
      <motion.p
        className="text-gray-600 text-center mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        My personal journey
      </motion.p>

      <div className="flex justify-center mb-8 space-x-2">
        <button
          className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-colors ${
            activeTab === "education"
              ? "bg-gradient-to-r from-black to-blue-400 text-white"
              : "bg-gray-100 hover:bg-gray-200"
          }`}
          onClick={() => setActiveTab("education")}
        >
          <i className="bi bi-mortarboard h-5 w-5"></i>
          Education
        </button>
        <button
          className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-colors ${
            activeTab === "experience"
              ? "bg-gradient-to-l from-black to-blue-400 text-white"
              : "bg-gray-100 hover:bg-gray-200"
          }`}
          onClick={() => setActiveTab("experience")}
        >
          <i className="bi bi-briefcase w-5 h-5"></i>
          Experience
        </button>
      </div>

      <div className="relative">
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 transform -translate-x-1/2"></div>
        {qualifications[activeTab].length > 0 ? (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.3,
                },
              },
            }}
          >
            {qualifications[activeTab].map((item, index) => (
              <motion.div
                key={index}
                className={`relative flex ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                } mb-8`}
                variants={itemVariants}
              >
                <div
                  className={`w-1/2 ${
                    index % 2 === 0 ? "pr-8 text-right" : "pl-8"
                  }`}
                >
                  <motion.div
                    className="bg-white p-4 rounded-lg shadow-md border hover:shadow-lg transition-shadow"
                    whileHover={{ scale: 1.05 }}
                  >
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-gray-600">
                      {item.institution || item.company}
                    </p>
                    <p className="text-sm text-gray-500">{item.year}</p>
                  </motion.div>
                </div>
                <div className="absolute left-1/2 top-4 w-3 h-3 bg-gray-500 rounded-full transform -translate-x-1/2"></div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            className="text-center text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p>No experience data available.</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Qualification;
