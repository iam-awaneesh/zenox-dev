import { Star, Quote, CheckCircle2 } from "lucide-react";

export interface TestimonialItem {
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
  highlight: string;
}

export const testimonialsData: TestimonialItem[] = [
  {
    quote:
      "ZenoxDev rebuilt our enterprise SaaS platform from the ground up using Next.js and Node.js microservices. The new architecture seamlessly handles 10x traffic spikes, and their AI-powered SEO roadmap doubled our qualified inbound leads in under 90 days.",
    name: "Sarah Chen",
    role: "CEO & Co-Founder",
    company: "CloudMetrics Analytics",
    rating: 5,
    highlight: "+120% Inbound SQLs",
  },
  {
    quote:
      "Their CI/CD pipeline automation cut our deployment cycle from 3 hours to less than 4 minutes with zero downtime. The engineering team is technically world-class, proactive in architecture reviews, and genuinely invested in our long-term growth.",
    name: "Marcus Reid",
    role: "VP of Engineering",
    company: "ShipFast Logistics",
    rating: 5,
    highlight: "98% Faster Releases",
  },
  {
    quote:
      "The React Native cross-platform application they engineered for us achieved a 4.9-star rating on the App Store within weeks of release. The codebase is clean, well-tested, beautifully designed, and remarkably simple for our in-house team to maintain.",
    name: "Priya Nair",
    role: "Founder & Chief Product Officer",
    company: "HealthBridge Care",
    rating: 5,
    highlight: "4.9 App Store Rating",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-white relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-50 border border-primary-200/50 text-primary-700 text-xs font-semibold mb-4">
            <Star className="w-3.5 h-3.5 fill-accent-amber text-accent-amber" />
            <span>Client Testimonials</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink-900 tracking-tight">
            Trusted by <span className="text-gradient">Visionary Founders</span>
          </h2>
          <p className="mt-4 text-ink-500 text-base sm:text-lg">
            Hear from industry leaders who have scaled their platforms with ZenoxDev engineering.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {testimonialsData.map((t) => (
            <div
              key={t.name}
              className="relative p-8 rounded-2xl bg-gradient-to-b from-primary-50/40 via-white to-white border border-slate-200/80 shadow-xs hover:shadow-xl hover:shadow-primary-900/8 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="flex gap-1">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-amber-400 fill-amber-400"
                      />
                    ))}
                  </div>
                  <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-100 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    {t.highlight}
                  </span>
                </div>

                <Quote className="w-8 h-8 text-primary-200 mb-3" />
                <p className="text-sm text-ink-700 leading-relaxed mb-6 italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-primary-600 via-primary-700 to-accent-cyan flex items-center justify-center text-white font-heading font-bold text-sm shadow-md shadow-primary-600/25">
                  {t.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <p className="font-heading font-bold text-ink-900 text-sm">{t.name}</p>
                  <p className="text-xs text-ink-500 font-medium">
                    {t.role} • {t.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}