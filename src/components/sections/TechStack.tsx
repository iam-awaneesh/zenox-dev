import Link from "next/link";
import { Layers, ArrowRight, Cpu, Database, Server, Smartphone, Globe, Cloud } from "lucide-react";

export interface TechItem {
  name: string;
  category: "Frontend" | "Backend" | "Database" | "Cloud & DevOps" | "AI & Tools" | "Mobile";
  color: string;
  initials: string;
  role: string;
  experienceYears?: string;
}

export const techStackData: TechItem[] = [
  { name: "Next.js", category: "Frontend", color: "#000000", initials: "Nxt", role: "SSR, SSG & Server Actions" },
  { name: "React 19", category: "Frontend", color: "#61DAFB", initials: "Re", role: "Component Architecture" },
  { name: "TypeScript", category: "Frontend", color: "#3178C6", initials: "TS", role: "Type-Safe Enterprise Code" },
  { name: "React Native", category: "Mobile", color: "#61DAFB", initials: "RN", role: "iOS & Android Cross-Platform" },
  { name: "Tailwind CSS", category: "Frontend", color: "#38B2AC", initials: "TW", role: "Design Systems & Responsive UI" },
  { name: "Node.js", category: "Backend", color: "#339933", initials: "No", role: "High-Throughput APIs" },
  { name: "Express / Nest", category: "Backend", color: "#E0234E", initials: "Ex", role: "REST & Microservice Architecture" },
  { name: "PostgreSQL", category: "Database", color: "#336791", initials: "PG", role: "Relational ACID Persistence" },
  { name: "MongoDB", category: "Database", color: "#47A248", initials: "Mg", role: "Flexible Document Stores" },
  { name: "Redis", category: "Database", color: "#DC382D", initials: "Rd", role: "In-Memory Caching & Queues" },
  { name: "Docker", category: "Cloud & DevOps", color: "#2496ED", initials: "Dk", role: "Immutable Containerization" },
  { name: "AWS & GCP", category: "Cloud & DevOps", color: "#FF9900", initials: "AWS", role: "Elastic Cloud Infrastructure" },
  { name: "GitHub Actions", category: "Cloud & DevOps", color: "#2088FF", initials: "GH", role: "Automated CI/CD Pipelines" },
  { name: "OpenAI & LLMs", category: "AI & Tools", color: "#10A37F", initials: "AI", role: "Intelligent Workflows & Semantic SEO" },
];

export default function TechStack() {
  return (
    <section id="technologies" className="py-20 lg:py-28 bg-slate-50/80 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-primary-200/60 text-primary-700 text-xs font-semibold mb-4 shadow-xs">
            <Layers className="w-3.5 h-3.5" />
            <span>Modern Engineering Toolkit</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink-900 tracking-tight">
            Technologies We <span className="text-gradient">Master & Deploy</span>
          </h2>
          <p className="mt-4 text-ink-500 text-base sm:text-lg">
            A resilient, battle-tested modern stack curated for maximum speed, security, and exponential scale.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {techStackData.slice(0, 14).map((tech) => (
            <div
              key={tech.name}
              className="group flex flex-col items-center text-center p-5 rounded-2xl bg-white shadow-xs hover:shadow-xl hover:shadow-primary-900/10 hover:-translate-y-1.5 transition-all duration-300 border border-slate-200/80"
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center font-heading font-extrabold text-lg transition-transform group-hover:scale-110 mb-3 shadow-xs"
                style={{
                  backgroundColor: `${tech.color}15`,
                  color: tech.color === "#000000" ? "#0f172a" : tech.color,
                }}
              >
                {tech.initials}
              </div>
              <span className="text-sm font-bold text-ink-900 mb-1 group-hover:text-primary-600 transition-colors">
                {tech.name}
              </span>
              <span className="text-[11px] text-ink-400 font-medium line-clamp-1">
                {tech.category}
              </span>
            </div>
          ))}
        </div>

        {/* Explore dedicated technologies page link */}
        <div className="mt-14 text-center">
          <Link
            href="/technologies"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white hover:bg-primary-50 border border-primary-200 text-primary-700 font-semibold text-sm shadow-xs hover:shadow-md transition-all group"
          >
            <span>Explore Full Tech Stack Architecture & Benchmarks</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}