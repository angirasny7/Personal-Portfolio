import React from "react";
import { personalInfo } from "@/data/personal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CheckCircle2, Sparkles } from "lucide-react";

export function About() {
  const { about } = personalInfo;

  return (
    <section id="about" className="py-16 md:py-24 border-t border-slate-200/80 dark:border-white/[0.08]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="About Me"
          title="Background & Engineering Philosophy"
          subtitle="A deeper look at my journey, what drives me as a software engineer, and what I build."
        />

        <div className="space-y-6">
          {/* Main narrative block */}
          <div className="p-6 sm:p-8 rounded-xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#0E1118] space-y-4 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            <p className="font-medium text-slate-900 dark:text-white text-base sm:text-lg">
              {about.intro}
            </p>

            {about.paragraphs.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {/* Quick key highlights */}
          {about.highlights && about.highlights.length > 0 && (
            <div className="p-5 sm:p-6 rounded-xl border border-slate-200 dark:border-white/[0.08] bg-slate-50 dark:bg-white/[0.02]">
              <div className="flex items-center gap-2 mb-3 text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
                <span>Quick Snapshot:</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                {about.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
