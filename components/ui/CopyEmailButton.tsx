"use client";

import React, { useState } from "react";
import { Copy, Check } from "lucide-react";

interface CopyEmailButtonProps {
  email: string;
  className?: string;
  variant?: "badge" | "button";
}

export function CopyEmailButton({
  email,
  className = "",
  variant = "button",
}: CopyEmailButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
      const textArea = document.createElement("textarea");
      textArea.value = email;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (variant === "badge") {
    return (
      <button
        onClick={handleCopy}
        aria-label="Copy email address"
        className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono rounded-md border border-slate-300 dark:border-white/10 bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 hover:border-indigo-400 dark:hover:border-indigo-500/50 transition-all ${className}`}
      >
        {copied ? (
          <>
            <Check className="w-3.5 h-3.5 text-emerald-500" />
            <span className="text-emerald-500 font-sans font-medium">Copied!</span>
          </>
        ) : (
          <>
            <Copy className="w-3.5 h-3.5 text-slate-400" />
            <span>{email}</span>
          </>
        )}
      </button>
    );
  }

  return (
    <button
      onClick={handleCopy}
      aria-label="Copy email to clipboard"
      className={`inline-flex items-center gap-2 px-3 py-2 text-xs font-medium rounded-lg border border-slate-300 dark:border-white/10 bg-white dark:bg-slate-900/60 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/80 transition-all active:scale-[0.98] ${className}`}
    >
      {copied ? (
        <>
          <Check className="w-3.5 h-3.5 text-emerald-500" />
          <span className="text-emerald-600 dark:text-emerald-400">Copied to clipboard!</span>
        </>
      ) : (
        <>
          <Copy className="w-3.5 h-3.5 text-slate-400" />
          <span>Copy Email</span>
        </>
      )}
    </button>
  );
}
