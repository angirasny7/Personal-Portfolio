import React from "react";
import { developerProfiles } from "@/data/socialLinks";
import { Mail, ExternalLink } from "lucide-react";
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from "@/components/ui/Icons";

export function DeveloperProfiles() {
  const icons: Record<string, React.ReactNode> = {
    GitHub: <GithubIcon className="w-5 h-5" />,
    LinkedIn: <LinkedinIcon className="w-5 h-5" />,
    LeetCode: <LeetCodeIcon className="w-5 h-5" />,
    Email: <Mail className="w-5 h-5" />,
  };

  return (
    <section className="py-12 border-t border-slate-200 dark:border-white/10 bg-slate-50/40 dark:bg-slate-950/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h4 className="text-sm font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold">
              {"// Developer Profiles"}
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Verified coding activity, code repositories, and professional networks.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {developerProfiles.map((item) => (
            <a
              key={item.platform}
              href={item.url}
              target={item.platform === "Email" ? undefined : "_blank"}
              rel={item.platform === "Email" ? undefined : "noopener noreferrer"}
              className="p-4 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900/60 hover:border-indigo-400/50 hover:-translate-y-0.5 transition-all group shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="p-2 rounded-lg bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {icons[item.platform]}
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors" />
                </div>
                <div className="text-sm font-bold text-slate-900 dark:text-white">
                  {item.platform}
                </div>
                <div className="text-xs font-mono text-indigo-600 dark:text-indigo-400 mb-1">
                  {item.username}
                </div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-2">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 mt-3 border-t border-slate-100 dark:border-white/5 flex items-center justify-between text-[11px] font-mono">
                <span className="text-slate-400">Metric:</span>
                <span className="font-semibold text-slate-800 dark:text-slate-200">
                  {item.stat}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
