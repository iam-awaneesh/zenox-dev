import type { Metadata } from "next";
import Link from "next/link";
import {
  Sparkles,
  Target,
  Eye,
  CheckCircle2,
  Users,
  Award,
  Globe,
  ArrowRight,
  ShieldCheck,
  Zap,
  Code2,
  TrendingUp,
  Cpu,
} from "lucide-react";
import { whyChooseReasons } from "@/components/sections/WhyChooseUs";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "About ZenoxDev | Our Engineering Philosophy & Leadership",
  description:
    "Learn about ZenoxDev, our mission, architectural philosophy, core values, and the senior engineering team behind high-performance digital products.",
  alternates: {
    canonical: "https://zenoxdev.com/about",
  },
  openGraph: {
    title: "About ZenoxDev | Software Engineers & Digital Growth Architects",
    description:
      "Built by senior engineers for ambitious companies. Learn about our mission, vision, journey, and values.",
    url: "https://zenoxdev.com/about",
  },
};

const timeline = [
  {
    year: "2021",
    title: "Agency Inception",
    desc: "Founded by veteran software architects who recognized the gap between slow legacy agencies and modern fast-shipping engineering teams.",
  },
  {
    year: "2022",
    title: "Rapid Scaling & 30+ Products",
    desc: "Delivered 30+ mission-critical web and mobile applications for Seed and Series A startups across North America and Europe.",
  },
  {
    year: "2024",
    title: "AI & Automation Pioneer",
    desc: "Pioneered proprietary predictive SEO engines and zero-downtime CI/CD deployment pipelines directly into every client build.",
  },
  {
    year: "2026",
    title: "Global Enterprise Scale",
    desc: "Now supporting 120+ active digital products globally with 98.4% client retention and over $40M in customer-generated pipeline.",
  },
];

const teamMembers = [
  {
    name: "Alex Vance",
    role: "Chief Technology Officer & Co-Founder",
    bio: "Ex-FAANG architect with 12+ years designing distributed systems, high-throughput microservices, and reactive frontends.",
    tags: ["Distributed Systems", "Next.js", "Kubernetes"],
  },
  {
    name: "Elena Rostova",
    role: "Head of AI & Growth Engineering",
    bio: "Specializes in predictive machine learning models, search intent classification algorithms, and automated SEO ranking architectures.",
    tags: ["Machine Learning", "Python", "Data Science"],
  },
  {
    name: "Darius Patel",
    role: "Principal Mobile Architect",
    bio: "React Native veteran and core contributor with over 40 top-ranked iOS and Android production apps deployed to app stores.",
    tags: ["React Native", "iOS/Android", "WebRTC"],
  },
  {
    name: "Maya Lin",
    role: "VP of Product Experience & Design",
    bio: "Designs conversion-obsessed, accessible design systems and micro-interactions that elevate brand authority and engagement.",
    tags: ["Design Systems", "Figma", "Accessibility"],
  },
];

const values = [
  {
    icon: Code2,
    title: "Zero Technical Debt Mindset",
    desc: "We write clean, strictly-typed, self-documenting code built for longevity rather than quick hacky patches.",
  },
  {
    icon: ShieldCheck,
    title: "Radical Transparency",
    desc: "Real-time GitHub commits, direct engineer Slack access, and weekly unvarnished progress reports with live code demos.",
  },
  {
    icon: TrendingUp,
    title: "Outcomes Over Artifacts",
    desc: "We measure success not by tickets closed, but by revenue unlocked, latency eliminated, and Google rankings captured.",
  },
  {
    icon: Zap,
    title: "Relentless Shipping Velocity",
    desc: "Continuous integration and automated QA test suites ensure production releases take minutes instead of grueling weekends.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Schema.org AboutPage Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: "About ZenoxDev",
            description:
              "Learn about ZenoxDev, our mission, senior engineering leadership, and digital growth philosophy.",
            url: "https://zenoxdev.com/about",
            mainEntity: {
              "@type": "Organization",
              name: "ZenoxDev",
              url: "https://zenoxdev.com",
            },
          }),
        }}
      />

      {/* Hero Header */}
      <section className="relative pt-36 pb-20 lg:pt-44 lg:pb-28 bg-gradient-to-b from-primary-50/70 via-white to-white hero-grid-bg overflow-hidden">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary-400/10 rounded-full blur-3xl pointer-events-none" />

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
              <li className="text-primary-600">About Us</li>
            </ol>
          </nav>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-100/70 border border-primary-200 text-primary-800 text-xs font-semibold mb-6">
            <Sparkles className="w-3.5 h-3.5 text-primary-600" />
            <span>Built by Senior Engineers</span>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-ink-900 tracking-tight leading-tight max-w-4xl mx-auto">
            Engineering Excellence With a{" "}
            <span className="text-gradient">Founder's Obsession</span>
          </h1>

          <p className="mt-6 text-base sm:text-lg lg:text-xl text-ink-600 max-w-3xl mx-auto leading-relaxed">
            ZenoxDev was founded to solve a pervasive problem: high-growth companies are tired of dealing with slow agencies that produce bloated code and zero measurable business impact. We build software like owners.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold text-sm shadow-lg shadow-primary-600/30 hover:shadow-xl hover:-translate-y-0.5 transition-all"
            >
              <span>Work With Our Engineers</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white border border-slate-200 text-ink-800 font-semibold text-sm hover:border-primary-300 hover:bg-primary-50/50 shadow-xs transition-all"
            >
              <span>View Case Studies</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-primary-50/60 to-white border border-primary-100 shadow-sm relative overflow-hidden">
              <div className="w-12 h-12 rounded-2xl bg-primary-600 text-white flex items-center justify-center mb-6 shadow-md shadow-primary-600/30">
                <Target className="w-6 h-6" />
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-ink-900 mb-4">
                Our Mission
              </h2>
              <p className="text-base text-ink-600 leading-relaxed">
                To empower founders and technical executives with enterprise-grade software architecture, automated deployment pipelines, and AI-powered organic visibility — transforming ideas into highly profitable, resilient digital engines.
              </p>
              <div className="mt-6 flex items-center gap-2 text-primary-700 font-semibold text-sm">
                <CheckCircle2 className="w-4 h-4" />
                <span>Zero fluff. Pure architectural leverage.</span>
              </div>
            </div>

            <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-slate-50 to-white border border-slate-200 shadow-sm relative overflow-hidden">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary-700 to-accent-cyan text-white flex items-center justify-center mb-6 shadow-md shadow-primary-600/30">
                <Eye className="w-6 h-6" />
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-ink-900 mb-4">
                Our Vision
              </h2>
              <p className="text-base text-ink-600 leading-relaxed">
                To be the global benchmark for modern agile engineering — where software development, artificial intelligence, and organic search optimization coalesce into an automated flywheel of continuous enterprise growth.
              </p>
              <div className="mt-6 flex items-center gap-2 text-primary-700 font-semibold text-sm">
                <CheckCircle2 className="w-4 h-4" />
                <span>Global impact across 15+ countries.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-slate-50/70 border-y border-slate-200/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-primary-600 bg-primary-50 px-3 py-1 rounded-full border border-primary-100">
              The Code of Ethics
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-ink-900 mt-3">
              Principles That Guide Every Line of Code
            </h2>
            <p className="mt-4 text-ink-500 text-base sm:text-lg">
              We operate on uncompromising software engineering standards and transparent partnerships.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val) => (
              <div
                key={val.title}
                className="p-7 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-xl hover:shadow-primary-900/10 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center mb-5">
                    <val.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-ink-900 mb-2">
                    {val.title}
                  </h3>
                  <p className="text-sm text-ink-500 leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-primary-600 bg-primary-50 px-3 py-1 rounded-full border border-primary-100">
              Our Track Record
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-ink-900 mt-3">
              The Journey to High-Throughput Engineering
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8 relative">
            {timeline.map((step, idx) => (
              <div key={step.year} className="relative p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
                <span className="text-3xl font-heading font-extrabold text-primary-600 block mb-2">
                  {step.year}
                </span>
                <h3 className="font-heading text-lg font-bold text-ink-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-ink-500 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership & Senior Team */}
      <section className="py-20 lg:py-28 bg-slate-50/70 border-t border-slate-200/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-primary-600 bg-primary-50 px-3 py-1 rounded-full border border-primary-100">
              Technical Leadership
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-ink-900 mt-3">
              Meet the Architects Behind Your Products
            </h2>
            <p className="mt-4 text-ink-500 text-base sm:text-lg">
              You will always collaborate directly with seasoned technical leaders, never junior account managers.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-xl hover:shadow-primary-900/10 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-primary-600 to-accent-cyan flex items-center justify-center text-white font-heading font-bold text-xl mb-4 shadow-md shadow-primary-600/20">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <h3 className="font-heading text-lg font-bold text-ink-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-xs font-semibold text-primary-600 mb-3">
                    {member.role}
                  </p>
                  <p className="text-xs text-ink-500 leading-relaxed mb-4">
                    {member.bio}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100">
                  {member.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded bg-primary-50 text-primary-700 text-[10px] font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Deep Dive */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-primary-600 bg-primary-50 px-3 py-1 rounded-full border border-primary-100">
              The ZenoxDev Standards
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-ink-900 mt-3">
              Why Companies Trust ZenoxDev Over Legacy Consultancies
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseReasons.map((reason) => (
              <div
                key={reason.title}
                className="p-7 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-xs hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-600 text-white flex items-center justify-center mb-4 shadow-sm">
                  <reason.icon className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-lg font-bold text-ink-900 mb-2">
                  {reason.title}
                </h3>
                <p className="text-sm text-ink-500 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner />
    </>
  );
}
