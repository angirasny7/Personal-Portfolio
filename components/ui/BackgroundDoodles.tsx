"use client";

import React from "react";

export function BackgroundDoodles() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none select-none overflow-hidden z-0"
    >
      {/* LEFT SIDE ACCENTS & DOODLES */}
      <div className="absolute left-3 lg:left-6 xl:left-12 top-1/4 flex flex-col gap-32 opacity-25 dark:opacity-35 transition-opacity">
        {/* Code curly braces doodle */}
        <div className="flex flex-col items-center gap-1 font-mono text-xs text-indigo-500/70 font-semibold tracking-widest rotate-[-12deg]">
          <span>{"{"}</span>
          <span className="w-0.5 h-6 bg-gradient-to-b from-indigo-500/40 to-transparent my-1" />
          <span>{"}"}</span>
        </div>

        {/* Binary / Matrix code column */}
        <div className="hidden xl:flex flex-col gap-2 font-mono text-[10px] text-slate-400/50 dark:text-slate-600/60 leading-none">
          <span>01</span>
          <span>10</span>
          <span>01</span>
          <span>11</span>
        </div>

        {/* Circuit grid node */}
        <svg
          className="w-8 h-8 text-indigo-400/40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <circle cx="12" cy="12" r="3" />
          <path d="M12 3v6M12 15v6M3 12h6M15 12h6" />
        </svg>

        {/* Sparkle star */}
        <svg
          className="w-6 h-6 text-indigo-400/50 animate-pulse"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
        </svg>

        {/* Small constellation dots */}
        <div className="flex flex-col gap-3 items-center">
          <div className="w-1.5 h-1.5 rounded-full bg-indigo-500/50" />
          <div className="w-1 h-1 rounded-full bg-indigo-400/30" />
          <div className="w-1.5 h-1.5 rounded-full bg-cyan-400/40" />
        </div>
      </div>

      {/* RIGHT SIDE ACCENTS & DOODLES */}
      <div className="absolute right-3 lg:right-6 xl:right-12 top-1/3 flex flex-col gap-36 opacity-25 dark:opacity-35 transition-opacity">
        {/* Terminal prompt symbol */}
        <div className="font-mono text-xs text-indigo-500/70 font-bold rotate-[8deg]">
          &gt; _
        </div>

        {/* Function lambda doodle */}
        <div className="hidden xl:block font-mono text-sm text-indigo-400/40 font-bold rotate-[12deg]">
          f(x)
        </div>

        {/* Geometric cross / tech grid */}
        <svg
          className="w-7 h-7 text-indigo-400/40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        >
          <line x1="12" y1="5" x2="12" y2="19" />
          <line x1="5" y1="12" x2="19" y2="12" />
        </svg>

        {/* Corner angle brackets */}
        <div className="font-mono text-xs text-slate-400/50 dark:text-slate-600/60 font-semibold">
          &lt;/&gt;
        </div>

        {/* Constellation dots */}
        <div className="flex flex-col gap-3 items-center">
          <div className="w-1.5 h-1.5 rounded-full bg-cyan-400/40" />
          <div className="w-1 h-1 rounded-full bg-indigo-400/30" />
          <div className="w-1.5 h-1.5 rounded-full bg-indigo-500/50" />
        </div>
      </div>
    </div>
  );
}
