import { ArrowRight, Sparkles, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-gradient-to-b from-primary-50 via-white to-white"
    >
      {/* Decorative blobs */}
      <div className="absolute top-20 -left-20 w-72 h-72 bg-primary-200/40 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-cyan/20 rounded-full blur-3xl animate-pulse-glow" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Copy */}
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-100 text-primary-700 text-xs font-semibold mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              AI-Powered Digital Growth Solutions
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-ink-900">
              Engineering Growth Through{' '}
              <span className="text-gradient">Code, SEO & Automation</span>
            </h1>
            <p className="mt-6 text-lg text-ink-500 leading-relaxed max-w-xl">
              We build full-stack web and mobile applications, supercharge your
              visibility with AI-driven SEO, and streamline operations with
              intelligent automation — all backed by CI/CD best practices.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold shadow-lg shadow-primary-600/30 hover:shadow-xl hover:shadow-primary-600/40 hover:-translate-y-0.5 transition-all duration-300"
              >
                Start Your Project
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white text-ink-800 font-semibold border-2 border-gray-200 hover:border-primary-300 hover:bg-primary-50 transition-all duration-300"
              >
                Explore Services
              </a>
            </div>
            <div className="mt-10 flex items-center gap-8">
              <div>
                <p className="font-heading text-3xl font-bold text-ink-900">120+</p>
                <p className="text-sm text-ink-500">Projects Delivered</p>
              </div>
              <div className="w-px h-12 bg-gray-200" />
              <div>
                <p className="font-heading text-3xl font-bold text-ink-900">98%</p>
                <p className="text-sm text-ink-500">Client Satisfaction</p>
              </div>
              <div className="w-px h-12 bg-gray-200" />
              <div>
                <p className="font-heading text-3xl font-bold text-ink-900">24/7</p>
                <p className="text-sm text-ink-500">Support</p>
              </div>
            </div>
          </div>

          {/* Right: Abstract tech graphic */}
          <div className="relative hidden lg:flex items-center justify-center">
            <div className="relative w-full max-w-md aspect-square">
              {/* Orbit rings */}
              <div className="absolute inset-0 rounded-full border-2 border-primary-200/60 animate-float" />
              <div className="absolute inset-8 rounded-full border-2 border-accent-cyan/30" />
              <div className="absolute inset-16 rounded-full border-2 border-primary-300/40" />

              {/* Center node */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-primary-600 to-accent-cyan flex items-center justify-center shadow-2xl shadow-primary-600/40 glow-shadow">
                  <Zap className="w-14 h-14 text-white" fill="white" />
                </div>
              </div>

              {/* Floating tech badges */}
              {[
                { label: 'React', x: 'top-4 left-1/2 -translate-x-1/2', delay: '0s' },
                { label: 'Node.js', x: 'top-1/2 right-0 -translate-y-1/2', delay: '1s' },
                { label: 'MongoDB', x: 'bottom-4 left-1/2 -translate-x-1/2', delay: '2s' },
                { label: 'Express', x: 'top-1/2 left-0 -translate-y-1/2', delay: '1.5s' },
                { label: 'AI SEO', x: 'top-10 right-10', delay: '0.5s' },
                { label: 'CI/CD', x: 'bottom-10 left-10', delay: '2.5s' },
              ].map((badge) => (
                <div
                  key={badge.label}
                  className={`absolute ${badge.x} px-3 py-1.5 rounded-lg bg-white shadow-lg shadow-primary-900/10 text-xs font-semibold text-ink-800 border border-gray-100 animate-float`}
                  style={{ animationDelay: badge.delay }}
                >
                  {badge.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}