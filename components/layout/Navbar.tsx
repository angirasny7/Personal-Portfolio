"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { personalInfo } from "@/data/personal";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { Menu, X, ArrowDown } from "lucide-react";

const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Certifications", href: "#certifications" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = NAV_LINKS.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          return;
        }
      }
      if (window.scrollY < 200) {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? "bg-white/90 dark:bg-[#07090E]/90 backdrop-blur-md border-b border-slate-200/80 dark:border-white/[0.08] shadow-xs"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link
          href="/"
          className="flex items-center gap-1.5 font-bold text-xl tracking-tight text-slate-900 dark:text-white"
        >
          <span>{personalInfo.firstName || "Angira"}</span>
          <span className="text-indigo-600 dark:text-indigo-400">
            {personalInfo.lastName || "Yadav"}
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  isActive
                    ? "text-indigo-600 dark:text-indigo-400"
                    : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right Actions: Theme Toggle + Resume Button */}
        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white transition-all shadow-sm active:scale-95"
          >
            <span>Resume</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            className="p-1.5 rounded-md text-slate-300 hover:bg-white/10"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/[0.08] bg-[#07090E]/95 backdrop-blur-xl px-5 pt-3 pb-6 space-y-2">
          <div className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActive
                      ? "text-indigo-400 bg-indigo-950/40"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          <div className="pt-3 border-t border-white/[0.08] mt-2">
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm transition-all"
            >
              <span>Resume</span>
              <ArrowDown className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
