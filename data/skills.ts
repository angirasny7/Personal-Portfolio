import { SkillCategory } from "@/types/portfolio";

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    description: "Core languages used across system programming, backends, and algorithmic problem solving",
    skills: [
      { name: "Python", highlight: true, level: "Proficient" },
      { name: "C/C++", highlight: true, level: "Proficient" },
      { name: "Java", highlight: true, level: "Proficient" },
      { name: "SQL", highlight: true, level: "Proficient" },
    ]
  },
  {
    title: "Technologies & Web",
    description: "Web fundamentals, scripting, and relational database systems",
    skills: [
      { name: "HTML", highlight: true, level: "Proficient" },
      { name: "CSS", highlight: true, level: "Proficient" },
      { name: "JavaScript", highlight: true, level: "Proficient" },
      { name: "MySQL", highlight: true, level: "Proficient" },
      { name: "PostgreSQL", highlight: false, level: "Proficient" },
    ]
  },
  {
    title: "Core Computer Science",
    description: "Strong theoretical and practical foundational CS knowledge",
    skills: [
      { name: "Data Structures", highlight: true, level: "Proficient" },
      { name: "Algorithms", highlight: true, level: "Proficient" },
      { name: "OOPs (Object-Oriented Programming)", highlight: true, level: "Proficient" },
      { name: "DBMS (Database Management Systems)", highlight: true, level: "Proficient" },
      { name: "Operating System", highlight: true, level: "Proficient" },
    ]
  },
  {
    title: "AI / Machine Learning",
    description: "Applied artificial intelligence, generative models, and data analytics",
    skills: [
      { name: "Machine Learning", highlight: true, level: "Proficient" },
      { name: "Data Analysis", highlight: true, level: "Proficient" },
      { name: "Stable Diffusion", highlight: true, level: "Proficient" },
      { name: "BLIP (Bootstrapping Language-Image)", highlight: true, level: "Proficient" },
      { name: "Prompt Engineering & Evaluation", highlight: false, level: "Proficient" },
    ]
  },
  {
    title: "Developer Tools & Platforms",
    description: "Development environments, version control, and collaborative platforms",
    skills: [
      { name: "Git", highlight: true, level: "Proficient" },
      { name: "GitHub", highlight: true, level: "Proficient" },
      { name: "VS Code", highlight: true, level: "Proficient" },
      { name: "Google Colab", highlight: true, level: "Proficient" },
    ]
  }
];
