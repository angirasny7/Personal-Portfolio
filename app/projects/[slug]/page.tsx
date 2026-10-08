import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { projects } from "@/data/projects";
import { personalInfo } from "@/data/personal";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import {
  ArrowLeft,
  ExternalLink,
  Cpu,
  Layers,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  TrendingUp,
} from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} — Case Study | ${personalInfo.name}`,
    description: project.description,
    openGraph: {
      title: `${project.title} — Technical Case Study`,
      description: project.description,
      type: "article",
    },
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const study = project.caseStudy;

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#08090D] text-slate-900 dark:text-slate-100 transition-colors">
      <Navbar />

      <main className="flex-1 pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Navigation */}
          <div className="mb-8">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to all projects</span>
            </Link>
          </div>

          {/* Header */}
          <div className="space-y-4 pb-8 border-b border-slate-200 dark:border-white/10">
            <div className="flex flex-wrap items-center gap-2.5">
              <Badge variant="brand" size="md">
                {project.category}
              </Badge>
              {project.metrics && (
                <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-semibold">
                  ✦ {project.metrics}
                </span>
              )}
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              {project.title}
            </h1>

            <p className="text-lg sm:text-xl font-medium text-indigo-600 dark:text-indigo-400 leading-snug">
              {project.tagline}
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Button
                href={project.githubUrl}
                external
                variant="primary"
                size="sm"
                icon={<GithubIcon className="w-4 h-4" />}
                iconPosition="left"
              >
                View Repository
              </Button>

              {project.liveDemoUrl && (
                <Button
                  href={project.liveDemoUrl}
                  external
                  variant="secondary"
                  size="sm"
                  icon={<ExternalLink className="w-4 h-4" />}
                >
                  Live Deployment
                </Button>
              )}
            </div>
          </div>

          {/* Technologies Stack Strip */}
          <div className="py-6 border-b border-slate-200 dark:border-white/10">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3 font-semibold">
              Technology Stack:
            </div>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((t) => (
                <Badge key={t} variant="outline" size="md">
                  {t}
                </Badge>
              ))}
            </div>
          </div>

          {/* Case study deep dive */}
          <div className="py-10 space-y-12">
            {/* Overview */}
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-indigo-500" />
                <span>Executive Overview</span>
              </h2>
              <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                {study?.overview || project.description}
              </p>
            </section>

            {/* Problem & Solution */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl border border-rose-200/60 dark:border-rose-950/40 bg-rose-50/30 dark:bg-rose-950/10 space-y-3">
                <h3 className="text-base font-bold text-rose-900 dark:text-rose-300 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-rose-500" />
                  <span>The Engineering Problem</span>
                </h3>
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {study?.problem || project.problem}
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-emerald-200/60 dark:border-emerald-950/40 bg-emerald-50/30 dark:bg-emerald-950/10 space-y-3">
                <h3 className="text-base font-bold text-emerald-900 dark:text-emerald-300 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>The Architectural Solution</span>
                </h3>
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {study?.solution || "Architected a high-concurrency microservice with distributed locking and caching layers."}
                </p>
              </div>
            </div>

            {/* Architecture Decomposition */}
            {study?.architecture && (
              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5">
                  <Layers className="w-5 h-5 text-indigo-500" />
                  <span>Architecture & System Decomposition</span>
                </h2>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {study.architecture.summary}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                  {study.architecture.components.map((comp, cIdx) => (
                    <div
                      key={cIdx}
                      className="p-4 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-900/50 space-y-1.5"
                    >
                      <div className="text-xs font-mono font-semibold text-indigo-600 dark:text-indigo-400">
                        {comp.layer}
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                        {comp.details}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Key Capabilities */}
            {study?.keyFeatures && (
              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5">
                  <Cpu className="w-5 h-5 text-indigo-500" />
                  <span>Key Technical Capabilities</span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {study.keyFeatures.map((feat, fIdx) => (
                    <div
                      key={fIdx}
                      className="p-5 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900/60 space-y-2 shadow-xs"
                    >
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                        {feat.title}
                      </h4>
                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                        {feat.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Engineering Challenges & Solutions */}
            {study?.engineeringChallenges && (
              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5">
                  <AlertTriangle className="w-5 h-5 text-indigo-500" />
                  <span>Engineering Challenges & Trade-offs</span>
                </h2>

                <div className="space-y-4">
                  {study.engineeringChallenges.map((ch, chIdx) => (
                    <div
                      key={chIdx}
                      className="p-5 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900/60 space-y-3"
                    >
                      <div className="text-sm font-bold text-slate-900 dark:text-white">
                        Challenge: {ch.challenge}
                      </div>
                      <div className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed pl-3 border-l-2 border-indigo-500">
                        <span className="font-semibold text-slate-800 dark:text-slate-200 block mb-0.5">
                          Resolution:
                        </span>
                        {ch.resolution}
                      </div>
                      <div className="text-xs font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 p-2 rounded border border-emerald-200/50 dark:border-emerald-500/20">
                        Measurable Impact: {ch.impact}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Performance Results & Metrics */}
            {study?.resultsMetrics && (
              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5">
                  <TrendingUp className="w-5 h-5 text-indigo-500" />
                  <span>Benchmark Results & Metrics</span>
                </h2>

                <div className="p-5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-900/60">
                  <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                    {study.resultsMetrics.map((met, mIdx) => (
                      <li key={mIdx} className="flex items-center gap-2.5">
                        <span className="text-emerald-500">✓</span>
                        <span>{met}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {/* What I Learned */}
            {study?.whatILearned && (
              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5">
                  <Lightbulb className="w-5 h-5 text-indigo-500" />
                  <span>Key Engineering Takeaways</span>
                </h2>

                <div className="space-y-2">
                  {study.whatILearned.map((item, lIdx) => (
                    <div
                      key={lIdx}
                      className="p-4 rounded-xl border border-slate-200 dark:border-white/5 bg-white dark:bg-slate-900/40 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Bottom CTA & Back Button */}
          <div className="pt-8 border-t border-slate-200 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to all projects</span>
            </Link>

            <Button
              href={project.githubUrl}
              external
              variant="primary"
              size="sm"
              icon={<GithubIcon className="w-4 h-4" />}
              iconPosition="left"
            >
              Star on GitHub
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
