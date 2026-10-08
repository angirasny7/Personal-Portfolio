import React from "react";
import { educationList } from "@/data/education";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GraduationCap, Award, Calendar, MapPin, ExternalLink } from "lucide-react";

export function EducationSection() {
  return (
    <section id="education" className="py-16 md:py-24 border-t border-slate-200/80 dark:border-white/[0.08]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Education"
          title="Academic Foundation"
        />

        <div className="space-y-6">
          {educationList.map((edu, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#0E1118] hover:border-indigo-500/40 dark:hover:border-indigo-500/40 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo-500/5 transition-all duration-300"
            >
              {/* University & Degree */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-5">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <GraduationCap className="w-5 h-5 text-indigo-500 shrink-0" />
                    {edu.websiteUrl ? (
                      <a
                        href={edu.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link inline-flex items-center gap-1.5 text-lg sm:text-xl font-bold text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                        title="Visit official website"
                      >
                        <span>{edu.institution}</span>
                        <ExternalLink className="w-4 h-4 text-slate-400 group-hover/link:text-indigo-500 transition-colors" />
                      </a>
                    ) : (
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                        {edu.institution}
                      </h3>
                    )}
                  </div>
                  <div className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                    {edu.degree}
                    {edu.fieldOfStudy ? ` in ${edu.fieldOfStudy}` : ""}
                  </div>
                </div>

                <div className="flex flex-col sm:items-end gap-1 text-xs font-mono text-slate-500 dark:text-slate-400">
                  {edu.graduationYear && (
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{edu.graduationYear}</span>
                    </div>
                  )}
                  {edu.location && (
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{edu.location}</span>
                    </div>
                  )}
                  {edu.gpa && (
                    <div className="text-emerald-600 dark:text-emerald-400 font-bold mt-0.5">
                      CGPA: {edu.gpa}
                    </div>
                  )}
                </div>
              </div>

              {/* Honors */}
              {edu.honors && edu.honors.length > 0 && (
                <div className="p-3.5 rounded-lg bg-slate-50 dark:bg-white/[0.02] border border-slate-200/60 dark:border-white/[0.04]">
                  <div className="flex items-center gap-1.5 mb-1.5 text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold">
                    <Award className="w-3.5 h-3.5 text-amber-500" />
                    <span>Academic Distinctions:</span>
                  </div>
                  <div className="flex flex-wrap gap-2 text-xs text-slate-700 dark:text-slate-300">
                    {edu.honors.map((honor, hIdx) => (
                      <span key={hIdx} className="inline-flex items-center gap-1">
                        <span className="text-indigo-500">✦</span>
                        <span>{honor}</span>
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
