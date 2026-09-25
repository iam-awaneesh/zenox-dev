import { Twitter, Linkedin, Github, Mail, Phone, MapPin } from 'lucide-react';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#why' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
];

const services = [
  'Web Development',
  'Mobile App Development',
  'React Development',
  '.NET Development',
];

const socials = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Github, href: '#', label: 'GitHub' },
];

export default function Footer() {
  return (
    <footer className="bg-brand-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <a href="#home" className="flex items-center gap-2 text-xl font-bold font-heading mb-4">
              <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-br from-brand-600 to-accent-500 text-white">
                B
              </span>
              <span className="text-white">
                Bit<span className="text-accent-400">Junoo</span>
              </span>
            </a>
            <p className="text-sm text-slate-400 leading-relaxed mb-5 max-w-xs">
              IT solutions and consultancy helping businesses build powerful
              digital products. From web to mobile to enterprise — we've got you
              covered.
            </p>
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/5 hover:bg-accent-500 text-slate-300 hover:text-white transition-all"
                >
                  <s.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-slate-400 hover:text-accent-400 transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <a href="#services" className="text-sm text-slate-400 hover:text-accent-400 transition-colors">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-white font-semibold mb-4">Get in Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-slate-400">
                <Mail className="w-4 h-4 mt-0.5 text-accent-400 flex-shrink-0" />
                hello@bitjunoo.com
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-400">
                <Phone className="w-4 h-4 mt-0.5 text-accent-400 flex-shrink-0" />
                +1 (555) 123-4567
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-400">
                <MapPin className="w-4 h-4 mt-0.5 text-accent-400 flex-shrink-0" />
                123 Tech Avenue, San Francisco, CA 94107
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} BitJunoo. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-slate-500 hover:text-accent-400 transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-slate-500 hover:text-accent-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}