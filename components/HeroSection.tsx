"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "linear-gradient(rgba(0,0,0,0.50), rgba(0,0,0,0.50)), url('/premium-home-exterior-contractor-windsor-ontario.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-0 bg-black/55" />

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="inline-flex items-center gap-2 bg-[#A85E12] rounded-full px-4 py-1.5 mb-6"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
          <span className="text-white text-sm font-semibold tracking-wide uppercase">
            Windsor &amp; Essex County
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl text-white leading-tight tracking-tight mb-5"
        >
          Windsor&rsquo;s Premium Exterior Contracting{" "}
          <span className="text-[#8F4C0E]">Specialists</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="text-lg sm:text-xl text-white/85 max-w-2xl mx-auto mb-8 leading-relaxed"
        >
          Seamless eavestroughs, siding, roofing and complete exterior transformations across Windsor
          and Essex County. Serving Windsor and Essex County.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-[#A85E12] hover:bg-[#8F4C0E] text-white font-heading font-bold text-base px-8 py-4 rounded-lg transition-colors duration-200 shadow-lg inline-block"
          >
            Get a Free Quote
          </motion.a>
          <Link
            href="#services"
            className="border-2 border-white text-white hover:bg-white hover:text-[#1A1A1A] font-heading font-bold text-base px-8 py-4 rounded-lg transition-colors duration-200 inline-block"
          >
            View Our Services
          </Link>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#FAFAF8] to-transparent" />
    </section>
  );
}
