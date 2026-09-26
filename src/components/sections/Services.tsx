import Link from "next/link";
import Image from "next/image";
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
    badge: "Most Popular",
    badgeColor: "amber",
    image: "/assets/fullstack_dev.jpg",
  },
  {
    id: "mobile",
    icon: Smartphone,
    title: "Mobile App Development",
    shortDesc: "Cross-platform iOS & Android apps powered by React Native with native 60fps performance and offline-first capabilities.",
    features: ["Single Codebase for iOS & Android", "Native Device API Integration", "Push Notifications & App Store Polish"],
    badge: "iOS & Android",
    badgeColor: "cyan",
    image: "/assets/mobile_app_dev.jpg",
  },
  {
    id: "seo",
    icon: Search,
    title: "SEO Optimization",
    shortDesc: "Data-driven on-page, off-page, and technical SEO architecture engineered to boost rankings, traffic, and organic conversions.",
    features: ["Technical Crawlability Audits", "Core Web Vitals Optimization", "Schema.org Rich Snippets"],
    badge: "High ROI",
    badgeColor: "amber",
    image: "/assets/seo_growth.jpg",
  },
  {
    id: "ai-seo",
    icon: BrainCircuit,
    title: "AI-Powered SEO",
    shortDesc: "Predictive machine learning models that decode search intent, anticipate algorithm changes, and automatically optimize content clusters.",
    features: ["Predictive Ranking Models", "Automated Entity Linking", "Content Decay Forecasting"],
    badge: "AI-Powered",
    badgeColor: "amber",
    image: "/assets/ai_concept.jpg",
  },
  {
    id: "automation",
    icon: Workflow,
    title: "Business Automation",
    shortDesc: "Eliminate repetitive manual tasks with intelligent workflows, CRM syncs, and custom API-driven RPA process automation.",
    features: ["Zapier / Make / Custom Webhooks", "Automated Data Pipelines", "Slack & Email Bot Triggers"],
    badge: "Automated",
    badgeColor: "cyan",
    image: "/assets/api_connections.jpg",
  },
  {
    id: "devops",
    icon: GitBranch,
    title: "CI/CD & DevOps",
    shortDesc: "Automated testing, continuous deployment pipelines, and cloud containerization for zero-downtime, rapid releases.",
    features: ["GitHub Actions / GitLab CI", "Docker & Kubernetes Clusters", "AWS & GCP Infrastructure as Code"],
    badge: "Cloud Scale",
    badgeColor: "cyan",
    image: "/assets/devops_cicd.jpg",
  },
];

const badgeStyles: Record<string, string> = {
  amber: "bg-amber-500/90 text-white border-amber-400",
  cyan: "bg-cyan-500/90 text-white border-cyan-400",
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
              className="group relative rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-2xl hover:shadow-primary-900/10 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              <div>
                {/* Visual Thumbnail */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-ink-950/25 to-transparent" />
                  
                  {service.badge && (
                    <span
                      className={`absolute top-3.5 right-3.5 inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold border backdrop-blur-md shadow-sm ${
                        service.badgeColor ? badgeStyles[service.badgeColor] : "bg-white/90 text-primary-700 border-white/60"
                      }`}
                    >
                      <Zap className="w-2.5 h-2.5" fill="currentColor" />
                      {service.badge}
                    </span>
                  )}

                  <div className="absolute bottom-3 left-4 flex items-center gap-2.5 text-white">
                    <div className="w-9 h-9 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 shadow-xs">
                      <service.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-xs font-semibold tracking-wide text-slate-100">
                      Engineering Unit
                    </span>
                  </div>
                </div>

                <div className="p-6 sm:p-7">
                  <h3 className="font-heading text-xl font-bold text-ink-900 mb-2.5 group-hover:text-primary-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-ink-500 leading-relaxed mb-5">
                    {service.shortDesc}
                  </p>

                  <ul className="space-y-2 mb-6 border-t border-slate-100 pt-4">
                    {service.features.map((feature) => (
                      <li key={feature} className="text-xs text-ink-600 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="px-6 sm:px-7 pb-6 sm:pb-7 pt-0">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary-600 group-hover:text-primary-700 group-hover:translate-x-1 transition-all"
                >
                  <span>Explore service details & specs</span>
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