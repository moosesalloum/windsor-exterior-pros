"use client";

import { ReactNode } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};


export default function ServicesGrid({ children }: { children: ReactNode }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      variants={container}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
    >
      {children}
    </motion.div>
  );
}

