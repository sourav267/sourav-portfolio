import { Terminal, Cpu, Globe, CheckCircle2 } from "lucide-react";

export const SKILL_CATEGORIES = [
  {
    title: "Languages",
    icon: <Terminal className="w-5 h-5" />,
    skills: ["TypeScript", "JavaScript", "Python", "Go", "C++"],
    color: "rgba(59, 130, 246, 0.1)",
    textColor: "#3b82f6"
  },
  {
    title: "Frontend",
    icon: <Globe className="w-5 h-5" />,
    skills: ["React", "Next.js", "Tailwind CSS", "Redux", "Framer Motion"],
    color: "rgba(6, 182, 212, 0.1)",
    textColor: "#06b6d4"
  },
  {
    title: "Backend & Platform",
    icon: <Cpu className="w-5 h-5" />,
    skills: ["Node.js", "NestJS", "PostgreSQL", "Redis", "Docker", "AWS"],
    color: "rgba(168, 85, 247, 0.1)",
    textColor: "#a855f7"
  },
  {
    title: "Quality & DevOps",
    icon: <CheckCircle2 className="w-5 h-5" />,
    skills: ["Jest", "Cypress", "CI/CD", "Terraform", "Kubernetes"],
    color: "rgba(16, 185, 129, 0.1)",
    textColor: "#10b981"
  }
];

export const EXPERIENCE = [
  {
    role: "Senior Engineer",
    company: "Falabella Ind. Pvt Ltd",
    period: "Jan 2023 – Present",
    location: "Bengaluru, India",
    highlights: [
      "Owned and evolved critical frontend and platform systems supporting end-to-end customer workflows serving 35M customers.",
      "Designed and maintained a multi-tenant frontend architecture with reusable patterns and feature flags across Latin America.",
      "Led a large-scale migration from Next.js 9 to Next.js 14 in an NX monorepo, improving performance and developer velocity.",
      "Partnered closely with Product, Design, and Backend teams to ship high-quality, scalable features."
    ],
    current: true
  },
  {
    role: "Software Engineer",
    company: "Synamedia Ind. Pvt Ltd",
    period: "Dec 2020 – Dec 2022",
    location: "Bengaluru, India",
    highlights: [
      "Built frontend-integrated APIs enabling voice-based (Alexa) interactions within the Infinite STB platform.",
      "Designed and implemented APIs allowing users to connect remote controls via Bluetooth.",
      "Enhanced notification systems handling Voice, Alexa, Bluetooth, and WiFi with robust state management.",
      "Delivered low-latency, production-grade features in cross-functional teams."
    ]
  },
  {
    role: "Fullstack Developer",
    company: "Thinking Stack Pvt. Ltd",
    period: "Jul 2019 – Nov 2020",
    location: "Bengaluru, India",
    highlights: [
      "Refactored Angular applications using reusable layouts, reducing UI code duplication by 30%.",
      "Built real-time dashboards using RxJS and WebSockets for high-frequency data updates.",
      "Developed OAuth 2.0 integrations and authored technical documentation to improve scalability."
    ]
  }
];

export const PROJECTS = [
  {
    title: "falabella.com Platform",
    description: "Designed and delivered a multi-tenant, SSR-powered Next.js account dashboard with feature-flagged modules (orders, wishlists, recommendations) and cookie-based personalization.",
    tech: ["React", "Next.js", "Microfrontends", "NX Monorepo", "Node.js", "NestJS", "BFF"],
    link: "https://falabella.com",
    github: "#"
  },
  {
    title: "TypeScript Card Vault",
    description: "Implemented a secure card vault flow using Deuna SDK, featuring secure tokenization, feature-flagged user tokens, and resilient error handling for financial transactions.",
    tech: ["Next.js", "TypeScript", "Deuna SDK", "Security"],
    link: "#",
    github: "#"
  },
  {
    title: "NestJS Order API",
    description: "Designed and shipped a NestJS API aggregating and prioritizing customer orders into a macro-status–enriched package feed using DI/use-case patterns and DTOs.",
    tech: ["NestJS", "TypeScript", "Jest", "TDD", "REST API"],
    link: "#",
    github: "#"
  }
];

export const EDUCATION = {
  degree: "Bachelor of Technology",
  field: "Computer Science & Engineering",
  school: "St. Thomas’ College of Engineering and Technology",
  period: "2015 — 2019",
  location: "Kolkata, India"
};
