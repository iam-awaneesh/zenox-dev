import Link from "next/link";
import { ArrowUpRight, ArrowRight, ExternalLink, TrendingUp, Layers } from "lucide-react";

export interface ProjectItem {
  id: string;
  image: string;
  title: string;
  description: string;
  tags: string[];
  category: "Web App" | "Mobile App" | "E-Commerce" | "AI & Automation" | "DevOps & Cloud";
  metric: string;
  metricLabel: string;
  client: string;
}

export const allProjects: ProjectItem[] = [
  {
    id: "fintech-analytics",
    image: "https://images.pexels.com/photos/12969403/pexels-photo-12969403.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    title: "FinTech Real-Time Analytics Dashboard",
    description: "Enterprise algorithmic trading and wealth management platform with predictive AI market insights, WebSocket pipelines, and automated reporting.",
    tags: ["React 19", "Next.js", "Node.js", "MongoDB", "WebSockets"],
    category: "Web App",
    metric: "12ms",
    metricLabel: "Query Latency",
    client: "Apex Wealth Global",
  },
  {
    id: "healthsync-mobile",
    image: "https://images.pexels.com/photos/270283/pexels-photo-270283.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    title: "HealthSync Telehealth & Wearables App",
    description: "Cross-platform mobile application interfacing with Apple Health and Google Fit for real-time telemetry, automated triage, and doctor video chats.",
    tags: ["React Native", "Express", "PostgreSQL", "WebRTC"],
    category: "Mobile App",
    metric: "4.9 ★",
    metricLabel: "App Store Rating",
    client: "MedPulse Health",
  },
  {
    id: "shopsphere-ecommerce",
    image: "https://images.pexels.com/photos/16675632/pexels-photo-16675632.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    title: "ShopSphere Headless Commerce Platform",
    description: "Multi-tenant e-commerce system with microsecond vector search, dynamic checkout personalization, and CI/CD zero-downtime releases.",
    tags: ["Next.js", "Tailwind CSS", "Stripe API", "CI/CD"],
    category: "E-Commerce",
    metric: "+185%",
    metricLabel: "Conversion Lift",
    client: "SphereRetail Group",
  },
  {
    id: "ai-content-engine",
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    title: "Cognitive SEO & Content Intelligence Engine",
    description: "Proprietary AI platform that automatically parses SERP intent, generates structured content blueprints, and monitors ranking velocity.",
    tags: ["Python", "FastAPI", "OpenAI GPT-4", "Vector DB"],
    category: "AI & Automation",
    metric: "3.4x",
    metricLabel: "Organic Traffic Growth",
    client: "RankPulse Tech",
  },
  {
    id: "logistics-dispatch",
    image: "https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    title: "FleetStream Logistics & Dispatch System",
    description: "Automated route optimization and driver management platform saving 22,000+ driver hours annually with algorithmic dispatching.",
    tags: ["React", "Go", "Docker", "AWS IoT"],
    category: "DevOps & Cloud",
    metric: "24%",
    metricLabel: "Fuel Cost Reduction",
    client: "TransLogix Corp",
  },
  {
    id: "saas-crm-suite",
    image: "https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    title: "NexusCRM Multi-Tenant Sales Platform",
    description: "Cloud-native CRM with automated lead scoring, AI draft generation, and integrations with Salesforce, HubSpot, and Slack.",
    tags: ["Next.js", "Node.js", "Redis", "Kubernetes"],
    category: "Web App",
    metric: "450k+",
    metricLabel: "Daily Active Users",
    client: "Nexus Enterprise",
  },
];

export default function Portfolio() {
  // Show first 3 for home page preview
  const featured = allProjects.slice(0, 3);

  return (
    <section id="portfolio" className="py-20 lg:py-28 bg-slate-50/70 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-primary-200/60 text-primary-700 text-xs font-semibold mb-4 shadow-xs">
            <ArrowUpRight className="w-3.5 h-3.5" />
            <span>Demonstrated Impact</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink-900 tracking-tight">
            Engineered Projects That <span className="text-gradient">Deliver Results</span>
          </h2>
          <p className="mt-4 text-ink-500 text-base sm:text-lg">
            A glimpse into production-grade systems we have architected for high-growth startups and global brands.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((project) => (
            <article
              key={project.id}
              className="group rounded-2xl overflow-hidden bg-white shadow-xs hover:shadow-2xl hover:shadow-primary-900/12 hover:-translate-y-2 transition-all duration-300 border border-slate-200/80 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-56 overflow-hidden bg-slate-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/75 via-ink-950/20 to-transparent" />
                  
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[11px] font-bold text-primary-700 shadow-xs">
                    {project.category}
                  </span>

                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white">
                    <span className="text-xs font-medium text-slate-200">{project.client}</span>
                    <div className="flex items-center gap-1.5 bg-emerald-500/90 backdrop-blur px-2.5 py-0.5 rounded-md text-xs font-bold text-white shadow-xs">
                      <TrendingUp className="w-3 h-3" />
                      <span>{project.metric} {project.metricLabel}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-heading text-lg font-bold text-ink-900 mb-2.5 group-hover:text-primary-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-ink-500 leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-slate-100 mt-2">
                <div className="flex flex-wrap gap-1.5 pt-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Case Studies CTA */}
        <div className="mt-14 text-center">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-semibold text-sm shadow-lg shadow-primary-600/25 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
          >
            <span>Browse Full Case Studies & Live Proofs</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}