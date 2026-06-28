"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import resumeData from "@/data/resume.json";
import { ArrowUp, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { motion, AnimatePresence } from "framer-motion";

export const Footer: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-card-border/40 py-12 bg-bg-secondary/10 font-sans transition-colors">
      <div className="max-w-6xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Brand */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
          <Link href="/" className="font-sora font-semibold text-text-primary text-sm tracking-tight">
            Devadharsini Sivakumar<span className="text-accent font-black">.</span>
          </Link>
          <div className="text-[11px] text-text-secondary">
            &copy; {currentYear} All rights reserved. Handcrafted with Next.js.
          </div>
        </div>

        {/* Center: Social links */}
        <div className="flex items-center gap-4">
          <a
            href={resumeData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-text-secondary hover:text-accent hover:bg-pill-bg transition-colors"
            aria-label="GitHub"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={resumeData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-text-secondary hover:text-accent hover:bg-pill-bg transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${resumeData.email}`}
            className="p-2 rounded-lg text-text-secondary hover:text-accent hover:bg-pill-bg transition-colors"
            aria-label="Email"
          >
            <Mail size={16} />
          </a>
        </div>

        {/* Right: Quick actions */}
        <div className="flex items-center gap-6 text-xs font-semibold text-text-secondary">
          <Link href="/#about" className="hover:text-text-primary transition-colors">About</Link>
          <Link href="/#projects" className="hover:text-text-primary transition-colors">Projects</Link>
          <Link href="/#contact" className="hover:text-text-primary transition-colors">Contact</Link>
        </div>
      </div>

      {/* Back to Top Floating Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={handleScrollTop}
            className="fixed bottom-6 right-6 p-3 rounded-xl bg-accent text-white shadow-lg shadow-accent/20 hover:bg-accent-hover transition-colors cursor-pointer z-40 focus:outline-none"
            aria-label="Back to top"
          >
            <ArrowUp size={16} />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
};
