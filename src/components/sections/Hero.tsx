import Link from "next/link";
import { ArrowRight, Sparkles, Zap, ShieldCheck, CheckCircle2, TrendingUp, Layers, Terminal } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-20 sm:pt-22 lg:pt-24 pb-8 sm:pb-10 lg:pb-14 overflow-hidden bg-gradient-to-b from-primary-50/60 via-white to-white hero-grid-bg"
    >
      {/* Decorative ambient glowing lights */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-[600px] h-[260px] bg-gradient-to-tr from-primary-400/15 to-accent-orange/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-28 -left-20 w-72 h-72 bg-primary-300/15 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-6 right-0 w-80 h-80 bg-accent-gold/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-12">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column: Heading and CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left fade-up">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-100/90 border border-primary-200/70 text-primary-800 text-xs sm:text-sm font-semibold mb-4 shadow-xs">
              <Sparkles className="w-4 h-4 text-primary-600 animate-spin" style={{ animationDuration: '8s' }} />
              <span>Full-Stack Engineering & AI Growth Agency</span>
            </div>

            <h1 className="font-heading text-3xl sm:text-5xl lg:text-[3.25rem] xl:text-6xl font-extrabold leading-[1.14] tracking-tight text-ink-900">
              Engineering Digital Dominance Through{" "}
              <span className="text-gradient">Code, AI & Automation</span>
            </h1>

            <p className="mt-4 text-sm sm:text-base lg:text-lg text-ink-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              We design and build mission-critical web and mobile applications, supercharge organic search traffic with AI-driven SEO engines, and eliminate operational bottlenecks through robust CI/CD and automation workflows.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3.5 justify-center lg:justify-start">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold text-base shadow-xl shadow-primary-600/30 hover:shadow-2xl hover:shadow-primary-600/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 group"
              >
                <span>Book Consultation & Audit</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl bg-white text-ink-800 font-semibold text-base border border-slate-200 hover:border-primary-300 hover:bg-primary-50/50 shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>Explore Solutions</span>
              </Link>
            </div>

            {/* Quick Proof Pillars */}
            <div className="mt-6 pt-5 border-t border-slate-200/80 grid grid-cols-3 gap-4 max-w-xl mx-auto lg:mx-0 text-left">
              <div>
                <p className="font-heading text-2xl sm:text-3xl font-extrabold text-ink-900 tracking-tight">120+</p>
                <p className="text-xs sm:text-sm text-ink-500 font-medium">Projects Delivered</p>
              </div>
              <div>
                <p className="font-heading text-2xl sm:text-3xl font-extrabold text-ink-900 tracking-tight">98.4%</p>
                <p className="text-xs sm:text-sm text-ink-500 font-medium">Client Retention</p>
              </div>
              <div>
                <p className="font-heading text-2xl sm:text-3xl font-extrabold text-ink-900 tracking-tight">3.2x</p>
                <p className="text-xs sm:text-sm text-ink-500 font-medium">Avg. Organic Growth</p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Tech & Code Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative card */}
              <div className="relative rounded-3xl bg-gradient-to-tr from-primary-600/10 via-white to-accent-cyan/10 p-4 border border-primary-100 shadow-2xl backdrop-blur-xl">
                {/* Tech Terminal Header */}
                <div className="bg-ink-950 rounded-2xl p-5 text-slate-200 font-mono text-xs shadow-xl border border-slate-800">
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-rose-500" />
                      <span className="w-3 h-3 rounded-full bg-amber-500" />
                      <span className="w-3 h-3 rounded-full bg-emerald-500" />
                    </div>
                    <span className="text-[11px] text-slate-400 flex items-center gap-1.5 font-sans">
                      <Terminal className="w-3.5 h-3.5 text-accent-cyan" />
                      zenoxdev-pipeline.config.ts
                    </span>
                  </div>

                  <div className="space-y-1.5 text-[12px] leading-relaxed">
                    <p className="text-slate-400">
                      <span className="text-primary-400">const</span> stack = await ZenoxDev.<span className="text-accent-cyan">architect</span>({`{`}
                    </p>
                    <p className="pl-4 text-emerald-400">
                      frontend: <span className="text-amber-300">&quot;Next.js 16 + React 19&quot;</span>,
                    </p>
                    <p className="pl-4 text-emerald-400">
                      mobile: <span className="text-amber-300">&quot;React Native (iOS/Android)&quot;</span>,
                    </p>
                    <p className="pl-4 text-emerald-400">
                      growthEngine: <span className="text-amber-300">&quot;AI Predictive SEO + Microdata&quot;</span>,
                    </p>
                    <p className="pl-4 text-emerald-400">
                      devOps: <span className="text-amber-300">&quot;Docker + CI/CD Zero-Downtime&quot;</span>,
                    </p>
                    <p className="text-slate-400">{`}`});</p>
                    <p className="text-slate-500 mt-2">// Status: 100% Production Ready</p>
                    <div className="mt-3 flex items-center gap-2 text-emerald-400 font-sans text-xs bg-emerald-950/50 py-1.5 px-3 rounded-lg border border-emerald-800/60">
                      <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                      <span>Zero vulnerabilities • 99.98% SLA Guaranteed</span>
                    </div>
                  </div>
                </div>

                {/* Floating Metrics Overlay */}
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="p-3.5 rounded-xl bg-white shadow-md border border-slate-100 flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-ink-500">SEO Traffic</p>
                      <p className="text-sm font-heading font-bold text-ink-900">+240% YoY</p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white shadow-md border border-slate-100 flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center flex-shrink-0">
                      <Zap className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-ink-500">Deploy Speed</p>
                      <p className="text-sm font-heading font-bold text-ink-900">&lt; 3 mins</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Orbiting Badges */}
              <div className="hidden sm:flex absolute -top-4 -right-4 px-3 py-1.5 rounded-full bg-white shadow-lg border border-slate-100 text-xs font-semibold text-primary-700 items-center gap-1.5 animate-float">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span>Enterprise Grade</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}