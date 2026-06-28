"use client";

import React, { useState } from "react";
import skillsData from "@/data/skills.json";
import { Terminal, Award, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const SkillsSection: React.FC = () => {
  const [hoveredSkill, setHoveredSkill] = useState<{
    name: string;
    level: string;
    projects: string[];
  } | null>(null);

  return (
    <section id="skills" className="py-24 border-t border-card-border/40 font-sans bg-bg-secondary/10 transition-colors">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="mb-16 text-left">
          <h2 className="font-sora text-3xl md:text-4xl font-extrabold tracking-tight text-text-primary mb-4">
            Technical Toolkit
          </h2>
          <div className="h-1 w-12 bg-accent rounded" />
          <p className="mt-4 text-text-secondary max-w-xl text-sm md:text-base">
            Hover over any technical skill below to reveal which project or context I applied it in.
          </p>
        </div>

        {/* Skill Clusters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {skillsData.map((cluster) => (
            <div
              key={cluster.category}
              className="p-6 rounded-2xl bg-card-bg border border-card-border/60 shadow-sm flex flex-col justify-between"
            >
              <div>
                <h3 className="font-sora font-semibold text-base uppercase tracking-wider text-text-secondary mb-5 border-b border-card-border/40 pb-2 flex items-center gap-2">
                  <Terminal size={14} className="text-accent" />
                  <span>{cluster.category}</span>
                </h3>

                <div className="flex flex-wrap gap-2.5">
                  {cluster.items.map((skill) => {
                    const isCurrentlyHovered = hoveredSkill?.name === skill.name;
                    return (
                      <motion.div
                        key={skill.name}
                        onMouseEnter={() =>
                          setHoveredSkill({
                            name: skill.name,
                            level: skill.level,
                            projects: skill.projectsUsed,
                          })
                        }
                        onMouseLeave={() => setHoveredSkill(null)}
                        whileHover={{ scale: 1.04 }}
                        className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all duration-200 cursor-default select-none ${
                          isCurrentlyHovered
                            ? "bg-accent/15 border-accent text-accent"
                            : "bg-pill-bg border-pill-border text-text-primary hover:border-text-secondary/30"
                        }`}
                      >
                        {skill.name}
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Usage Dashboard */}
        <div className="relative min-h-[90px] rounded-2xl bg-card-bg border border-card-border/60 p-6 flex flex-col justify-center items-center text-center overflow-hidden">
          <AnimatePresence mode="wait">
            {hoveredSkill ? (
              <motion.div
                key={hoveredSkill.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.15 }}
                className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-left"
              >
                <div>
                  <div className="text-xs uppercase font-extrabold text-accent tracking-wider">Skill Level</div>
                  <div className="text-base font-sora font-bold text-text-primary mt-0.5">{hoveredSkill.name} • {hoveredSkill.level}</div>
                </div>
                
                <div className="hidden md:block w-px h-8 bg-card-border" />

                <div>
                  <div className="text-xs uppercase font-extrabold text-text-secondary/70 tracking-wider">Context &amp; Projects Applied</div>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {hoveredSkill.projects.map((proj) => (
                      <span
                        key={proj}
                        className="text-xs font-bold text-text-primary bg-pill-bg border border-pill-border px-2.5 py-0.5 rounded-full"
                      >
                        {proj}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="empty-state"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center gap-2.5 text-text-secondary text-sm font-medium"
              >
                <HelpCircle size={16} className="text-accent" />
                <span>Hover over any skill capsule above to inspect practical application.</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
