import {
  Code2,
  Twitter,
  Linkedin,
  Github,
  Dribbble,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Technologies', href: '#technologies' },
  { label: 'About', href: '#about' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
];

const serviceLinks = [
  'Web Development',
  'Mobile App Development',
  'SEO Optimization',
  'AI-Powered SEO',
  'Business Automation',
  'CI/CD & DevOps',
];

const techIcons = [
  { label: 'JS', color: '#F7DF1E' },
  { label: 'Re', color: '#61DAFB' },
  { label: 'RN', color: '#61DAFB' },
  { label: 'No', color: '#339933' },
  { label: 'Ex', color: '#888888' },
  { label: 'Mg', color: '#47A248' },
  { label: 'SQL', color: '#4479A4' },
];

const socials = [
  { icon: Twitter, href: '#' },
  { icon: Linkedin, href: '#' },
  { icon: Github, href: '#' },
  { icon: Dribbble, href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-ink-900 text-gray-400">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Company info */}
          <div className="lg:col-span-1">
            <a href="#home" className="flex items-center gap-2 mb-5">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary-600 to-accent-cyan flex items-center justify-center">
                <Code2 className="w-5 h-5 text-white" strokeWidth={2.5} />
              </div>
              <span className="font-heading font-bold text-xl text-white">
                Zenox<span className="text-primary-400">Dev</span>
              </span>
            </a>
            <p className="text-sm leading-relaxed mb-5">
              Full-stack IT solutions and digital growth — engineering code, SEO,
              and automation for startups, SaaS, and enterprises.
            </p>
            <div className="flex gap-3">
              {socials.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary-600 hover:text-white transition-all duration-300"
                  aria-label="Social link"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-heading text-sm font-bold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-sm font-bold text-white uppercase tracking-wider mb-4">
              Services
            </h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="text-sm hover:text-primary-400 transition-colors"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + tech */}
          <div>
            <h4 className="font-heading text-sm font-bold text-white uppercase tracking-wider mb-4">
              Get in Touch
            </h4>
            <ul className="space-y-3 mb-5">
              <li className="flex items-center gap-2 text-sm">
                <Mail className="w-4 h-4 text-primary-400 flex-shrink-0" />
                hello@zenoxdev.com
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Phone className="w-4 h-4 text-primary-400 flex-shrink-0" />
                +1 (555) 123-4567
              </li>
              <li className="flex items-center gap-2 text-sm">
                <MapPin className="w-4 h-4 text-primary-400 flex-shrink-0" />
                Remote & On-site Worldwide
              </li>
            </ul>
            <div className="flex flex-wrap gap-2">
              {techIcons.map((tech) => (
                <div
                  key={tech.label}
                  className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-[10px] font-bold"
                  style={{ color: tech.color }}
                  title={tech.label}
                >
                  {tech.label}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} ZenoxDev. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-gray-500">
            <a href="#" className="hover:text-primary-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary-400 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}