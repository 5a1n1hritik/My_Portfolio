import React from "react";
import { motion } from "framer-motion";

const SkillItem = ({ Icon, name, level, levelColor }) => {
  return (
    <>
      <motion.div
        className="flex items-center gap-2"
        whileHover={{ scale: 1.1 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <i className={`bi ${Icon} w-8 h-8 text-lg text-blue-500`}></i>
        <div>
          <h3 className="font-medium">{name}</h3>
          <span className={`text-xs px-2 py-1 rounded-full ${levelColor}`}>
            {level}
          </span>
        </div>
      </motion.div>
    </>
  );
};

export default SkillItem;
