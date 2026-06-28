"use client";

import React from "react";
import achievementsData from "@/data/achievements.json";
import certificationsData from "@/data/certifications.json";
import { Trophy, Award, Medal, Zap, ShieldCheck, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const iconMap: { [key: string]: React.ReactNode } = {
  Trophy: <Trophy size={18} />,
  Award: <Award size={18} />,
  Medal: <Medal size={18} />,
  Zap: <Zap size={18} />,
};

export const AchievementsSection: React.FC = () => {
  return (
    <section id="achievements" className="py-24 border-t border-card-border/40 font-sans">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Achievements */}
          <div className="lg:col-span-6">
            <div className="mb-10 text-left">
              <h2 className="font-sora text-2xl md:text-3xl font-extrabold tracking-tight text-text-primary mb-3">
                Key Achievements
              </h2>
              <div className="h-1 w-12 bg-accent rounded" />
              <p className="mt-3 text-text-secondary text-sm">
                Recognitions earned in competitive hackathons and algorithms.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {achievementsData.map((ach, idx) => {
                const icon = iconMap[ach.icon] || <Trophy size={18} />;
                return (
                  <motion.div
                    key={ach.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    className="p-5 rounded-2xl bg-card-bg border border-card-border/60 shadow-sm flex items-start gap-4 hover:border-accent/40 transition-colors duration-300"
                  >
                    <div className="p-2.5 rounded-lg bg-accent/10 border border-accent/20 text-accent shrink-0">
                      {icon}
                    </div>
                    <div>
                      <div className="flex flex-wrap items-baseline gap-x-2">
                        <span className="text-[11px] font-bold text-accent uppercase tracking-wider">{ach.year}</span>
                        <span className="text-xs font-bold text-text-secondary">{ach.rank}</span>
                      </div>
                      <h3 className="font-sora font-bold text-base text-text-primary mt-1">{ach.title}</h3>
                      <p className="text-xs text-text-secondary mt-1.5 leading-relaxed">{ach.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Certifications */}
          <div className="lg:col-span-6">
            <div className="mb-10 text-left">
              <h2 className="font-sora text-2xl md:text-3xl font-extrabold tracking-tight text-text-primary mb-3">
                Certifications
              </h2>
              <div className="h-1 w-12 bg-accent rounded" />
              <p className="mt-3 text-text-secondary text-sm">
                Industry-recognized credentials verifying technical expertise.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certificationsData.map((cert, idx) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  whileHover={{ y: -3 }}
                  className="p-5 rounded-2xl bg-card-bg border border-card-border/60 hover:border-accent/40 shadow-sm flex flex-col justify-between transition-all duration-300 h-full"
                >
                  <div>
                    <div className="flex items-center gap-2 text-accent mb-3">
                      <ShieldCheck size={16} />
                      <span className="text-[10px] font-bold uppercase tracking-wider">{cert.year}</span>
                    </div>
                    <h3 className="font-sora font-semibold text-sm text-text-primary leading-snug">
                      {cert.title}
                    </h3>
                    <p className="text-[11px] text-text-secondary mt-1 font-semibold">{cert.issuer}</p>
                    <code className="inline-block text-[10px] bg-pill-bg text-text-secondary px-1.5 py-0.5 rounded border border-pill-border mt-3 font-mono">
                      ID: {cert.credentialId}
                    </code>
                  </div>

                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 flex items-center justify-center gap-1 w-full py-1.5 bg-pill-bg border border-pill-border hover:bg-accent hover:text-white hover:border-accent text-[10px] font-bold uppercase tracking-wider rounded-lg transition-all cursor-pointer"
                  >
                    <span>Verify Link</span>
                    <ArrowUpRight size={10} />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
