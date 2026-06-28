"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import resumeData from "@/data/resume.json";
import { Mail, FileText, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const ContactSection: React.FC = () => {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setStatus("sending");

    // EmailJS credentials from environment variables or mock fallback
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (serviceId && templateId && publicKey) {
      try {
        await emailjs.send(
          serviceId,
          templateId,
          {
            from_name: data.name,
            from_email: data.email,
            subject: data.subject,
            message: data.message,
            to_name: "Devadharsini Sivakumar",
          },
          publicKey
        );
        setStatus("success");
        reset();
      } catch (err) {
        console.error("EmailJS Error:", err);
        setStatus("error");
      }
    } else {
      // Mock API submission simulation
      setTimeout(() => {
        setStatus("success");
        reset();
      }, 1500);
    }
  };

  const contactLinks = [
    {
      label: "Email",
      value: resumeData.email,
      href: `mailto:${resumeData.email}`,
      icon: <Mail size={18} />,
    },
    {
      label: "LinkedIn",
      value: "devadharsini-sivakumar",
      href: resumeData.linkedin,
      icon: <LinkedinIcon className="w-[18px] h-[18px]" />,
    },
    {
      label: "GitHub",
      value: "devadharsini-s",
      href: resumeData.github,
      icon: <GithubIcon className="w-[18px] h-[18px]" />,
    },
    {
      label: "Resume",
      value: "Download PDF",
      href: resumeData.resumeUrl,
      icon: <FileText size={18} />,
    },
  ];

  return (
    <section id="contact" className="py-24 border-t border-card-border/40 font-sans">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="mb-16 text-left">
          <h2 className="font-sora text-3xl md:text-4xl font-extrabold tracking-tight text-text-primary mb-4">
            Get in Touch
          </h2>
          <div className="h-1 w-12 bg-accent rounded" />
          <p className="mt-4 text-text-secondary max-w-xl text-sm md:text-base">
            Have a project idea, research proposal, or job opportunity? Drop a message below and I will get back to you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Coordinates */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="flex flex-col gap-6">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.label !== "Email" ? "_blank" : undefined}
                  rel={link.label !== "Email" ? "noopener noreferrer" : undefined}
                  className="p-5 rounded-2xl bg-card-bg border border-card-border/60 hover:border-accent/40 shadow-sm flex items-center gap-4 transition-all duration-300 group cursor-pointer"
                >
                  <div className="p-3 rounded-xl bg-pill-bg border border-pill-border text-text-secondary group-hover:text-accent group-hover:bg-accent/5 group-hover:border-accent/20 transition-all shrink-0">
                    {link.icon}
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold text-text-secondary tracking-widest">
                      {link.label}
                    </div>
                    <div className="text-sm font-semibold text-text-primary mt-0.5 group-hover:text-accent transition-colors">
                      {link.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-8 p-5 rounded-2xl bg-bg-secondary/40 border border-card-border/60 text-xs text-text-secondary leading-relaxed">
              Based in <strong>Coimbatore, Tamil Nadu, India</strong>. Willing to relocate for full-time engineering and research positions.
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 md:p-8 rounded-2xl bg-card-bg border border-card-border/60 shadow-sm">
              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
                
                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-xs font-semibold text-text-secondary">Name</label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                    {...register("name", { required: "Name is required" })}
                    className="px-4 py-3 rounded-xl bg-pill-bg border border-pill-border text-text-primary text-sm focus:outline-none focus:border-accent/50 focus:bg-card-bg transition-all"
                  />
                  {errors.name && (
                    <span className="text-[11px] text-red-500 font-medium flex items-center gap-1">
                      <AlertCircle size={10} />
                      {errors.name.message}
                    </span>
                  )}
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-xs font-semibold text-text-secondary">Email Address</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                    className="px-4 py-3 rounded-xl bg-pill-bg border border-pill-border text-text-primary text-sm focus:outline-none focus:border-accent/50 focus:bg-card-bg transition-all"
                  />
                  {errors.email && (
                    <span className="text-[11px] text-red-500 font-medium flex items-center gap-1">
                      <AlertCircle size={10} />
                      {errors.email.message}
                    </span>
                  )}
                </div>

                {/* Subject */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="subject" className="text-xs font-semibold text-text-secondary">Subject</label>
                  <input
                    id="subject"
                    type="text"
                    placeholder="Enter message subject"
                    {...register("subject", { required: "Subject is required" })}
                    className="px-4 py-3 rounded-xl bg-pill-bg border border-pill-border text-text-primary text-sm focus:outline-none focus:border-accent/50 focus:bg-card-bg transition-all"
                  />
                  {errors.subject && (
                    <span className="text-[11px] text-red-500 font-medium flex items-center gap-1">
                      <AlertCircle size={10} />
                      {errors.subject.message}
                    </span>
                  )}
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-xs font-semibold text-text-secondary">Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Enter your message..."
                    {...register("message", { required: "Message is required" })}
                    className="px-4 py-3 rounded-xl bg-pill-bg border border-pill-border text-text-primary text-sm focus:outline-none focus:border-accent/50 focus:bg-card-bg transition-all resize-none"
                  />
                  {errors.message && (
                    <span className="text-[11px] text-red-500 font-medium flex items-center gap-1">
                      <AlertCircle size={10} />
                      {errors.message.message}
                    </span>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={status === "sending" || status === "success"}
                  className={`mt-2 flex items-center justify-center gap-2 w-full py-3.5 text-sm font-semibold rounded-xl text-white transition-all cursor-pointer ${
                    status === "sending"
                      ? "bg-accent/70 cursor-not-allowed"
                      : status === "success"
                      ? "bg-emerald-600 shadow-lg shadow-emerald-500/10 cursor-not-allowed"
                      : "bg-accent hover:bg-accent-hover shadow-lg shadow-accent/10"
                  }`}
                >
                  {status === "sending" ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : status === "success" ? (
                    <>
                      <CheckCircle2 size={16} />
                      <span>Message Sent!</span>
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
