"use client";

import React from "react";
import { personalInfo } from "@/data/personal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { CopyEmailButton } from "@/components/ui/CopyEmailButton";
import { Mail, FileText, MapPin, Clock } from "lucide-react";
import { LinkedinIcon } from "@/components/ui/Icons";

export function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24 border-t border-slate-200/80 dark:border-white/[0.08]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contact & Inquiries"
          title="Let's Connect"
          subtitle="Currently open to Software Engineering opportunities, new grad roles (2026), internships, and technical discussions."
        />

        <div className="p-7 sm:p-9 rounded-xl border border-slate-200 dark:border-white/[0.08] bg-white dark:bg-[#0E1118] space-y-7">
          {/* Email row with direct copy */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-lg bg-slate-50 dark:bg-white/[0.02] border border-slate-200/60 dark:border-white/[0.04]">
            <div className="space-y-1">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                Direct Email
              </span>
              <div className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                {personalInfo.email}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <CopyEmailButton email={personalInfo.email} variant="badge" />
              <Button
                href={`mailto:${personalInfo.email}`}
                variant="primary"
                size="sm"
                icon={<Mail className="w-3.5 h-3.5" />}
              >
                Send Email
              </Button>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3">
            <Button
              href={personalInfo.linkedinUrl}
              external
              variant="secondary"
              size="sm"
              icon={<LinkedinIcon className="w-3.5 h-3.5" />}
              iconPosition="left"
            >
              Connect on LinkedIn
            </Button>

            <Button
              href={personalInfo.resumeUrl}
              external
              variant="outline"
              size="sm"
              icon={<FileText className="w-3.5 h-3.5 text-indigo-500" />}
              iconPosition="left"
            >
              Download Resume (PDF)
            </Button>
          </div>

          {/* Details strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-100 dark:border-white/[0.06] text-xs font-mono text-slate-500 dark:text-slate-400">
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
              <span>Location: {personalInfo.location}</span>
            </div>
            {personalInfo.phone && (
              <div className="flex items-center gap-2">
                <span className="text-indigo-400 font-semibold shrink-0">Tel:</span>
                <span>{personalInfo.phone}</span>
              </div>
            )}
            <div className="flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
              <span>Response: Within 24 hrs</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
