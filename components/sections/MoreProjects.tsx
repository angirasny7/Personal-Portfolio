import React from "react";
import { projects } from "@/data/projects";
import { Badge } from "@/components/ui/Badge";
import { ExternalLink, Terminal, FolderGit2 } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";

export function MoreProjects() {
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section className="py-16 md:py-24 border-t border-slate-200/80 dark:border-white/[0.08]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
            <span className="text-xs font-mono uppercase tracking-widest text-indigo-600 dark:text-indigo-400 font-semibold">
              Additional Work
            </span>
          </div>
          <h3 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            More Engineering Repositories
          </h3>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
            Systems utilities, developer CLIs, and interactive algorithmic sandboxes.
          </p>
        </div>

        {/* 2x2 Clean Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {otherProjects.map((proj) => (
            <div
              key={proj.slug}
              className="p-5 rounded-xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#0E1118] transition-all hover:border-slate-300 dark:hover:border-white/[0.16] shadow-xs flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between gap-3 mb-2.5">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded-md bg-slate-100 dark:bg-white/[0.05] text-slate-600 dark:text-slate-300">
                      {proj.mockupType === "terminal" ? (
                        <Terminal className="w-3.5 h-3.5" />
                      ) : (
                        <FolderGit2 className="w-3.5 h-3.5" />
                      )}
                    </div>
                    <Badge variant="brand" size="sm">
                      {proj.category}
                    </Badge>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${proj.title} GitHub repository`}
                      className="p-1 text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                    {proj.liveDemoUrl && (
                      <a
                        href={proj.liveDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${proj.title} Live demo`}
                        className="p-1 text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>

                <h4 className="text-base font-bold text-slate-900 dark:text-white mb-1">
                  {proj.title}
                </h4>

                <p className="text-xs text-indigo-600 dark:text-indigo-400 font-medium mb-2.5">
                  {proj.tagline}
                </p>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  {proj.description}
                </p>

                {proj.metrics && (
                  <div className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 mb-3 flex items-center gap-1">
                    <span>⚡</span>
                    <span>{proj.metrics}</span>
                  </div>
                )}
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap items-center gap-1 pt-3 border-t border-slate-100 dark:border-white/[0.06]">
                {proj.technologies.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-white/[0.04] text-slate-600 dark:text-slate-400"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
