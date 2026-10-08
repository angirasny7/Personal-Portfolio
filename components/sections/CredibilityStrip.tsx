import React from "react";
import { credibilityStats } from "@/data/personal";
import { GraduationCap, Briefcase, FolderGit2, Terminal, CheckCircle2 } from "lucide-react";

export function CredibilityStrip() {
  const icons = [
    <GraduationCap key="grad" className="w-4 h-4 text-indigo-500" />,
    <Briefcase key="work" className="w-4 h-4 text-indigo-500" />,
    <FolderGit2 key="proj" className="w-4 h-4 text-indigo-500" />,
    <Terminal key="code" className="w-4 h-4 text-indigo-500" />,
    <CheckCircle2 key="avail" className="w-4 h-4 text-emerald-500" />,
  ];

  return (
    <div className="border-y border-slate-200 dark:border-white/10 bg-slate-50/60 dark:bg-slate-900/40 backdrop-blur-xs py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-4">
          {credibilityStats.map((item, idx) => (
            <div
              key={item.label}
              className="flex flex-col items-start p-3.5 rounded-xl border border-slate-200/60 dark:border-white/5 bg-white/70 dark:bg-slate-900/60 transition-all hover:border-indigo-400/40"
            >
              <div className="flex items-center gap-2 mb-1.5 text-xs font-mono text-slate-500 dark:text-slate-400">
                {icons[idx] || null}
                <span className="truncate">{item.label}</span>
              </div>
              <div className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                {item.value}
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-1">
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
