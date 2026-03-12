"use client";
import React, {
  useEffect,
  useState,
  useRef,
  useCallback,
} from "react";

export const StarsBackground = ({
  starDensity = 0.00015,
  allStarsTwinkle = true,
  twinkleProbability = 0.7,
  minTwinkleSpeed = 0.5,
  maxTwinkleSpeed = 1.5,
  className,
}) => {
  const [stars, setStars] = useState([]);
  const canvasRef = useRef(null);

  const generateStars = useCallback((width, height) => {
    const area = width * height;
    const numStars = Math.floor(area * starDensity);
    const newStars = Array.from({ length: numStars }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 0.05 + 0.5,
      opacity: Math.random() * 0.5 + 0.5,
      twinkleSpeed: allStarsTwinkle
        ? Math.random() * (maxTwinkleSpeed - minTwinkleSpeed) + minTwinkleSpeed
        : null,
    }));
    setStars(newStars);
  }, [starDensity, allStarsTwinkle, minTwinkleSpeed, maxTwinkleSpeed]);

  useEffect(() => {
    const updateCanvasSize = () => {
      const canvas = canvasRef.current;
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        generateStars(canvas.width, canvas.height);
      }
    };

    updateCanvasSize();
    window.addEventListener("resize", updateCanvasSize);

    return () => {
      window.removeEventListener("resize", updateCanvasSize);
    };
  }, [generateStars]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;

    const render = (time) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${
          star.twinkleSpeed
            ? Math.abs(Math.sin((time * 0.001) / star.twinkleSpeed) * star.opacity)
            : star.opacity
        })`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [stars]);

  return (
    <canvas
      ref={canvasRef}
      className={`w-full h-full absolute inset-0 ${className || ""}`}
    />
  );
};
