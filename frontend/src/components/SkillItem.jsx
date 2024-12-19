import React from "react";

const SkillItem = ({ Icon, name, level, levelColor }) => {
  return (
    <>
      <div className="flex items-center gap-2">
        <i className={`bi ${Icon} w-8 h-8 text-lg text-blue-500`}></i>
        <div>
          <h3 className="font-medium">{name}</h3>
          <span className={`text-xs px-2 py-1 rounded-full ${levelColor}`}>
            {level}
          </span>
        </div>
      </div>
    </>
  );
};

export default SkillItem;
