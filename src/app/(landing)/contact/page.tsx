import type { Metadata } from "next";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  ShieldCheck,
  Sparkles,
  MessageSquare,
  CheckCircle2,
  Calendar,
  Globe,
  HelpCircle,
} from "lucide-react";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Schedule Technical Consultation & Free Audit",
  description:
    "Get in touch with ZenoxDev senior software architects. Request a free full-stack tech and SEO audit or schedule a 30-minute discovery call.",
  alternates: {
    canonical: "https://zenoxdev.com/contact",
  },
  openGraph: {
    title: "Contact ZenoxDev | Free Code & SEO Audit",
    description:
      "Connect with our senior engineering leads. Fast 2-hour response, 100% confidential, and strict NDA guarantees.",
    url: "https://zenoxdev.com/contact",
  },
};

const contactFaqs = [
  {
    q: "What happens after I submit this inquiry?",
    a: "A Senior Solutions Architect will analyze your notes and reply within 2 business hours. We will either send initial architectural recommendations or invite you to a short, no-pressure discovery call.",
  },
  {
    q: "Will you sign a non-disclosure agreement (NDA)?",
    a: "Absolutely. We are happy to execute your company's NDA or provide our standard mutual NDA prior to discussing proprietary architecture or trade secrets.",
  },
  {
    q: "What is included in the Free Tech & SEO Audit?",
    a: "We perform a Core Web Vitals crawl, inspect client-side bundles for performance bottlenecks, check technical indexing and schema markup, and identify automation quick-wins.",
  },
  {
    q: "Do you work with early-stage startups as well as enterprises?",
    a: "Yes. We offer flexible engagement scopes ranging from seed-stage MVP design and rapid prototyping to multi-team enterprise cloud migrations.",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Schema.org ContactPage Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contact ZenoxDev",
            description:
              "Contact ZenoxDev for custom full-stack web and mobile application engineering, AI SEO audits, and DevOps consultation.",
            url: "https://zenoxdev.com/contact",
            mainEntity: {
              "@type": "Organization",
              name: "ZenoxDev",
              email: "contact@zenoxdev.com",
              telephone: "+1-555-123-4567",
              address: {
                "@type": "PostalAddress",
                addressLocality: "San Francisco",
                addressRegion: "CA",
                addressCountry: "US",
              },
            },
          }),
        }}
      />

      {/* Page Hero Header */}
      <section className="relative pt-36 pb-16 lg:pt-44 lg:pb-24 bg-gradient-to-b from-primary-50/70 via-white to-white hero-grid-bg overflow-hidden">
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
              <li className="text-primary-600">Contact</li>
            </ol>
          </nav>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-100/70 border border-primary-200 text-primary-800 text-xs font-semibold mb-6">
            <Sparkles className="w-3.5 h-3.5 text-primary-600" />
            <span>Direct Access to Senior Architects</span>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-ink-900 tracking-tight leading-tight max-w-4xl mx-auto">
            Let’s Build Something <span className="text-gradient">Exceptional Together</span>
          </h1>

          <p className="mt-6 text-base sm:text-lg lg:text-xl text-ink-600 max-w-2xl mx-auto leading-relaxed">
            Have a project in mind, an existing system to refactor, or want to dominate organic search with AI? Reach out today for direct technical guidance.
          </p>
        </div>
      </section>

      {/* Main Interactive Contact Section */}
      <section className="py-12 lg:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Direct Info & Booking Card */}
            <div className="lg:col-span-5 space-y-6">
              {/* Direct Channels Card */}
              <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-xs">
                <h2 className="font-heading text-xl font-bold text-ink-900 mb-6">
                  Direct Communications
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-primary-100 text-primary-600 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        Email Inquiries
                      </p>
                      <a
                        href="mailto:contact@zenoxdev.com"
                        className="font-semibold text-ink-900 hover:text-primary-600 transition-colors text-base block mt-0.5"
                      >
                        contact@zenoxdev.com
                      </a>
                      <span className="text-xs text-slate-500">
                        Average response in under 2 hours
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-primary-100 text-primary-600 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        Telephone & WhatsApp
                      </p>
                      <a
                        href="tel:+15551234567"
                        className="font-semibold text-ink-900 hover:text-primary-600 transition-colors text-base block mt-0.5"
                      >
                        +1 (555) 123-4567
                      </a>
                      <span className="text-xs text-slate-500">
                        Mon – Fri: 8:00 AM – 7:00 PM EST
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-primary-100 text-primary-600 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        Global Headquarters
                      </p>
                      <p className="font-semibold text-ink-900 text-base mt-0.5">
                        San Francisco, California
                      </p>
                      <span className="text-xs text-slate-500">
                        Distributed senior engineering squads worldwide
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Consultation Scheduling Card */}
              <div className="p-8 rounded-3xl bg-gradient-to-br from-ink-900 to-slate-900 text-white shadow-xl border border-slate-800">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-900/60 border border-primary-700 text-primary-300 text-xs font-semibold mb-4">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Immediate Booking</span>
                </div>
                <h3 className="font-heading text-2xl font-bold mb-3">
                  Prefer a Face-to-Face Screen Share?
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  Book a direct 30-minute discovery call with our Chief Technology Officer to discuss your tech stack, timeline, and budget.
                </p>
                <a
                  href="mailto:contact@zenoxdev.com?subject=Schedule%2030-Minute%20Discovery%20Call"
                  className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-primary-600 to-accent-cyan hover:opacity-95 text-white font-bold text-sm shadow-md transition-all text-center"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Schedule 30-Min Discovery Call</span>
                </a>
              </div>

              {/* Security & Confidentiality Badge */}
              <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200/80 flex items-start gap-3">
                <ShieldCheck className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-heading font-bold text-sm text-emerald-950">
                    100% Confidentiality & Mutual NDA
                  </h4>
                  <p className="text-xs text-emerald-800 leading-relaxed mt-1">
                    Your ideas, blueprints, and data are treated with strict institutional confidentiality. We execute NDAs before deep technical dives.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-50/70 border-t border-slate-200/80">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-primary-600 bg-primary-50 px-3 py-1 rounded-full border border-primary-100">
              Clear Expectations
            </span>
            <h2 className="font-heading text-3xl font-extrabold text-ink-900 mt-3">
              Frequently Asked Inquiries
            </h2>
          </div>

          <div className="space-y-5">
            {contactFaqs.map((faq) => (
              <div
                key={faq.q}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs"
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
    </>
  );
}
