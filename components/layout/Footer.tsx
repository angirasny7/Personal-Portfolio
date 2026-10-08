"use client";

import React from "react";
import Link from "next/link";
import { personalInfo } from "@/data/personal";
import { ArrowUp, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

export function Footer() {
  const currentYear = 2026;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-slate-200 dark:border-white/10 bg-slate-50/50 dark:bg-slate-950/60 py-12 transition-colors">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Identity & Tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <Link
              href="/"
              className="text-base font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-2"
            >
              <span>{personalInfo.name}</span>
              {personalInfo.role && (
                <span className="text-xs font-mono text-indigo-600 dark:text-indigo-400 font-normal">
                  {"//"} {personalInfo.role}
                </span>
              )}
            </Link>
            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400 max-w-sm">
              Building intelligent, reliable software turning complex problems into useful products.
            </p>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-white/5 transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-white/5 transition-colors"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              aria-label="Send Email"
              className="p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-white/5 transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Copyright & Back to Top */}
          <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
            <span>© {currentYear} {personalInfo.name}. All rights reserved.</span>
            <button
              onClick={scrollToTop}
              aria-label="Scroll back to top"
              className="inline-flex items-center gap-1 text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors p-1"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Back to top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
