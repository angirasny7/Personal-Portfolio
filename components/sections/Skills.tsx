"use client";

import React, { useState } from "react";
import { skillCategories } from "@/data/skills";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  Code2,
  Globe,
  Cpu,
  Brain,
  Wrench,
  Layers,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

export function SkillsSection() {
  const [activeTab, setActiveTab] = useState<string>("All");

  const getCategoryIcon = (title: string) => {
    switch (title) {
      case "Programming Languages":
        return Code2;
      case "Technologies & Web":
        return Globe;
      case "Core Computer Science":
        return Cpu;
      case "AI / Machine Learning":
        return Brain;
      case "Developer Tools & Platforms":
        return Wrench;
      default:
        return Sparkles;
    }
  };

  const filteredCategories =
    activeTab === "All"
      ? skillCategories
      : skillCategories.filter((c) => c.title === activeTab);

  return (
    <section id="skills" className="py-16 md:py-24 border-t border-slate-200/80 dark:border-white/[0.08]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Technical Stack"
          title="Skills & Technologies"
        />

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <button
            onClick={() => setActiveTab("All")}
            className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
              activeTab === "All"
                ? "bg-indigo-600 text-white shadow-xs"
                : "bg-slate-100 dark:bg-white/[0.04] text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200/60 dark:border-white/[0.06]"
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>All Categories</span>
          </button>

          {skillCategories.map((cat) => {
            const Icon = getCategoryIcon(cat.title);
            const isActive = activeTab === cat.title;

            return (
              <button
                key={cat.title}
                onClick={() => setActiveTab(cat.title)}
                className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
                  isActive
                    ? "bg-indigo-600 text-white shadow-xs"
                    : "bg-slate-100 dark:bg-white/[0.04] text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200/60 dark:border-white/[0.06]"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Clean, Uniform Category Cards Grid */}
        <div
          className={`grid gap-5 ${
            activeTab === "All"
              ? "grid-cols-1 md:grid-cols-2"
              : "grid-cols-1 max-w-2xl mx-auto"
          }`}
        >
          {filteredCategories.map((category) => {
            const Icon = getCategoryIcon(category.title);

            return (
              <div
                key={category.title}
                className="group p-6 rounded-2xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#0E1118] hover:border-indigo-500/40 dark:hover:border-indigo-500/40 transition-all duration-200 shadow-xs hover:shadow-md hover:shadow-indigo-950/5 flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between gap-3 mb-2">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-500/20 text-indigo-600 dark:text-indigo-400 group-hover:scale-105 transition-transform">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="text-base font-bold text-slate-900 dark:text-white">
                        {category.title}
                      </h3>
                    </div>

                    <span className="text-xs font-mono font-medium text-slate-400 bg-slate-50 dark:bg-white/[0.03] px-2.5 py-0.5 rounded-full border border-slate-200/50 dark:border-white/[0.05]">
                      {category.skills.length}
                    </span>
                  </div>

                  {/* Clean Subtitle */}
                  {category.description && (
                    <p className="text-xs text-slate-500 dark:text-slate-400 mb-5 leading-relaxed">
                      {category.description}
                    </p>
                  )}

                  {/* Skills Tag Pills */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill.name}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono font-medium bg-slate-50 dark:bg-white/[0.04] text-slate-700 dark:text-slate-200 border border-slate-200/80 dark:border-white/[0.08] hover:border-indigo-400 dark:hover:border-indigo-500/40 hover:bg-indigo-50/50 dark:hover:bg-indigo-950/20 hover:text-indigo-700 dark:hover:text-indigo-300 transition-all"
                      >
                        <CheckCircle2 className="w-3 h-3 text-indigo-500 shrink-0" />
                        <span>{skill.name}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
