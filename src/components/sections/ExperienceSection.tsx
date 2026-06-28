"use client";

import React from "react";
import experienceData from "@/data/experience.json";
import { Terminal, Cpu, Compass, Zap, Trophy } from "lucide-react";
import { motion } from "framer-motion";

const iconMap: { [key: string]: React.ReactNode } = {
  Terminal: <Terminal size={20} />,
  Cpu: <Cpu size={20} />,
  Compass: <Compass size={20} />,
  Zap: <Zap size={20} />,
  Trophy: <Trophy size={20} />,
};

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-24 border-t border-card-border/40 font-sans bg-bg-secondary/20 transition-colors">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="mb-16 text-left">
          <h2 className="font-sora text-3xl md:text-4xl font-extrabold tracking-tight text-text-primary mb-4">
            Journey &amp; Milestones
          </h2>
          <div className="h-1 w-12 bg-accent rounded" />
          <p className="mt-4 text-text-secondary max-w-xl text-sm md:text-base">
            Key steps in my transition from solving algorithmic puzzles to building edge intelligence and real robotic hardware.
          </p>
        </div>

        {/* Milestone Cards Stack */}
        <div className="relative border-l border-card-border/60 pl-6 md:pl-8 ml-4 flex flex-col gap-10">
          {experienceData.map((milestone, idx) => {
            const icon = iconMap[milestone.icon] || <Terminal size={20} />;
            return (
              <div key={milestone.id} className="relative">
                {/* Timeline Dot Indicator */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ type: "spring", stiffness: 300, delay: idx * 0.1 }}
                  className="absolute -left-[35px] md:-left-[43px] top-1.5 w-4 h-4 rounded-full bg-accent border-4 border-bg-primary shadow-sm flex items-center justify-center text-white"
                />

                {/* Card Container */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ x: 6 }}
                  className="p-6 rounded-2xl bg-card-bg border border-card-border/60 hover:border-accent/40 shadow-sm transition-all duration-300 flex flex-col md:flex-row gap-6 md:items-start"
                >
                  <div className="p-3 rounded-xl bg-pill-bg border border-pill-border text-accent shrink-0 w-fit self-start">
                    {icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                      <h3 className="font-sora font-bold text-lg text-text-primary">
                        {milestone.title}
                      </h3>
                      <span className="text-xs uppercase font-extrabold tracking-wider text-accent bg-accent/10 border border-accent/20 px-2.5 py-1 rounded-full w-fit">
                        {milestone.date}
                      </span>
                    </div>
                    <div className="text-sm font-semibold text-text-secondary/80 mb-3">{milestone.subtitle}</div>
                    <p className="text-text-secondary text-sm leading-relaxed">{milestone.description}</p>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
