import { BrainCircuit, Layers, Rocket, BarChart3, CheckCircle2 } from 'lucide-react';

const reasons = [
  {
    icon: BrainCircuit,
    title: 'AI-Driven Approach',
    description:
      'We leverage machine learning for smarter SEO, predictive analytics, and intelligent automation.',
  },
  {
    icon: Layers,
    title: 'Scalable Architecture',
    description:
      'Cloud-native, microservice-ready systems designed to handle millions of users without breaking a sweat.',
  },
  {
    icon: Rocket,
    title: 'Faster Time-to-Market',
    description:
      'CI/CD pipelines and agile delivery mean your product ships in weeks, not months.',
  },
  {
    icon: BarChart3,
    title: 'Data-Backed SEO',
    description:
      'Every optimization is grounded in real data, search intent analysis, and continuous performance tracking.',
  },
];

export default function WhyChooseUs() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: heading + checklist */}
          <div className="lg:sticky lg:top-28">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-50 text-primary-700 text-xs font-semibold mb-4">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Why ZenoxDev
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-ink-900">
              Why Startups & Enterprises{' '}
              <span className="text-gradient">Choose Us</span>
            </h2>
            <p className="mt-4 text-ink-500 text-lg leading-relaxed">
              We combine deep engineering expertise with a growth mindset. Our
              team doesn't just write code — we architect solutions that drive
              measurable business outcomes.
            </p>
            <div className="mt-8 space-y-3">
              {[
                'Senior engineers on every project',
                'Transparent, weekly progress reports',
                'Post-launch support & maintenance',
                'Flexible engagement models',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary-600 flex-shrink-0" />
                  <span className="text-ink-700 text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            {reasons.map((reason, i) => (
              <div
                key={reason.title}
                className="p-7 rounded-2xl glass-card shadow-sm hover:shadow-xl hover:shadow-primary-900/10 hover:-translate-y-1 transition-all duration-300"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-600 to-accent-cyan flex items-center justify-center mb-5 shadow-lg shadow-primary-600/20">
                  <reason.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-heading text-lg font-bold text-ink-900 mb-2">
                  {reason.title}
                </h3>
                <p className="text-sm text-ink-500 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}