"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export const TestimonialsSection: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      quote: "Devadharsini is a rare engineer who can write dense control systems algorithms in C++ for physical rovers and then optimize a deep learning model to run on a Jetson Nano at 30+ FPS. Her work ethic is exemplary.",
      author: "Dr. R. Ananthakrishnan",
      role: "Director of Robotics & Automation Lab",
      company: "PSG College of Technology",
    },
    {
      quote: "During our 48-hour hackathon, Devadharsini took complete charge of the Edge AI model deployment and full-stack integration. She delivered a fully functional platform that won the first prize from the Ministry of Railways.",
      author: "Siddharth Mehta",
      role: "Hackathon Organizer & Lead Evaluator",
      company: "Smart India Hackathon",
    },
    {
      quote: "Her competitive programming skills translate directly to writing clean, optimized production code. She doesn't just build systems that work; she builds systems that run fast and scale.",
      author: "Vidhya Ramachandran",
      role: "Senior Engineering Manager",
      company: "Aura Tech Partners",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 border-t border-card-border/40 font-sans bg-bg-secondary/5 transition-colors">
      <div className="max-w-4xl mx-auto px-4 md:px-8 text-center relative">
        <div className="mb-12 flex justify-center text-accent/20">
          <Quote size={54} fill="currentColor" />
        </div>

        {/* Testimonial Content Box */}
        <div className="min-h-[200px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col items-center"
            >
              <blockquote className="font-sora text-base md:text-lg font-medium text-text-primary leading-relaxed max-w-2xl mb-8">
                &ldquo;{testimonials[activeIndex].quote}&rdquo;
              </blockquote>
              <div>
                <cite className="not-italic font-bold text-sm text-text-primary">
                  {testimonials[activeIndex].author}
                </cite>
                <div className="text-[10px] uppercase tracking-wider text-accent font-semibold mt-1">
                  {testimonials[activeIndex].role} &bull; {testimonials[activeIndex].company}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-center items-center gap-6 mt-10">
          <button
            onClick={handlePrev}
            className="p-2.5 rounded-xl bg-card-bg border border-card-border hover:bg-pill-bg text-text-primary transition-all cursor-pointer"
            aria-label="Previous Testimonial"
          >
            <ChevronLeft size={14} />
          </button>
          
          <div className="flex gap-1.5">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`w-1.5 h-1.5 rounded-full transition-all cursor-pointer ${
                  idx === activeIndex ? "bg-accent w-3.5" : "bg-card-border"
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="p-2.5 rounded-xl bg-card-bg border border-card-border hover:bg-pill-bg text-text-primary transition-all cursor-pointer"
            aria-label="Next Testimonial"
          >
            <ChevronRight size={14} />
          </button>
        </div>
      </div>
    </section>
  );
};
