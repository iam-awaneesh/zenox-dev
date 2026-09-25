import {
  Globe,
  Smartphone,
  Search,
  BrainCircuit,
  Workflow,
  GitBranch,
  Sparkles,
  Zap,
} from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Web Development',
    description:
      'Scalable, responsive web apps built with React, Node.js, and modern full-stack architecture.',
    badge: null,
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description:
      'Cross-platform iOS & Android apps powered by React Native with native-grade performance.',
    badge: null,
  },
  {
    icon: Search,
    title: 'SEO Optimization',
    description:
      'Data-driven on-page and technical SEO to boost rankings, traffic, and conversions.',
    badge: null,
  },
  {
    icon: BrainCircuit,
    title: 'AI-Powered SEO',
    description:
      'Machine-learning models that analyze intent, predict trends, and auto-optimize content.',
    badge: 'AI-Powered',
    badgeColor: 'amber',
  },
  {
    icon: Workflow,
    title: 'Business Automation',
    description:
      'Eliminate repetitive tasks with intelligent workflows and API-driven process automation.',
    badge: 'Automated',
    badgeColor: 'cyan',
  },
  {
    icon: GitBranch,
    title: 'CI/CD & DevOps',
    description:
      'Automated testing, deployment pipelines, and cloud infrastructure for faster releases.',
    badge: 'Automated',
    badgeColor: 'cyan',
  },
];

const badgeStyles: Record<string, string> = {
  amber: 'bg-accent-amber/15 text-accent-amber border-accent-amber/30',
  cyan: 'bg-accent-cyan/15 text-cyan-600 border-accent-cyan/30',
};

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-50 text-primary-700 text-xs font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            What We Do
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-ink-900">
            Full-Stack Solutions for{' '}
            <span className="text-gradient">Every Stage of Growth</span>
          </h2>
          <p className="mt-4 text-ink-500 text-lg">
            From code to deployment, from SEO to automation — we cover the entire
            digital product lifecycle.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative p-7 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-primary-900/10 hover:-translate-y-1.5 transition-all duration-300"
            >
              {service.badge && (
                <span
                  className={`absolute top-5 right-5 inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold border ${badgeStyles[service.badgeColor]}`}
                >
                  <Zap className="w-2.5 h-2.5" fill="currentColor" />
                  {service.badge}
                </span>
              )}
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-50 to-primary-100 flex items-center justify-center mb-5 group-hover:from-primary-600 group-hover:to-accent-cyan transition-all duration-300">
                <service.icon className="w-6 h-6 text-primary-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="font-heading text-lg font-bold text-ink-900 mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-ink-500 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}