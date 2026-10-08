import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { personalInfo } from "@/data/personal";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: personalInfo.role ? `${personalInfo.name} | ${personalInfo.role}` : `${personalInfo.name} | Portfolio`,
  description: `Portfolio of ${personalInfo.name}, a software engineer specializing in full-stack web applications, distributed systems, and applied AI.`,
  keywords: [
    "Software Engineer",
    "Full-Stack Developer",
    "Computer Science",
    "Backend Systems",
    "Distributed Systems",
    "Next.js",
    "TypeScript",
    "Portfolio",
  ],
  authors: [{ name: personalInfo.name }],
  creator: personalInfo.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: personalInfo.githubUrl,
    title: `${personalInfo.name} | Software Engineer`,
    description: `Portfolio of ${personalInfo.name}, a software engineer specializing in full-stack web applications, distributed systems, and applied AI.`,
    siteName: `${personalInfo.name} Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${personalInfo.name} | Software Engineer`,
    description: `Portfolio of ${personalInfo.name}, a software engineer specializing in full-stack web applications, distributed systems, and applied AI.`,
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="scroll-smooth"
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('portfolio-theme');if(t==='light'){document.documentElement.classList.remove('dark')}else{document.documentElement.classList.add('dark')}}catch(e){document.documentElement.classList.add('dark')}})();`,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen flex flex-col font-sans antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
