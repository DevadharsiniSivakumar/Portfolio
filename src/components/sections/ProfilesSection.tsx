"use client";

import React from "react";
import resumeData from "@/data/resume.json";
import { ArrowUpRight, Code, Trophy, Star, ShieldAlert } from "lucide-react";
import { motion } from "framer-motion";

export const ProfilesSection: React.FC = () => {
  const profiles = [
    {
      name: "LeetCode",
      url: resumeData.leetcode,
      color: "from-orange-500/10 to-yellow-600/10 border-orange-500/20 text-orange-500",
      stats: [
        { label: "Rating", value: resumeData.leetcodeStats.rating },
        { label: "Solved", value: `${resumeData.leetcodeStats.solved}+` },
        { label: "Rank", value: resumeData.leetcodeStats.badge },
      ],
      icon: <Code size={22} className="text-orange-500" />,
    },
    {
      name: "CodeChef",
      url: resumeData.codechef,
      color: "from-amber-600/10 to-amber-800/10 border-amber-600/20 text-amber-600",
      stats: [
        { label: "Rating", value: resumeData.codechefStats.rating },
        { label: "Solved", value: `${resumeData.codechefStats.solved}+` },
        { label: "Stars", value: resumeData.codechefStats.badge },
      ],
      icon: <Star size={22} className="text-amber-500" />,
    },
    {
      name: "Skillrack",
      url: resumeData.skillrack,
      color: "from-blue-600/10 to-sky-700/10 border-blue-600/20 text-blue-500",
      stats: [
        { label: "Solved", value: `${resumeData.skillrackStats.solved}+` },
        { label: "Profile Rank", value: `#${resumeData.skillrackStats.rank}` },
        { label: "Language", value: "C++ / Python" },
      ],
      icon: <Trophy size={22} className="text-blue-500" />,
    },
    {
      name: "HackerRank",
      url: resumeData.hackerrank,
      color: "from-green-600/10 to-emerald-700/10 border-green-600/20 text-green-500",
      stats: [
        { label: "Solved", value: `${resumeData.hackerrankStats.solved}+` },
        { label: "Badge", value: "5 Star" },
        { label: "Domain", value: "Problem Solving" },
      ],
      icon: <Trophy size={22} className="text-green-500" />,
    },
  ];

  return (
    <section className="py-24 border-t border-card-border/40 font-sans bg-bg-secondary/5">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="mb-16 text-left">
          <h2 className="font-sora text-3xl md:text-4xl font-extrabold tracking-tight text-text-primary mb-4">
            Coding Profiles
          </h2>
          <div className="h-1 w-12 bg-accent rounded" />
          <p className="mt-4 text-text-secondary max-w-xl text-sm md:text-base">
            Detailed performance metric summaries across various algorithmic and competitive programming hosts.
          </p>
        </div>

        {/* Profiles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {profiles.map((profile, idx) => (
            <motion.div
              key={profile.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="p-6 rounded-2xl bg-card-bg border border-card-border/60 hover:border-accent/40 shadow-sm transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-xl bg-gradient-to-br ${profile.color.split(" ")[0]} ${profile.color.split(" ")[1]} border ${profile.color.split(" ")[2]}`}>
                      {profile.icon}
                    </div>
                    <span className="font-sora font-extrabold text-base text-text-primary">{profile.name}</span>
                  </div>
                  
                  <a
                    href={profile.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1 rounded-md text-text-secondary hover:text-accent hover:bg-pill-bg transition-all cursor-pointer"
                    aria-label={`Visit ${profile.name} profile`}
                  >
                    <ArrowUpRight size={16} />
                  </a>
                </div>

                <div className="flex flex-col gap-4">
                  {profile.stats.map((stat) => (
                    <div key={stat.label} className="flex justify-between items-center border-b border-card-border/30 pb-2 last:border-none last:pb-0">
                      <span className="text-xs text-text-secondary font-medium">{stat.label}</span>
                      <span className="text-sm font-semibold text-text-primary">{stat.value}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <a
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex items-center justify-center gap-1.5 w-full py-2 bg-pill-bg border border-pill-border hover:bg-accent hover:text-white hover:border-accent text-xs font-semibold rounded-xl transition-all cursor-pointer"
              >
                <span>View Profile</span>
                <ArrowUpRight size={12} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
