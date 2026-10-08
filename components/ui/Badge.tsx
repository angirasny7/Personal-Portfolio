import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "brand" | "outline" | "success" | "neutral";
  size?: "sm" | "md";
  className?: string;
  icon?: React.ReactNode;
}

export function Badge({
  children,
  variant = "default",
  size = "md",
  className = "",
  icon
}: BadgeProps) {
  const baseStyles = "inline-flex items-center font-medium rounded-md tracking-tight transition-colors";

  const sizeStyles = {
    sm: "text-[11px] px-2 py-0.5 gap-1",
    md: "text-xs px-2.5 py-1 gap-1.5"
  };

  const variantStyles = {
    default:
      "bg-slate-100 text-slate-700 border border-slate-200 dark:bg-slate-800/60 dark:text-slate-300 dark:border-white/10",
    brand:
      "bg-indigo-50 text-indigo-700 border border-indigo-200/60 dark:bg-indigo-950/40 dark:text-indigo-300 dark:border-indigo-500/25",
    outline:
      "bg-transparent text-slate-600 border border-slate-300 dark:text-slate-300 dark:border-white/15",
    success:
      "bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-500/25",
    neutral:
      "bg-slate-200/70 text-slate-800 dark:bg-slate-800 dark:text-slate-200 border border-slate-300/60 dark:border-white/10"
  };

  return (
    <span className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}>
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
    </span>
  );
}
