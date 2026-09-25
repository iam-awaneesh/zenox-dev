"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, Sparkles } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Technologies", href: "/technologies" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-ink-950/95 backdrop-blur-2xl shadow-xl shadow-black/30 border-b border-orange-500/20 py-2.5"
          : "bg-ink-950/85 backdrop-blur-xl border-b border-white/10 py-3.5"
      }`}
    >
      {/* Top glowing orange brand accent line */}
      <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#ff6a00] to-transparent opacity-85" />

      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Main Navigation">
        <div className="flex items-center justify-between">
          {/* Logo with transparent icon and subtle warm ambient glow */}
          <Link
            href="/"
            className="group flex items-center focus:outline-none transition-transform duration-300 hover:scale-[1.03]"
            aria-label="ZenoxDev Home"
          >
            <div className="relative">
              <Image
                src="/icon-isnet.png"
                alt="ZenoxDev"
                width={150}
                height={100}
                priority
                className="h-10 sm:h-12 w-auto object-contain filter drop-shadow-[0_2px_12px_rgba(255,106,0,0.3)] transition-all duration-300 group-hover:drop-shadow-[0_4px_18px_rgba(255,106,0,0.5)]"
              />
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center">
            <ul className="flex items-center gap-1 bg-white/[0.04] p-1.5 rounded-full border border-white/10 backdrop-blur-md shadow-inner">
              {navLinks.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname === link.href || pathname?.startsWith(link.href + "/");

                return (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-1.5 ${
                        isActive
                          ? "text-white font-semibold bg-gradient-to-r from-orange-500/25 to-orange-600/10 border border-orange-500/40 shadow-[0_0_15px_rgba(255,106,0,0.2)]"
                          : "text-slate-300 hover:text-white hover:bg-white/[0.07]"
                      }`}
                    >
                      <span>{link.label}</span>
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ff6a00] shadow-[0_0_8px_#ff6a00]" />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#ff6a00] via-[#ea580c] to-[#f0440a] hover:from-[#ff8533] hover:to-[#ea580c] text-white text-sm font-bold shadow-lg shadow-orange-600/30 hover:shadow-orange-600/50 hover:-translate-y-0.5 active:translate-y-0 border border-orange-400/30 transition-all duration-200 group"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-200 transition-transform group-hover:rotate-12" />
              <span>Get Free Audit</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2.5 lg:hidden">
            <Link
              href="/contact"
              className="px-3.5 py-1.5 rounded-full bg-gradient-to-r from-orange-500/20 to-orange-600/10 text-orange-400 border border-orange-500/30 text-xs font-semibold"
            >
              Free Audit
            </Link>
            <button
              type="button"
              className="p-2.5 rounded-xl text-slate-200 hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 cursor-pointer"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="w-6 h-6 text-orange-400" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileOpen && (
          <div className="lg:hidden mt-3 pb-2 animate-fade-in-up">
            <div className="bg-ink-950/95 backdrop-blur-2xl rounded-3xl shadow-2xl p-5 border border-orange-500/20">
              <ul className="flex flex-col gap-1 mb-4">
                {navLinks.map((link) => {
                  const isActive =
                    link.href === "/"
                      ? pathname === "/"
                      : pathname === link.href || pathname?.startsWith(link.href + "/");

                  return (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className={`flex items-center justify-between px-4 py-3 rounded-2xl text-sm font-medium transition-colors ${
                          isActive
                            ? "bg-gradient-to-r from-orange-500/20 to-orange-600/10 text-white font-bold border border-orange-500/40"
                            : "text-slate-300 hover:bg-white/[0.06] hover:text-white"
                        }`}
                      >
                        <span>{link.label}</span>
                        {isActive && (
                          <span className="w-2 h-2 rounded-full bg-[#ff6a00] shadow-[0_0_8px_#ff6a00]" />
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>

              <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 w-full py-3.5 px-4 rounded-2xl bg-gradient-to-r from-[#ff6a00] via-[#ea580c] to-[#f0440a] text-white text-sm font-bold shadow-lg shadow-orange-600/30 text-center"
                >
                  <Sparkles className="w-4 h-4 text-amber-200" />
                  <span>Claim Free Code & SEO Audit</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <div className="flex items-center justify-center gap-4 text-xs text-slate-400 pt-2">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block shadow-[0_0_6px_#34d399]" />
                    Available for Q1/Q2 Sprints
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}