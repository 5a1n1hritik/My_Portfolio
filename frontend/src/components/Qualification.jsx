import React, { useState } from "react";

const Qualification = () => {
  const qualifications = {
    education: [
      {
        title: "B.tech - Computer Science and Engineering",
        institution: "Alwer, Rajasthan - MITRC Collage",
        year: "2021 - 2025 - Present",
      },
      {
        title: "School - 12th",
        institution: "Rajgarh, Alwar - Apoorva Public Sr. Sec. School",
        year: "2020 - 2021",
      },
    ],
    experience: [
      //   {
      //     title: "",
      //     company: "Spain - Institute",
      //     year: "2020 - 2021",
      //   },
      //   { title: "UX Expert", company: "Spain - Institute", year: "2017 - 2019" },
    ],
  };

  const [activeTab, setActiveTab] = useState("education");

  return (
    <div className="max-w-4xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold text-center mb-2">Qualification</h1>
      <p className="text-gray-600 text-center mb-12">My personal journey</p>

      <div className="flex justify-center mb-8 space-x-2">
        <button
          className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-colors ${
            activeTab === "education"
              ? "bg-gradient-to-r from-black to-blue-400 text-white left-0 px-6 py-3 rounded-lg hover:from-blue-400 hover:to-black transition-colors"
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
              ? "bg-gradient-to-l from-black to-blue-400 text-white left-0 px-6 py-3 rounded-lg hover:from-blue-400 hover:to-black transition-colors"
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
          qualifications[activeTab].map((item, index) => (
            <div
              key={index}
              className={`relative flex ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              } mb-8`}
            >
              <div
                className={`w-1/2 ${
                  index % 2 === 0 ? "pr-8 text-right" : "pl-8"
                }`}
              >
                <div className="bg-white p-4 rounded-lg shadow-md border hover:shadow-lg transition-shadow">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-gray-600">
                    {item.institution || item.company}
                  </p>
                  <p className="text-sm text-gray-500">{item.year}</p>
                </div>
              </div>
              <div className="absolute left-1/2 top-4 w-3 h-3 bg-gray-500 rounded-full transform -translate-x-1/2"></div>
            </div>
          ))
        ) : (
          <div className="text-center text-gray-600">
            <p>No experience data available.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Qualification;
