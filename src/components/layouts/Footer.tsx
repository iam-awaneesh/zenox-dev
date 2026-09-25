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
    <footer className="bg-ink-950 text-slate-400 relative overflow-hidden border-t border-slate-800/80">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-900/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-cyan/10 rounded-full blur-3xl pointer-events-none" />

      {/* Newsletter / Pre-footer section */}
      <div className="border-b border-slate-800/80 py-12 relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-gradient-to-r from-ink-900 via-slate-900 to-ink-900 p-8 lg:p-10 border border-slate-800/90 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-xl text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-950 border border-primary-800 text-primary-400 text-xs font-semibold mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                Stay Ahead in Tech
              </div>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Subscribe to Engineering & Growth Insights
              </h3>
              <p className="mt-2 text-sm text-slate-400">
                Monthly teardowns of scalable cloud architectures, AI automation playbooks, and modern SEO algorithms.
              </p>
            </div>

            <div className="w-full lg:w-auto min-w-[320px] sm:min-w-[380px]">
              {subscribed ? (
                <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-emerald-950/80 border border-emerald-800 text-emerald-300 text-sm">
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
                    className="flex-1 px-4 py-3 rounded-xl bg-slate-950 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-primary-500 transition-colors"
                  />
                  <button
                    type="submit"
                    className="px-5 py-3 rounded-xl bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-500 hover:to-primary-600 text-white text-sm font-semibold shadow-md shadow-primary-600/30 transition-all cursor-pointer flex items-center gap-1.5"
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
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Company branding */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4 group focus:outline-none" aria-label="ZenoxDev Home">
              <div className="relative transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/icon-isnet.png"
                  alt="ZenoxDev Logo"
                  width={160}
                  height={107}
                  className="h-14 sm:h-16 w-auto object-contain -ml-1 filter drop-shadow-[0_2px_14px_rgba(255,106,0,0.35)]"
                />
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400 mb-6 max-w-sm">
              ZenoxDev is a premier software engineering and digital growth agency. We architect high-performance web applications, native mobile experiences, AI-driven organic SEO, and automated CI/CD infrastructures.
            </p>

            {/* Social links */}
            <div className="flex gap-2.5 mb-6">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-primary-600 hover:border-primary-500 transition-all duration-200"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>

            <div className="inline-flex items-center gap-2 text-xs text-slate-400 py-1.5 px-3 rounded-lg bg-slate-900/60 border border-slate-800">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>SOC2 Compliant Practices & NDA Protected</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-primary-400 transition-colors flex items-center gap-1.5 group"
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
            <h4 className="font-heading text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Our Capabilities
            </h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((service) => (
                <li key={service.label}>
                  <Link
                    href={service.href}
                    className="text-sm text-slate-400 hover:text-primary-400 transition-colors flex items-center gap-1.5 group"
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
            <h4 className="font-heading text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Headquarters & Contact
            </h4>
            <ul className="space-y-3 mb-6">
              <li>
                <a
                  href="mailto:contact@zenoxdev.com"
                  className="flex items-start gap-2.5 text-sm text-slate-400 hover:text-primary-400 transition-colors"
                >
                  <Mail className="w-4 h-4 text-primary-400 flex-shrink-0 mt-0.5" />
                  <span>contact@zenoxdev.com</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+15551234567"
                  className="flex items-start gap-2.5 text-sm text-slate-400 hover:text-primary-400 transition-colors"
                >
                  <Phone className="w-4 h-4 text-primary-400 flex-shrink-0 mt-0.5" />
                  <span>+1 (555) 123-4567</span>
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-slate-400">
                <MapPin className="w-4 h-4 text-primary-400 flex-shrink-0 mt-0.5" />
                <span>San Francisco, CA & Remote Global Hub</span>
              </li>
            </ul>

            <h5 className="font-heading text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2.5">
              Core Tech Stack
            </h5>
            <div className="flex flex-wrap gap-1.5">
              {techBadges.map((badge) => (
                <span
                  key={badge.label}
                  className="px-2 py-0.5 rounded-md bg-slate-900 border border-slate-800 text-[11px] font-medium text-slate-300"
                >
                  {badge.label}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom copyright and legal */}
        <div className="mt-14 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} ZenoxDev Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/about" className="hover:text-slate-300 transition-colors">
              Company
            </Link>
            <Link href="/services" className="hover:text-slate-300 transition-colors">
              Services
            </Link>
            <Link href="/portfolio" className="hover:text-slate-300 transition-colors">
              Case Studies
            </Link>
            <Link href="/contact" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}