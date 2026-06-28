"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, Download } from "lucide-react";

export const HeroSection: React.FC = () => {
  const handleScroll = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center py-12 lg:py-0 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto px-4 md:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">
        {/* Left Side: Content */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pill-bg border border-pill-border text-xs font-semibold text-accent mb-6 tracking-wide uppercase select-none"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span>Open to AI & Robotics Roles</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-sora text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-text-primary mb-5"
          >
            Hi, I&apos;m <br />
            <span className="text-text-primary">
              Devadharsini Sivakumar.
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-base sm:text-lg font-medium text-accent mb-6"
          >
            <span>AI Engineer</span>
            <span className="text-text-secondary/40">•</span>
            <span>Robotics Enthusiast</span>
            <span className="text-text-secondary/40">•</span>
            <span>Full Stack Developer</span>
            <span className="text-text-secondary/40">•</span>
            <span>Competitive Programmer</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-base sm:text-lg text-text-secondary leading-relaxed mb-8 max-w-xl"
          >
            I engineer intelligent systems that integrate complex AI algorithms with real-world physical mechanisms. 
            From edge-optimized deep learning mapping pipelines to autonomous rovers, I build robust systems 
            combining software reliability with physical hardware control.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <button
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="flex items-center justify-center gap-2 px-6 py-3.5 bg-accent hover:bg-accent-hover text-white font-semibold rounded-xl shadow-lg shadow-accent/10 transition-all text-sm cursor-pointer"
            >
              <span>View Projects</span>
              <ArrowRight size={16} />
            </button>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3.5 bg-pill-bg border border-pill-border hover:bg-card-bg text-text-primary font-semibold rounded-xl transition-all text-sm cursor-pointer"
            >
              <span>Download Resume</span>
              <Download size={16} />
            </a>
          </motion.div>
        </div>

        {/* Right Side: Portrait */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden border border-card-border shadow-xl bg-card-bg"
          >
            <Image
              src="/images/professional_portrait.png"
              alt="Devadharsini Sivakumar Portrait"
              fill
              priority
              className="object-cover transition-transform duration-700 hover:scale-105"
              sizes="(max-width: 1024px) 256px, 384px"
            />
            <div className="absolute inset-0 border border-white/5 pointer-events-none" />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.4 }}
        onClick={handleScroll}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 cursor-pointer text-text-secondary/70 hover:text-text-primary transition-colors focus:outline-none select-none"
      >
        <span className="text-[10px] uppercase font-bold tracking-widest">Explore</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ArrowDown size={14} className="text-accent" />
        </motion.div>
      </motion.button>
    </section>
  );
};
