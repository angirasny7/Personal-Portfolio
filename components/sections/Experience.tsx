import React from "react";
import { experiences } from "@/data/experience";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Calendar, MapPin, ExternalLink } from "lucide-react";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-16 md:py-24 border-t border-slate-200/80 dark:border-white/[0.08]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Experience"
          title="Engineering Track Record"
          subtitle="Internships and lab research where I designed scalable backend features, reduced latency, and shipped production code."
        />

        <div className="relative border-l border-slate-200 dark:border-white/[0.1] ml-2 sm:ml-4 pl-6 sm:pl-8 space-y-12">
          {experiences.map((exp, idx) => (
            <div key={`${exp.company}-${idx}`} className="relative group">
              {/* Timeline marker */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-indigo-600 dark:bg-indigo-500 ring-4 ring-white dark:ring-[#08090D]" />

              <div className="space-y-3">
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      {exp.role}
                    </h3>
                    <span className="text-slate-400">@</span>
                    <span className="text-base font-semibold text-indigo-600 dark:text-indigo-400">
                      {exp.company}
                    </span>
                    {exp.companyUrl && (
                      <a
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors"
                        aria-label={`Visit ${exp.company} website`}
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                    <Badge variant="brand" size="sm">
                      {exp.type}
                    </Badge>
                  </div>

                  {/* Dates & Location */}
                  <div className="flex items-center gap-3 text-xs font-mono text-slate-500 dark:text-slate-400 shrink-0">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {exp.startDate} – {exp.endDate}
                    </span>
                    <span className="flex items-center gap-1 hidden md:flex">
                      <MapPin className="w-3 h-3" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Summary */}
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {exp.summary}
                </p>

                {/* Deliverables */}
                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300 pt-1">
                  {exp.accomplishments.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-2.5">
                      <span className="text-indigo-500 font-bold select-none mt-1 text-xs">▸</span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Technologies */}
                <div className="flex flex-wrap items-center gap-1.5 pt-2">
                  <span className="text-xs font-mono text-slate-400 mr-1">Stack:</span>
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-white/[0.05] text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-white/[0.06]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
