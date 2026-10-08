import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { CertificationsSection } from "@/components/sections/Certifications";
import { SkillsSection } from "@/components/sections/Skills";
import { EducationSection } from "@/components/sections/Education";
import { AchievementsSection } from "@/components/sections/Achievements";
import { ContactSection } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#07090E] text-slate-900 dark:text-slate-100 transition-colors duration-200">
      <Navbar />

      <main className="flex-1">
        <Hero />
        <FeaturedProjects />
        <CertificationsSection />
        <SkillsSection />
        <EducationSection />
        <AchievementsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
