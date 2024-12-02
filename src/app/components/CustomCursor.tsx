"use client"; // This tells Next.js that this component should be rendered on the client-side

import { useEffect, useRef } from "react";

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const cursorSize = 24; // Diameter of the custom cursor

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        // Update custom cursor position
        const x = e.pageX - cursorSize / 2; // Offset for centering
        const y = e.pageY - cursorSize / 2;

        cursorRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }
    };

    // Add mouse move listener
    document.addEventListener("mousemove", handleMouseMove);

    // Cleanup listener on unmount
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* Custom cursor element */}
      <div
        ref={cursorRef}
        className="fixed z-50 pointer-events-none bg-gray-800 rounded-full"
        style={{
          width: `${cursorSize}px`,
          height: `${cursorSize}px`,
          transform: "translate3d(0, 0, 0)", // Start at the origin
          transition: "transform 0.05s linear", // Slight delay for smoother movement
          willChange: "transform", // Optimize performance
        }}
      ></div>
    </>
  );
};

export default CustomCursor;
