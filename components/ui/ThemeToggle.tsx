"use client";

import React from "react";
import { useTheme } from "@/context/ThemeContext";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className={`relative p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors duration-200 hover:bg-slate-200/60 dark:hover:bg-white/5 border border-transparent hover:border-slate-300 dark:hover:border-white/10 ${className}`}
    >
      {theme === "dark" ? (
        <Sun className="w-4 h-4 transition-transform duration-300 rotate-0 hover:rotate-45 text-amber-400" />
      ) : (
        <Moon className="w-4 h-4 transition-transform duration-300 rotate-0 hover:-rotate-12 text-slate-700" />
      )}
    </button>
  );
}
