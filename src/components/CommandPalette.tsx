"use client";

import React, { useEffect, useState, useRef } from "react";
import { useTheme } from "@/context/ThemeContext";
import { useRouter } from "next/navigation";
import { Search, Sun, Moon, Folder, User, Terminal, Compass, Briefcase, Award, GraduationCap, Mail, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import resumeData from "@/data/resume.json";

interface CommandItem {
  id: string;
  title: string;
  subtitle?: string;
  category: string;
  icon: React.ReactNode;
  action: () => void;
}

export const CommandPalette: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { theme, toggleTheme } = useTheme();
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
      setSearch("");
      setSelectedIndex(0);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const items: CommandItem[] = [
    {
      id: "nav-about",
      title: "Go to About Me",
      subtitle: "Who I am and my engineering philosophy",
      category: "Navigation",
      icon: <User size={16} />,
      action: () => {
        router.push("/#about");
        setIsOpen(false);
      },
    },
    {
      id: "nav-projects",
      title: "Go to Projects",
      subtitle: "My featured engineering works",
      category: "Navigation",
      icon: <Folder size={16} />,
      action: () => {
        router.push("/#projects");
        setIsOpen(false);
      },
    },
    {
      id: "nav-experience",
      title: "Go to Experience / Journey",
      subtitle: "My path through AI, Robotics, and CP",
      category: "Navigation",
      icon: <Briefcase size={16} />,
      action: () => {
        router.push("/#experience");
        setIsOpen(false);
      },
    },
    {
      id: "nav-skills",
      title: "Go to Skills",
      subtitle: "My interactive technical toolkit",
      category: "Navigation",
      icon: <Terminal size={16} />,
      action: () => {
        router.push("/#skills");
        setIsOpen(false);
      },
    },
    {
      id: "nav-achievements",
      title: "Go to Achievements",
      subtitle: "Competitive highlights and hackathons",
      category: "Navigation",
      icon: <Award size={16} />,
      action: () => {
        router.push("/#achievements");
        setIsOpen(false);
      },
    },
    {
      id: "nav-contact",
      title: "Go to Contact",
      subtitle: "Get in touch or download resume",
      category: "Navigation",
      icon: <Mail size={16} />,
      action: () => {
        router.push("/#contact");
        setIsOpen(false);
      },
    },
    {
      id: "proj-aura",
      title: "View Project: Aura Beauty Concierge",
      subtitle: "Skincare analytics platform",
      category: "Projects",
      icon: <Folder size={16} className="text-accent" />,
      action: () => {
        router.push("/projects/aura");
        setIsOpen(false);
      },
    },
    {
      id: "proj-rover",
      title: "View Project: Autonomous Excavation Rover",
      subtitle: "Physical ROS 2 mapping & robotics system",
      category: "Projects",
      icon: <Compass size={16} className="text-accent" />,
      action: () => {
        router.push("/projects/rover");
        setIsOpen(false);
      },
    },
    {
      id: "proj-ignus",
      title: "View Project: Monocular Depth Estimation",
      subtitle: "Edge AI model pipeline",
      category: "Projects",
      icon: <Terminal size={16} className="text-accent" />,
      action: () => {
        router.push("/projects/ignus-a3d");
        setIsOpen(false);
      },
    },
    {
      id: "act-theme",
      title: `Switch to ${theme === "dark" ? "Light" : "Dark"} Mode`,
      subtitle: "Toggle color appearance",
      category: "Actions",
      icon: theme === "dark" ? <Sun size={16} /> : <Moon size={16} />,
      action: () => {
        toggleTheme();
        setIsOpen(false);
      },
    },
    {
      id: "act-resume",
      title: "Download Resume",
      subtitle: "Get PDF version of my CV",
      category: "Actions",
      icon: <GraduationCap size={16} />,
      action: () => {
        window.open(resumeData.resumeUrl, "_blank");
        setIsOpen(false);
      },
    },
  ];

  const filtered = items.filter((item) => {
    const text = `${item.title} ${item.subtitle || ""} ${item.category}`.toLowerCase();
    return text.includes(search.toLowerCase());
  });

  // Calculate grouped indexing mapping for selection
  const groupOrder = ["Navigation", "Projects", "Actions"];
  const flatFilteredList: CommandItem[] = [];
  
  groupOrder.forEach((g) => {
    const itemsInGroup = filtered.filter((i) => i.category === g);
    flatFilteredList.push(...itemsInGroup);
  });
  
  filtered.forEach((item) => {
    if (!groupOrder.includes(item.category) && !flatFilteredList.find(fi => fi.id === item.id)) {
      flatFilteredList.push(item);
    }
  });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % (flatFilteredList.length || 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + flatFilteredList.length) % (flatFilteredList.length || 1));
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (flatFilteredList[selectedIndex]) {
          flatFilteredList[selectedIndex].action();
        }
      } else if (e.key === "Escape") {
        e.preventDefault();
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, flatFilteredList, selectedIndex]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-pill-bg border border-pill-border text-sm text-text-secondary hover:text-text-primary transition-all cursor-pointer font-sans"
        title="Open Command Palette (Ctrl+K)"
      >
        <Search size={14} />
        <span>Search...</span>
        <kbd className="text-[10px] font-mono bg-card-bg border border-pill-border px-1.5 py-0.5 rounded leading-none text-text-secondary select-none">
          Ctrl K
        </kbd>
      </button>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[999999] flex items-start justify-center pt-[15vh] px-4">
            <motion.div
              ref={containerRef}
              initial={{ opacity: 0, scale: 0.96, y: -15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -15 }}
              transition={{ duration: 0.12 }}
              className="w-full max-w-lg rounded-xl bg-card-bg border border-card-border shadow-2xl overflow-hidden flex flex-col max-h-[50vh] font-sans"
            >
              <div className="flex items-center gap-3 px-4 py-3.5 border-b border-card-border">
                <Search size={18} className="text-text-secondary" />
                <input
                  ref={inputRef}
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                    setSelectedIndex(0);
                  }}
                  placeholder="Type a command or search..."
                  className="flex-1 bg-transparent border-none outline-none text-text-primary text-base placeholder-text-secondary"
                />
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-xs text-text-secondary hover:text-text-primary border border-pill-border px-2 py-0.5 rounded cursor-pointer"
                >
                  ESC
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-2 scrollbar-thin">
                {flatFilteredList.length === 0 ? (
                  <div className="py-12 text-center text-text-secondary text-sm">
                    No results found for &ldquo;{search}&rdquo;
                  </div>
                ) : (
                  <div>
                    {groupOrder.map((groupName) => {
                      const groupItems = flatFilteredList.filter((i) => i.category === groupName);
                      if (groupItems.length === 0) return null;

                      return (
                        <div key={groupName} className="mb-3 last:mb-0">
                          <div className="px-3 py-1 text-[10px] uppercase font-semibold tracking-wider text-text-secondary/70">
                            {groupName}
                          </div>
                          <div className="mt-1 flex flex-col gap-0.5">
                            {groupItems.map((item) => {
                              const flatIndex = flatFilteredList.findIndex((fi) => fi.id === item.id);
                              const isSelected = flatIndex === selectedIndex;

                              return (
                                <button
                                  key={item.id}
                                  onClick={item.action}
                                  onMouseEnter={() => setSelectedIndex(flatIndex)}
                                  className={`flex items-center justify-between w-full px-3 py-2 rounded-lg text-left transition-colors cursor-pointer ${
                                    isSelected
                                      ? "bg-accent text-white"
                                      : "hover:bg-pill-bg text-text-primary"
                                  }`}
                                >
                                  <div className="flex items-center gap-3 min-w-0">
                                    <div
                                      className={`flex items-center justify-center w-7 h-7 rounded-md shrink-0 ${
                                        isSelected ? "bg-white/20 text-white" : "bg-pill-bg text-text-secondary"
                                      }`}
                                    >
                                      {item.icon}
                                    </div>
                                    <div className="min-w-0">
                                      <div className="text-sm font-medium truncate">{item.title}</div>
                                      {item.subtitle && (
                                        <div
                                          className={`text-xs truncate ${
                                            isSelected ? "text-white/80" : "text-text-secondary"
                                          }`}
                                        >
                                          {item.subtitle}
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                  {isSelected && <ChevronRight size={14} className="text-white/80 shrink-0" />}
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              <div className="px-4 py-2 bg-bg-secondary border-t border-card-border flex items-center justify-between text-[11px] text-text-secondary select-none">
                <div className="flex items-center gap-3">
                  <span>↑↓ Navigate</span>
                  <span>↵ Select</span>
                </div>
                <span>Ctrl+K to close</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
