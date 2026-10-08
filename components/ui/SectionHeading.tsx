import React from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  gradientWord?: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  gradientWord,
  subtitle,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  const isCenter = align === "center";

  // If gradientWord is provided, split the title and style the highlighted word
  let titleContent: React.ReactNode = title;
  if (gradientWord && title.includes(gradientWord)) {
    const parts = title.split(gradientWord);
    titleContent = (
      <>
        {parts[0]}
        <span className="bg-gradient-to-r from-indigo-500 via-indigo-400 to-blue-500 bg-clip-text text-transparent">
          {gradientWord}
        </span>
        {parts[1]}
      </>
    );
  }

  return (
    <div className={`mb-8 md:mb-10 ${isCenter ? "text-center max-w-2xl mx-auto" : "max-w-3xl"} ${className}`}>
      {eyebrow && (
        <div className={`inline-flex items-center gap-2 mb-2 ${isCenter ? "justify-center" : ""}`}>
          <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
          <span className="text-xs font-mono uppercase tracking-widest text-indigo-600 dark:text-indigo-400 font-semibold">
            {eyebrow}
          </span>
        </div>
      )}
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
        {titleContent}
      </h2>
      {subtitle && (
        <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
