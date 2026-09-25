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
} from "lucide-react";

export const servicesData = [
  {
    id: "web",
    icon: Globe,
    title: "Web Development",
    shortDesc: "Scalable, high-performance web apps built with React, Next.js, Node.js, and modern full-stack architecture.",
    features: ["Server Components & SSR", "Microservices & REST/GraphQL", "Sub-second LCP & Core Web Vitals"],
    badge: null,
  },
  {
    id: "mobile",
    icon: Smartphone,
    title: "Mobile App Development",
    shortDesc: "Cross-platform iOS & Android apps powered by React Native with native 60fps performance and offline-first capabilities.",
    features: ["Single Codebase for iOS & Android", "Native Device API Integration", "Push Notifications & App Store Polish"],
    badge: null,
  },
  {
    id: "seo",
    icon: Search,
    title: "SEO Optimization",
    shortDesc: "Data-driven on-page, off-page, and technical SEO architecture engineered to boost rankings, traffic, and organic conversions.",
    features: ["Technical Crawlability Audits", "Core Web Vitals Optimization", "Schema.org Rich Snippets"],
    badge: null,
  },
  {
    id: "ai-seo",
    icon: BrainCircuit,
    title: "AI-Powered SEO",
    shortDesc: "Predictive machine learning models that decode search intent, anticipate algorithm changes, and automatically optimize content clusters.",
    features: ["Predictive Ranking Models", "Automated Entity Linking", "Content Decay Forecasting"],
    badge: "AI-Powered",
    badgeColor: "amber",
  },
  {
    id: "automation",
    icon: Workflow,
    title: "Business Automation",
    shortDesc: "Eliminate repetitive manual tasks with intelligent workflows, CRM syncs, and custom API-driven RPA process automation.",
    features: ["Zapier / Make / Custom Webhooks", "Automated Data Pipelines", "Slack & Email Bot Triggers"],
    badge: "Automated",
    badgeColor: "cyan",
  },
  {
    id: "devops",
    icon: GitBranch,
    title: "CI/CD & DevOps",
    shortDesc: "Automated testing, continuous deployment pipelines, and cloud containerization for zero-downtime, rapid releases.",
    features: ["GitHub Actions / GitLab CI", "Docker & Kubernetes Clusters", "AWS & GCP Infrastructure as Code"],
    badge: "Automated",
    badgeColor: "cyan",
  },
];

const badgeStyles: Record<string, string> = {
  amber: "bg-accent-amber/15 text-accent-amber border-accent-amber/30",
  cyan: "bg-accent-cyan/15 text-cyan-600 border-accent-cyan/30",
};

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-white relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-50 border border-primary-200/50 text-primary-700 text-xs font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>End-to-End Capabilities</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink-900 tracking-tight">
            Full-Stack Solutions for{" "}
            <span className="text-gradient">Every Stage of Growth</span>
          </h2>
          <p className="mt-4 text-ink-500 text-base sm:text-lg">
            From modern web apps to automated DevOps and AI search rankings, we cover the entire digital product lifecycle.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {servicesData.map((service) => (
            <div
              key={service.title}
              className="group relative p-8 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-xl hover:shadow-primary-900/8 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {service.badge && (
                  <span
                    className={`absolute top-6 right-6 inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold border ${badgeStyles[service.badgeColor]}`}
                  >
                    <Zap className="w-2.5 h-2.5" fill="currentColor" />
                    {service.badge}
                  </span>
                )}
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-50 to-primary-100 flex items-center justify-center mb-6 group-hover:from-primary-600 group-hover:to-accent-cyan transition-all duration-300 shadow-xs">
                  <service.icon className="w-7 h-7 text-primary-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-heading text-xl font-bold text-ink-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-ink-500 leading-relaxed mb-5">
                  {service.shortDesc}
                </p>
              </div>

              <div>
                <ul className="space-y-1.5 mb-6 border-t border-slate-100 pt-4">
                  {service.features.map((feature) => (
                    <li key={feature} className="text-xs text-ink-600 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/services"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary-600 group-hover:text-primary-700 group-hover:translate-x-1 transition-all"
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Services CTA Button */}
        <div className="mt-14 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-slate-900 hover:bg-ink-950 text-white font-semibold text-sm shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
          >
            <span>Explore All Detailed Services & Methodologies</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}