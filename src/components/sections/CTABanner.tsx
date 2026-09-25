import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react';

export default function CTABanner() {
  return (
    <section id="contact" className="py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary-700 via-primary-600 to-accent-cyan px-8 py-16 lg:px-16 lg:py-20 text-center shadow-2xl shadow-primary-600/30">
          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-cyan/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3" />

          <div className="relative">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Ready to Scale Your Business?
            </h2>
            <p className="mt-4 text-white/80 text-lg max-w-2xl mx-auto">
              Get a free audit of your current tech stack, SEO performance, and
              automation opportunities. Let's build your growth engine together.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="mailto:hello@zenoxdev.com"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-primary-700 font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
              >
                Get Your Free Audit
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="tel:+15551234567"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/10 backdrop-blur text-white font-semibold border border-white/30 hover:bg-white/20 transition-all duration-300"
              >
                <Phone className="w-4 h-4" />
                Book a Call
              </a>
            </div>
            <div className="mt-10 flex flex-wrap justify-center gap-6 text-white/70 text-sm">
              <span className="flex items-center gap-2">
                <Mail className="w-4 h-4" /> hello@zenoxdev.com
              </span>
              <span className="flex items-center gap-2">
                <Phone className="w-4 h-4" /> +1 (555) 123-4567
              </span>
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4" /> Remote & On-site Worldwide
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}