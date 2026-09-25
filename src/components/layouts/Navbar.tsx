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
          ? "bg-[#fffbf8]/98 backdrop-blur-2xl shadow-md shadow-orange-950/5 border-b border-orange-200/80 py-2"
          : "bg-[#fffcf9]/92 backdrop-blur-xl border-b border-orange-100/80 py-2.5 sm:py-3"
      }`}
    >
      {/* Top glowing orange brand accent line */}
      <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-orange-400 via-[#ff6a00] to-orange-500 opacity-90" />

      <nav className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12" aria-label="Main Navigation">
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
            <ul className="flex items-center gap-1 bg-orange-50/60 p-1.5 rounded-full border border-orange-200/60 backdrop-blur-md shadow-xs">
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
                          ? "text-primary-700 font-semibold bg-white border border-orange-200/80 shadow-xs"
                          : "text-slate-600 hover:text-ink-900 hover:bg-white/60"
                      }`}
                    >
                      <span>{link.label}</span>
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-primary-500 shadow-[0_0_8px_rgba(249,115,22,0.4)]" />
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
              className="p-2.5 rounded-xl text-slate-600 hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 cursor-pointer"
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
            <div className="bg-[#fffbf8]/98 backdrop-blur-2xl rounded-3xl shadow-xl p-5 border border-orange-200/80">
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
                            ? "bg-gradient-to-r from-primary-50 to-orange-50 text-primary-700 font-bold border border-primary-200"
                            : "text-slate-600 hover:bg-slate-50 hover:text-ink-900"
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

              <div className="pt-3 border-t border-slate-200 flex flex-col gap-2">
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