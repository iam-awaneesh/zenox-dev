import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Layers,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Zap,
  Cpu,
  Database,
  Cloud,
  Globe,
  Smartphone,
  CheckCircle2,
  Server,
  Code2,
  Lock,
} from "lucide-react";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Modern Tech Stack & Cloud Architecture | ZenoxDev Technologies",
  description:
    "Explore the battle-tested technologies we deploy: Next.js, React 19, TypeScript, Node.js, React Native, PostgreSQL, Docker, AWS, and AI LLM integrations.",
  alternates: {
    canonical: "https://zenoxdev.com/technologies",
  },
  openGraph: {
    title: "ZenoxDev Tech Stack | Enterprise-Grade Architecture & Tooling",
    description:
      "A deep dive into our engineering toolkit: Next.js, React Native, TypeScript, Docker, AWS, and AI optimization.",
    url: "https://zenoxdev.com/technologies",
  },
};

const techCategories = [
  {
    category: "Frontend & UI Engineering",
    icon: Globe,
    description: "Component-driven, server-rendered user interfaces optimized for sub-second page loads and zero layout shifts.",
    items: [
      {
        name: "Next.js 16",
        initials: "Nxt",
        color: "#000000",
        role: "React Server Components (RSC), App Router, dynamic streaming, and high-performance SSR/SSG.",
        benefit: "Instant LCP and unmatched SEO crawlability",
      },
      {
        name: "React 19",
        initials: "Re",
        color: "#61DAFB",
        role: "Concurrent rendering, declarative hooks, and modern component lifecycle management.",
        benefit: "Silky smooth 60fps reactive client experiences",
      },
      {
        name: "TypeScript",
        initials: "TS",
        color: "#3178C6",
        role: "Static typing, automated intellisense, and compile-time bug elimination across the full stack.",
        benefit: "Zero runtime type regressions",
      },
      {
        name: "Tailwind CSS",
        initials: "TW",
        color: "#38B2AC",
        role: "Utility-first design tokens, zero runtime CSS overhead, and rapid responsive styling.",
        benefit: "Ultra-lean production bundle size",
      },
    ],
  },
  {
    category: "Backend & Microservices",
    icon: Server,
    description: "High-throughput asynchronous servers and APIs built to handle thousands of concurrent requests.",
    items: [
      {
        name: "Node.js",
        initials: "No",
        color: "#339933",
        role: "Event-driven asynchronous I/O runtime powering modern API microservices.",
        benefit: "Exceptional I/O throughput and quick horizontal scaling",
      },
      {
        name: "Express & NestJS",
        initials: "Nest",
        color: "#E0234E",
        role: "Structured enterprise API architecture with dependency injection and OpenAPI documentation.",
        benefit: "Modular, easily maintainable backend services",
      },
      {
        name: "Python & FastAPI",
        initials: "Py",
        color: "#3776AB",
        role: "High-speed asynchronous Python for AI inference pipelines, vector search, and web crawlers.",
        benefit: "Rapid ML model integration with automatic Swagger docs",
      },
      {
        name: "GraphQL & REST",
        initials: "GQL",
        color: "#E535AB",
        role: "Flexible query orchestration preventing over-fetching and under-fetching of client data.",
        benefit: "Minimal network payloads over mobile networks",
      },
    ],
  },
  {
    category: "Mobile Architecture",
    icon: Smartphone,
    description: "Cross-platform native applications sharing 90%+ code while maintaining native device feel.",
    items: [
      {
        name: "React Native",
        initials: "RN",
        color: "#61DAFB",
        role: "Cross-platform mobile apps for iOS and Android with Hermes JavaScript engine.",
        benefit: "50% lower maintenance overhead with native performance",
      },
      {
        name: "Expo Ecosystem",
        initials: "Exp",
        color: "#000000",
        role: "Over-the-air updates (EAS), simplified device builds, and seamless native API bridges.",
        benefit: "Rapid bug fixes deployed without App Store delay",
      },
      {
        name: "Native Bridges",
        initials: "Swift",
        color: "#FA7343",
        role: "Custom Swift and Kotlin modules for hardware sensors, Bluetooth, and biometric auth.",
        benefit: "Uncompromising access to device hardware",
      },
    ],
  },
  {
    category: "Databases & In-Memory Caching",
    icon: Database,
    description: "Relational integrity, flexible document schemas, and ultra-fast sub-millisecond memory stores.",
    items: [
      {
        name: "PostgreSQL",
        initials: "PG",
        color: "#336791",
        role: "ACID-compliant relational database with JSONB support, pgvector, and complex indexing.",
        benefit: "Rock-solid data consistency and vector similarity search",
      },
      {
        name: "MongoDB",
        initials: "Mg",
        color: "#47A248",
        role: "High-scale document database for dynamic schema requirements and rapid prototyping.",
        benefit: "Elastic horizontal sharding for terabyte-scale data",
      },
      {
        name: "Redis",
        initials: "Rd",
        color: "#DC382D",
        role: "In-memory caching layer, session storage, rate limiting, and pub/sub message brokers.",
        benefit: "Sub-millisecond query responses",
      },
    ],
  },
  {
    category: "Cloud, DevOps & CI/CD",
    icon: Cloud,
    description: "Automated test suites, continuous deployment, and elastic cloud infrastructure.",
    items: [
      {
        name: "Docker",
        initials: "Dk",
        color: "#2496ED",
        role: "Lightweight immutable containerization ensuring parity across dev, staging, and production.",
        benefit: "Works identically on every developer's machine and in the cloud",
      },
      {
        name: "AWS & GCP",
        initials: "AWS",
        color: "#FF9900",
        role: "Elastic computing, serverless lambdas, S3 asset delivery, and multi-region failovers.",
        benefit: "99.99% infrastructure uptime SLA",
      },
      {
        name: "GitHub Actions",
        initials: "GHA",
        color: "#2088FF",
        role: "Automated pipelines for linting, security audits, Docker builds, and zero-downtime deploys.",
        benefit: "Deploys in under 3 minutes per commit",
      },
      {
        name: "Kubernetes",
        initials: "K8s",
        color: "#326CE5",
        role: "Container orchestration for auto-scaling workloads during sudden traffic spikes.",
        benefit: "Zero manual intervention needed during viral surges",
      },
    ],
  },
  {
    category: "AI & Machine Learning",
    icon: Cpu,
    description: "Cognitive intelligence, automated search optimization, and vector embeddings.",
    items: [
      {
        name: "OpenAI GPT-4",
        initials: "GPT",
        color: "#10A37F",
        role: "Custom LLM agents for programmatic content blueprints, customer support, and code analysis.",
        benefit: "Automated intelligence baked directly into software",
      },
      {
        name: "Pinecone / pgvector",
        initials: "Vec",
        color: "#059669",
        role: "High-dimensional vector indexing for semantic similarity and conversational memory.",
        benefit: "Lightning-fast RAG retrieval pipelines",
      },
      {
        name: "LangChain",
        initials: "LC",
        color: "#D97706",
        role: "Chaining models, memory buffers, and custom tool executions for autonomous bots.",
        benefit: "Complex multi-step reasoning capabilities",
      },
    ],
  },
];

const architecturePillars = [
  {
    icon: ShieldCheck,
    title: "End-to-End Type Safety",
    desc: "From database schemas (Prisma/Drizzle) to API routes and frontend components, every parameter is validated at compile-time.",
  },
  {
    icon: Zap,
    title: "Sub-Second Latency Budget",
    desc: "Every web page is engineered under strict Core Web Vitals budgets: Largest Contentful Paint under 1.2s and Cumulative Layout Shift under 0.05.",
  },
  {
    icon: Lock,
    title: "Defense-in-Depth Security",
    desc: "Automated secret scanning, sanitized user inputs, encrypted-at-rest databases, and strict CORS/CSP header policies.",
  },
  {
    icon: Code2,
    title: "Modular Clean Architecture",
    desc: "Decoupled business logic that allows you to swap databases, frontend frameworks, or third-party APIs with zero friction.",
  },
];

export default function TechnologiesPage() {
  return (
    <>
      {/* Schema.org WebPage Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "ZenoxDev Technologies and Engineering Stack",
            description:
              "Comprehensive overview of the technologies, frameworks, and cloud architecture deployed by ZenoxDev.",
            url: "https://zenoxdev.com/technologies",
          }),
        }}
      />

      {/* Page Hero Header */}
      <section className="relative pt-36 pb-20 lg:pt-44 lg:pb-28 bg-gradient-to-b from-primary-50/70 via-white to-white hero-grid-bg overflow-hidden">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-primary-400/10 rounded-full blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6 flex justify-center">
            <ol className="flex items-center gap-2 text-xs font-semibold text-ink-500 bg-white/80 py-1.5 px-4 rounded-full border border-slate-200 shadow-xs">
              <li>
                <Link href="/" className="hover:text-primary-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>/</li>
              <li className="text-primary-600">Technologies</li>
            </ol>
          </nav>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-100/70 border border-primary-200 text-primary-800 text-xs font-semibold mb-6">
            <Layers className="w-3.5 h-3.5 text-primary-600" />
            <span>Modern Engineering Arsenal</span>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-ink-900 tracking-tight leading-tight max-w-4xl mx-auto">
            Battle-Tested Technologies for{" "}
            <span className="text-gradient">Uncapped Digital Scale</span>
          </h1>

          <p className="mt-6 text-base sm:text-lg lg:text-xl text-ink-600 max-w-3xl mx-auto leading-relaxed">
            We avoid outdated legacy frameworks. Our engineering stack is handpicked for raw performance, ironclad security, developer velocity, and long-term durability.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold text-sm shadow-lg shadow-primary-600/30 hover:shadow-xl hover:-translate-y-0.5 transition-all"
            >
              <span>Get Free Tech Stack Evaluation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white border border-slate-200 text-ink-800 font-semibold text-sm hover:border-primary-300 hover:bg-primary-50/50 shadow-xs transition-all"
            >
              <span>View How We Apply Stack</span>
            </Link>
          </div>

          {/* Hero Image */}
          <div className="mt-16 sm:mt-20 relative w-full max-w-5xl mx-auto h-64 sm:h-80 lg:h-[400px] rounded-3xl overflow-hidden shadow-2xl shadow-primary-900/10 border border-slate-200/50">
            <Image 
              src="/assets/tech_abstract.jpg" 
              alt="ZenoxDev Abstract Technology Stack" 
              fill 
              className="object-cover"
              priority 
            />
          </div>
        </div>
      </section>

      {/* Categorized Tech Matrix */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {techCategories.map((cat) => (
              <div key={cat.category} className="p-8 sm:p-10 rounded-3xl bg-slate-50/80 border border-slate-200/90 shadow-xs">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-slate-200">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-primary-600 text-white flex items-center justify-center shadow-md shadow-primary-600/20">
                      <cat.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h2 className="font-heading text-xl sm:text-2xl font-bold text-ink-900">
                        {cat.category}
                      </h2>
                      <p className="text-xs sm:text-sm text-ink-500 mt-0.5">
                        {cat.description}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {cat.items.map((item) => (
                    <div
                      key={item.name}
                      className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-xl hover:shadow-primary-900/10 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <div
                            className="w-12 h-12 rounded-xl flex items-center justify-center font-heading font-extrabold text-base shadow-xs"
                            style={{
                              backgroundColor: `${item.color}15`,
                              color: item.color === "#000000" ? "#0f172a" : item.color,
                            }}
                          >
                            {item.initials}
                          </div>
                          <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                            Enterprise
                          </span>
                        </div>

                        <h3 className="font-heading text-lg font-bold text-ink-900 mb-2">
                          {item.name}
                        </h3>

                        <p className="text-xs text-ink-600 leading-relaxed mb-4">
                          {item.role}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-slate-100 flex items-start gap-1.5 text-[11px] text-emerald-700 font-semibold">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{item.benefit}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architectural Standards & Pillars */}
      <section className="py-20 lg:py-28 bg-slate-50/70 border-y border-slate-200/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-primary-600 bg-primary-50 px-3 py-1 rounded-full border border-primary-100">
              Architectural Guardrails
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-ink-900 mt-3">
              How We Architect High-Reliability Systems
            </h2>
            <p className="mt-4 text-ink-500 text-base sm:text-lg">
              Choosing good tools is only half the battle. How those tools interact determines whether your application scales or collapses.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {architecturePillars.map((pillar) => (
              <div
                key={pillar.title}
                className="p-7 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center mb-5">
                  <pillar.icon className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-lg font-bold text-ink-900 mb-2">
                  {pillar.title}
                </h3>
                <p className="text-sm text-ink-500 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legacy Stack vs ZenoxDev Modern Stack */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-primary-600 bg-primary-50 px-3 py-1 rounded-full border border-primary-100">
              The Evolution
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-ink-900 mt-3">
              Legacy Tech Debt vs. ZenoxDev Cloud-Native Stack
            </h2>
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
            <div className="grid grid-cols-2 bg-slate-900 text-white p-4 font-heading font-bold text-sm sm:text-base">
              <div className="text-rose-400">Legacy Agency Stacks (Avoid)</div>
              <div className="text-emerald-400">ZenoxDev Modern Architecture</div>
            </div>
            <div className="divide-y divide-slate-200 text-xs sm:text-sm bg-white">
              {[
                { legacy: "Monolithic WordPress / PHP with 40+ plugins", modern: "Headless Next.js 16 + React 19 + TypeScript" },
                { legacy: "Slow page load times (3s - 8s) & failing Core Web Vitals", modern: "Sub-second LCP & 100/100 Google Lighthouse scores" },
                { legacy: "Manual FTP uploads & scary midnight releases", modern: "Automated GitHub Actions CI/CD with zero downtime" },
                { legacy: "Unencrypted credentials & outdated server patches", modern: "Isolated Docker containers & SOC2 compliance practices" },
                { legacy: "Guesswork keyword targeting on spreadsheets", modern: "AI semantic vector embeddings & intent prediction" },
              ].map((row, i) => (
                <div key={i} className="grid grid-cols-2 p-4 gap-4">
                  <div className="text-slate-500 flex items-start gap-2">
                    <span className="text-rose-500 font-bold">✕</span>
                    <span>{row.legacy}</span>
                  </div>
                  <div className="text-ink-900 font-medium flex items-start gap-2">
                    <span className="text-emerald-500 font-bold">✓</span>
                    <span>{row.modern}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner />
    </>
  );
}
