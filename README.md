# Production Personal Portfolio & Engineering Showcase

A modern, high-performance personal portfolio website built with **Next.js 16 (App Router)**, **TypeScript**, **Tailwind CSS v4**, and **Framer Motion**. Designed specifically for a final-year Computer Science / Software Engineering student applying for Full-Stack, Backend, AI/ML, and SWE roles.

---

## ⚡ Key Highlights & Features

- **Dark-First Modern Aesthetic**: Built with deep slate/charcoal tones (`#080B12`, `#0F1422`), subtle ambient glows, soft borders, and instant toggle between Dark and Light mode (persisted to `localStorage`).
- **Recruiter-First UX**: Quick 20-second scanning hierarchy: status badge, credibility stats, quick PDF resume access, copyable email, GitHub/LinkedIn links, and technical summaries.
- **Deep Technical Substance**:
  - **3 Featured Projects with Alternating Responsive Showcases**: Interactive browser/terminal previews, architectural layer breakdowns, and concurrency/throughput metrics.
  - **Dedicated Project Detail & Case Study Pages (`/projects/[slug]`)**: In-depth breakdowns of system architecture, engineering challenges, trade-offs, and measurable benchmark results.
  - **Secondary Engineering Projects Grid**: Filterable by domain (Full-Stack, AI / Systems, Developer Tools, Cloud / DevOps).
- **Categorized Skills Matrix**: Visual chips grouped by domain without artificial progress percentages.
- **Experience Timeline**: Metric-driven accomplishments (e.g., latency reductions, throughput scaling, test coverage improvements).
- **Interactive Contact Section**: Client-side validated form, status feedback states, and copyable email with animated feedback.
- **Complete SEO & Performance**: Automated `sitemap.xml`, `robots.txt`, Open Graph cards, Twitter metadata, and zero hydration warnings.

---

## 📁 Project Architecture & Content Separation

All portfolio content is decoupled from UI presentation components inside the `data/` directory for effortless maintenance:

```text
├── data/
│   ├── personal.ts        # Name, role, headline, bio, credibility metrics, target roles
│   ├── projects.ts        # Featured & secondary projects, deep case studies, metrics
│   ├── experience.ts      # Internships, lab research, deliverables, and tech tags
│   ├── skills.ts          # Structured technical categories and key skill highlights
│   ├── education.ts       # Degree, GPA, academic honors, rigorous coursework
│   ├── achievements.ts    # Hackathon wins, LeetCode rating, AWS certifications
│   └── socialLinks.ts     # Developer profiles (GitHub, LinkedIn, LeetCode, Email)
├── components/
│   ├── layout/            # Sticky Navbar with ScrollSpy, Footer, Mobile Drawer
│   ├── sections/          # Hero, CredibilityStrip, About, Experience, Projects, Skills, Contact
│   └── ui/                # Button, Badge, SectionHeading, CopyEmailButton, BrowserMockup, Icons
├── app/
│   ├── layout.tsx         # Root layout, theme initialization, SEO metadata
│   ├── page.tsx           # Assembled single-page portfolio
│   ├── projects/[slug]/   # Dynamic case study route
│   ├── robots.ts          # Search engine crawler instructions
│   └── sitemap.ts         # Dynamic XML sitemap
└── public/
    └── resume.pdf         # Downloadable/viewable resume document
```

---

## 🚀 Getting Started

### 1. Prerequisites
- **Node.js** v20.x or higher
- **npm** v10.x or higher

### 2. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
npm run start
```

---

## ✏️ Customization Guide

1. **Update Your Details**:
   - Open `data/personal.ts` and update `name`, `email`, `githubUrl`, `linkedinUrl`, and `headline`.
2. **Add Your Resume**:
   - Place your real PDF resume file at `public/resume.pdf` (it is linked automatically throughout the site).
3. **Connect the Contact Form to a Backend**:
   - In `components/sections/Contact.tsx`, replace the simulated async delay in `handleSubmit` with your endpoint of choice (e.g. Formspree, Resend, EmailJS, or a Next.js Route Handler).
