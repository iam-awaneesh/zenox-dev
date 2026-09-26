import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import TechStack from "@/components/sections/TechStack";
import Portfolio from "@/components/sections/Portfolio";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Testimonials from "@/components/sections/Testimonials";
import CTABanner from "@/components/sections/CTABanner";
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Cpu,
  Layers,
  ShieldCheck,
  Zap,
  Globe,
  Database,
  GitBranch,
  Terminal,
  Activity,
  Award,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Full-Stack IT, Modern App Development & AI SEO Agency",
  description:
    "ZenoxDev engineers enterprise-grade web and mobile applications, delivers high-growth AI SEO strategies, and automates CI/CD DevOps workflows. Transform your digital product today.",
  alternates: {
    canonical: "https://zenoxdev.com",
  },
  openGraph: {
    title: "ZenoxDev | Engineering Digital Dominance Through Code & AI",
    description:
      "Enterprise web & mobile app engineering, AI-driven organic SEO growth, and automated CI/CD DevOps infrastructure.",
    url: "https://zenoxdev.com",
  },
};

const trustedPartners = [
  "TechFlow Systems",
  "Apex Dynamics",
  "Vanguard Labs",
  "Nordic Scale",
  "Hyperion Cloud",
  "PulseMetrics",
];

export default function HomePage() {
  return (
    <>
      {/* Schema.org Organization Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "ZenoxDev",
            url: "https://zenoxdev.com",
            logo: "https://zenoxdev.com/logo.png",
            description:
              "Premier software engineering agency specializing in full-stack web & mobile apps, AI SEO, and intelligent automation.",
            sameAs: [
              "https://github.com",
              "https://linkedin.com",
              "https://twitter.com",
            ],
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+1-555-123-4567",
              contactType: "customer service",
              email: "contact@zenoxdev.com",
              areaServed: "Worldwide",
            },
          }),
        }}
      />

      <h1 className="sr-only">ZenoxDev - Full-Stack IT & Digital Growth Agency</h1>

      {/* 1. Main Hero Component */}
      <Hero />

      {/* 2. Trust & Social Proof Marquee / Logo Bar */}
      <section className="py-6 border-y border-slate-200/80 bg-slate-50/70">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-4">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-500">
              Trusted by Engineering & Growth Teams
            </p>
            <div className="flex items-center gap-4 text-xs font-semibold text-slate-600">
              <span className="flex items-center gap-1.5 text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200/60">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                99.98% Production SLA
              </span>
              <span className="hidden sm:flex items-center gap-1.5 text-slate-600">
                <Award className="w-3.5 h-3.5 text-primary-600" />
                SOC2 Type II Aligned
              </span>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-6 sm:gap-10 pt-2 border-t border-slate-200/60">
            {trustedPartners.map((partner) => (
              <div
                key={partner}
                className="font-heading font-extrabold text-sm sm:text-base tracking-tight text-slate-400 hover:text-primary-600 transition-colors cursor-default"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Core Solutions & Services Grid (with Images) */}
      <Services />

      {/* 4. Deep-Dive Architectural Spotlight: "How We Engineer & Scale" */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-slate-50/80 via-white to-slate-50/50 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-100/80 text-primary-800 text-xs font-semibold mb-4 border border-primary-200/70 shadow-2xs">
              <Cpu className="w-3.5 h-3.5 text-primary-600" />
              <span>Architectural Rigor</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink-900 tracking-tight">
              Engineered for Speed, Scalability, and{" "}
              <span className="text-gradient">Measurable Growth</span>
            </h2>
            <p className="mt-4 text-ink-500 text-base sm:text-lg leading-relaxed">
              We bridge the divide between deep software engineering and aggressive revenue acquisition. Every line of code is optimized for performance, search crawlers, and rapid user conversion.
            </p>
          </div>

          <div className="space-y-20 lg:space-y-28">
            {/* Feature 1: Modern Full-Stack Web Architecture */}
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              <div className="lg:col-span-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-50 text-amber-800 text-xs font-bold border border-amber-200 mb-4">
                  <span>Full-Stack Mastery</span>
                </div>
                <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-ink-900 tracking-tight mb-4">
                  High-Throughput Web Applications with Next.js & React 19
                </h3>
                <p className="text-ink-600 text-base leading-relaxed mb-6">
                  We don't build generic websites — we craft reactive, scalable web applications that load in milliseconds and scale elastically. By leveraging Server-Side Rendering, edge caching, and type-safe APIs, your product achieves maximum throughput.
                </p>

                <div className="space-y-3 mb-8">
                  {[
                    "Server Components & SSG for sub-second Largest Contentful Paint (LCP)",
                    "Strict TypeScript codebase with zero runtime typing errors",
                    "Modular microservice architecture built with Node.js and REST/GraphQL",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-sm font-medium text-ink-700">{item}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/services#web"
                  className="inline-flex items-center gap-2 text-sm font-bold text-primary-600 hover:text-primary-700 group"
                >
                  <span>Explore Web Engineering Capabilities</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>

              <div className="lg:col-span-6 relative">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 group">
                  <div className="relative h-72 sm:h-96 w-full">
                    <Image
                      src="/assets/software_dev.jpg"
                      alt="Modern Full-Stack Software Engineering"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-ink-950/20 to-transparent" />
                  </div>

                  {/* Floating Stat Overlay */}
                  <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-100 shadow-xl flex items-center justify-between">
                    <div>
                      <p className="text-xs text-ink-400 font-semibold uppercase tracking-wider">
                        Core Web Vitals Score
                      </p>
                      <p className="font-heading font-extrabold text-xl text-ink-900">
                        100 / 100 Performance
                      </p>
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-700 font-bold text-xs border border-emerald-200">
                      <TrendingUp className="w-3.5 h-3.5" />
                      <span>Sub-80ms TTFB</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 2: AI-Powered Search Optimization */}
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              <div className="lg:col-span-6 lg:order-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-purple-50 text-purple-800 text-xs font-bold border border-purple-200 mb-4">
                  <span>Predictive Intelligence</span>
                </div>
                <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-ink-900 tracking-tight mb-4">
                  AI-Driven Organic SEO That Decodes Search Intent
                </h3>
                <p className="text-ink-600 text-base leading-relaxed mb-6">
                  Traditional SEO relies on guesswork. ZenoxDev deploys machine learning models and semantic vector search to predict keyword opportunities, automate technical microdata graphs, and dominate search engine results.
                </p>

                <div className="space-y-3 mb-8">
                  {[
                    "Semantic search intent classification and programmatic topical clusters",
                    "Automated JSON-LD Schema.org rich snippet injection",
                    "Competitor content decay detection and proactive keyword recapture",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-sm font-medium text-ink-700">{item}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/services#ai-seo"
                  className="inline-flex items-center gap-2 text-sm font-bold text-primary-600 hover:text-primary-700 group"
                >
                  <span>Explore AI SEO & Growth Strategies</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>

              <div className="lg:col-span-6 lg:order-1 relative">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 group">
                  <div className="relative h-72 sm:h-96 w-full">
                    <Image
                      src="/assets/seo_growth.jpg"
                      alt="AI SEO Analytics and Organic Growth"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-ink-950/20 to-transparent" />
                  </div>

                  {/* Floating Stat Overlay */}
                  <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-100 shadow-xl flex items-center justify-between">
                    <div>
                      <p className="text-xs text-ink-400 font-semibold uppercase tracking-wider">
                        Average Inbound Surge
                      </p>
                      <p className="font-heading font-extrabold text-xl text-ink-900">
                        +240% Organic Traffic
                      </p>
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary-50 text-primary-700 font-bold text-xs border border-primary-200">
                      <Zap className="w-3.5 h-3.5" />
                      <span>Top 3 SERP Index</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 3: Cloud DevOps & In-Memory Redis Caching */}
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              <div className="lg:col-span-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-50 text-cyan-800 text-xs font-bold border border-cyan-200 mb-4">
                  <span>Resilient Infrastructure</span>
                </div>
                <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-ink-900 tracking-tight mb-4">
                  Zero-Downtime DevOps & Redis-Accelerated Persistence
                </h3>
                <p className="text-ink-600 text-base leading-relaxed mb-6">
                  Ship code multiple times a day with complete confidence. We build automated GitHub Actions pipelines, containerized Docker/Kubernetes deployments, and high-speed Redis caching layers that eliminate server strain.
                </p>

                <div className="space-y-3 mb-8">
                  {[
                    "Automated blue-green and canary zero-downtime releases",
                    "Redis in-memory caching and distributed message queues",
                    "Elastic AWS & GCP multi-region infrastructure as code",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-sm font-medium text-ink-700">{item}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/services#devops"
                  className="inline-flex items-center gap-2 text-sm font-bold text-primary-600 hover:text-primary-700 group"
                >
                  <span>Explore DevOps & Cloud Architecture</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>

              <div className="lg:col-span-6 relative">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 group">
                  <div className="relative h-72 sm:h-96 w-full">
                    <Image
                      src="/assets/redis_cache.jpg"
                      alt="Redis Caching and High-Throughput Databases"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-ink-950/20 to-transparent" />
                  </div>

                  {/* Floating Stat Overlay */}
                  <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-100 shadow-xl flex items-center justify-between">
                    <div>
                      <p className="text-xs text-ink-400 font-semibold uppercase tracking-wider">
                        Release Pipeline Velocity
                      </p>
                      <p className="font-heading font-extrabold text-xl text-ink-900">
                        &lt; 4 Min Deployments
                      </p>
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-700 font-bold text-xs border border-emerald-200">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>Zero Downtime</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Modern Tech Stack Showcase */}
      <TechStack />

      {/* 6. Demonstrable Impact / Case Studies (Portfolio) */}
      <Portfolio />

      {/* 7. Why Choose ZenoxDev (The ZenoxDev Edge) */}
      <WhyChooseUs />

      {/* 8. Client Testimonials */}
      <Testimonials />

      {/* 9. Final High-Conversion CTA Banner */}
      <CTABanner />
    </>
  );
}