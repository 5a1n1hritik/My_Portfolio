import React, { useState, useEffect } from "react";

const TypingAnimation = () => {
    const texts = [
        "------- Full Stack Developer.",
        "------- Front - End Developer.",
        "------- Let’s build something great!"
      ];
      const [currentText, setCurrentText] = useState("");
      const [index, setIndex] = useState(0);
      const [isTyping, setIsTyping] = useState(true);
      const [loopCount, setLoopCount] = useState(0); 
    
      const maxLoops = Infinity; 
    
      useEffect(() => {
        const typeInterval = 100; 
        const pauseInterval = 2000; 
    
        let charIndex = 0;
    
        if (isTyping) {
          const typeTimer = setInterval(() => {
            if (charIndex < texts[index].length) {
              setCurrentText((prev) => prev + texts[index][charIndex]);
              charIndex++;
            } else {
              clearInterval(typeTimer);
              setIsTyping(false);
            }
          }, typeInterval);
    
          return () => clearInterval(typeTimer);
        } else {
          const pauseTimer = setTimeout(() => {
            setCurrentText("");
            setIsTyping(true);
    
            if (index + 1 >= texts.length) {
              setIndex(0);
              setLoopCount((prevLoop) => prevLoop + 1);
            } else {
              setIndex((prevIndex) => prevIndex + 1);
            }
          }, pauseInterval);
    
          return () => clearTimeout(pauseTimer);
        }
      }, [isTyping, index]);
    
      if (loopCount >= maxLoops) {
        return null; 
      }
    
  return (
    <div className="typing-animation">
      <p className="text-lg text-blue-600">
        {currentText}
        <span className="blinking-cursor"></span>
      </p>
    </div>
  )
}

export default TypingAnimation
