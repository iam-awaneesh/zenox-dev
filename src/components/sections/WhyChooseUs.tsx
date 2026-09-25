import Link from "next/link";
import { BrainCircuit, Layers, Rocket, BarChart3, CheckCircle2, ArrowRight, ShieldCheck, HeartHandshake, Zap } from "lucide-react";

export const whyChooseReasons = [
  {
    icon: BrainCircuit,
    title: "AI-Driven Approach",
    description: "We leverage machine learning for predictive SEO ranking models, automated code audits, and intelligent workflow automation.",
  },
  {
    icon: Layers,
    title: "Scalable Architecture",
    description: "Cloud-native, microservice-ready systems designed to handle millions of active requests with sub-100ms response latencies.",
  },
  {
    icon: Rocket,
    title: "Accelerated Time-to-Market",
    description: "Automated CI/CD pipelines, reusable design systems, and agile sprints allow your core MVP to ship in weeks, not quarters.",
  },
  {
    icon: BarChart3,
    title: "Data-Backed Growth & SEO",
    description: "Every architectural choice is verified against real search intent, user behavioral telemetry, and Core Web Vitals performance.",
  },
  {
    icon: ShieldCheck,
    title: "Zero-Vulnerability Security",
    description: "Continuous vulnerability scanning, automated secret rotation, and strict SOC2/GDPR compliance baked into development.",
  },
  {
    icon: HeartHandshake,
    title: "Transparent Partnership",
    description: "Direct Slack channel with dedicated senior engineers, daily asynchronous standups, and weekly live progress demos.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 lg:py-28 bg-white relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading + Checklist */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-50 border border-primary-200/60 text-primary-700 text-xs font-semibold mb-4">
              <CheckCircle2 className="w-3.5 h-3.5 text-primary-600" />
              <span>The ZenoxDev Edge</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink-900 tracking-tight">
              Why High-Growth Companies <span className="text-gradient">Choose ZenoxDev</span>
            </h2>
            <p className="mt-5 text-ink-500 text-base sm:text-lg leading-relaxed">
              We combine elite Silicon Valley engineering standards with data-backed digital growth strategies. Our engineers don't simply deliver code — we construct durable technical advantages.
            </p>

            <div className="mt-8 space-y-3.5">
              {[
                "100% Senior engineers assigned directly to your project",
                "Transparent weekly demos and open GitHub commits",
                "Continuous post-launch SLAs & performance monitoring",
                "Full IP ownership transferred immediately upon delivery",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary-700" />
                  </div>
                  <span className="text-ink-700 text-sm font-medium leading-tight">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-9">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-primary-50 hover:bg-primary-100 border border-primary-200 text-primary-700 font-semibold text-sm transition-all group"
              >
                <span>Discover our team & company story</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Right Column: Reason Cards */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
            {whyChooseReasons.slice(0, 4).map((reason, i) => (
              <div
                key={reason.title}
                className="p-7 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-xl hover:shadow-primary-900/10 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-600 to-accent-cyan flex items-center justify-center mb-5 shadow-md shadow-primary-600/25">
                    <reason.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-ink-900 mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-sm text-ink-500 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}