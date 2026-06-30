import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import projectsData from "@/data/projects.json";
import { ArrowLeft, ExternalLink, Cpu, Compass, Terminal, ShieldAlert, Award, Play } from "lucide-react";
import { GithubIcon } from "@/components/Icons";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return [
    { id: "aura" },
    { id: "rover" },
    { id: "ignus-a3d" }
  ];
}

const renderArchitectureDiagram = (id: string) => {
  switch (id) {
    case "aura":
      return (
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-6 rounded-2xl bg-pill-bg border border-pill-border">
          <div className="flex flex-col items-center p-4 rounded-xl bg-card-bg border border-card-border w-full md:w-40 text-center shadow-sm">
            <span className="text-[9px] font-bold text-accent tracking-widest uppercase">Input</span>
            <span className="text-xs font-bold text-text-primary mt-1">RGB Camera Feed</span>
            <span className="text-[9px] text-text-secondary mt-1">Selfie / Capture stream</span>
          </div>
          <div className="text-accent text-xs font-bold rotate-90 md:rotate-0">→</div>
          <div className="flex flex-col items-center p-4 rounded-xl bg-card-bg border border-card-border w-full md:w-40 text-center shadow-sm">
            <span className="text-[9px] font-bold text-accent tracking-widest uppercase">Landmarks</span>
            <span className="text-xs font-bold text-text-primary mt-1">MediaPipe Mesh</span>
            <span className="text-[9px] text-text-secondary mt-1">468 Dynamic face points</span>
          </div>
          <div className="text-accent text-xs font-bold rotate-90 md:rotate-0">→</div>
          <div className="flex flex-col items-center p-4 rounded-xl bg-card-bg border border-card-border w-full md:w-40 text-center shadow-sm">
            <span className="text-[9px] font-bold text-accent tracking-widest uppercase">Inference</span>
            <span className="text-xs font-bold text-text-primary mt-1">PyTorch CNN</span>
            <span className="text-[9px] text-text-secondary mt-1">Texture & Undertone analysis</span>
          </div>
          <div className="text-accent text-xs font-bold rotate-90 md:rotate-0">→</div>
          <div className="flex flex-col items-center p-4 rounded-xl bg-card-bg border border-card-border w-full md:w-40 text-center shadow-sm">
            <span className="text-[9px] font-bold text-accent tracking-widest uppercase">Logic Agent</span>
            <span className="text-xs font-bold text-text-primary mt-1">LangChain Model</span>
            <span className="text-[9px] text-text-secondary mt-1">Formulates custom routines</span>
          </div>
        </div>
      );
    case "rover":
      return (
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-6 rounded-2xl bg-pill-bg border border-pill-border">
          <div className="flex flex-col items-center p-4 rounded-xl bg-card-bg border border-card-border w-full md:w-40 text-center shadow-sm">
            <span className="text-[9px] font-bold text-accent tracking-widest uppercase">Telemetry</span>
            <span className="text-xs font-bold text-text-primary mt-1">LiDAR & Odometry</span>
            <span className="text-[9px] text-text-secondary mt-1">Real-time ROS 2 nodes</span>
          </div>
          <div className="text-accent text-xs font-bold rotate-90 md:rotate-0">→</div>
          <div className="flex flex-col items-center p-4 rounded-xl bg-card-bg border border-card-border w-full md:w-40 text-center shadow-sm">
            <span className="text-[9px] font-bold text-accent tracking-widest uppercase">Localization</span>
            <span className="text-xs font-bold text-text-primary mt-1">Cartographer SLAM</span>
            <span className="text-[9px] text-text-secondary mt-1">Grid map occupancy</span>
          </div>
          <div className="text-accent text-xs font-bold rotate-90 md:rotate-0">→</div>
          <div className="flex flex-col items-center p-4 rounded-xl bg-card-bg border border-card-border w-full md:w-40 text-center shadow-sm">
            <span className="text-[9px] font-bold text-accent tracking-widest uppercase">Decision</span>
            <span className="text-xs font-bold text-text-primary mt-1">YOLOv8 Detection</span>
            <span className="text-[9px] text-text-secondary mt-1">Sand height target</span>
          </div>
          <div className="text-accent text-xs font-bold rotate-90 md:rotate-0">→</div>
          <div className="flex flex-col items-center p-4 rounded-xl bg-card-bg border border-card-border w-full md:w-40 text-center shadow-sm">
            <span className="text-[9px] font-bold text-accent tracking-widest uppercase">Execution</span>
            <span className="text-xs font-bold text-text-primary mt-1">MoveIt 2 Control</span>
            <span className="text-[9px] text-text-secondary mt-1">Arduino kinematics scoop</span>
          </div>
        </div>
      );
    case "ignus-a3d":
      return (
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-6 rounded-2xl bg-pill-bg border border-pill-border">
          <div className="flex flex-col items-center p-4 rounded-xl bg-card-bg border border-card-border w-full md:w-40 text-center shadow-sm">
            <span className="text-[9px] font-bold text-accent tracking-widest uppercase">Feed</span>
            <span className="text-xs font-bold text-text-primary mt-1">Single RGB Stream</span>
            <span className="text-[9px] text-text-secondary mt-1">Standard 2D video</span>
          </div>
          <div className="text-accent text-xs font-bold rotate-90 md:rotate-0">→</div>
          <div className="flex flex-col items-center p-4 rounded-xl bg-card-bg border border-card-border w-full md:w-40 text-center shadow-sm">
            <span className="text-[9px] font-bold text-accent tracking-widest uppercase">Feature Extr</span>
            <span className="text-xs font-bold text-text-primary mt-1">EfficientNet Backbone</span>
            <span className="text-[9px] text-text-secondary mt-1">Convolutional layering</span>
          </div>
          <div className="text-accent text-xs font-bold rotate-90 md:rotate-0">→</div>
          <div className="flex flex-col items-center p-4 rounded-xl bg-card-bg border border-card-border w-full md:w-40 text-center shadow-sm">
            <span className="text-[9px] font-bold text-accent tracking-widest uppercase">Mapping</span>
            <span className="text-xs font-bold text-text-primary mt-1">Attention Decoder</span>
            <span className="text-[9px] text-text-secondary mt-1">Depthwise projection map</span>
          </div>
          <div className="text-accent text-xs font-bold rotate-90 md:rotate-0">→</div>
          <div className="flex flex-col items-center p-4 rounded-xl bg-card-bg border border-card-border w-full md:w-40 text-center shadow-sm">
            <span className="text-[9px] font-bold text-accent tracking-widest uppercase">Acceleration</span>
            <span className="text-xs font-bold text-text-primary mt-1">TensorRT Engine</span>
            <span className="text-[9px] text-text-secondary mt-1">INT8 Drone Autopilot</span>
          </div>
        </div>
      );
    default:
      return null;
  }
};

export default async function ProjectDetailPage({ params }: PageProps) {
  const { id } = await params;
  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  const currentIdx = projectsData.findIndex((p) => p.id === id);
  const nextProject = projectsData[(currentIdx + 1) % projectsData.length];

  return (
    <div className="min-h-screen py-16 md:py-24 bg-bg-primary font-sans transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        
        <Link
          href="/#projects"
          className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-text-secondary hover:text-accent transition-colors mb-10"
        >
          <ArrowLeft size={14} />
          <span>Back to Projects</span>
        </Link>

        <div className="mb-12">
          <h1 className="font-sora text-3xl md:text-5xl font-extrabold tracking-tight text-text-primary mb-4 leading-tight">
            {project.title}
          </h1>
          <div className="flex flex-wrap gap-2 mb-8">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="text-xs font-bold text-text-secondary bg-pill-bg border border-pill-border px-2.5 py-0.5 rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-card-border bg-card-bg shadow-sm">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-16">
          <div className="md:col-span-2">
            <h2 className="font-sora text-xl md:text-2xl font-extrabold text-text-primary mb-4">Overview</h2>
            <p className="text-text-secondary text-sm md:text-base leading-relaxed">{project.longDescription}</p>
          </div>
          <div>
            <h2 className="font-sora text-xl md:text-2xl font-extrabold text-text-primary mb-4">Problem</h2>
            <p className="text-text-secondary text-xs leading-relaxed">{project.problemStatement}</p>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="font-sora text-xl md:text-2xl font-extrabold text-text-primary mb-6">System Architecture</h2>
          {renderArchitectureDiagram(project.id)}
        </div>

        <div className="mb-16">
          <h2 className="font-sora text-xl md:text-2xl font-extrabold text-text-primary mb-6">Pipeline &amp; Workflow</h2>
          <div className="flex flex-col gap-4">
            {project.workflow.map((step, idx) => (
              <div key={idx} className="flex gap-4 p-4 rounded-xl bg-card-bg border border-card-border/60 shadow-sm">
                <span className="font-sora font-extrabold text-lg text-accent w-6 shrink-0 text-center">
                  {(idx + 1).toString().padStart(2, "0")}
                </span>
                <p className="text-sm text-text-secondary leading-relaxed">{step}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="font-sora text-xl md:text-2xl font-extrabold text-text-primary mb-6">Engineering Challenges</h2>
          <div className="grid grid-cols-1 gap-6">
            {project.challenges.map((challenge, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-card-bg border border-card-border/60 shadow-sm flex flex-col md:flex-row gap-5">
                <div className="flex-1">
                  <div className="flex items-center gap-2 text-red-500 mb-2 font-semibold">
                    <ShieldAlert size={16} />
                    <span className="text-xs uppercase tracking-wider">Challenge {idx + 1}</span>
                  </div>
                  <p className="text-xs font-semibold text-text-primary">{challenge}</p>
                </div>
                <div className="hidden md:block w-px bg-card-border" />
                <div className="flex-1">
                  <div className="flex items-center gap-2 text-emerald-500 mb-2 font-semibold">
                    <Award size={16} />
                    <span className="text-xs uppercase tracking-wider">Solution Implemented</span>
                  </div>
                  <p className="text-xs text-text-secondary leading-relaxed">{project.solutions[idx]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {project.videoDemo && (
          <div className="mb-16">
            <h2 className="font-sora text-xl md:text-2xl font-extrabold text-text-primary mb-6">Video Walkthrough</h2>
            <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-card-border bg-card-bg shadow-sm">
              <iframe
                src={project.videoDemo}
                title={`${project.title} Video Demo`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full border-0"
              />
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-20 border-t border-card-border/40 pt-12">
          <div>
            <h2 className="font-sora text-xl md:text-2xl font-extrabold text-text-primary mb-4">Results &amp; Metrics</h2>
            <p className="text-text-secondary text-sm leading-relaxed">{project.results}</p>
          </div>
          <div>
            <h2 className="font-sora text-xl md:text-2xl font-extrabold text-text-primary mb-4">Future Scope</h2>
            <ul className="list-disc pl-4 space-y-2.5">
              {project.futureScope.map((scope, idx) => (
                <li key={idx} className="text-xs text-text-secondary leading-relaxed">
                  {scope}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-card-border/40 pt-10 mb-16">
          <div className="flex items-center gap-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-5 py-2.5 bg-accent hover:bg-accent-hover text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all cursor-pointer font-semibold"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub Source</span>
              </a>
            )}
            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-5 py-2.5 bg-pill-bg border border-pill-border hover:bg-card-bg text-text-primary text-xs font-bold uppercase tracking-wider rounded-xl transition-all cursor-pointer font-semibold"
              >
                <ExternalLink size={14} />
                <span>Live Demonstration</span>
              </a>
            )}
            {project.videoDemo && (
              <a
                href={project.videoDemo.replace("/preview", "/view")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-5 py-2.5 bg-pill-bg border border-pill-border hover:bg-card-bg text-text-primary text-xs font-bold uppercase tracking-wider rounded-xl transition-all cursor-pointer font-semibold"
              >
                <Play size={14} className="text-accent fill-accent/20" />
                <span>Watch Video</span>
              </a>
            )}
          </div>

          <Link
            href={nextProject.caseStudy}
            className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-text-secondary hover:text-accent transition-colors"
          >
            <span>Next Project: {nextProject.title}</span>
            <span>→</span>
          </Link>
        </div>

      </div>
    </div>
  );
}
