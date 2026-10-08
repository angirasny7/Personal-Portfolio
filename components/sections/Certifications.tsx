"use client";

import React, { useState } from "react";
import { certifications } from "@/data/certifications";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { ExternalLink, Calendar, ShieldCheck, Clock, ChevronDown, ChevronUp } from "lucide-react";

export function CertificationsSection() {
  const [pendingCert, setPendingCert] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);

  // Show only 1 row (first 3) initially on desktop, show all when toggled
  const initialCount = 3;
  const displayedCerts = showAll ? certifications : certifications.slice(0, initialCount);
  const remainingCount = certifications.length - initialCount;

  const handleVerifyClick = (e: React.MouseEvent, url: string | undefined, title: string) => {
    const hasExactLink = Boolean(
      url &&
      url.trim() !== "" &&
      url !== "#" &&
      !url.includes("example")
    );

    if (!hasExactLink) {
      e.preventDefault();
      setPendingCert(title);
      setTimeout(() => {
        setPendingCert((current) => (current === title ? null : current));
      }, 3500);
    }
  };

  return (
    <section id="certifications" className="py-16 md:py-24 border-t border-slate-200/80 dark:border-white/[0.08]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Credentials"
          title="Certifications & Specializations"
          subtitle="Industry certifications, verified technical coursework, and professional credentials."
        />

        {/* 3 cards per row grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {displayedCerts.map((cert) => {
            const hasExactLink = Boolean(
              cert.verificationUrl &&
              cert.verificationUrl.trim() !== "" &&
              cert.verificationUrl !== "#" &&
              !cert.verificationUrl.includes("example")
            );
            const isPending = pendingCert === cert.title;

            return (
              <div
                key={cert.title}
                className="group p-6 rounded-2xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#0E1118] hover:border-indigo-500/40 dark:hover:border-indigo-500/40 hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Header row */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2">
                      <div className="p-2 rounded-lg bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-100 dark:border-indigo-500/20 text-indigo-600 dark:text-indigo-400">
                        <ShieldCheck className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-mono font-medium text-slate-500 dark:text-slate-400">
                        {cert.issuer}
                      </span>
                    </div>

                    {cert.badge && (
                      <Badge variant="brand" size="sm">
                        {cert.badge}
                      </Badge>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                    {cert.title}
                  </h3>

                  {/* Metadata: Date & ID */}
                  <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-500 dark:text-slate-400 mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                      <span>Issued {cert.issueDate}</span>
                    </span>
                    {cert.credentialId && (
                      <span>ID: {cert.credentialId}</span>
                    )}
                  </div>

                  {/* Skills tags */}
                  {cert.skills && cert.skills.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {cert.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-white/[0.04] text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-white/[0.06]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Verify Link Row */}
                <div className="pt-3 border-t border-slate-100 dark:border-white/[0.06] flex items-center justify-between">
                  {isPending ? (
                    <div className="inline-flex items-center gap-1.5 text-xs font-medium text-amber-600 dark:text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-md border border-amber-500/20 animate-in fade-in duration-200">
                      <Clock className="w-3.5 h-3.5 animate-pulse" />
                      <span>Will update soon</span>
                    </div>
                  ) : (
                    <a
                      href={hasExactLink ? cert.verificationUrl : "#"}
                      target={hasExactLink ? "_blank" : undefined}
                      rel={hasExactLink ? "noopener noreferrer" : undefined}
                      onClick={(e) => handleVerifyClick(e, cert.verificationUrl, cert.title)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 transition-colors cursor-pointer"
                    >
                      <span>Verify Credential</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Toggle Button */}
        {remainingCount > 0 && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-300 dark:border-white/15 bg-white dark:bg-[#0E1118] hover:border-indigo-400 dark:hover:border-indigo-500/50 text-slate-800 dark:text-slate-200 font-semibold text-sm transition-all shadow-xs active:scale-95"
            >
              <span>
                {showAll
                  ? "Show Less"
                  : `View All Certifications (+${remainingCount})`}
              </span>
              {showAll ? (
                <ChevronUp className="w-4 h-4 text-indigo-500" />
              ) : (
                <ChevronDown className="w-4 h-4 text-indigo-500" />
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
