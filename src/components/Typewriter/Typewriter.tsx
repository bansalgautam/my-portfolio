"use client";

import React, { useState, useEffect, useRef } from "react";

const useTypewriter = (texts: string[], speed = 50, delay = 1000) => {
  const currentTextIndex = useRef(0);
  const [currentPosition, setCurrentPosition] = useState(0);
  const currentPositionRef = useRef(0);
  const incrementing = useRef(true);

  useEffect(() => {
    const update = () => {
      if (incrementing.current === true) {
        setCurrentPosition((value) => value + 1);
        currentPositionRef.current += 1;
        if (
          currentPositionRef.current === texts[currentTextIndex.current].length
        ) {
          setTimeout(() => {
            incrementing.current = false;
          }, delay);
        }
      } else {
        setCurrentPosition((value) => value - 1);
        currentPositionRef.current -= 1;
        if (currentPositionRef.current === 0) {
          setTimeout(() => {
            incrementing.current = true;
          }, delay);

          currentTextIndex.current =
            (currentTextIndex.current + 1) % texts.length;
        }
      }
    };

    const intervalId = setInterval(update, speed);

    return () => {
      clearInterval(intervalId);
    };
  }, [texts, speed, delay]);

  return texts[currentTextIndex.current].substring(0, currentPosition);
};

const Typewriter = ({
  text,
  speed,
  delay,
  className = "",
}: {
  text: string[];
  speed?: number;
  className?: string;
  delay?: number;
}) => {
  const displayText = useTypewriter(text, speed, delay);

  return (
    <span className={className}>
      {" "}
      {displayText}
      <span>|</span>
    </span>
  );
};

export default Typewriter;
