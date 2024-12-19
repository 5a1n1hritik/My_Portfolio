import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({ item }) => {
  return (
    <>
      <div className="rounded-lg shadow-md hover:shadow-2xl transition-shadow p-4 bg-[#ffffff] ">
        <img
          src={item.img}
          alt={item.title}
          className="rounded-3xl w-full h-48 object-cover mb-4 hover:scale-105 transition-transform"
        />
        <h3 className="text-lg font-semibold mb-2 text-center">{item.title}</h3>
        <p className="text-gray-500 text-sm mb-4 text-center">{item.category}</p>
        <div className="flex justify-center gap-4">
          <Link
            to={item.demoUrl }
            target="_blank"
            rel="noopener noreferrer"
            className=" items-center sapace-y- px-6 py-3 bg-gray-100 text-[#000000] rounded-full hover:text-white bg-gradient-to-l left-0 rounded-lg hover:from-blue-400 hover:to-black transition-colors"
          >
            View Demo <i className="bi bi-arrow-right ml-2 w-4 h-4"></i>
          </Link>
          <Link
            to={item.repoUrl }
            target="_blank"
            rel="noopener noreferrer"
            className=" items-center px-6 py-3 bg-gray-100 text-[#000000] rounded-full hover:text-white bg-gradient-to-l left-0 rounded-lg hover:from-blue-400 hover:to-black transition-colors"
          >
            View Code <i className="bi bi-github ml-2 w-4 h-4"></i>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
