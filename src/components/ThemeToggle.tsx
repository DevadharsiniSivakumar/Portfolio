"use client";

import React from "react";
import { useTheme } from "@/context/ThemeContext";
import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative flex items-center justify-between w-14 h-8 px-1 rounded-full bg-pill-bg border border-pill-border cursor-pointer select-none transition-colors focus:outline-none"
      aria-label="Toggle Theme"
    >
      <div className="flex items-center justify-center w-5 h-5 text-text-secondary z-10 pointer-events-none">
        <Sun size={14} className={theme === "light" ? "text-accent font-bold" : ""} />
      </div>
      <div className="flex items-center justify-center w-5 h-5 text-text-secondary z-10 pointer-events-none">
        <Moon size={14} className={theme === "dark" ? "text-accent font-bold" : ""} />
      </div>
      
      {/* Sliding Pill Indicator */}
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        className="absolute left-1 w-6 h-6 rounded-full bg-accent shadow-sm"
        style={{
          x: theme === "dark" ? 22 : 0,
        }}
      />
    </button>
  );
};
