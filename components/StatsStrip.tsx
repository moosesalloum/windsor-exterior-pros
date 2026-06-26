"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

function CountUp({
  end,
  suffix = "",
  duration = 2000,
}: {
  end: number;
  suffix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

const STATS = [
  { end: 500, suffix: "+", label: "Homes Completed" },
  { end: 6, suffix: "+", label: "Years Experience" },
  { end: 100, suffix: "%", label: "Satisfaction Guarantee" },
  { end: 15, suffix: "+", label: "Colors Available" },
];

export default function StatsStrip() {
  return (
    <section className="bg-[#1A1A1A] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {STATS.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1">
              <span className="text-4xl md:text-5xl font-extrabold text-[#C87A20] font-heading">
                <CountUp end={stat.end} suffix={stat.suffix} />
              </span>
              <span className="text-white/70 text-sm font-medium tracking-wide uppercase">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
