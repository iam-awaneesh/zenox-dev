"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Code2, ArrowRight, Sparkles } from "lucide-react";

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
          ? "bg-white/85 backdrop-blur-xl shadow-sm shadow-primary-950/5 border-b border-slate-100"
          : "bg-white/40 backdrop-blur-md border-b border-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Main Navigation">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group focus:outline-none">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-600 via-primary-700 to-accent-cyan flex items-center justify-center shadow-md shadow-primary-600/25 transition-transform duration-300 group-hover:scale-105 group-hover:rotate-1">
              <Code2 className="w-5 h-5 text-white" strokeWidth={2.5} />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-xl tracking-tight text-ink-900 group-hover:text-primary-700 transition-colors">
                Zenox<span className="gradient-text">Dev</span>
              </span>
              <span className="text-[10px] uppercase tracking-wider font-semibold text-ink-400 -mt-1 flex items-center gap-1">
                Engineering <span className="inline-block w-1 h-1 rounded-full bg-accent-cyan"></span> Growth
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-1 bg-slate-50/80 p-1.5 rounded-full border border-slate-200/70 shadow-xs">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname === link.href || pathname?.startsWith(link.href + "/");

              return (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 block ${
                      isActive
                        ? "text-primary-700 font-semibold bg-white shadow-xs"
                        : "text-ink-600 hover:text-primary-600 hover:bg-white/60"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-primary-600" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-primary-600 to-primary-700 text-white text-sm font-semibold shadow-md shadow-primary-600/25 hover:shadow-lg hover:shadow-primary-600/35 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 group"
            >
              <span>Get Free Audit</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Mobile toggle button */}
          <button
            type="button"
            className="lg:hidden p-2.5 rounded-xl text-ink-800 hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu modal/drawer */}
        {mobileOpen && (
          <div className="lg:hidden pb-6 animate-fade-in-up">
            <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl p-5 border border-slate-200/80">
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
                        className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                          isActive
                            ? "bg-primary-50 text-primary-700 font-semibold"
                            : "text-ink-700 hover:bg-slate-50 hover:text-primary-600"
                        }`}
                      >
                        <span>{link.label}</span>
                        {isActive && (
                          <span className="w-2 h-2 rounded-full bg-primary-600" />
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>

              <div className="pt-3 border-t border-slate-100">
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-gradient-to-r from-primary-600 to-primary-700 text-white text-sm font-semibold shadow-md shadow-primary-600/20 text-center"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Get Free Tech & SEO Audit</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}