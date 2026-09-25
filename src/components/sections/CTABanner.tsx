import Link from "next/link";
import { ArrowRight, Mail, Phone, MapPin, Sparkles, Calendar } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="py-20 lg:py-24 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary-700 via-primary-600 to-accent-cyan px-6 py-14 sm:px-12 sm:py-16 lg:px-16 lg:py-20 text-center shadow-2xl shadow-primary-600/30">
          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent-cyan/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md text-white text-xs font-semibold mb-6 border border-white/20">
              <Sparkles className="w-3.5 h-3.5 text-accent-cyan" />
              <span>Free 360-Degree Growth & Code Audit</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Ready to Accelerate Your Digital Scale?
            </h2>

            <p className="mt-4 text-white/90 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              Get an actionable, comprehensive audit of your current web application, SEO positioning, and operational bottlenecks. We’ll show you where to optimize and how to win.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3.5">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-primary-700 font-bold text-sm sm:text-base shadow-xl hover:shadow-2xl hover:bg-slate-50 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 group"
              >
                <span>Request Free Tech Audit</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/10 backdrop-blur-md text-white font-semibold text-sm sm:text-base border border-white/30 hover:bg-white/20 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                <Calendar className="w-4 h-4" />
                <span>Schedule a 30-min Call</span>
              </Link>
            </div>

            <div className="mt-10 pt-8 border-t border-white/15 flex flex-wrap justify-center gap-6 text-white/80 text-xs sm:text-sm font-medium">
              <a href="mailto:contact@zenoxdev.com" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="w-4 h-4 text-white" />
                <span>contact@zenoxdev.com</span>
              </a>
              <a href="tel:+15551234567" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-white" />
                <span>+1 (555) 123-4567</span>
              </a>
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-white" />
                <span>Global Remote & On-Site Deployments</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}