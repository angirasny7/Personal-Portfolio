import React from "react";

interface TerminalMockupProps {
  title?: string;
  lines: {
    command?: string;
    output?: string;
    type?: "cmd" | "info" | "success" | "warn" | "accent";
  }[];
  className?: string;
}

export function TerminalMockup({
  title = "bash - zsh",
  lines,
  className = "",
}: TerminalMockupProps) {
  return (
    <div
      className={`rounded-xl border border-slate-300 dark:border-white/10 bg-slate-900 text-slate-100 font-mono text-xs shadow-2xl shadow-indigo-950/20 overflow-hidden flex flex-col ${className}`}
    >
      {/* Terminal header */}
      <div className="flex items-center justify-between px-3.5 py-2.5 border-b border-white/10 bg-slate-950/80 select-none">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
        </div>
        <div className="text-[11px] text-slate-400 font-medium truncate">{title}</div>
        <div className="w-10" />
      </div>

      {/* Terminal contents */}
      <div className="p-4 space-y-2.5 overflow-x-auto text-[12px] leading-relaxed">
        {lines.map((line, idx) => (
          <div key={idx} className="flex flex-col gap-0.5">
            {line.command && (
              <div className="flex items-center gap-2 text-slate-300">
                <span className="text-emerald-400 select-none">❯</span>
                <span className="text-indigo-300 font-semibold">{line.command}</span>
              </div>
            )}
            {line.output && (
              <div
                className={`pl-4 ${
                  line.type === "success"
                    ? "text-emerald-400"
                    : line.type === "warn"
                    ? "text-amber-400"
                    : line.type === "accent"
                    ? "text-cyan-400"
                    : line.type === "info"
                    ? "text-indigo-300"
                    : "text-slate-400"
                }`}
              >
                {line.output}
              </div>
            )}
          </div>
        ))}
        <div className="flex items-center gap-2 text-slate-400">
          <span className="text-emerald-400">❯</span>
          <span className="inline-block w-2 h-4 bg-indigo-400 animate-pulse" />
        </div>
      </div>
    </div>
  );
}
