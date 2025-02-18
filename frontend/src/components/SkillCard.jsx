import React from "react";
import { motion } from "framer-motion";
import SkillItem from "./SkillItem";
import getLevelColor from "../utils";

const SkillCard = ({ title, skills = [] }) => {
  return (
    <motion.div
      className="bg-white rounded-2xl p-8 shadow-sm border hover:shadow-lg"
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-xl font-semibold mb-6 text-center">{title}</h2>
      <div className="grid grid-cols-2 gap-6">
        {skills.map((skill) => (
          <SkillItem
            key={skill.name}
            Icon={skill.Icon}
            name={skill.name}
            level={skill.level}
            levelColor={getLevelColor(skill.level)}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default SkillCard;
