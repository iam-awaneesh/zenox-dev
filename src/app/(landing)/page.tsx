import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";

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

      {/* Main Hero Component */}
      <Hero />

      {/* Trust & Social Proof Marquee / Logo Bar */}
      <section className="py-10 border-y border-slate-200/80 bg-slate-50/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-slate-400 mb-6">
            Trusted by Engineering & Growth Teams at High-Velocity Companies
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-75">
            {trustedPartners.map((partner) => (
              <div
                key={partner}
                className="font-heading font-extrabold text-base sm:text-lg tracking-tight text-slate-500 hover:text-primary-600 transition-colors cursor-default"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}