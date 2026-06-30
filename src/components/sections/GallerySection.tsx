"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, ZoomIn } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface GalleryItem {
  id: string;
  src: string;
  title: string;
  category: string;
  aspectRatio: string;
}

export const GallerySection: React.FC = () => {
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const items: GalleryItem[] = [
    {
      id: "rover-lab",
      src: "/images/rover_device.jpg",
      title: "Autonomous Rover Testing in Robotics Lab",
      category: "Robotics",
      aspectRatio: "aspect-[4/3]",
    },
    {
      id: "aura-ui",
      src: "/images/aura_app.png",
      title: "Aura AI Skincare Mesh & Color Analysis Design",
      category: "Product Design",
      aspectRatio: "aspect-[16/10]",
    },
    {
      id: "depth-opt",
      src: "/images/depth_estimation.png",
      title: "Monocular Depth Estimation TensorRT Inference Output",
      category: "AI Pipelines",
      aspectRatio: "aspect-[16/10]",
    },
    {
      id: "psg-award",
      src: "/images/professional_portrait.png",
      title: "PSG College of Technology Engineering Presentation",
      category: "College & Awards",
      aspectRatio: "aspect-[1/1]",
    },
  ];

  return (
    <section id="gallery" className="py-24 border-t border-card-border/40 font-sans">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="mb-16 text-left">
          <h2 className="font-sora text-3xl md:text-4xl font-extrabold tracking-tight text-text-primary mb-4">
            Visual Gallery
          </h2>
          <div className="h-1 w-12 bg-accent rounded" />
          <p className="mt-4 text-text-secondary max-w-xl text-sm md:text-base">
            Moments captured from hackathons, research labs, presentations, and product engineering.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="columns-1 sm:columns-2 gap-6 space-y-6">
          {items.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4 }}
              className="break-inside-avoid relative rounded-2xl overflow-hidden border border-card-border shadow-sm group bg-card-bg cursor-zoom-in"
              onClick={() => setActiveItem(item)}
            >
              <div className={`${item.aspectRatio} relative w-full overflow-hidden`}>
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-103"
                  sizes="(max-width: 640px) 100vw, 500px"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-bold text-accent uppercase tracking-widest bg-white px-2 py-0.5 rounded-full">
                        {item.category}
                      </span>
                      <h3 className="text-white font-sora font-semibold text-sm mt-2 leading-snug">
                        {item.title}
                      </h3>
                    </div>
                    <div className="text-white/80 p-1.5 bg-white/10 rounded-lg backdrop-blur-sm border border-white/10">
                      <ZoomIn size={16} />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {activeItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveItem(null)}
              className="fixed inset-0 bg-black/90 backdrop-blur-md z-[999999] flex items-center justify-center p-4 md:p-8 cursor-zoom-out"
            >
              {/* Close Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveItem(null);
                }}
                className="absolute top-6 right-6 p-2 rounded-xl bg-white/10 text-white/80 hover:text-white border border-white/10 hover:bg-white/20 transition-all cursor-pointer z-55"
              >
                <X size={20} />
              </button>

              <motion.div
                initial={{ scale: 0.95, y: 15 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 15 }}
                transition={{ duration: 0.2 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-4xl w-full flex flex-col gap-4 select-none cursor-default"
              >
                <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-white/10 bg-black">
                  <Image
                    src={activeItem.src}
                    alt={activeItem.title}
                    fill
                    className="object-contain"
                    sizes="100vw"
                  />
                </div>
                <div className="text-left text-white px-2">
                  <span className="text-[10px] font-bold text-accent uppercase tracking-widest bg-accent/20 border border-accent/30 px-2.5 py-0.5 rounded-full">
                    {activeItem.category}
                  </span>
                  <h3 className="font-sora font-semibold text-lg md:text-xl mt-2">
                    {activeItem.title}
                  </h3>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
