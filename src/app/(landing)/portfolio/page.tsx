import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  Sparkles,
  ArrowRight,
  TrendingUp,
  Layers,
  ShieldCheck,
  CheckCircle2,
  Award,
} from "lucide-react";
import PortfolioClient from "./PortfolioClient";
import Testimonials from "@/components/sections/Testimonials";
import CTABanner from "@/components/sections/CTABanner";
import { allProjects } from "@/components/sections/Portfolio";

export const metadata: Metadata = {
  title: "Case Studies & Work Portfolio | ZenoxDev Engineering",
  description:
    "Explore production web applications, cross-platform mobile apps, and AI growth solutions engineered by ZenoxDev. Verified client metrics, architecture blueprints, and ROI results.",
  alternates: {
    canonical: "https://zenoxdev.com/portfolio",
  },
  openGraph: {
    title: "ZenoxDev Portfolio | Production Case Studies & Measurable Impact",
    description:
      "Explore real-world software products, mobile applications, and AI SEO engines engineered by ZenoxDev.",
    url: "https://zenoxdev.com/portfolio",
  },
};

const stats = [
  { value: "120+", label: "Products Engineered" },
  { value: "99.98%", label: "Average Production Uptime" },
  { value: "+240%", label: "Average Organic Traffic Lift" },
  { value: "$40M+", label: "Client Revenue Generated" },
];

export default function PortfolioPage() {
  return (
    <>
      {/* Schema.org CollectionPage Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "ZenoxDev Portfolio and Client Case Studies",
            description:
              "Showcase of production-grade web apps, mobile apps, and AI growth engines developed by ZenoxDev.",
            url: "https://zenoxdev.com/portfolio",
            hasPart: allProjects.map((p) => ({
              "@type": "CreativeWork",
              name: p.title,
              description: p.description,
              creator: {
                "@type": "Organization",
                name: "ZenoxDev",
              },
            })),
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
              <li className="text-primary-600">Portfolio</li>
            </ol>
          </nav>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-100/70 border border-primary-200 text-primary-800 text-xs font-semibold mb-6">
            <ArrowUpRight className="w-3.5 h-3.5 text-primary-600" />
            <span>Proven Engineering Milestones</span>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-ink-900 tracking-tight leading-tight max-w-4xl mx-auto">
            Engineering Work That Drives{" "}
            <span className="text-gradient">Measurable Scale</span>
          </h1>

          <p className="mt-6 text-base sm:text-lg lg:text-xl text-ink-600 max-w-3xl mx-auto leading-relaxed">
            We don't build toy projects or bloated templates. Every system in our portfolio was architected for high concurrency, flawless security, and exponential business growth.
          </p>

          {/* Quick Metrics Bar */}
          <div className="mt-12 pt-8 border-t border-slate-200/80 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-heading text-3xl sm:text-4xl font-extrabold text-ink-900">
                  {s.value}
                </p>
                <p className="text-xs sm:text-sm text-ink-500 font-medium mt-1">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Interactive Portfolio Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <PortfolioClient />
        </div>
      </section>

      {/* Client Testimonials Section */}
      <Testimonials />

      {/* CTA Banner */}
      <CTABanner />
    </>
  );
}
