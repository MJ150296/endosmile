"use client"; // This tells Next.js that this component should be rendered on the client-side

import { useEffect, useRef } from "react";
import { CountUp } from "countup.js";

interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
}

const Counter: React.FC<CounterProps> = ({
  end,
  duration = 2,
  suffix = "",
}) => {
  const countUpRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (countUpRef.current) {
      const countUp = new CountUp(countUpRef.current, end, {
        duration,
        suffix,
      });
      countUp.start();
    }
  }, [end, duration, suffix]);

  return <p ref={countUpRef} className="text-4xl font-bold text-gray-800"></p>;
};

export default Counter;
