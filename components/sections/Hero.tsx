"use client";

import React, { useState } from "react";
import Image from "next/image";
import { personalInfo } from "@/data/personal";
import { ArrowRight, FileText, Mail, Check, GraduationCap, Award, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from "@/components/ui/Icons";

export function Hero() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section
      id="about"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-white dark:bg-[#07090E] transition-colors duration-200"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-10 w-[550px] h-[450px] bg-blue-600/15 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[580px]">
          {/* Left Column: Text Content & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            {/* Status pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs font-medium border border-indigo-200 dark:border-indigo-500/30 bg-indigo-50/70 dark:bg-[#0D1527]/80 text-slate-700 dark:text-slate-300 mb-6 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{personalInfo.statusBadge}</span>
            </div>

            {/* Main Name Heading */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6 leading-[1.1]">
              <span>{personalInfo.firstName || "Angira"} </span>
              <span className="text-[#6875F5] dark:text-[#707CF6]">
                {personalInfo.lastName || "Yadav"}
              </span>
            </h1>

            {/* Tagline / Profile Description */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-normal leading-relaxed max-w-xl mb-8">
              {personalInfo.headline}
            </p>

            {/* CTA Buttons Row */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-indigo-600/30 active:scale-95"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-300 dark:border-white/15 bg-slate-100/80 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-800 dark:text-white font-medium text-sm transition-all duration-200 active:scale-95"
              >
                <FileText className="w-4 h-4 text-slate-600 dark:text-slate-300" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Social Links Row */}
            <div className="flex flex-wrap items-center gap-6 mb-8 text-sm text-slate-600 dark:text-slate-300">
              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
              </a>

              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>

              {personalInfo.leetcodeUrl && (
                <a
                  href={personalInfo.leetcodeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  <LeetCodeIcon className="w-4 h-4" />
                  <span>LeetCode</span>
                </a>
              )}

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 hover:text-slate-900 dark:hover:text-white transition-colors"
                title="Click to copy email address"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />
                    <span className="text-emerald-600 dark:text-emerald-400 font-medium">Copied!</span>
                  </>
                ) : (
                  <>
                    <Mail className="w-4 h-4" />
                    <span>Email</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right Column: Person Image with Ambient Glow & Doodles */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Ambient circular ring glow */}
            <div className="absolute w-[360px] h-[360px] sm:w-[440px] sm:h-[440px] rounded-full border border-indigo-500/25 pointer-events-none -z-10" />
            <div className="absolute w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] rounded-full bg-gradient-to-tr from-indigo-600/30 to-blue-500/10 blur-2xl pointer-events-none -z-10" />

            {/* Doodle: Sparks above head */}
            <svg
              className="absolute -top-6 left-12 w-12 h-12 text-indigo-400/80 pointer-events-none select-none hidden sm:block"
              viewBox="0 0 40 40"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            >
              <line x1="8" y1="22" x2="16" y2="18" />
              <line x1="20" y1="6" x2="20" y2="15" />
              <line x1="32" y1="22" x2="24" y2="18" />
            </svg>

            {/* Portrait Image Frame & Resume Detail Badges */}
            <div className="relative">
              {/* Doodle: "Building Ideas into Real Products" safely positioned above image without overlapping */}
              <div className="absolute -top-16 -right-2 sm:-right-8 z-20 pointer-events-none select-none hidden md:block">
                <div className="text-right">
                  <span className="font-serif italic text-slate-400 text-xs sm:text-sm tracking-wide block transform -rotate-6">
                    Building
                  </span>
                  <span className="font-serif italic text-slate-400 text-xs sm:text-sm tracking-wide block transform -rotate-6">
                    Ideas into
                  </span>
                  <span className="font-serif italic text-slate-300 text-xs sm:text-sm font-medium tracking-wide block transform -rotate-6">
                    Real Products
                  </span>
                </div>
                {/* Curved arrow pointing down toward portrait */}
                <svg
                  className="w-8 h-8 text-slate-400/70 ml-auto mt-0.5 transform rotate-12"
                  viewBox="0 0 40 40"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M30 6 C24 16, 12 18, 12 32" />
                  <path d="M8 26 L12 32 L18 28" />
                </svg>
              </div>
              {/* Floating Badge 1: Academic Excellence (Top-Left) */}
              <div className="absolute -top-4 -left-3 sm:-left-8 z-20 flex items-center gap-2.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl bg-white/90 dark:bg-[#0B0F1B]/90 backdrop-blur-md border border-slate-200 dark:border-white/15 shadow-xl animate-float">
                <div className="w-7 h-7 rounded-lg bg-indigo-500/10 dark:bg-indigo-500/20 border border-indigo-500/20 dark:border-indigo-500/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shrink-0">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="text-[11px] sm:text-xs font-semibold text-slate-900 dark:text-white leading-tight">
                    SRMIST • CSE Core
                  </div>
                  <div className="text-[10px] sm:text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-medium">
                    CGPA 9.74 / 10
                  </div>
                </div>
              </div>

              {/* Floating Badge 2: Founder Scholarship (Bottom-Left) */}
              <div className="absolute -bottom-4 -left-2 sm:-left-8 z-20 flex items-center gap-2.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl bg-white/90 dark:bg-[#0B0F1B]/90 backdrop-blur-md border border-slate-200 dark:border-white/15 shadow-xl animate-float-delayed">
                <div className="w-7 h-7 rounded-lg bg-amber-500/10 dark:bg-amber-500/20 border border-amber-500/20 dark:border-amber-500/30 flex items-center justify-center text-amber-600 dark:text-amber-400 shrink-0">
                  <Award className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="text-[11px] sm:text-xs font-semibold text-slate-900 dark:text-white leading-tight">
                    SRMJEEE Rank 10
                  </div>
                  <div className="text-[10px] sm:text-[11px] font-mono text-amber-600 dark:text-amber-300 font-medium">
                    Founder Scholar
                  </div>
                </div>
              </div>

              {/* Floating Badge 3: Samsung SIC (Bottom-Right) */}
              <div className="absolute -bottom-4 -right-2 sm:-right-8 z-20 hidden md:flex items-center gap-2.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl bg-white/90 dark:bg-[#0B0F1B]/90 backdrop-blur-md border border-slate-200 dark:border-white/15 shadow-xl animate-float-reverse">
                <div className="w-7 h-7 rounded-lg bg-cyan-500/10 dark:bg-cyan-500/20 border border-cyan-500/20 dark:border-cyan-500/30 flex items-center justify-center text-cyan-600 dark:text-cyan-400 shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="text-[11px] sm:text-xs font-semibold text-slate-900 dark:text-white leading-tight">
                    Samsung SIC
                  </div>
                  <div className="text-[10px] sm:text-[11px] font-mono text-cyan-600 dark:text-cyan-300 font-medium">
                    Top 80 Cohort
                  </div>
                </div>
              </div>

              {/* Portrait Image Frame */}
              <div className="relative w-[300px] h-[380px] sm:w-[380px] sm:h-[460px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-[#0B0F1B]/60 group">
                <Image
                  src={personalInfo.profileImage || "/profile.jpeg"}
                  alt={personalInfo.name}
                  width={450}
                  height={550}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                  priority
                />

                {/* Gradient blend at bottom */}
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#07090E] via-[#07090E]/60 to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
