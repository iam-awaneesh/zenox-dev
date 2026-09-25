import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    quote:
      'ZenoxDev rebuilt our SaaS platform from the ground up. The new architecture handles 10x the traffic and the AI-powered SEO doubled our organic traffic in three months.',
    name: 'Sarah Chen',
    role: 'CEO, CloudMetrics',
    rating: 5,
  },
  {
    quote:
      'Their CI/CD pipeline setup cut our deployment time from hours to minutes. The team is responsive, skilled, and genuinely invested in our success.',
    name: 'Marcus Reid',
    role: 'CTO, ShipFast Inc.',
    rating: 5,
  },
  {
    quote:
      'The mobile app they built for us hit 4.9 stars on the App Store within weeks of launch. The React Native codebase is clean, fast, and easy to maintain.',
    name: 'Priya Nair',
    role: 'Founder, HealthBridge',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-50 text-primary-700 text-xs font-semibold mb-4">
            <Star className="w-3.5 h-3.5" fill="currentColor" />
            Client Stories
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-ink-900">
            Trusted by <span className="text-gradient">Founders & Leaders</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="relative p-8 rounded-2xl bg-gradient-to-b from-primary-50/60 to-white border border-primary-100/60 shadow-sm hover:shadow-xl hover:shadow-primary-900/10 hover:-translate-y-1 transition-all duration-300"
            >
              <Quote className="w-10 h-10 text-primary-200 mb-4" fill="currentColor" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-accent-amber"
                    fill="currentColor"
                  />
                ))}
              </div>
              <p className="text-sm text-ink-700 leading-relaxed mb-6">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-primary-600 to-accent-cyan flex items-center justify-center text-white font-heading font-bold text-sm">
                  {t.name.split(' ').map((n) => n[0]).join('')}
                </div>
                <div>
                  <p className="font-semibold text-ink-900 text-sm">{t.name}</p>
                  <p className="text-xs text-ink-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}