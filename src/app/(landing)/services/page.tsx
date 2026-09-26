import type { Metadata } from "next";
import Link from "next/link";
import {
  Globe,
  Smartphone,
  Search,
  BrainCircuit,
  Workflow,
  GitBranch,
  Sparkles,
  Zap,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  HelpCircle,
} from "lucide-react";
import CTABanner from "@/components/sections/CTABanner";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Full-Stack Software Services | Web, Mobile, AI SEO & DevOps",
  description:
    "Explore ZenoxDev's comprehensive IT solutions: custom Next.js web apps, React Native mobile apps, predictive AI SEO, workflow automation, and enterprise CI/CD DevOps.",
  alternates: {
    canonical: "https://zenoxdev.com/services",
  },
  openGraph: {
    title: "ZenoxDev Services | Full-Stack Engineering, AI SEO & Automation",
    description:
      "Enterprise web & mobile app engineering, AI-driven organic SEO growth, and automated CI/CD DevOps infrastructure.",
    url: "https://zenoxdev.com/services",
  },
};

const fullServices = [
  {
    id: "web",
    icon: Globe,
    title: "Custom Full-Stack Web Development",
    subtitle: "High-throughput, reactive web applications built with Next.js, React 19, and Node.js.",
    description:
      "We design and build mission-critical web applications optimized for lightning-fast Core Web Vitals, elastic microservice scalability, and intuitive user experiences.",
    deliverables: [
      "Server-Side Rendering (SSR) & Static Site Generation (SSG)",
      "High-concurrency RESTful and GraphQL APIs",
      "Real-time WebSocket data synchronization",
      "Strict TypeScript typings & zero technical debt",
      "Sub-1 second Largest Contentful Paint (LCP)",
    ],
    tech: ["Next.js", "React 19", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"],
    impactMetric: "99.98% Uptime & Sub-100ms Latency",
    badge: "Flagship",
    image: "/assets/fullstack_dev.jpg",
  },
  {
    id: "mobile",
    icon: Smartphone,
    title: "Cross-Platform Mobile App Development",
    subtitle: "Single codebase, native 60fps performance across iOS and Android.",
    description:
      "Leveraging React Native and native mobile bridges, we engineer feature-rich mobile apps that delight users while cutting ongoing maintenance costs in half.",
    deliverables: [
      "iOS & Android cross-platform feature parity",
      "Offline-first synchronization & local storage caching",
      "Biometric authentication (FaceID, TouchID)",
      "Wearable & HealthKit/Google Fit integration",
      "Complete App Store & Google Play submission management",
    ],
    tech: ["React Native", "Expo", "TypeScript", "Redux Toolkit", "WebRTC"],
    impactMetric: "4.9 Average Store Rating Across 40+ Apps",
    badge: "Mobile First",
    image: "/assets/mobile_app_dev.jpg",
  },
  {
    id: "seo",
    icon: Search,
    title: "Data-Driven Technical & Organic SEO",
    subtitle: "Turn Google search into your primary inbound revenue channel.",
    description:
      "We bridge the gap between technical web development and organic search algorithms. We optimize page speed, crawl efficiency, site architecture, and rich schema snippets to rank your business for high-intent keywords.",
    deliverables: [
      "Deep technical crawlability and rendering audits",
      "Schema.org structured JSON-LD microdata integration",
      "Core Web Vitals remediation (LCP, FID/INP, CLS)",
      "Keyword gap and competitive SERP landscape analysis",
      "High-authority programmatic content clusters",
    ],
    tech: ["Schema.org", "Google Search Console", "Screaming Frog", "Lighthouse", "Ahrefs"],
    impactMetric: "+240% Average Organic Traffic Growth",
    badge: "High ROI",
    image: "/assets/seo_growth.jpg",
  },
  {
    id: "ai-seo",
    icon: BrainCircuit,
    title: "AI-Powered SEO & Cognitive Growth",
    subtitle: "Machine learning models that decode search intent and outsmart algorithm shifts.",
    description:
      "Traditional SEO is reactive; our AI SEO engine is predictive. We analyze search intent vectors, topic clustering, and ranking volatility using custom machine learning pipelines to give you an unbeatable organic edge.",
    deliverables: [
      "Semantic vector embeddings for content optimization",
      "Search intent classification & automated content briefs",
      "Automated internal linking graph optimization",
      "Competitor decay detection and keyword opportunity alarms",
      "AI-assisted schema generation and topical authority maps",
    ],
    tech: ["Python", "FastAPI", "OpenAI GPT-4", "Pinecone Vector DB", "LangChain"],
    impactMetric: "2.8x Faster Time-to-Page-One",
    badge: "AI-Powered",
    badgeColor: "amber",
    image: "/assets/ai_concept.jpg",
  },
  {
    id: "automation",
    icon: Workflow,
    title: "Business Process & RPA Automation",
    subtitle: "Eliminate manual data entry, streamline operations, and boost employee output.",
    description:
      "We engineer custom automated pipelines and webhook bridges that connect your CRM, payment processors, customer support portals, and communication channels into a unified, self-running operational machine.",
    deliverables: [
      "Custom API connectors and event-driven webhook relays",
      "Automated invoice processing and accounting reconciliation",
      "Slack / Microsoft Teams interactive operational bots",
      "HubSpot, Salesforce, and Stripe bi-directional synchronization",
      "Robotic Process Automation (RPA) for legacy databases",
    ],
    tech: ["Zapier", "Make", "Node.js Webhooks", "Puppeteer", "Docker"],
    impactMetric: "20+ Hours Saved Per Employee Weekly",
    badge: "Automated",
    badgeColor: "cyan",
    image: "/assets/api_connections.jpg",
  },
  {
    id: "devops",
    icon: GitBranch,
    title: "Cloud Infrastructure, DevOps & CI/CD",
    subtitle: "Zero-downtime deployments, automated testing, and bulletproof cloud scale.",
    description:
      "We design automated release pipelines and cloud architectures that let your team ship features with total confidence. Say goodbye to broken deploys and middle-of-the-night server panics.",
    deliverables: [
      "Automated CI/CD pipelines via GitHub Actions and GitLab CI",
      "Docker containerization & Kubernetes cluster orchestration",
      "Infrastructure-as-Code (Terraform & AWS CloudFormation)",
      "Automated blue-green and canary zero-downtime deployments",
      "24/7 Datadog/Prometheus monitoring and incident alert trees",
    ],
    tech: ["Docker", "Kubernetes", "AWS", "Google Cloud", "GitHub Actions", "Terraform"],
    impactMetric: "< 4 Minute Automated Deployment Cycles",
    badge: "Automated",
    badgeColor: "cyan",
    image: "/assets/devops_cicd.jpg",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Technical Discovery & Architecture",
    desc: "We analyze your existing code, business requirements, and scalability goals to draft a comprehensive engineering roadmap.",
  },
  {
    step: "02",
    title: "Rapid Prototyping & UX Design",
    desc: "Interactive wireframes, accessible component design systems, and rapid prototype validation to align all stakeholders.",
  },
  {
    step: "03",
    title: "Agile Full-Stack Sprints",
    desc: "Two-week agile delivery sprints with continuous Git commits, weekly live demos, and automated test coverage.",
  },
  {
    step: "04",
    title: "Security, QA & SEO Audit",
    desc: "Rigorous penetration testing, multi-device cross-browser testing, Core Web Vitals checks, and automated SEO audits.",
  },
  {
    step: "05",
    title: "Zero-Downtime Launch & Scale",
    desc: "Production deployment with real-time telemetry, error alerting, and dedicated post-launch support guarantees.",
  },
];

const faqs = [
  {
    q: "How does ZenoxDev guarantee code quality and security?",
    a: "Every pull request undergoes peer review by a senior architect, automated linting, unit/integration testing, and dependency vulnerability scanning. We strictly adhere to SOC2 and OWASP Top 10 security standards.",
  },
  {
    q: "What makes your AI-powered SEO different from traditional SEO agencies?",
    a: "Traditional agencies manually guess keywords based on outdated spreadsheets. We build software-driven semantic vector search pipelines that forecast search intent shifts and automate technical schema injection directly into your codebase.",
  },
  {
    q: "Do we own the source code and intellectual property?",
    a: "Yes, 100%. All repositories, cloud credentials, documentation, and IP belong entirely to you from the moment code is committed.",
  },
  {
    q: "How quickly can we kick off a new engagement?",
    a: "Following an initial 30-minute discovery call and architectural review, we can typically onboard dedicated senior engineers and kick off Sprint 1 within 5 to 7 business days.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Schema.org Service Collection Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Full-Stack Software Engineering and Digital Growth",
            provider: {
              "@type": "Organization",
              name: "ZenoxDev",
              url: "https://zenoxdev.com",
            },
            areaServed: "Worldwide",
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "ZenoxDev Services",
              itemListElement: fullServices.map((s, i) => ({
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: s.title,
                  description: s.description,
                },
              })),
            },
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
              <li className="text-primary-600">Services</li>
            </ol>
          </nav>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-100/70 border border-primary-200 text-primary-800 text-xs font-semibold mb-6">
            <Sparkles className="w-3.5 h-3.5 text-primary-600" />
            <span>End-to-End Technical Capabilities</span>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-ink-900 tracking-tight leading-tight max-w-4xl mx-auto">
            Full-Spectrum Engineering &{" "}
            <span className="text-gradient">AI Growth Services</span>
          </h1>

          <p className="mt-6 text-base sm:text-lg lg:text-xl text-ink-600 max-w-3xl mx-auto leading-relaxed">
            From reactive web and native mobile apps to AI-powered organic SEO engines and automated cloud infrastructure — we build every layer of your digital product for exponential scale.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold text-sm shadow-lg shadow-primary-600/30 hover:shadow-xl hover:-translate-y-0.5 transition-all"
            >
              <span>Request Free Tech Audit</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white border border-slate-200 text-ink-800 font-semibold text-sm hover:border-primary-300 hover:bg-primary-50/50 shadow-xs transition-all"
            >
              <span>Explore Real Deliverables</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Detailed Services Deep Dive */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {fullServices.map((service, index) => {
              const isEven = index % 2 === 1;

              return (
                <div
                  key={service.id}
                  id={service.id}
                  className={`p-8 sm:p-12 rounded-3xl bg-slate-50/70 border border-slate-200/90 shadow-xs hover:shadow-xl transition-all duration-300 grid lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                    isEven ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Left Column: Details */}
                  <div className={`lg:col-span-7 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary-600 to-accent-cyan text-white flex items-center justify-center shadow-md shadow-primary-600/25">
                        <service.icon className="w-6 h-6" />
                      </div>
                      <span className="px-3 py-1 rounded-full bg-primary-100 text-primary-800 text-xs font-bold border border-primary-200">
                        {service.badge}
                      </span>
                    </div>

                    <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-ink-900 mb-2">
                      {service.title}
                    </h2>
                    <p className="text-sm font-semibold text-primary-700 mb-4">
                      {service.subtitle}
                    </p>
                    <p className="text-base text-ink-600 leading-relaxed mb-6">
                      {service.description}
                    </p>

                    <h3 className="font-heading text-sm font-bold text-ink-900 uppercase tracking-wider mb-3">
                      Key Deliverables & Specifications:
                    </h3>
                    <ul className="space-y-2.5 mb-6">
                      {service.deliverables.map((d) => (
                        <li key={d} className="flex items-start gap-2.5 text-sm text-ink-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-200">
                      {service.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-xs font-medium text-slate-700 shadow-2xs"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: ROI & Highlights Card */}
                  <div className={`lg:col-span-5 flex flex-col gap-6 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                    <div className="relative w-full h-56 sm:h-64 rounded-2xl overflow-hidden shadow-sm border border-slate-200">
                      <Image src={service.image} alt={service.title} fill className="object-cover" />
                    </div>
                    <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between flex-grow">
                      <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-semibold mb-6">
                          <TrendingUp className="w-4 h-4" />
                          <span>Verified Impact Benchmark</span>
                        </div>

                        <div className="font-heading text-2xl sm:text-3xl font-bold text-ink-900 mb-4">
                          {service.impactMetric}
                        </div>

                        <p className="text-sm text-ink-500 leading-relaxed mb-6">
                          Every project includes automated telemetry, performance regression test suites, and direct SLAs with senior engineering leads.
                        </p>
                      </div>

                      <div className="pt-6 border-t border-slate-100 flex flex-col gap-3">
                        <Link
                          href="/contact"
                          className="flex items-center justify-center gap-2 w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-semibold text-sm shadow-md transition-all text-center"
                        >
                          <span>Inquire About {service.title.split(" ")[0]}</span>
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                        <Link
                          href="/portfolio"
                          className="text-xs text-center font-semibold text-primary-600 hover:text-primary-700 transition-colors"
                        >
                          See related case studies →
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How We Work / Process Methodology */}
      <section className="py-20 lg:py-28 bg-slate-50/70 border-y border-slate-200/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-primary-600 bg-primary-50 px-3 py-1 rounded-full border border-primary-100">
              The Engineering Lifecycle
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-ink-900 mt-3">
              How We Turn Ideas Into Resilient Software
            </h2>
            <p className="mt-4 text-ink-500 text-base sm:text-lg">
              A transparent, sprint-based delivery cycle that keeps you in complete control from day one.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {processSteps.map((step) => (
              <div
                key={step.step}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <span className="font-heading text-3xl font-extrabold text-primary-600 block mb-3">
                    {step.step}
                  </span>
                  <h3 className="font-heading text-base font-bold text-ink-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-ink-500 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-primary-600 bg-primary-50 px-3 py-1 rounded-full border border-primary-100">
              Got Questions?
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-ink-900 mt-3">
              Frequently Asked Questions About Our Services
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-xs"
              >
                <h3 className="font-heading text-base sm:text-lg font-bold text-ink-900 mb-2 flex items-start gap-2.5">
                  <HelpCircle className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                  <span>{faq.q}</span>
                </h3>
                <p className="text-sm text-ink-600 leading-relaxed pl-7.5">
                  {faq.a}
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
