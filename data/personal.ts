import { PersonalInfo, StatItem } from "@/types/portfolio";

export const personalInfo: PersonalInfo = {
  name: "Angira Yadav",
  firstName: "Angira",
  lastName: "Yadav",
  preferredName: "Angira",
  role: "",
  statusBadge: "Final-Year B.Tech CSE • Open to SWE Opportunities",
  profileImage: "/profile.jpeg",
  avatarUrl: "/profile.jpeg",
  headline: "Final year B.Tech Computer Science and Engineering (CSE Core) student with a strong academic foundation and a passion for technology. Interested in applying technical expertise to real-world applications while continuously learning and improving.",
  shortBio: [
    "Final year B.Tech Computer Science and Engineering (CSE Core) student at SRM Institute of Science and Technology with a strong academic foundation (9.74 CGPA) and a passion for technology.",
    "Interested in applying technical expertise to real-world applications across full-stack development, core CS, and AI/ML while continuously learning and improving."
  ],
  techPills: [
    "Python",
    "C/C++",
    "Java",
    "MySQL",
    "JavaScript",
    "HTML/CSS",
    "Stable Diffusion",
    "BLIP",
    "Machine Learning",
  ],
  about: {
    intro: "Final year B.Tech Computer Science and Engineering (CSE Core) student with a strong academic foundation and a passion for technology.",
    paragraphs: [
      "I am a final-year B.Tech CSE student at SRM Institute of Science and Technology maintaining a 9.74/10 CGPA. I have a solid foundation in core computer science—Data Structures, Algorithms, OOPs, DBMS, and Operating Systems—combined with practical software engineering experience.",
      "My project work spans full-stack intelligence systems like SignalLens (PostgreSQL, automated pipelines), iterative generative AI pipelines like PromptLoop (Stable Diffusion, BLIP, Gemini), and secure desktop software like Password Manager (Java Swing, AES, MySQL/JDBC).",
      "I was selected among 80 students for the Samsung Innovation Campus (SIC) for industry training in Python, Data Structures, and Data Analytics, and awarded the SRMIST Founder Scholarship (Rank 10 in SRMJEEE) as well as the Shiv Nadar Foundation Scholarship."
    ],
    highlights: [
      "Final year B.Tech CSE (Core) at SRMIST — CGPA 9.74/10",
      "SRMJEEE Rank 10 — Founder Scholarship Recipient",
      "Samsung Innovation Campus Selected Trainee (Python, DSA, Data Analytics)",
      "Strong foundation in C/C++, Python, Java, MySQL, and Applied AI/ML"
    ]
  },
  location: "India",
  email: "ay7192@srmist.edu.in",
  phone: "+91 9569836178",
  githubUrl: "https://github.com/angirasny7",
  linkedinUrl: "https://www.linkedin.com/in/angira-yadav-258454315/",
  leetcodeUrl: "",
  resumeUrl: "/resume.pdf",
  openToRoles: [
    "Software Development Engineer (SDE / New Grad)",
    "Full-Stack Developer",
    "AI / Machine Learning Engineer",
    "Software Engineering Intern"
  ],
};

export const credibilityStats: StatItem[] = [
  {
    label: "Academic CGPA",
    value: "9.74 / 10",
    description: "SRMIST B.Tech CSE (Core)",
  },
  {
    label: "SRMJEEE Rank",
    value: "Rank 10",
    description: "Founder Scholarship",
  },
  {
    label: "Samsung SIC",
    value: "Top 80",
    description: "Industry Cohort Selected",
  },
  {
    label: "Status",
    value: "Final Year",
    description: "Open to Software Engineering roles",
  },
];
