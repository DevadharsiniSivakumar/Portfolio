"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import projectsData from "@/data/projects.json";
import { ArrowRight, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { motion } from "framer-motion";

export const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-24 border-t border-card-border/40 font-sans">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="mb-16 text-left">
          <h2 className="font-sora text-3xl md:text-4xl font-extrabold tracking-tight text-text-primary mb-4">
            Featured Projects
          </h2>
          <div className="h-1 w-12 bg-accent rounded" />
          <p className="mt-4 text-text-secondary max-w-xl text-sm md:text-base">
            Detailed case studies of physical robots, high-performance deep learning models, and full-stack AI products I have built.
          </p>
        </div>

        {/* Projects Cards List */}
        <div className="flex flex-col gap-20">
          {projectsData.map((project, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center"
              >
                {/* Image side */}
                <div
                  className={`lg:col-span-6 w-full relative aspect-[16/10] rounded-2xl overflow-hidden border border-card-border shadow-sm group bg-card-bg ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-102"
                    sizes="(max-width: 1024px) 100vw, 540px"
                  />
                  <div className="absolute inset-0 bg-black/5 dark:bg-black/15 group-hover:opacity-0 transition-opacity duration-300" />
                </div>

                {/* Content side */}
                <div
                  className={`lg:col-span-6 flex flex-col justify-center ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <h3 className="font-sora font-extrabold text-2xl md:text-3xl text-text-primary mb-4 leading-snug">
                    {project.title}
                  </h3>

                  <p className="text-text-secondary text-sm md:text-base leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Impact block */}
                  <div className="mb-6 p-4 rounded-xl bg-pill-bg border border-pill-border">
                    <div className="text-xs uppercase font-extrabold text-accent tracking-wider mb-1">Impact</div>
                    <div className="text-sm font-medium text-text-primary">{project.impact}</div>
                  </div>

                  {/* Tech stack chips */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-semibold text-text-secondary bg-pill-bg border border-pill-border px-2.5 py-1 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <div className="flex flex-wrap gap-3.5 items-center">
                    <Link
                      href={project.caseStudy}
                      className="flex items-center gap-1.5 px-5 py-2.5 bg-accent hover:bg-accent-hover text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-md shadow-accent/5 cursor-pointer"
                    >
                      <span>Case Study</span>
                      <ArrowRight size={14} />
                    </Link>

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-5 py-2.5 bg-pill-bg border border-pill-border hover:bg-card-bg text-text-primary text-xs font-bold uppercase tracking-wider rounded-xl transition-all cursor-pointer"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        <span>GitHub</span>
                      </a>
                    )}

                    {project.liveDemo && (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-5 py-2.5 bg-pill-bg border border-pill-border hover:bg-card-bg text-text-primary text-xs font-bold uppercase tracking-wider rounded-xl transition-all cursor-pointer"
                      >
                        <ExternalLink size={14} />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
