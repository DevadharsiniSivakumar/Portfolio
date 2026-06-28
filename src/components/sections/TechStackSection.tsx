"use client";

import React from "react";
import { Terminal, Cpu, Database, Blocks, Wrench, Globe } from "lucide-react";
import { motion } from "framer-motion";

interface TechItem {
  name: string;
}

interface TechGroup {
  category: string;
  icon: React.ReactNode;
  items: TechItem[];
}

export const TechStackSection: React.FC = () => {
  const groups: TechGroup[] = [
    {
      category: "Programming Languages",
      icon: <Terminal size={16} />,
      items: [{ name: "C++" }, { name: "Python" }, { name: "TypeScript" }, { name: "JavaScript" }, { name: "SQL" }],
    },
    {
      category: "Artificial Intelligence",
      icon: <Cpu size={16} />,
      items: [{ name: "PyTorch" }, { name: "TensorRT" }, { name: "OpenCV" }, { name: "MediaPipe" }, { name: "LangChain" }, { name: "Hugging Face" }],
    },
    {
      category: "Robotics & Hardware",
      icon: <Blocks size={16} />,
      items: [{ name: "ROS 2" }, { name: "MoveIt 2" }, { name: "SLAM / Cartographer" }, { name: "Arduino" }, { name: "Jetson Nano" }],
    },
    {
      category: "Web Frameworks",
      icon: <Globe size={16} />,
      items: [{ name: "Next.js" }, { name: "FastAPI" }, { name: "React" }, { name: "Express" }, { name: "Tailwind CSS" }],
    },
    {
      category: "Databases & Platforms",
      icon: <Database size={16} />,
      items: [{ name: "PostgreSQL" }, { name: "Docker" }, { name: "Git & GitHub" }, { name: "Linux / Bash" }, { name: "Vercel" }],
    },
  ];

  return (
    <section className="py-24 border-t border-card-border/40 font-sans">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="mb-16 text-left">
          <h2 className="font-sora text-2xl md:text-3xl font-extrabold tracking-tight text-text-primary mb-3">
            Technology Stack
          </h2>
          <div className="h-1 w-12 bg-accent rounded" />
          <p className="mt-3 text-text-secondary text-sm">
            The core building blocks, tools, and platforms I employ across AI, Robotics, and Web Development.
          </p>
        </div>

        {/* Responsive Cloud Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {groups.map((group, idx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="p-6 rounded-2xl bg-card-bg border border-card-border/60 shadow-sm flex flex-col"
            >
              <div className="flex items-center gap-2 text-accent mb-4 border-b border-card-border/30 pb-3">
                {group.icon}
                <h3 className="font-sora font-semibold text-sm text-text-primary">{group.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item.name}
                    className="text-xs font-semibold text-text-primary bg-pill-bg border border-pill-border px-3 py-1.5 rounded-lg select-none hover:bg-accent/5 hover:border-accent/20 hover:text-accent transition-all duration-200"
                  >
                    {item.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
