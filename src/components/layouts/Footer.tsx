"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  CheckCircle,
  Globe,
  Sparkles,
  ShieldCheck,
  Code,
  Briefcase,
  MessageCircle,
} from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Technologies", href: "/technologies" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const serviceLinks = [
  { label: "Custom Web Applications", href: "/services#web" },
  { label: "Mobile App Development", href: "/services#mobile" },
  { label: "AI-Driven SEO & Content", href: "/services#seo" },
  { label: "Workflow & RPA Automation", href: "/services#automation" },
  { label: "Cloud DevOps & CI/CD", href: "/services#devops" },
  { label: "UI/UX & Product Design", href: "/services#design" },
];

const techBadges = [
  { label: "Next.js", color: "#ffffff" },
  { label: "React", color: "#61DAFB" },
  { label: "TypeScript", color: "#3178C6" },
  { label: "React Native", color: "#61DAFB" },
  { label: "Node.js", color: "#5FA04E" },
  { label: "PostgreSQL", color: "#336791" },
  { label: "MongoDB", color: "#47A248" },
  { label: "AWS", color: "#FF9900" },
  { label: "Docker", color: "#2496ED" },
];

const socials = [
  { icon: Code, href: "https://github.com", label: "GitHub" },
  { icon: Briefcase, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: MessageCircle, href: "https://twitter.com", label: "Community" },
  { icon: Globe, href: "https://zenoxdev.com", label: "ZenoxDev Web" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-[#fffdfa] via-[#fff7ed]/55 to-[#ffedd5]/35 text-slate-600 border-t border-orange-200/80">
      {/* Top glowing orange brand accent line */}
      <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#ff6a00] to-transparent opacity-85" />

      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

      {/* Newsletter / Pre-footer section */}
      <div className="border-b border-orange-200/60 py-8 sm:py-10 relative z-10">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12">
          <div className="rounded-2xl bg-white/95 backdrop-blur-md p-6 sm:p-8 lg:p-9 border border-orange-200/70 shadow-xl shadow-orange-950/5 flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8">
            <div className="max-w-xl text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200/80 text-primary-800 text-xs font-semibold mb-2.5">
                <Sparkles className="w-3.5 h-3.5 text-primary-600" />
                <span>Stay Ahead in Tech</span>
              </div>
              <h3 className="font-heading text-xl sm:text-2xl lg:text-3xl font-bold text-ink-900 tracking-tight">
                Subscribe to Engineering & Growth Insights
              </h3>
              <p className="mt-1.5 text-xs sm:text-sm text-slate-500">
                Monthly teardowns of scalable cloud architectures, AI automation playbooks, and modern SEO algorithms.
              </p>
            </div>

            <div className="w-full lg:w-auto min-w-[300px] sm:min-w-[360px]">
              {subscribed ? (
                <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 text-sm">
                  <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  <span>Thank you! You're subscribed to ZenoxDev insights.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your business email"
                    className="flex-1 px-4 py-2.5 sm:py-3 rounded-xl bg-slate-50/80 border border-orange-200/80 text-ink-900 placeholder-slate-400 text-sm focus:outline-none focus:border-primary-500 transition-colors"
                  />
                  <button
                    type="submit"
                    className="px-5 py-2.5 sm:py-3 rounded-xl bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-500 hover:to-primary-600 text-white text-sm font-semibold shadow-md shadow-primary-600/30 transition-all cursor-pointer flex items-center gap-1.5"
                  >
                    <span>Join</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12 py-10 sm:py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-8">
          {/* Company branding */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-3.5 group focus:outline-none" aria-label="ZenoxDev Home">
              <div className="relative transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/icon-isnet.png"
                  alt="ZenoxDev Logo"
                  width={160}
                  height={107}
                  className="h-12 sm:h-14 w-auto object-contain -ml-1 filter drop-shadow-[0_2px_14px_rgba(255,106,0,0.35)]"
                />
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-slate-500 mb-5 max-w-sm">
              ZenoxDev is a premier software engineering and digital growth agency. We architect high-performance web applications, native mobile experiences, AI-driven organic SEO, and automated CI/CD infrastructures.
            </p>

            {/* Social links */}
            <div className="flex gap-2.5 mb-5">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-xl bg-white border border-orange-200/70 flex items-center justify-center text-slate-500 hover:text-white hover:bg-primary-600 hover:border-primary-600 transition-all duration-200 shadow-xs"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>

            <div className="inline-flex items-center gap-2 text-xs text-slate-600 py-1.5 px-3 rounded-lg bg-white border border-orange-200/70 shadow-xs">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>SOC2 Compliant Practices & NDA Protected</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-ink-900 uppercase tracking-wider mb-3.5">
              Navigation
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-600 hover:text-primary-600 transition-colors flex items-center gap-1.5 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -ml-3 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-ink-900 uppercase tracking-wider mb-3.5">
              Our Capabilities
            </h4>
            <ul className="space-y-2">
              {serviceLinks.map((service) => (
                <li key={service.label}>
                  <Link
                    href={service.href}
                    className="text-sm text-slate-600 hover:text-primary-600 transition-colors flex items-center gap-1.5 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -ml-3 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    <span>{service.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-ink-900 uppercase tracking-wider mb-3.5">
              Headquarters & Contact
            </h4>
            <ul className="space-y-2.5 mb-5">
              <li>
                <a
                  href="mailto:contact@zenoxdev.com"
                  className="flex items-start gap-2.5 text-sm text-slate-600 hover:text-primary-600 transition-colors"
                >
                  <Mail className="w-4 h-4 text-primary-600 flex-shrink-0 mt-0.5" />
                  <span>contact@zenoxdev.com</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+15551234567"
                  className="flex items-start gap-2.5 text-sm text-slate-600 hover:text-primary-600 transition-colors"
                >
                  <Phone className="w-4 h-4 text-primary-600 flex-shrink-0 mt-0.5" />
                  <span>+1 (555) 123-4567</span>
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-slate-600">
                <MapPin className="w-4 h-4 text-primary-600 flex-shrink-0 mt-0.5" />
                <span>San Francisco, CA & Remote Global Hub</span>
              </li>
            </ul>

            <h5 className="font-heading text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
              Core Tech Stack
            </h5>
            <div className="flex flex-wrap gap-1.5">
              {techBadges.map((badge) => (
                <span
                  key={badge.label}
                  className="px-2 py-0.5 rounded-md bg-white border border-orange-200/70 text-[11px] font-medium text-slate-600 shadow-xs"
                >
                  {badge.label}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom copyright and legal */}
        <div className="mt-10 pt-6 border-t border-orange-200/60 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} ZenoxDev Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/about" className="hover:text-ink-900 transition-colors">
              Company
            </Link>
            <Link href="/services" className="hover:text-ink-900 transition-colors">
              Services
            </Link>
            <Link href="/portfolio" className="hover:text-ink-900 transition-colors">
              Case Studies
            </Link>
            <Link href="/contact" className="hover:text-ink-900 transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}