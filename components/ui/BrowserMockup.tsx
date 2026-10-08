import React from "react";

interface BrowserMockupProps {
  url?: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export function BrowserMockup({
  url = "https://app.local",
  title = "Application Preview",
  children,
  className = "",
}: BrowserMockupProps) {
  return (
    <div
      className={`rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900/90 shadow-xl shadow-slate-900/5 dark:shadow-black/40 overflow-hidden flex flex-col ${className}`}
    >
      {/* Browser chrome header */}
      <div className="flex items-center justify-between px-3.5 py-2.5 border-b border-slate-200 dark:border-white/10 bg-slate-100/80 dark:bg-slate-950/60 select-none">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
        </div>

        <div className="flex-1 max-w-xs mx-4">
          <div className="flex items-center justify-center px-3 py-0.5 rounded-md bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-white/5 text-[11px] font-mono text-slate-500 dark:text-slate-400 truncate">
            <span className="text-emerald-500 mr-1.5 font-bold">🔒</span>
            {url}
          </div>
        </div>

        <div className="text-[11px] font-mono text-slate-400 hidden sm:block truncate max-w-[100px]">
          {title}
        </div>
      </div>

      {/* Main mockup viewport */}
      <div className="relative flex-1 overflow-hidden bg-slate-50/50 dark:bg-slate-950/40">
        {children}
      </div>
    </div>
  );
}
