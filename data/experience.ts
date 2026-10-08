import { Experience } from "@/types/portfolio";

export const experiences: Experience[] = [
  {
    company: "TechScale Innovations",
    role: "Software Engineering Intern",
    location: "San Francisco, CA (Hybrid)",
    startDate: "Jun 2025",
    endDate: "Aug 2025",
    type: "Internship",
    summary:
      "Engineered microservices and real-time data pipelines within the core infrastructure platform team, supporting 45,000 daily active enterprise users.",
    technologies: ["Go", "TypeScript", "PostgreSQL", "Redis", "Docker", "Kubernetes", "gRPC"],
    accomplishments: [
      "Engineered an asynchronous event processing pipeline in Go and Redis Streams, reducing P99 webhook delivery latency by 42% across 1.2M daily events.",
      "Designed and deployed a distributed rate-limiting middleware using Redis sliding-window algorithm, preventing API starvation during high-concurrency spikes.",
      "Authored automated integration test suites and CI/CD pipelines in GitHub Actions, increasing codebase test coverage from 68% to 89% and accelerating deployment cycles by 30%.",
      "Collaborated with senior staff engineers in bi-weekly design reviews, participating in architecture RFCs for schema migrations and database connection pooling."
    ],
    companyUrl: "https://example.com"
  },
  {
    company: "DataVanguard Labs",
    role: "Full-Stack Developer Intern",
    location: "Remote",
    startDate: "Jan 2025",
    endDate: "May 2025",
    type: "Internship",
    summary:
      "Built customer-facing data visualization dashboards and RESTful API endpoints for an enterprise analytics monitoring platform.",
    technologies: ["React", "Next.js", "Node.js", "TypeScript", "PostgreSQL", "Tailwind CSS", "Jest"],
    accomplishments: [
      "Refactored legacy client-side data querying to Next.js server components with optimistic caching, slashing initial page load times by 55% (LCP down from 3.4s to 1.5s).",
      "Constructed 14+ reusable accessible UI components using Tailwind CSS and Radix primitives, establishing the engineering foundation for the company's internal design system.",
      "Optimized complex PostgreSQL analytical queries with composite indexing and materialized views, cutting reporting dashboard query execution time from 2.8s to 240ms.",
      "Partnered with product managers and UX designers to build an interactive query builder adopted by over 200 B2B enterprise accounts."
    ],
    companyUrl: "https://example.com"
  },
  {
    company: "University Distributed Systems Lab",
    role: "Undergraduate Research Assistant",
    location: "University Campus",
    startDate: "Aug 2024",
    endDate: "Dec 2024",
    type: "Research Fellow",
    summary:
      "Researched consensus algorithms and fault-tolerance mechanics under simulated Byzantine network conditions under faculty supervision.",
    technologies: ["Python", "C++", "Distributed Systems", "Network Simulation", "Linux"],
    accomplishments: [
      "Simulated network partitions and packet drop scenarios on Raft and PBFT consensus implementations across 32 virtualized Linux nodes.",
      "Co-authored research findings submitted to an undergraduate technical symposium on leader election stability in high-jitter distributed clusters.",
      "Mentored 15 junior computer science students in advanced operating systems and memory management lab assignments."
    ]
  }
];
