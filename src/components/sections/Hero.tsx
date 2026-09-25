import { ArrowRight, Play, Code2, Smartphone, Server, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden hero-grid-bg"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-brand-50/50 via-white to-white pointer-events-none" />
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 -left-20 w-80 h-80 bg-brand-600/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div className="fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-50 text-accent-700 text-sm font-medium border border-accent-200 mb-6">
            <Zap className="w-4 h-4" />
            Your Trusted IT Consultancy Partner
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.15] text-brand-900 mb-6">
            Transforming Ideas Into{' '}
            <span className="gradient-text">Powerful Digital Solutions</span>
          </h1>

          <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-xl">
            BitJunoo delivers cutting-edge web, mobile, and enterprise software
            solutions. We help startups and enterprises build, scale, and innovate
            with confidence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-brand-600 to-accent-500 text-white font-semibold shadow-lg shadow-brand-600/25 hover:shadow-xl hover:shadow-brand-600/35 hover:-translate-y-0.5 transition-all"
            >
              Get a Free Consultation
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white text-brand-700 font-semibold border-2 border-slate-200 hover:border-brand-300 hover:bg-brand-50 transition-all"
            >
              <Play className="w-5 h-5" />
              View Our Work
            </a>
          </div>

          <div className="flex items-center gap-8 mt-12">
            {[
              { value: '150+', label: 'Projects Delivered' },
              { value: '80+', label: 'Happy Clients' },
              { value: '10+', label: 'Years Experience' },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-2xl font-bold font-heading text-brand-900">{s.value}</div>
                <div className="text-sm text-slate-500">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative fade-up hidden lg:block" style={{ animationDelay: '0.2s' }}>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-600/20 to-accent-500/20 rounded-3xl blur-2xl" />
            <div className="relative bg-white rounded-3xl shadow-2xl shadow-brand-900/10 p-8 border border-slate-100">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-amber-400" />
                <div className="w-3 h-3 rounded-full bg-emerald-400" />
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 rounded-xl bg-brand-50 animate-float">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-brand-600 text-white">
                    <Code2 className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-brand-900 text-sm">Web Development</div>
                    <div className="text-xs text-slate-500">Scalable, modern web apps</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 rounded-xl bg-accent-50 animate-float-delayed">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-accent-500 text-white">
                    <Smartphone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-brand-900 text-sm">Mobile Apps</div>
                    <div className="text-xs text-slate-500">iOS &amp; Android native</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 rounded-xl bg-emerald-50 animate-float" style={{ animationDelay: '1s' }}>
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-emerald-500 text-white">
                    <Server className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-brand-900 text-sm">.NET Solutions</div>
                    <div className="text-xs text-slate-500">Enterprise-grade backend</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-brand-600 to-accent-500 text-white">
                <div className="text-xs font-medium opacity-80">Deployment Status</div>
                <div className="flex items-center gap-2 mt-1">
                  <div className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse" />
                  <span className="text-sm font-semibold">All systems operational</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}