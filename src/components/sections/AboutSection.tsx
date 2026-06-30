"use client";

import React from "react";
import resumeData from "@/data/resume.json";
import { User, Code2, Sparkles, Orbit, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

export const AboutSection: React.FC = () => {
  const cards = [
    {
      title: "Who I Am",
      icon: <User size={20} className="text-accent" />,
      content: "A third-year engineering student at Sri Eshwar College of Engineering pursuing my Bachelors in Computer Science and Engineering. I combine analytical algorithmic thinking with hands-on execution to build intelligent physical products.",
      className: "md:col-span-2",
    },
    {
      title: "What I Love Building",
      icon: <Code2 size={20} className="text-accent" />,
      content: "I specialize in autonomous mobile machinery, edge AI systems, and responsive, data-driven web applications. I love bridging high-level neural networks with real-time hardware actuators.",
      className: "md:col-span-1",
    },
    {
      title: "Current Interests",
      icon: <Orbit size={20} className="text-accent" />,
      content: "Active research in monocular depth estimation, LiDAR SLAM, cartographer point-cloud maps, real-time operating systems (RTOS), and lightweight compiler optimizations for Edge accelerators like TensorRT.",
      className: "md:col-span-1",
    },
    {
      title: "Future Goals",
      icon: <Sparkles size={20} className="text-accent" />,
      content: "Developing highly coordinated multi-agent robot systems that can navigate and perform cooperative tasks in hostile, unmapped environments like disaster response zones and extraplanetary terrains.",
      className: "md:col-span-2",
    },
  ];

  return (
    <section id="about" className="py-24 border-t border-card-border/40 font-sans">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="mb-16 text-left">
          <h2 className="font-sora text-3xl md:text-4xl font-extrabold tracking-tight text-text-primary mb-4">
            About Me
          </h2>
          <div className="h-1 w-12 bg-accent rounded" />
          <p className="mt-4 text-text-secondary max-w-xl text-sm md:text-base">
            Designing and programming intelligent systems at the intersection of AI, control systems, and modern software design.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {cards.map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className={`p-6 rounded-2xl bg-card-bg border border-card-border/60 hover:border-accent/40 shadow-sm transition-all duration-300 flex flex-col justify-between ${card.className}`}
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-pill-bg border border-pill-border">
                    {card.icon}
                  </div>
                  <h3 className="font-sora font-semibold text-lg text-text-primary">{card.title}</h3>
                </div>
                <p className="text-text-secondary text-sm leading-relaxed">{card.content}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education Highlight Card */}
        {resumeData.education && resumeData.education.map((edu, idx) => (
          <motion.div
            key={`${edu.institution}-${edu.degree}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="p-6 md:p-8 rounded-2xl bg-card-bg border border-card-border/60 shadow-sm flex flex-col md:flex-row gap-6 items-start md:items-center justify-between"
          >
            <div className="flex gap-4 items-start">
              <div className="p-3 rounded-xl bg-accent/10 border border-accent/25 text-accent shrink-0 mt-1 md:mt-0">
                <GraduationCap size={24} />
              </div>
              <div>
                <span className="text-xs uppercase font-bold text-accent tracking-wider">{edu.year}</span>
                <h3 className="font-sora font-bold text-lg md:text-xl text-text-primary mt-1">
                  {edu.institution}
                </h3>
                <p className="text-sm font-semibold text-text-secondary mt-1">{edu.degree}</p>
                <p className="text-sm text-text-secondary mt-3 leading-relaxed max-w-3xl">{edu.details}</p>
              </div>
            </div>

            <div className="shrink-0 bg-pill-bg border border-pill-border px-4 py-2.5 rounded-xl text-center md:text-right mt-4 md:mt-0">
              <div className="text-xs text-text-secondary font-medium">Academic Rating</div>
              <div className="text-lg font-sora font-extrabold text-accent mt-0.5">{edu.gpa}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
