import React from "react";
import { achievements } from "@/data/achievements";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Calendar } from "lucide-react";

export function AchievementsSection() {
  return (
    <section id="achievements" className="py-16 md:py-24 border-t border-slate-200/80 dark:border-white/[0.08]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Recognition"
          title="Scholarships & Achievements"
          subtitle="Merit scholarships, academic honors, and competitive program selections."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {achievements.map((item, idx) => (
            <div
              key={idx}
              className="group p-6 rounded-2xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#0E1118] flex flex-col justify-between hover:border-indigo-500/40 dark:hover:border-indigo-500/40 hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/5 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <Badge variant="brand" size="sm">
                    {item.category}
                  </Badge>
                  {item.badge && (
                    <span className="text-xs font-mono font-semibold text-emerald-600 dark:text-emerald-400">
                      {item.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1">
                  {item.title}
                </h3>

                <div className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400 mb-2.5">
                  <span>{item.issuer}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {item.date}
                  </span>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
