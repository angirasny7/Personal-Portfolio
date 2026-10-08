"use client";

import React, { useState, useEffect } from "react";
import { projects } from "@/data/projects";
import { Project } from "@/types/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import {
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Calendar,
  Clock,
  X,
  ArrowRight,
  Layers,
  Sparkles,
} from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";

export function FeaturedProjects() {
  const majorProjects = projects.filter((p) => p.featured);
  const additionalProjects = projects.filter((p) => !p.featured);

  // Active project displayed in the pop-up detail card
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  // Track "View More Projects" visibility
  const [showMore, setShowMore] = useState(false);
  // Track pending demo links
  const [pendingDemo, setPendingDemo] = useState<string | null>(null);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedProject(null);
      }
    };
    if (selectedProject) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject]);

  const handleDemoClick = (e: React.MouseEvent, url: string | undefined, slug: string) => {
    const isActualUrl = Boolean(
      url &&
      url.trim() !== "" &&
      url !== "#" &&
      !url.includes("example")
    );

    if (!isActualUrl) {
      e.preventDefault();
      setPendingDemo(slug);
      setTimeout(() => {
        setPendingDemo((cur) => (cur === slug ? null : cur));
      }, 3500);
    }
  };

  const renderProjectCard = (project: Project) => {
    return (
      <div
        key={project.slug}
        onClick={() => setSelectedProject(project)}
        className="group relative rounded-2xl border border-slate-200 dark:border-white/[0.08] hover:border-indigo-500/60 dark:hover:border-indigo-500/60 transition-all duration-300 overflow-hidden bg-white dark:bg-[#0E1118] hover:shadow-xl hover:shadow-indigo-500/10 hover:-translate-y-0.5 cursor-pointer p-5 sm:p-6"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex-1 space-y-1.5">
            {/* Meta row: Date + Category */}
            <div className="flex flex-wrap items-center gap-2.5">
              <Badge variant="brand" size="sm">
                {project.category}
              </Badge>
              {project.date && (
                <span className="flex items-center gap-1 text-xs font-mono text-slate-500 dark:text-slate-400">
                  <Calendar className="w-3 h-3 text-indigo-400" />
                  <span>{project.date}</span>
                </span>
              )}
            </div>

            {/* Title & Tagline */}
            <div className="space-y-1">
              <h3 className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                {project.title}
              </h3>
              {project.tagline && (
                <p className="text-xs sm:text-sm font-normal text-slate-500 dark:text-slate-400 leading-snug">
                  {project.tagline}
                </p>
              )}
            </div>

            {/* Tech Pills (Preview) */}
            <div className="flex flex-wrap items-center gap-1.5 pt-1">
              {project.technologies.slice(0, 5).map((tech) => (
                <span
                  key={tech}
                  className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-white/[0.04] text-slate-600 dark:text-slate-300 border border-slate-200/60 dark:border-white/[0.06]"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 5 && (
                <span className="text-[11px] font-mono text-slate-400">
                  +{project.technologies.length - 5}
                </span>
              )}
            </div>
          </div>

          {/* Quick Actions & Explore prompt */}
          <div className="flex items-center gap-2.5 shrink-0 self-end sm:self-center">
            {/* GitHub Link Button */}
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-white/[0.06] hover:bg-slate-200 dark:hover:bg-white/[0.12] text-slate-800 dark:text-white border border-slate-200 dark:border-white/10 transition-colors"
              title="View GitHub Repository"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
              <ExternalLink className="w-3 h-3 text-slate-400" />
            </a>

            {/* View Details Prompt */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800/40 group-hover:bg-indigo-600 group-hover:text-white dark:group-hover:bg-indigo-600 dark:group-hover:text-white transition-all">
              <span>View Details</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="projects" className="py-16 md:py-24 border-t border-slate-200/80 dark:border-white/[0.08]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Portfolio & Code"
          title="Featured Projects"
          subtitle="Click on any project card to open its technical architecture, implementation details, and live links."
        />

        {/* Major Project Cards List */}
        <div className="space-y-4">
          {majorProjects.map(renderProjectCard)}
        </div>

        {/* View More Projects Toggle Section */}
        {additionalProjects.length > 0 && (
          <div className="mt-8 pt-6 border-t border-slate-200/80 dark:border-white/[0.08] text-center">
            <button
              onClick={() => setShowMore(!showMore)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-300 dark:border-white/15 bg-white dark:bg-[#0E1118] hover:border-indigo-400 dark:hover:border-indigo-500/50 text-slate-800 dark:text-slate-200 font-semibold text-sm transition-all shadow-xs active:scale-95"
            >
              <span>
                {showMore
                  ? "Hide Additional Projects"
                  : `View More Projects (${additionalProjects.length})`}
              </span>
              {showMore ? (
                <ChevronUp className="w-4 h-4 text-indigo-500" />
              ) : (
                <ChevronDown className="w-4 h-4 text-indigo-500" />
              )}
            </button>

            {/* Additional Projects in the EXACT SAME Style and Layout */}
            {showMore && (
              <div className="space-y-4 mt-6 text-left animate-in fade-in-50 duration-300">
                {additionalProjects.map(renderProjectCard)}
              </div>
            )}
          </div>
        )}
      </div>

      {/* POP-UP PROJECT DETAILS CARD (MODAL OVERLAY) */}
      {selectedProject && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedProject(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl max-h-[90vh] flex flex-col rounded-2xl bg-white dark:bg-[#0F121C] border border-slate-200 dark:border-white/15 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200"
          >
            {/* Modal Header */}
            <div className="p-6 border-b border-slate-200 dark:border-white/10 bg-slate-50/50 dark:bg-white/[0.02] flex items-start justify-between gap-4">
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2.5">
                  <Badge variant="brand" size="sm">
                    {selectedProject.category}
                  </Badge>
                  {selectedProject.date && (
                    <span className="flex items-center gap-1 text-xs font-mono text-slate-500 dark:text-slate-400">
                      <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                      <span>{selectedProject.date}</span>
                    </span>
                  )}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                  {selectedProject.title}
                </h3>
                {selectedProject.tagline && (
                  <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
                    {selectedProject.tagline}
                  </p>
                )}
              </div>

              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                aria-label="Close details"
                className="p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-colors shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-6 overflow-y-auto space-y-6 text-slate-700 dark:text-slate-300">
              {/* Overview Description */}
              <div className="space-y-1.5">
                <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
                  Overview
                </h4>
                <p className="text-sm leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              {/* Key Architecture & Contributions */}
              {selectedProject.bulletPoints && selectedProject.bulletPoints.length > 0 && (
                <div className="space-y-2.5">
                  <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-indigo-500" />
                    Key Architecture & Contributions
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm">
                    {selectedProject.bulletPoints.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Technologies Used */}
              <div className="space-y-2">
                <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap items-center gap-1.5">
                  {selectedProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-100 dark:bg-white/[0.05] text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Sticky Footer Actions */}
            <div className="p-5 border-t border-slate-200 dark:border-white/10 bg-slate-50/70 dark:bg-white/[0.02] flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white transition-all shadow-xs"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>Open on GitHub</span>
                  <ExternalLink className="w-3 h-3 opacity-80" />
                </a>

                {pendingDemo === selectedProject.slug ? (
                  <div className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium text-amber-600 dark:text-amber-400 bg-amber-500/10 border border-amber-500/20 animate-in fade-in duration-200">
                    <Clock className="w-3.5 h-3.5 animate-pulse" />
                    <span>Will update soon</span>
                  </div>
                ) : (
                  <a
                    href={
                      selectedProject.liveDemoUrl && !selectedProject.liveDemoUrl.includes("example")
                        ? selectedProject.liveDemoUrl
                        : "#"
                    }
                    target={
                      selectedProject.liveDemoUrl && !selectedProject.liveDemoUrl.includes("example")
                        ? "_blank"
                        : undefined
                    }
                    rel={
                      selectedProject.liveDemoUrl && !selectedProject.liveDemoUrl.includes("example")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    onClick={(e) =>
                      handleDemoClick(e, selectedProject.liveDemoUrl, selectedProject.slug)
                    }
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-medium border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.04] hover:bg-slate-50 dark:hover:bg-white/[0.08] text-slate-700 dark:text-slate-200 transition-colors cursor-pointer"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>

              <button
                onClick={() => setSelectedProject(null)}
                className="text-xs font-medium text-slate-500 hover:text-slate-800 dark:hover:text-white px-3 py-2 rounded-lg transition-colors ml-auto"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
