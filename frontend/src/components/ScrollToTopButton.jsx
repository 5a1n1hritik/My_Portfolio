import React, { useState, useEffect } from "react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    isVisible && (
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 z-50 bg-gray-900 text-white p-3 rounded-lg shadow-lg hover:bg-gray-800 hover:scale-105 transition-all"
        aria-label="Scroll to top of the page"
      >
        <i className="bi bi-arrow-up" aria-hidden="true"></i>
      </button>
    )
  );
};

export default ScrollToTopButton;
