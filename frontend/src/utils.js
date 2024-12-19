const getLevelColor = (level) => {
  const colors = {
    Expert: "bg-green-100 text-green-600",
    Advanced: "bg-yellow-100 text-yellow-600",
    Intermediate: "bg-blue-100 text-blue-600",
  };
  return colors[level] || "bg-gray-100 text-gray-700";
};
export default getLevelColor;